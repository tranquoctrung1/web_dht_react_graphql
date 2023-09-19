const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const DeviceSiteConfigCollection = 't_Devices_SitesConfigs';

module.exports.DeviceSiteConfig = class DeviceSiteConfig {
    constructor(
        _id,
        LoggerId,
        SiteId,
        Tel,
        Pressure,
        Forward,
        Reverse,
        BeginTime,
        ZoomInit,
        ZoomOn,
        Pressure1,
    ) {
        this._id = _id;
        this.LoggerId = LoggerId;
        this.SiteId = SiteId;
        this.Tel = Tel;
        this.Pressure = Pressure;
        this.Forward = Forward;
        this.Reverse = Reverse;
        this.BeginTime = BeginTime;
        this.ZoomInit = ZoomInit;
        this.ZoomOn = ZoomOn;
        this.BeginTime = BeginTime;
        this.Pressure1 = Pressure1;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceSiteConfigCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetChannelBySiteId = async (siteId) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceSiteConfigCollection);

    let result = await collection.find({ SiteId: siteId }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (siteConfig) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DeviceSiteConfigCollection);

    result = await collection.insertOne(siteConfig);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (siteConfig) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceSiteConfigCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(siteConfig._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (siteConfig) => {
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceSiteConfigCollection);

        siteConfig._id = new ObjectId(siteConfig._id);

        let result = await collection.deleteMany({
            _id: new ObjectId(siteConfig._id),
        });

        result = await collection.insertOne(siteConfig);

        Connect.disconnect();

        return result.insertedId;
    } catch (err) {
        console.log(err);
    }
};
