const jwt = require('jsonwebtoken');
const DeviceLoggerModel = require('../../models/DeviceLogger.model');

const ADMIN_ROLE = 'admin';

const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
        return null;
    }
};

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
            const decoded = decodeToken(context.token);

            if (decoded === null || decoded.role !== ADMIN_ROLE) {
                return 0;
            }

            return await DeviceLoggerModel.Delete(logger);
        },
        UpdateLoggerInstall: async (parent, { logger }, context, info) => {
            return await DeviceLoggerModel.UpdateInstall(logger);
        },
    },
};
