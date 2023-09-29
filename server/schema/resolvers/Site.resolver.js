const SiteModel = require('../../models/SiteSite.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');

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
        GetStatisticSiteXNManager: async (parent, {}, context, info) => {
            const result = [];

            const listSites = await SiteModel.GetStatisticXNManager();

            const listMeter = await DeviceMeterModel.GetAll();

            let count = 1;
            for (const site of listSites) {
                const obj = {
                    STT: count,
                    SiteId: site._id,
                    Marks: '',
                    Size: 0,
                    Location: site.Location,
                    Level: site.Level,
                    Company: site.Company,
                    Availability: site.Availability,
                    Status: site.Status,
                    UsingLogger: site.UsingLogger,
                    Description: site.Description,
                };

                const find = listMeter.find((el) => el.Serial === site.Meter);
                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                count++;

                result.push(obj);
            }

            return result;
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
        UpdateSiteMeterDateChange: async (parent, { site }, context, info) => {
            return await SiteModel.UpdateMeterDateChange(site);
        },
        UpdateSiteTransmitterDateChange: async (
            parent,
            { site },
            context,
            info,
        ) => {
            return await SiteModel.UpdateTransmitterDateChange(site);
        },
    },
};
