const ConnectDB = require('../db/connect');

const DeviceMeterCollection = 't_Devices_Meters';

module.exports.DeviceMeter = class DeviceMeter {
    constructor(
        Serial,
        ReceiptDate,
        AccreditatedDate,
        ExpiryDate,
        AccreditationDocument,
        AccreditationType,
        Provider,
        Marks,
        Size,
        Model,
        Installed,
        InstallIndex,
        Description,
        AppovalDate,
        Approvaled,
        AppovalDecision,
        SerialTransmitter,
        Nationality,
    ) {
        this.Serial = Serial;
        this.ReceiptDate = ReceiptDate;
        this.AccreditatedDate = AccreditatedDate;
        this.ExpiryDate = ExpiryDate;
        this.AccreditationDocument = AccreditationDocument;
        this.AccreditationType = AccreditationType;
        this.Provider = Provider;
        this.Marks = Marks;
        this.Size = Size;
        this.Model = Model;
        this.Installed = Installed;
        this.InstallIndex = InstallIndex;
        this.Description = Description;
        this.AppovalDate = AppovalDate;
        this.Approvaled = Approvaled;
        this.AppovalDecision = AppovalDecision;
        this.SerialTransmitter = SerialTransmitter;
        this.Nationality = Nationality;
    }
};

module.exports.GetMeterBySerial = async (serial) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection.find({ Serial: serial }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllMeterNotInstall = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection
        .find({ Installed: false })
        .sort({ Serial: 1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection.find().sort({ Serial: 1 }).toArray();

    Connect.disconnect();

    return result;
};
