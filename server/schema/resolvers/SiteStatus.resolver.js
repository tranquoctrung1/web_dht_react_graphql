const SiteStatusModel = require('../../models/SiteStatus.model');

module.exports = {
    Query: {
        GetAllSiteStatus: async (parent, {}, context, info) => {
            return await SiteStatusModel.GetAll();
        },
    },
    Mutation: {
        InsertSiteStatus: async (parent, { status }, context, info) => {
            return await SiteStatusModel.Insert(status);
        },
        UpdateSiteStatus: async (parent, { status }, context, info) => {
            return await SiteStatusModel.Update(status);
        },
        DeleteSiteStatus: async (parent, { status }, context, info) => {
            return await SiteStatusModel.Delete(status);
        },
    },
};
