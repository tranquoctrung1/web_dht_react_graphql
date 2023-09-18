const ConnectDB = require('../db/connect');

const SiteMeterDirectionCollection = 't_Site_MeterDirections';

module.exports.SiteMeterDirection = class SiteMeterDirection {
    constructor(Direction, Description) {
        this.Direction = Direction;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteMeterDirectionCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
