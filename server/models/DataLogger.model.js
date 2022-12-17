const ConnectDB = require('../db/connect');

module.exports.DeviceMeter = class DeviceMeter {
    constructor(TimeStamp, Value) {
        this.TimeStamp = TimeStamp;
        this.Value = Value;
    }
};
