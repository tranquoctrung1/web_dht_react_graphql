const SiteCoverModel = require('../../models/SiteCover.model');

module.exports = {
    Query: {
        GetAllSiteCover: async (parent, {}, context, info) => {
            return await SiteCoverModel.GetAll();
        },
    },
};
