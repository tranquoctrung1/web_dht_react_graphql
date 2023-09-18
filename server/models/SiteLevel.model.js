const ConnectDB = require('../db/connect');

const SiteLevelCollection = 't_Site_Levels';

module.exports.SiteLevel = class SiteLevel {
    constructor(Level, Description) {
        this.Level = Level;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteLevelCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
