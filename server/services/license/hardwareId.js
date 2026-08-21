const crypto = require('crypto');

const LicenseStateModel = require('../../models/LicenseState.model');

// Hardware ID là GUID ngẫu nhiên, KHÔNG lấy từ machine/VM UUID.
// Lý do: máy ảo được clone sẽ dùng chung machine UUID -> trùng hardware_id trên BLP.
// GUID được sinh 1 lần ở lần chạy đầu tiên rồi lưu vào LicenseState và dùng lại mãi.
module.exports.getOrCreateHardwareId = async function () {
    let state = await LicenseStateModel.GetState();

    if (state && state.hardwareId) {
        return state.hardwareId;
    }

    const hardwareId = crypto.randomUUID();

    if (state) {
        await LicenseStateModel.UpdateById(state._id, {
            hardwareId: hardwareId,
        });
    } else {
        await LicenseStateModel.CreateWithHardwareId(hardwareId);
    }

    return hardwareId;
};

// Trả về document singleton (tạo mới kèm hardwareId nếu chưa có).
module.exports.getState = async function () {
    await module.exports.getOrCreateHardwareId();

    return await LicenseStateModel.GetState();
};
