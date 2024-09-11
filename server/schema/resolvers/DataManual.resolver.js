const DataManualModel = require('../../models/DataManual.model');

module.exports = {
    Query: {
        GetAllDataManual: async (parent, {}, context, info) => {
            return await DataManualModel.GetAll();
        },

        GetDataManualBySiteId: async (parent, { siteid }, context, info) => {
            return await DataManualModel.GetDataManualBySiteId(siteid);
        },
        GetDataManualBySiteIdAndTimeStamp: async (
            parent,
            { siteid, start, end },
            context,
            info,
        ) => {
            return await DataManualModel.GetDataManualBySiteIdAndTimeStamp(
                siteid,
                start,
                end,
            );
        },
    },

    Mutation: {
        InsertDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Insert(dataManual);
        },
        InsertIndexDataManual: async (
            parent,
            { dataManual },
            context,
            info,
        ) => {
            return await DataManualModel.InsertIndex(dataManual);
        },
        UpdateDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Update(dataManual);
        },
        UpdateIndexDataManual: async (
            parent,
            { dataManual },
            context,
            info,
        ) => {
            return await DataManualModel.UpdateIndex(dataManual);
        },
        DeleteDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Delete(dataManual);
        },
        UpdateOutputByPrecious: async (
            parent,
            { siteid, timestamp, output },
            context,
            info,
        ) => {
            return await DataManualModel.UpdateOutputByPrecious(
                siteid,
                timestamp,
                output,
            );
        },
    },
};
