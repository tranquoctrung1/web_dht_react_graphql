const ConnectDB = require('../db/connect');

const DataIndexLoggerCollection = 't_Index_';

module.exports.DeviceMeter = class DeviceMeter {
    constructor(TimeStamp, Value) {
        this.TimeStamp = TimeStamp;
        this.Value = Value;
    }
};

module.exports.GetIndexLogger = async (channelid, start, end) => {
    let startDate = new Date(parseInt(start));
    let endDate = new Date(parseInt(end));
    endDate.setDate(endDate.getDate() + 1);

    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        `${DataIndexLoggerCollection}${channelid}`,
    );

    let result = await collection
        .find({ TimeStamp: { $gte: startDate, $lte: endDate } })
        .toArray();

    Connect.disconnect();

    return result;
};
