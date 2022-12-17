const ConnectDB = require('../db/connect');

const HistorySiteLoggerCollection = 't_History_Site_Loggers';

module.exports.HistorySiteLogger = class HistorySiteLogger {
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
