const DeviceChannelConfigModel = require('../../models/DeviceChannelConfig.model');

module.exports = {
    Query: {
        GetChannelByLoggerId: async (parent, { loggerid }, context, info) => {
            return await DeviceChannelConfigModel.GetChannelByLoggerId(
                loggerid,
            );
        },
    },
};
