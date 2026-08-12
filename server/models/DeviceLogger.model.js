const ConnectDB = require('../db/connect');
const { collectDistinct } = require('../utils/collectDistinct');
const { ObjectId } = require('mongodb');

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

module.exports.GetAllLoggerNotInstall = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let result = await collection
        .find({ Installed: false })
        .sort({ Serial: 1 })
        .toArray();

    return result;
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let result = await collection.find().sort({ Serial: 1 }).toArray();

    return result;
};

module.exports.GetAllProvider = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let data = await collection
        .find({})
        .project({ Provider: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Provider');
};

module.exports.GetAllMarks = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let data = await collection
        .find({})
        .project({ Marks: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Marks');
};

module.exports.GetAllModel = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let data = await collection
        .find({})
        .project({ Model: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Model');
};

module.exports.Insert = async (logger) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DeviceLoggerCollection);

    let check = await collection.find({ Serial: logger.Serial }).toArray();
    if (check.length == 0) {
        logger.ReceiptDate =
            logger.ReceiptDate !== null && logger.ReceiptDate !== ''
                ? new Date(logger.ReceiptDate)
                : null;

        result = await collection.insertOne(logger);

        result = result.insertedId;

        return result;
    } else {
        return '';
    }
};

module.exports.Delete = async (logger) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DeviceLoggerCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(logger._id),
    });

    return result.deletedCount;
};

module.exports.Update = async (logger) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceLoggerCollection);

        let find = await collection
            .find({ _id: new ObjectId(logger._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(logger._id),
                },
                {
                    $set: {
                        ReceiptDate:
                            logger.ReceiptDate === ''
                                ? null
                                : new Date(logger.ReceiptDate),
                        Provider: logger.Provider,
                        Marks: logger.Marks,
                        Model: logger.Model,
                        Status: logger.Status,
                        Installed: logger.Installed,
                        Description: logger.Description,
                    },
                },
            );

            result = update.modifiedCount;
        }
    } catch (err) {
        console.log(err);
    }
    return result;
};

module.exports.UpdateInstall = async (logger) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DeviceLoggerCollection);

        let find = await collection.find({ Serial: logger.Serial }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    Serial: logger.Serial,
                },
                {
                    $set: {
                        Installed: logger.Installed,
                    },
                },
            );

            result = update.modifiedCount;
        }
    } catch (err) {
        console.log(err);
    }
    return result;
};
