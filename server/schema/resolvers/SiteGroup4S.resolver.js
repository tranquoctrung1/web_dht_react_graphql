const SiteGroup4SModel = require('../../models/SiteGroup4S.model');

module.exports = {
    Query: {
        GetAllSiteGroup4S: async (parent, {}, context, info) => {
            return await SiteGroup4SModel.GetAll();
        },
    },
};
