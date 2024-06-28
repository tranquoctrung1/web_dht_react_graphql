const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteCompaniesCollection = 't_Site_Companies';

module.exports.SiteCompanies = class SiteCompanies {
    constructor(Company, Production, Description) {
        this.Company = Company;
        this.Production = Production;
        this.Description = Description;
    }
};

module.exports.GetAllSiteCompanies = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCompaniesCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteCompniesByCompany = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCompaniesCollection);

    let result = await collection.find({ Company: company }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (company) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteCompaniesCollection);

    result = await collection.insertOne(company);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCompaniesCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(company._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (company) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteCompaniesCollection);

        let find = await collection
            .find({ _id: new ObjectId(company._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(company._id),
                },
                {
                    $set: {
                        Description: company.Description,
                    },
                },
            );

            result = update.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }
    return result;
};
