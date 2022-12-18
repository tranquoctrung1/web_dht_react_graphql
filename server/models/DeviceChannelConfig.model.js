const ConnectDB = require('../db/connect');

const DeviceChannelConfigCollection = 't_Devices_ChannelsConfigs';

module.exports.DeviceChannelConfig = class DeviceChannelConfig {
    constructor(
        _id,
        LoggerId,
        Name,
        Unit,
        LastTimeStamp,
        LastValue,
        Description,
    ) {
        this._id = _id;
        this.Name = Name;
        this.LoggerId = LoggerId;
        this.Unit = Unit;
        this.LastTimeStamp = LastTimeStamp;
        this.Description = Description;
        this.LastValue = LastValue;
    }
};
