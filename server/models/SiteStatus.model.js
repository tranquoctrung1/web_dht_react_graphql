const ConnectDB = require('../db/connect');

const SiteStatusCollection = 't_Site_Status';

module.exports.SiteStatus = class SiteStatus {
    constructor(Status, Description) {
        this.Status = Status;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteStatusCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
