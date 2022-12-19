const ConnectDB = require('../db/connect');

const DataManualCollection = 't_Data_Manual';

module.exports.DataManual = class DataManual {
    constructor(Stt, SiteId, TimeStamp, Index, Output, Description) {
        this.Stt = Stt;
        this.SiteId = SiteId;
        this.TimeStamp = TimeStamp;
        this.Index = Index;
        this.Output = Output;
        this.Description = Description;
    }
};

module.exports.GetDataManualBySiteId = async (siteid, time) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection
        .find({ SiteId: siteid, TimeStamp: time })
        .toArray();

    Connect.disconnect();

    return result;
};
