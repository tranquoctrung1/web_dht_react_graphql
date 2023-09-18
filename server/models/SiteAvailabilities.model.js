const ConnectDB = require('../db/connect');

const SiteAvailabilitiesCollection = 't_Site_Availabilities';

module.exports.SiteAvailabilities = class SiteAvailabilities {
    constructor(Availability, Description) {
        this.Availability = Availability;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteAvailabilitiesCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
