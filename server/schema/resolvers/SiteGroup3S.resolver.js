const SiteGroup3SModel = require('../../models/SiteGroup3S.model');

module.exports = {
    Query: {
        GetAllSiteGroup3S: async (parent, {}, context, info) => {
            return await SiteGroup3SModel.GetAll();
        },
    },
};
