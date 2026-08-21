const os = require('os');

const LicenseStateModel = require('../../models/LicenseState.model');
const hardwareId = require('./hardwareId');

const HEARTBEAT_INTERVAL_MS = 15 * 60 * 1000; // 15 phút

let heartbeatTimer = null;

function blpUrl(pathname) {
    const base = (process.env.BLP_URL || '').replace(/\/+$/, '');

    return `${base}${pathname}`;
}

function authHeaders() {
    return {
        'X-API-Key': process.env.PRODUCT_API_KEY,
        'Content-Type': 'application/json',
    };
}

async function errorMessage(response) {
    try {
        const data = await response.json();

        if (typeof data === 'string') {
            return data;
        }

        return data.detail || data.message || JSON.stringify(data);
    } catch (err) {
        return `HTTP ${response.status}`;
    }
}

// POST /api/v1/activation/activate
// Ném lỗi khi thất bại (resolver trả lại {success:false, error} cho client).
module.exports.activate = async function (licenseKey) {
    const hwId = await hardwareId.getOrCreateHardwareId();

    const body = {
        license_key: licenseKey,
        hardware_id: hwId,
        hostname: os.hostname(),
        os_info: `${os.type()} ${os.release()} ${os.arch()}`,
    };

    let response;

    try {
        response = await fetch(blpUrl('/api/v1/activation/activate'), {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify(body),
        });
    } catch (err) {
        await LicenseStateModel.UpsertByHardwareId(hwId, {
            lastError: err.message,
        });

        throw new Error(err.message);
    }

    if (!response.ok) {
        const message = await errorMessage(response);

        await LicenseStateModel.UpsertByHardwareId(hwId, {
            lastError: message,
        });

        throw new Error(message);
    }

    const data = await response.json();

    await LicenseStateModel.UpsertByHardwareId(hwId, {
        licenseKey: licenseKey,
        signedToken: data.signed_token,
        // BLP xoay session_id sau mỗi activate/heartbeat -> phải lưu DB,
        // nếu chỉ giữ trong RAM thì restart app sẽ mất và heartbeat 409 vĩnh viễn.
        sessionId: data.session_id || null,
        expiresAt: data.expires_at ? new Date(data.expires_at) : null,
        offlineGraceDays: data.offline_grace_days || 0,
        lastSuccessAt: new Date(),
        lastError: null,
    });

    return data;
};

// POST /api/v1/activation/heartbeat
// Chạy nền theo timer -> KHÔNG throw, chỉ ghi lastError.
module.exports.heartbeat = async function () {
    try {
        const state = await LicenseStateModel.GetState();

        if (!state || !state.licenseKey || !state.hardwareId) {
            return false;
        }

        const body = {
            license_key: state.licenseKey,
            hardware_id: state.hardwareId,
            // Đọc thẳng từ document vừa load, KHÔNG fallback sang hardwareId:
            // session_id sai sẽ bị BLP trả 409 mãi mãi, còn null nghĩa là "chưa có phiên".
            session_id: state.sessionId || null,
        };

        const response = await fetch(blpUrl('/api/v1/activation/heartbeat'), {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const message = await errorMessage(response);

            await LicenseStateModel.UpdateById(state._id, {
                lastError: message,
            });

            console.log('[license] heartbeat failed: ' + message);

            return false;
        }

        const data = await response.json();

        // BLP xoay session_id ở MỌI lần heartbeat (kể cả khi license đã bị thu hồi),
        // nên luôn lưu lại giá trị mới trước khi xét status.
        const set = {};

        if (data.session_id !== undefined) {
            set.sessionId = data.session_id || null;
        }

        // License bị thu hồi/hết hạn/tạm ngưng: BLP trả HTTP 200 kèm status != 'active'
        // và signed_token = null -> phải chặn ngay, không coi là heartbeat thành công.
        if (data.status && data.status !== 'active') {
            set.lastError = data.status;

            await LicenseStateModel.UpdateByIdAndUnsetToken(state._id, set);

            console.log('[license] heartbeat status: ' + data.status);

            return false;
        }

        set.lastSuccessAt = new Date();
        set.lastError = null;

        if (data.signed_token) {
            set.signedToken = data.signed_token;
        }

        if (data.expires_at) {
            set.expiresAt = new Date(data.expires_at);
        }

        if (data.offline_grace_days !== undefined) {
            set.offlineGraceDays = data.offline_grace_days;
        }

        await LicenseStateModel.UpdateById(state._id, set);

        return true;
    } catch (err) {
        console.log('[license] heartbeat failed: ' + err.message);

        try {
            const state = await LicenseStateModel.GetState();

            if (state) {
                await LicenseStateModel.UpdateById(state._id, {
                    lastError: err.message,
                });
            }
        } catch (dbErr) {
            console.log('[license] cannot save lastError: ' + dbErr.message);
        }

        return false;
    }
};

// Gọi 1 lần từ index.js sau khi kết nối MongoDB thành công.
module.exports.startHeartbeat = function () {
    if (heartbeatTimer) {
        return heartbeatTimer;
    }

    module.exports.heartbeat();

    heartbeatTimer = setInterval(
        module.exports.heartbeat,
        HEARTBEAT_INTERVAL_MS,
    );

    console.log('[license] heartbeat scheduled every 15m');

    return heartbeatTimer;
};

module.exports.HEARTBEAT_INTERVAL_MS = HEARTBEAT_INTERVAL_MS;
