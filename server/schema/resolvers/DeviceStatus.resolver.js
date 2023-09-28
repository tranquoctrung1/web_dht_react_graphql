const DeviceStatusModel = require('../../models/DeviceStatus.model');

module.exports = {
    Query: {
        GetAllDeviceStatus: async (parent, {}, context, info) => {
            return await DeviceStatusModel.GetAll();
        },
    },
};
