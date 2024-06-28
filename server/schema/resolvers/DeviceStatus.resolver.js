const DeviceStatusModel = require('../../models/DeviceStatus.model');

module.exports = {
    Query: {
        GetAllDeviceStatus: async (parent, {}, context, info) => {
            return await DeviceStatusModel.GetAll();
        },
    },
    Mutation: {
        InsertDeviceStatus: async (parent, { status }, context, info) => {
            return await DeviceStatusModel.Insert(status);
        },
        UpdateDeviceStatus: async (parent, { status }, context, info) => {
            return await DeviceStatusModel.Update(status);
        },
        DeleteDeviceStatus: async (parent, { status }, context, info) => {
            return await DeviceStatusModel.Delete(status);
        },
    },
};
