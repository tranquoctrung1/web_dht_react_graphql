const DeviceChannelConfigModel = require('../../models/DeviceChannelConfig.model');

module.exports = {
    Query: {
        GetAllDeviceChannelConifg: async (parent, {}, context, info) => {
            return await DeviceChannelConfigModel.GetAll();
        },
    },

    Mutation: {
        UpdateDeviceChannelConfig: async (
            parent,
            { channel },
            context,
            info,
        ) => {
            return await DeviceChannelConfigModel.Update(channel);
        },
        DeleteDeviceChannelConifg: async (
            parent,
            { channel },
            context,
            info,
        ) => {
            return await DeviceChannelConfigModel.Delete(channel);
        },
    },
};
