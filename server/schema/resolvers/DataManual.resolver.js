const DataManualModel = require('../../models/DataManual.model');

module.exports = {
    Query: {
        GetAllDataManual: async (parent, {}, context, info) => {
            return await DataManualModel.GetAll();
        },

        GetDataManualBySiteId: async (parent, { siteid }, context, info) => {
            return await DataManualModel.GetDataManualBySiteId(siteid);
        },
    },

    Mutation: {
        InsertDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Insert(dataManual);
        },
        UpdateDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Update(dataManual);
        },
        DeleteDataManual: async (parent, { dataManual }, context, info) => {
            return await DataManualModel.Delete(dataManual);
        },
    },
};
