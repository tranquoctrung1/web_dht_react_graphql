const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');

module.exports = {
    Query: {
        GetAllTransmitterNotInstall: async (parent, {}, context, info) => {
            return await DeviceTransmitterModel.GetAllTransmitterNotInstall();
        },
    },
};