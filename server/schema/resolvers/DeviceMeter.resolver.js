const DeviceMeterModel = require('../../models/DeviceMeter.model');

module.exports = {
    Query: {
        GetAllMeterNotInstall: async (parent, {}, context, info) => {
            return await DeviceMeterModel.GetAllMeterNotInstall();
        },
    },
};