const SiteGroup5SModel = require('../../models/SiteGroup5S.model');

module.exports = {
    Query: {
        GetAllSiteGroup5S: async (parent, {}, context, info) => {
            return await SiteGroup5SModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteGroup5S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup5SModel.Insert(siteGroup);
        },
        UpdateSiteGroup5S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup5SModel.Update(siteGroup);
        },
        DeleteSiteGroup5S: async (parent, { siteGroup }, context, info) => {
            return await SiteGroup5SModel.Delete(siteGroup);
        },
    },
};
