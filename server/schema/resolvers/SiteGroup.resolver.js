const SiteGroupModel = require('../../models/SiteGroup.model');

module.exports = {
    Query: {
        GetAllSiteGroup: async (parent, {}, context, info) => {
            return await SiteGroupModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteGroup: async (parent, { siteGroup }, context, info) => {
            return await SiteGroupModel.Insert(siteGroup);
        },
        UpdateSiteGroup: async (parent, { siteGroup }, context, info) => {
            return await SiteGroupModel.Update(siteGroup);
        },
        DeleteSiteGroup: async (parent, { siteGroup }, context, info) => {
            return await SiteGroupModel.Delete(siteGroup);
        },
    },
};
