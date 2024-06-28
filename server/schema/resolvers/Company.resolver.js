const SiteCompaniesModel = require('../../models/SiteCompanies.model');

module.exports = {
    Query: {
        GetCompanies: async () => {
            return await SiteCompaniesModel.GetAllSiteCompanies();
        },
    },
    Mutation: {
        InsertSiteCompany: async (parent, { company }, context, info) => {
            return await SiteCompaniesModel.Insert(company);
        },
        UpdateSiteCompany: async (parent, { company }, context, info) => {
            return await SiteCompaniesModel.Update(company);
        },
        DeleteSiteCompany: async (parent, { company }, context, info) => {
            return await SiteCompaniesModel.Delete(company);
        },
    },
};
