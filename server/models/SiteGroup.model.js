const ConnectDB = require('../db/connect');

const SiteGroupCollection = 't_Site_Groups';

module.exports.SiteGroup = class SiteGroup {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroupCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
