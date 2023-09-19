const ConnectDB = require('../db/connect');

const DeviceUnitCollection = 't_Devices_Units';

module.exports.DeviceUnit = class DeviceUnit {
    constructor(Unit, Description) {
        this.Description = Description;
        this.Unit = Unit;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceUnitCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
