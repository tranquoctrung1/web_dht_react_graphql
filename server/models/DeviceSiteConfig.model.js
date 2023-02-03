const ConnectDB = require('../db/connect');

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
        this.LoggerId = this.LoggerId;
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

module.exports.GetChannelBySiteId = async (siteId) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceSiteConfigCollection);

    let result = await collection.find({ SiteId: siteId }).toArray();

    Connect.disconnect();

    return result;
};
