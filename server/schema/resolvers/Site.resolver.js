const SiteModel = require('../../models/SiteSite.model');

module.exports = {
    Query: {
        GetAllSites: async (parent, {}, context, info) => {
            return await SiteModel.GetAllSites();
        },
        GetAllOldSiteId: async (parent, {}, context, info) => {
            return await SiteModel.GetAllOldSiteId();
        },
        GetSiteByWaterSupply: async (parent, { company }, context, info) => {
            return await SiteModel.GetSiteByWaterSupply(company);
        },
        GetAllViewGroups: async (parent, {}, context, info) => {
            return await SiteModel.GetAllViewGroups();
        },
        GetSiteByWaterSubtractB2ForTA: async (parent, {}, context, infor) => {
            return await SiteModel.GetSiteByWaterSubtractB2ForTA();
        },
    },
};
