const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

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
        this.NewMeterSerial = NewMeterSerial;
        this.Description = Description;
        this.OldMeterIndex = OldMeterIndex;
        this.SiteId = SiteId;
        this.NewMeterIndex = NewMeterIndex;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteLoggerCollection);

    let result = await collection.find().toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetHistoryBySiteId = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteLoggerCollection);

    let result = await collection
        .find({ SiteId: siteid })
        .sort({ DateChanged: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (history) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(HistorySiteLoggerCollection);

    history.DateChanged =
        history.DateChanged !== null && history.DateChanged !== ''
            ? new Date(history.DateChanged)
            : null;

    result = await collection.insertOne(history);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (history) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteLoggerCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(history._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};
module.exports.GetHistoryDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteLoggerCollection);

    let result = await collection
        .find({
            DateChanged: { $ne: null },
            DateChanged: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.Update = async (history) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(HistorySiteLoggerCollection);

        let find = await collection
            .find({ _id: new ObjectId(history._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(history._id),
                },
                {
                    $set: {
                        DateChanged:
                            history.DateChanged === ''
                                ? null
                                : new Date(history.DateChanged),
                        OldMeterSerial: history.OldMeterSerial,
                        NewMeterSerial: history.NewMeterSerial,
                        OldMeterIndex: history.OldMeterIndex,
                        NewMeterIndex: history.NewMeterIndex,
                        Description: history.Description,
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
