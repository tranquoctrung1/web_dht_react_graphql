const SiteMeterDirectionModel = require('../../models/SiteMeterDirection.model');

module.exports = {
    Query: {
        GetAllSiteMeterDirection: async (parent, {}, context, info) => {
            return await SiteMeterDirectionModel.GetAll();
        },
    },
};
