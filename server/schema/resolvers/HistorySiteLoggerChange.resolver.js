const HistorySiteLoggerModel = require('../../models/HistorySiteLogger.model');

module.exports = {
    Query: {
        GetAllHistorySiteLogger: async (parent, {}, context, info) => {
            return await HistorySiteLoggerModel.GetAll();
        },
    },
    Mutation: {
        InsertHistorySiteLogger: async (parent, { history }, context, info) => {
            return await HistorySiteLoggerModel.Insert(history);
        },
        UpdateHistorySiteLogger: async (parent, { history }, context, info) => {
            return await HistorySiteLoggerModel.Update(history);
        },
        DeleteHistorySiteLogger: async (parent, { history }, context, info) => {
            return await HistorySiteLoggerModel.Delete(history);
        },
    },
};
