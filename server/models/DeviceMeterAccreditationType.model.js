const ConnectDB = require('../db/connect');

const DeviceMeterAccreditationTypeCollection =
    't_Devices_Meter_Accreditation_Type';

module.exports.DeviceMeterAccreditation = class DeviceMeterAccreditation {
    constructor(AccreditationType, Description) {
        this.AccreditationType = AccreditationType;
        this.Description = Description;
    }
};
