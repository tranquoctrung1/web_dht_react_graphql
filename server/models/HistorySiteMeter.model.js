const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const HistorySiteMeterCollection = 't_History_Site_Meters';

module.exports.HistorySiteMeter = class HistorySiteMeter {
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

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteMeterCollection);

    let result = await collection.find().toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetHistoryDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(HistorySiteMeterCollection);

    let result = await collection
        .find({
            DateChanged: { $ne: null },
            DateChanged: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (history) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(HistorySiteMeterCollection);

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

    let collection = await Connect.connect(HistorySiteMeterCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(history._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (history) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(HistorySiteMeterCollection);

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
