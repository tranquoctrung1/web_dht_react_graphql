const { ObjectId } = require('mongodb');
const ConnectDB = require('../db/connect');

const DataManualCollection = 't_Data_Manual';

module.exports.DataManual = class DataManual {
    constructor(Stt, SiteId, TimeStamp, Index, Output, Description) {
        this.Stt = Stt;
        this.SiteId = SiteId;
        this.TimeStamp = TimeStamp;
        this.Index = Index;
        this.Output = Output;
        this.Description = Description;
    }
};

module.exports.GetDataManualBySiteId = async (siteid, time) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection
        .find({ SiteId: siteid, TimeStamp: time })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetDataManualBySiteId = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection
        .find({ SiteId: siteid })
        .sort({ TimeStamp: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (dataManual) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(DataManualCollection);

    dataManual.TimeStamp = new Date(dataManual.TimeStamp);

    let find = await collection
        .find({ SiteId: dataManual.SiteId, TimeStamp: dataManual.TimeStamp })
        .toArray();

    if (find.length <= 0) {
        result = await collection.insertOne(dataManual);

        result = result.insertedId;
    }

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (dataManual) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(dataManual._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (dataManual) => {
    let result = 0;

    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(DataManualCollection);

        dataManual.TimeStamp = new Date(dataManual.TimeStamp);

        let find = await collection
            .find({
                SiteId: dataManual.SiteId,
                TimeStamp: dataManual.TimeStamp,
            })
            .toArray();

        if (find.length > 0) {
            result = await collection.updateMany(
                {
                    _id: new ObjectId(dataManual._id),
                },
                {
                    $set: {
                        Index: dataManual.Index,
                        Output: dataManual.Output,
                    },
                },
            );

            result = result.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }

    return result;
};
