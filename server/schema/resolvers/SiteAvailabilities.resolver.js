const SiteAvailabilitiesModel = require('../../models/SiteAvailabilities.model');

module.exports = {
    Query: {
        GetAllSiteAvailabilities: async (parent, {}, context, info) => {
            return await SiteAvailabilitiesModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteAvailability: async (
            parent,
            { available },
            context,
            info,
        ) => {
            return await SiteAvailabilitiesModel.Insert(available);
        },
        UpdateSiteAvailability: async (
            parent,
            { available },
            context,
            info,
        ) => {
            return await SiteAvailabilitiesModel.Update(available);
        },
        DeleteSiteAvailability: async (
            parent,
            { available },
            context,
            info,
        ) => {
            return await SiteAvailabilitiesModel.Delete(available);
        },
    },
};
