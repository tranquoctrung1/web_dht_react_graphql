const ConnectDB = require('../db/connect');

const SiteGroup3SCollection = 't_Site_Group3s';

module.exports.SiteGroup3S = class SiteGroup3S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup3SCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
