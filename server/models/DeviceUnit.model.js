const ConnectDB = require('../db/connect');

const DeviceUnitCollection = 't_Devices_Units';

module.exports.DeviceUnit = class DeviceUnit {
    constructor(Unit, Description) {
        this.Description = Description;
        this.Unit = Unit;
    }
};
