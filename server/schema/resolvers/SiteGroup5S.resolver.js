const SiteGroup5SModel = require('../../models/SiteGroup5S.model');

module.exports = {
    Query: {
        GetAllSiteGroup5S: async (parent, {}, context, info) => {
            return await SiteGroup5SModel.GetAll();
        },
    },
};
