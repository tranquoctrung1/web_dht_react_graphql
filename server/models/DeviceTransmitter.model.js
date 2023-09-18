const ConnectDB = require('../db/connect');

const DeviceTransmitterCollection = 't_Devices_Transmitters';

module.exports.DeviceTransmitter = class DeviceTransmitter {
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
        MeterSerial,
        Status,
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
        this.MeterSerial = MeterSerial;
        this.Status = Status;
    }
};

module.exports.GetAllTransmitterNotInstall = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = await collection
        .find({ Installed: false })
        .sort({ Serial: 1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = await collection.find().sort({ Serial: 1 }).toArray();

    Connect.disconnect();

    return result;
};
