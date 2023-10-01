const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

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
        Status,
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
        this.Status = Status;
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

module.exports.GetAllNationalities = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const meter of data) {
            let find = result.find((el) => el === meter.Nationality);

            if (find === undefined) {
                result.push(meter.Nationality);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllProvider = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const meter of data) {
            let find = result.find((el) => el === meter.Provider);

            if (find === undefined) {
                result.push(meter.Provider);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllMarks = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const meter of data) {
            let find = result.find((el) => el === meter.Marks);

            if (find === undefined) {
                result.push(meter.Marks);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllSize = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const meter of data) {
            let find = result.find((el) => el === meter.Size);

            if (find === undefined) {
                result.push(meter.Size);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllModel = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const meter of data) {
            let find = result.find((el) => el === meter.Model);

            if (find === undefined) {
                result.push(meter.Model);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetMeterAccreditated = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection
        .find({
            AccreditatedDate: { $ne: null },
            AccreditatedDate: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetMeterExpiryDate = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection
        .find({
            AccreditatedDate: { $ne: null },
            ExpiryDate: { $lte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (meter) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DeviceMeterCollection);

    (meter.ReceiptDate =
        meter.ReceiptDate !== null && meter.ReceiptDate !== ''
            ? new Date(meter.ReceiptDate)
            : null),
        (meter.AccreditatedDate =
            meter.AccreditatedDate !== null && meter.AccreditatedDate !== ''
                ? new Date(meter.AccreditatedDate)
                : null),
        (meter.ExpiryDate =
            meter.ExpiryDate !== null && meter.ExpiryDate !== ''
                ? new Date(meter.ExpiryDate)
                : null),
        (meter.AppovalDate =
            meter.AppovalDate !== null && meter.AppovalDate !== ''
                ? new Date(meter.AppovalDate)
                : null),
        (result = await collection.insertOne(meter));

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (meter) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceMeterCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(meter._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (meter) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceMeterCollection);

        let find = await collection
            .find({ _id: new ObjectId(meter._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(meter._id),
                },
                {
                    $set: {
                        ReceiptDate:
                            meter.ReceiptDate !== null &&
                            meter.ReceiptDate !== ''
                                ? new Date(meter.ReceiptDate)
                                : null,
                        AccreditatedDate:
                            meter.AccreditatedDate !== null &&
                            meter.AccreditatedDate !== ''
                                ? new Date(meter.AccreditatedDate)
                                : null,
                        ExpiryDate:
                            meter.ExpiryDate !== null && meter.ExpiryDate !== ''
                                ? new Date(meter.ExpiryDate)
                                : null,
                        AccreditationDocument: meter.AccreditationDocument,
                        AccreditationType: meter.AccreditationType,
                        Provider: meter.Provider,
                        Marks: meter.Marks,
                        Size: meter.Size,
                        Model: meter.Model,
                        Status: meter.Status,
                        Installed: meter.Installed,
                        InstallIndex: meter.InstallIndex,
                        Description: meter.Description,
                        AppovalDate:
                            meter.AppovalDate !== null &&
                            meter.AppovalDate !== ''
                                ? new Date(meter.AppovalDate)
                                : null,
                        Approvaled: meter.Approvaled,
                        AppovalDecision: meter.AppovalDecision,
                        SerialTransmitter: meter.SerialTransmitter,
                        Nationality: meter.Nationality,
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

module.exports.UpdateInstall = async (meter) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceMeterCollection);

        let find = await collection.find({ Serial: meter.Serial }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    Serial: meter.Serial,
                },
                {
                    $set: {
                        Installed: meter.Installed,
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
