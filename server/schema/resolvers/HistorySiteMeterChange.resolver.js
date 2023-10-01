const HistorySiteMeterModel = require('../../models/HistorySiteMeter.model');

module.exports = {
    Query: {
        GetAllHistorySiteMeter: async (parent, {}, context, info) => {
            return await HistorySiteMeterModel.GetAll();
        },
        GetHistoryMeterBySiteId: async (parent, { siteid }, context, info) => {
            return await HistorySiteLoggerModel.GetHistoryBySiteId(siteid);
        },
    },
    Mutation: {
        InsertHistorySiteMeter: async (parent, { history }, context, info) => {
            return await HistorySiteMeterModel.Insert(history);
        },
        UpdateHistorySiteMeter: async (parent, { history }, context, info) => {
            return await HistorySiteMeterModel.Update(history);
        },
        DeleteHistorySiteMeter: async (parent, { history }, context, info) => {
            return await HistorySiteMeterModel.Delete(history);
        },
    },
};
