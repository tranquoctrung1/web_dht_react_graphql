const ConnectDB = require('../db/connect');

const HistorySiteTransmitterCollection = 't_History_Site_Transmitters';

module.exports.HistorySiteTransmitter = class HistorySiteTransmitter {
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
