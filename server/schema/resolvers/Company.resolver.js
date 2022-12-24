const SiteCompaniesModel = require('../../models/SiteCompanies.model');

module.exports = {
    Query: {
        GetCompanies: async () => {
            return await SiteCompaniesModel.GetSiteCompanies();
        },
    },
};
