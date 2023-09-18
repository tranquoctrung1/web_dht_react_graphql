const ConnectDB = require('../db/connect');

const SiteGroup5SCollection = 't_Site_Group5s';

module.exports.SiteGroup5S = class SiteGroup5S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup5SCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
