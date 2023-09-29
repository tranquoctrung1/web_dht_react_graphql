const HistorySiteTransmitterModel = require('../../models/HistorySiteTransmitter.model');

module.exports = {
    Query: {
        GetAllHistorySiteTransmitter: async (parent, {}, context, info) => {
            return await HistorySiteTransmitterModel.GetAll();
        },
    },
    Mutation: {
        InsertHistorySiteTransmitter: async (
            parent,
            { history },
            context,
            info,
        ) => {
            return await HistorySiteTransmitterModel.Insert(history);
        },
        UpdateHistorySiteTransmitter: async (
            parent,
            { history },
            context,
            info,
        ) => {
            return await HistorySiteTransmitterModel.Update(history);
        },
        DeleteHistorySiteTransmitter: async (
            parent,
            { history },
            context,
            info,
        ) => {
            return await HistorySiteTransmitterModel.Delete(history);
        },
    },
};
