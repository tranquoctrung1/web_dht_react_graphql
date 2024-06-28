const SiteGroup4SModel = require('../../models/SiteGroup4S.model');

module.exports = {
    Query: {
        GetAllSiteGroup4S: async (parent, {}, context, info) => {
            return await SiteGroup4SModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteGroup4S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup4SModel.Insert(siteGroup);
        },
        UpdateSiteGroup4S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup4SModel.Update(siteGroup);
        },
        DeleteSiteGroup4S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup4SModel.Delete(siteGroup);
        },
    },
};
