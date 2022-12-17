const ConnectDB = require('../db/connect');

const DeviceLoggerCollection = 't_Devices_Loggers';

module.exports.DeviceLogger = class DeviceLogger {
    constructor(
        Serial,
        ReceiptDate,
        Provider,
        Marks,
        Model,
        Status,
        Installed,
        Description,
    ) {
        this.Serial = Serial;
        this.ReceiptDate = ReceiptDate;
        this.Provider = Provider;
        this.Marks = Marks;
        this.Model = Model;
        this.Status = Status;
        this.Installed = Installed;
        this.Description = Description;
    }
};
