const ConnectDB = require('../db/connect');

const HistorySiteMeterCollection = 't_History_Site_Meters';

module.exports.HistorySiteMeter = class HistorySiteMeter {
    constructor(
        DateChanged,
        SiteId,
        OldMeterSerial,
        NewMeterSerial,
        OldMeterIndex,
        NewMeterIndex,
        Description,
    ) {
        this.DateChanged = DateChanged;
        this.OldMeterSerial = OldMeterSerial;
        this.NewMeterSerial = NewMeterIndex;
        this.Description = Description;
        this.OldMeterIndex = OldMeterIndex;
        this.SiteId = SiteId;
        this.NewMeterSerial = NewMeterSerial;
    }
};
