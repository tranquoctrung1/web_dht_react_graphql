const SiteStatusModel = require('../../models/SiteStatus.model');

module.exports = {
    Query: {
        GetAllSiteStatus: async (parent, {}, context, info) => {
            return await SiteStatusModel.GetAll();
        },
    },
};
