const DeviceLoggerModel = require('../../models/DeviceLogger.model');

module.exports = {
    Query: {
        GetAllLoggerNotInstall: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAllLoggerNotInstall();
        },

        GetAllLogger: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAll();
        },
    },
};
