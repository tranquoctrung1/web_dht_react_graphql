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
        GetAllLevel: async (parent, {}, context, info) => {
            return await SiteModel.GetAllLevel();
        },
        GetAllDistrict: async (parent, {}, context, info) => {
            return await SiteModel.GetAllDistrict();
        },
        GetAllGroup: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup();
        },
        GetAllGroup2: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup2();
        },
        GetAllGroup3: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup3();
        },
        GetAllGroup4: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup4();
        },
        GetAllGroup5: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup5();
        },
        GetAllCoverID: async (parent, {}, context, info) => {
            return await SiteModel.GetAllCoverID();
        },
    },

    Mutation: {
        InsertSite: async (parent, { site }, context, info) => {
            return await SiteModel.Insert(site);
        },
        UpdateSite: async (parent, { site }, context, info) => {
            return await SiteModel.Update(site);
        },
        DeleteSite: async (parent, { site }, context, info) => {
            return await SiteModel.Delete(site);
        },
    },
};
