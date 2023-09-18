const SiteGroup2SModel = require('../../models/SiteGroup2S.model');

module.exports = {
    Query: {
        GetAllSiteGroup2S: async (parent, {}, context, info) => {
            return await SiteGroup2SModel.GetAll();
        },
    },
};
