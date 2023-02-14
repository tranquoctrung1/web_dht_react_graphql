const ConnectDB = require('../db/connect');

const DataLoggerCollection = 't_Data';

module.exports.DataLogger = class DataLogger {
    constructor(TimeStamp, Value) {
        this.TimeStamp = TimeStamp;
        this.Value = Value;
    }
};

module.exports.GetDataLoggerByTimeStamp = async (channelid, start, end) => {
    let startDate = new Date(parseInt(start));
    let endDate = new Date(parseInt(end));

    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        `${DataLoggerCollection}_${channelid}`,
    );

    let result = await collection
        .find({ TimeStamp: { $gte: startDate, $lte: endDate } })
        .sort({ TimeStamp: 1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetDataLoggerByLastRecord = async (channelid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        `${DataLoggerCollection}_${channelid}`,
    );

    let result = await collection
        .find({})
        .sort({ TimeStamp: -1 })
        .limit(500)
        .toArray();

    Connect.disconnect();

    return result;
};
