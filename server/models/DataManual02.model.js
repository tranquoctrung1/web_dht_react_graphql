const ConnectDB = require('../db/connect');

const DataManual02Collection = 't_Data_Manual_02';

module.exports.DataManual02 = class DataManual02 {
    constructor(Stt, SiteId, TimeStamp, Index, Output, Description) {
        this.Stt = Stt;
        this.SiteId = SiteId;
        this.TimeStamp = TimeStamp;
        this.Index = Index;
        this.Output = Output;
        this.Description = Description;
    }
};
