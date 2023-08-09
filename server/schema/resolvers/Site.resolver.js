const SiteModel = require('../../models/SiteSite.model');

module.exports = {
    Query: {
        GetAllSites: async (parent, {}, context, info) => {
            return await SiteModel.GetAllSites();
        },
        GetSiteByWaterSupply: async (parent, { company }, context, info) => {
            return await SiteModel.GetSiteByWaterSupply(company);
        },
        GetSiteByWaterSubtractB2ForTA: async (parent, {}, context, infor) => {
            return await SiteModel.GetSiteByWaterSubtractB2ForTA();
        },
    },
};
