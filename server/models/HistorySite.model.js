const ConnectDB = require('../db/connect');

const HistorySiteCollection = 't_History_Sites';

module.exports.HistorySite = class HistorySite {
    constructor(
        SiteId,
        Date,
        Meter,
        SerialMeter,
        Transmitter,
        SerialTransmitter,
        Logger,
        SeriLogger,
        Battery,
        TransmitterBattery,
        LoggerBattery,
        Description,
        Index,
    ) {
        this.SiteId = SiteId;
        this.Date = Date;
        this.Meter = Meter;
        this.SerialMeter = SerialMeter;
        this.Transmitter = Transmitter;
        this.SerialTransmitter = SerialTransmitter;
        this.Logger = Logger;
        this.SeriLogger = SeriLogger;
        this.Battery = Battery;
        this.TransmitterBattery = TransmitterBattery;
        this.LoggerBattery = LoggerBattery;
        this.Description = Description;
        this.Index = Index;
    }
};
