const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');

module.exports = {
    Query: {
        GetAllDeviceSiteConfig: async (parent, {}, context, info) => {
            return await DeviceSiteConfigModel.GetAll();
        },
    },

    Mutation: {
        InsertDeviceSiteConfig: async (
            parent,
            { siteConfig },
            context,
            info,
        ) => {
            return await DeviceSiteConfigModel.Insert(siteConfig);
        },
        UpdateDeviceSiteConfig: async (
            parent,
            { siteConfig },
            context,
            info,
        ) => {
            return await DeviceSiteConfigModel.Update(siteConfig);
        },
        DeleteDeviceSiteConfig: async (
            parent,
            { siteConfig },
            context,
            info,
        ) => {
            return await DeviceSiteConfigModel.Delete(siteConfig);
        },
    },
};
