const ConnectDB = require('../db/connect');

// Singleton document: chỉ tồn tại đúng 1 bản ghi trạng thái license cho cài đặt này.
const LicenseStateCollection = 't_License_State';

module.exports.GetState = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(LicenseStateCollection);

    return await collection.findOne({});
};

module.exports.CreateWithHardwareId = async (hardwareId) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(LicenseStateCollection);

    return await collection.insertOne({
        hardwareId: hardwareId,
        offlineGraceDays: 0,
    });
};

module.exports.UpsertByHardwareId = async (hardwareId, fields) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(LicenseStateCollection);

    return await collection.updateOne(
        { hardwareId: hardwareId },
        { $set: { hardwareId: hardwareId, ...fields } },
        { upsert: true },
    );
};

module.exports.UpdateById = async (id, fields) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(LicenseStateCollection);

    return await collection.updateOne({ _id: id }, { $set: fields });
};

// Dùng khi heartbeat báo license bị thu hồi -> phải xóa signedToken cũ.
module.exports.UpdateByIdAndUnsetToken = async (id, fields) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(LicenseStateCollection);

    return await collection.updateOne(
        { _id: id },
        { $set: fields, $unset: { signedToken: '' } },
    );
};
