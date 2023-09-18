const ConnectDB = require('../db/connect');

const SiteGroup2SCollection = 't_Site_Group2s';

module.exports.SiteGroup2S = class SiteGroup2S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup2SCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
