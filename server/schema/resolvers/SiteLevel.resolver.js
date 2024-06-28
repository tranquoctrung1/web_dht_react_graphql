const SiteLevelModel = require('../../models/SiteLevel.model');

module.exports = {
    Query: {
        GetAllSiteLevel: async (parent, {}, context, info) => {
            return await SiteLevelModel.GetAll();
        },
    },

    Mutation: {
        InsertSiteLevel: async (parrent, { siteLevel }, context, info) => {
            return await SiteLevelModel.Insert(siteLevel);
        },
        UpdateSiteLevel: async (parrent, { siteLevel }, context, info) => {
            return await SiteLevelModel.Update(siteLevel);
        },
        DeleteSiteLevel: async (parrent, { siteLevel }, context, info) => {
            return await SiteLevelModel.Delete(siteLevel);
        },
    },
};
