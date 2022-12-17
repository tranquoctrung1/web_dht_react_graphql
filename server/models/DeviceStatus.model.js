const ConnectDB = require('../db/connect');

const DeviceStatusCollection = 't_Devices_Status';

module.exports.DeviceStatus = class DeviceStatus {
    constructor(Status, Description) {
        this.Description = Description;
        this.Status = Status;
    }
};
