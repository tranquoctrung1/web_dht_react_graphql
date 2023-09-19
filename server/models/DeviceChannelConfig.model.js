const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

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

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceChannelConfigCollection);

    let result = await collection.find({}).sort({ _id: 1 }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (channel) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DeviceChannelConfigCollection);

    result = await collection.insertOne(channel);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (channel) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceChannelConfigCollection);

    let result = await collection.deleteMany({
        _id: channel._id,
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (channel) => {
    let result = '';
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceChannelConfigCollection);

        let find = await collection.find({ _id: channel._id }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: channel._id,
                },
                {
                    $set: {
                        Name: channel.Name,
                        Unit: channel.Unit,
                        LoggerId: channel.LoggerId,
                    },
                },
            );

            result = update.modifiedCount;
        } else {
            // insert channel
            let insert = await collection.insertOne(channel);

            result = insert.insertedId;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
        result = '';
    }

    return result;
};
