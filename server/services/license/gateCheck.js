const LicenseStateModel = require('../../models/LicenseState.model');
const verify = require('./verify');

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Cổng license: port 1:1 logic từ nodejs_scada_web_dht/middleware/licenseGate.js.
// Fail closed - mọi lỗi bất ngờ đều coi là chưa được cấp phép.
// Trả {allowed, reason} thay vì redirect (dùng ở cả resolver CheckLicenseGate
// lẫn plugin chặn GraphQL operation) vì đây là API, không phải server-rendered page.
module.exports.checkGate = async function () {
    try {
        const state = await LicenseStateModel.GetState();

        if (!state || !state.signedToken) {
            return { allowed: false, reason: 'not_activated' };
        }

        // Chữ ký sai / token hỏng / thiếu public key -> ném lỗi -> chặn.
        const payload = verify.verifyToken(state.signedToken);

        const now = new Date();

        // Token phát cho máy khác bị chép sang đây -> chặn.
        if (payload.hardware_id !== state.hardwareId) {
            return { allowed: false, reason: 'hardware_mismatch' };
        }

        // Lấy hạn từ payload đã xác thực chữ ký, KHÔNG dùng state.expiresAt
        // (field DB thuần, ai sửa được DB là gia hạn được license).
        // payload.expires_at === null nghĩa là license perpetual (không hết hạn).
        if (payload.expires_at) {
            const expiresAt = new Date(payload.expires_at);

            if (isNaN(expiresAt.getTime()) || now > expiresAt) {
                return { allowed: false, reason: 'expired' };
            }
        }

        // Hết hạn ân hạn offline: heartbeat lỗi quá offlineGraceDays ngày.
        // Chặn dưới 1 ngày: đặt 0 sẽ tạo vòng lặp chặn ngay sau khi kích hoạt thành công,
        // dù heartbeat giờ chạy mỗi 15 phút (blpClient.js: HEARTBEAT_INTERVAL_MS).
        const graceDays = Math.max(state.offlineGraceDays || 0, 1);

        if (!state.lastSuccessAt) {
            return { allowed: false, reason: 'never_synced' };
        }

        const offlineDays =
            (now.getTime() - new Date(state.lastSuccessAt).getTime()) /
            MS_PER_DAY;

        if (offlineDays > graceDays) {
            return { allowed: false, reason: 'offline_grace_expired' };
        }

        return { allowed: true, reason: null };
    } catch (err) {
        console.log('[license] gate blocked request: ' + err.message);

        return { allowed: false, reason: err.message };
    }
};
