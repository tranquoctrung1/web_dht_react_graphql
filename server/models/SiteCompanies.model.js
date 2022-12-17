const ConnectDB = require('../db/connect');

const SiteCompaniesCollection = 't_Site_Companies';

module.exports.SiteCompanies = class SiteCompanies {
    constructor(Company, Production, Description) {
        this.Company = Company;
        this.Production = Production;
        this.Description = Description;
    }
};
