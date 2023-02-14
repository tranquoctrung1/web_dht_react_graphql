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
        BaseMin,
        BaseMax,
        BaseLine,
        GroupChannel,
        Pressure1,
        Pressure2,
        ForwardFlow,
        ReverseFlow,
        DisplayOnGraph,
        IndexTimeStamp,
        LastIndex,
        StatusViewAlarm,
    ) {
        this._id = _id;
        this.Name = Name;
        this.LoggerId = LoggerId;
        this.Unit = Unit;
        this.LastTimeStamp = LastTimeStamp;
        this.Description = Description;
        this.LastValue = LastValue;
        this.BaseLine = BaseLine;
        this.BaseMin = BaseMin;
        this.BaseMax = BaseMax;
        this.GroupChannel = GroupChannel;
        this.Pressure1 = Pressure1;
        this.Pressure2 = Pressure2;
        this.ForwardFlow = ForwardFlow;
        this.ReverseFlow = ReverseFlow;
        this.DisplayOnGraph = DisplayOnGraph;
        this.IndexTimeStamp = IndexTimeStamp;
        this.LastIndex = LastIndex;
        this.StatusViewAlarm = StatusViewAlarm;
    }
};

module.exports.GetChannelByLoggerId = async (loggerid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceChannelConfigCollection);

    let result = await collection
        .find({ LoggerId: loggerid })
        .sort({ _id: 1 })
        .toArray();

    Connect.disconnect();

    return result;
};
