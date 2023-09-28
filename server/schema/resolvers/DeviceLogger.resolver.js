const DeviceLoggerModel = require('../../models/DeviceLogger.model');

module.exports = {
    Query: {
        GetAllLoggerNotInstall: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAllLoggerNotInstall();
        },

        GetAllLogger: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAll();
        },
        GetLoggerProvider: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAllProvider();
        },
        GetLoggerMarks: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAllMarks();
        },
        GetLoggerModel: async (parent, {}, context, info) => {
            return await DeviceLoggerModel.GetAllModel();
        },
    },
    Mutation: {
        InsertLogger: async (parent, { logger }, context, info) => {
            return await DeviceLoggerModel.Insert(logger);
        },
        UpdateLogger: async (parent, { logger }, context, info) => {
            return await DeviceLoggerModel.Update(logger);
        },
        DeleteLogger: async (parent, { logger }, context, info) => {
            return await DeviceLoggerModel.Delete(logger);
        },
    },
};
