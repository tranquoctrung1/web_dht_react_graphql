const SiteGroupModel = require('../../models/SiteGroup.model');

module.exports = {
    Query: {
        GetAllSiteGroup: async (parent, {}, context, info) => {
            return await SiteGroupModel.GetAll();
        },
    },
};
