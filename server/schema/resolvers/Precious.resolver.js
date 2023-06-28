const PreciousModel = require('../../models/Precious.model');

module.exports = {
    Query: {
        GetAllPrecious: async (parent, {}, context, info) => {
            return await PreciousModel.GetAllPrecious();
        },
        GetPreciousByCompany: async (parent, { company }, context, info) => {
            return await PreciousModel.GetPreciousByCompany(company);
        },
    },

    Mutation: {
        InsertPrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Insert(precious);
        },
        UpdatePrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Update(precious);
        },
        DeletePrecious: async (parent, { precious }, context, info) => {
            return await PreciousModel.Delete(precious);
        },
    },
};
