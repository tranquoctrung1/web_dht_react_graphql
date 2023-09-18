const ConnectDB = require('../db/connect');

const DeviceMeterAccreditationTypeCollection =
    't_Devices_Meter_Accreditation_Type';

module.exports.DeviceMeterAccreditation = class DeviceMeterAccreditation {
    constructor(AccreditationType, Description) {
        this.AccreditationType = AccreditationType;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        DeviceMeterAccreditationTypeCollection,
    );

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
