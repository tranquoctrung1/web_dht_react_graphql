const ConnectDB = require('../db/connect');

const DeviceChannelConfigCollection = 't_Devices_ChannelsConfigs';

module.exports.DeviceChannelConfig = class DeviceChannelConfig {
    constructor(_id, LoggerId, Name, Unit, TimeStamp, LastValue, Description) {
        this._id = _id;
        this.Name = Name;
        this.LoggerId = LoggerId;
        this.Unit = Unit;
        this.TimeStamp = TimeStamp;
        this.Description = Description;
        this.LastValue = LastValue;
    }
};
