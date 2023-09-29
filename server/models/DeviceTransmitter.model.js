const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

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

module.exports.GetAllProvider = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const transmitter of data) {
            let find = result.find((el) => el === transmitter.Provider);

            if (find === undefined) {
                result.push(transmitter.Provider);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllMarks = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const transmitter of data) {
            let find = result.find((el) => el === transmitter.Marks);

            if (find === undefined) {
                result.push(transmitter.Marks);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllSize = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const transmitter of data) {
            let find = result.find((el) => el === transmitter.Size);

            if (find === undefined) {
                result.push(transmitter.Size);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllModel = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const transmitter of data) {
            let find = result.find((el) => el === transmitter.Model);

            if (find === undefined) {
                result.push(transmitter.Model);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (transmitter) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DeviceTransmitterCollection);

    (transmitter.ReceiptDate =
        transmitter.ReceiptDate !== null && transmitter.ReceiptDate !== ''
            ? new Date(transmitter.ReceiptDate)
            : null),
        (transmitter.AccreditatedDate =
            transmitter.AccreditatedDate !== null &&
            transmitter.AccreditatedDate !== ''
                ? new Date(transmitter.AccreditatedDate)
                : null),
        (transmitter.ExpiryDate =
            transmitter.ExpiryDate !== null && transmitter.ExpiryDate !== ''
                ? new Date(transmitter.ExpiryDate)
                : null),
        (transmitter.AppovalDate =
            transmitter.AppovalDate !== null && transmitter.AppovalDate !== ''
                ? new Date(transmitter.AppovalDate)
                : null),
        (result = await collection.insertOne(transmitter));

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (transmitter) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceTransmitterCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(transmitter._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (transmitter) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceTransmitterCollection);

        let find = await collection
            .find({ _id: new ObjectId(transmitter._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(transmitter._id),
                },
                {
                    $set: {
                        ReceiptDate:
                            transmitter.ReceiptDate !== null &&
                            transmitter.ReceiptDate !== ''
                                ? new Date(transmitter.ReceiptDate)
                                : null,
                        AccreditatedDate:
                            transmitter.AccreditatedDate !== null &&
                            transmitter.AccreditatedDate !== ''
                                ? new Date(transmitter.AccreditatedDate)
                                : null,
                        ExpiryDate:
                            transmitter.ExpiryDate !== null &&
                            transmitter.ExpiryDate !== ''
                                ? new Date(transmitter.ExpiryDate)
                                : null,
                        AccreditationDocument:
                            transmitter.AccreditationDocument,
                        AccreditationType: transmitter.AccreditationType,
                        Provider: transmitter.Provider,
                        Marks: transmitter.Marks,
                        Size: transmitter.Size,
                        Model: transmitter.Model,
                        Status: transmitter.Status,
                        Installed: transmitter.Installed,
                        InstallIndex: transmitter.InstallIndex,
                        Description: transmitter.Description,
                        AppovalDate:
                            transmitter.AppovalDate !== null &&
                            transmitter.AppovalDate !== ''
                                ? new Date(transmitter.AppovalDate)
                                : null,
                        Approvaled: transmitter.Approvaled,
                        AppovalDecision: transmitter.AppovalDecision,
                        MeterSerial: transmitter.MeterSerial,
                    },
                },
            );

            result = update.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }
    return result;
};
