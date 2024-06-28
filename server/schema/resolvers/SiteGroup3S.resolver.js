const SiteGroup3SModel = require('../../models/SiteGroup3S.model');

module.exports = {
    Query: {
        GetAllSiteGroup3S: async (parent, {}, context, info) => {
            return await SiteGroup3SModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteGroup3S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup3SModel.Insert(siteGroup);
        },
        UpdateSiteGroup3S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup3SModel.Update(siteGroup);
        },
        DeleteSiteGroup3S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup3SModel.Delete(siteGroup);
        },
    },
};
