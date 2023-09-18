const SiteAvailabilitiesModel = require('../../models/SiteAvailabilities.model');

module.exports = {
    Query: {
        GetAllSiteAvailabilities: async (parent, {}, context, info) => {
            return await SiteAvailabilitiesModel.GetAll();
        },
    },
};
