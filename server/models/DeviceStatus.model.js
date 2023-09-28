const ConnectDB = require('../db/connect');

const DeviceStatusCollection = 't_Devices_Status';

module.exports.DeviceStatus = class DeviceStatus {
    constructor(Status, Description) {
        this.Description = Description;
        this.Status = Status;
    }
};

module.exports.GetAll = async () => {
    module.exports.GetAll = async () => {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceStatusCollection);

        let result = await collection.find().toArray();

        Connect.disconnect();

        return result;
    };
};
