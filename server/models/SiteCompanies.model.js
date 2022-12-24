const ConnectDB = require('../db/connect');

const SiteCompaniesCollection = 't_Site_Companies';

module.exports.SiteCompanies = class SiteCompanies {
    constructor(Company, Production, Description) {
        this.Company = Company;
        this.Production = Production;
        this.Description = Description;
    }
};

module.exports.GetSiteCompanies = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCompaniesCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
