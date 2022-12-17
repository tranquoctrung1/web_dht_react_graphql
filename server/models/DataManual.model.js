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
