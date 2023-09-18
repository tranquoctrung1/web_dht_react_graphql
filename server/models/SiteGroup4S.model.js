const ConnectDB = require('../db/connect');

const SiteGroup4SCollection = 't_Site_Group4s';

module.exports.SiteGroup4S = class SiteGroup4S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup4SCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
