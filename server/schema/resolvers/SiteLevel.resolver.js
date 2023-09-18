const SiteLevelModel = require('../../models/SiteLevel.model');

module.exports = {
    Query: {
        GetAllSiteLevel: async (parent, {}, context, info) => {
            return await SiteLevelModel.GetAll();
        },
    },
};
