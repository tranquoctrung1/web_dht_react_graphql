const SiteGroup2SModel = require('../../models/SiteGroup2S.model');

module.exports = {
    Query: {
        GetAllSiteGroup2S: async (parent, {}, context, info) => {
            return await SiteGroup2SModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteGroup2S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup2SModel.Insert(siteGroup);
        },
        UpdateSiteGroup2S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup2SModel.Update(siteGroup);
        },
        DeleteSiteGroup2S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup2SModel.Delete(siteGroup);
        },
    },
};
