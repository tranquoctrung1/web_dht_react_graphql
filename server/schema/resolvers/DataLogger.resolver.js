const DataLoggerModel = require('../../models/DataLogger.model');

module.exports = {
    Query: {
        GetDataLoggerByTimeStamp: async (
            parent,
            { channelid, start, end },
            context,
            info,
        ) => {
            return await DataLoggerModel.GetDataLoggerByTimeStamp(
                channelid,
                start,
                end,
            );
        },

        GetDataLoggerByLastRecord: async (
            parent,
            { channelid },
            context,
            info,
        ) => {
            return await DataLoggerModel.GetDataLoggerByLastRecord(channelid);
        },
    },
};
