const { ObjectId } = require('mongodb');
const ConnectDB = require('../db/connect');
const Utils = require('../utils');

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

module.exports.GetDataManualBySiteIdReport = async (siteid, time) => {
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

module.exports.GetDataManualBySiteIdAndTimeStamp = async (
    siteid,
    start,
    end,
) => {
    let startDate = new Date(parseInt(start));
    let endDate = new Date(parseInt(end));

    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    let result = await collection
        .find({ SiteId: siteid, TimeStamp: { $gte: startDate, $lte: endDate } })
        .sort({ TimeStamp: -1 })
        .toArray();

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

module.exports.InsertIndex = async (dataManual) => {
    let Connect = new ConnectDB.Connect();

    let countInsert = 0;

    let collection = await Connect.connect(DataManualCollection);

    dataManual.TimeStamp = new Date(dataManual.TimeStamp);

    const temp = new Date(dataManual.TimeStamp);

    temp.setMonth(temp.getMonth() - 1);

    const startDate = new Date(
        temp.getFullYear(),
        temp.getMonth(),
        25,
        0,
        0,
        0,
    );

    const totalDay = Utils.CalculateSpcaeDay(startDate, dataManual.TimeStamp);

    let data = await collection
        .find({ SiteId: dataManual.SiteId, TimeStamp: startDate })
        .toArray();

    const insertData = [];

    if (data.length > 0) {
        if (
            data[0] !== null &&
            data[0] !== undefined &&
            data[0].Index !== null &&
            data[0].Index !== undefined
        ) {
            const quantity = dataManual.Index - data[0].Index;

            let index = data[0].Index;

            let numberSum = quantity / totalDay;
            numberSum = parseInt(numberSum);

            let numberMod = (quantity % totalDay) / totalDay;

            let totalMod = 0;

            while (startDate.getTime() < dataManual.TimeStamp.getTime()) {
                startDate.setDate(startDate.getDate() + 1);

                totalMod += numberMod;

                index = index + numberSum;
                index = parseFloat(index.toString());
                index = index.toFixed(0);
                index = parseFloat(index);

                const obj = {
                    Stt: 0,
                    SiteId: dataManual.SiteId,
                    TimeStamp: new Date(startDate),
                    Index: index,
                    Output: numberSum,
                    Description: dataManual.Description,
                };

                insertData.push(obj);
            }

            insertData[insertData.length - 1].Index = dataManual.Index;
            insertData[insertData.length - 1].Output += totalMod;
        }
    } else {
        const quantity = dataManual.Index - 0;

        let index = 0;

        let numberSum = quantity / totalDay;
        numberSum = parseInt(numberSum);

        let numberMod = (quantity % totalDay) / totalDay;

        let totalMod = 0;

        while (startDate.getTime() < dataManual.TimeStamp.getTime()) {
            startDate.setDate(startDate.getDate() + 1);

            totalMod += numberMod;

            index = index + numberSum;
            index = parseFloat(index.toString());
            index = index.toFixed(0);
            index = parseFloat(index);

            const obj = {
                Stt: 0,
                SiteId: dataManual.SiteId,
                TimeStamp: new Date(startDate),
                Index: index,
                Output: numberSum,
                Description: dataManual.Description,
            };

            insertData.push(obj);
        }

        insertData[insertData.length - 1].Index = dataManual.Index;
        insertData[insertData.length - 1].Output += totalMod;
    }

    if (insertData.length > 0) {
        for (const item of insertData) {
            const result = await collection
                .find({ SiteId: item.SiteId, TimeStamp: item.TimeStamp })
                .toArray();

            if (result.length <= 0) {
                const insert = await collection.insertOne(item);

                if (insert.insert !== '') {
                    countInsert += 1;
                }
            }
        }
    }

    Connect.disconnect();

    return countInsert;
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

module.exports.UpdateIndex = async (dataManual) => {
    let Connect = new ConnectDB.Connect();

    let countInsert = 0;

    let collection = await Connect.connect(DataManualCollection);

    dataManual.TimeStamp = new Date(dataManual.TimeStamp);

    const temp = new Date(dataManual.TimeStamp);

    temp.setMonth(temp.getMonth() - 1);

    const startDate = new Date(
        temp.getFullYear(),
        temp.getMonth(),
        25,
        0,
        0,
        0,
    );

    const totalDay = Utils.CalculateSpcaeDay(startDate, dataManual.TimeStamp);

    let data = await collection
        .find({ SiteId: dataManual.SiteId, TimeStamp: startDate })
        .toArray();

    const updateData = [];

    if (data.length > 0) {
        if (
            data[0] !== null &&
            data[0] !== undefined &&
            data[0].Index !== null &&
            data[0].Index !== undefined
        ) {
            const quantity = dataManual.Index - data[0].Index;

            let index = data[0].Index;

            let numberSum = quantity / totalDay;
            numberSum = parseInt(numberSum);

            let numberMod = (quantity % totalDay) / totalDay;

            let totalMod = 0;

            while (startDate.getTime() < dataManual.TimeStamp.getTime()) {
                startDate.setDate(startDate.getDate() + 1);

                totalMod += numberMod;

                index = index + numberSum;
                index = parseFloat(index.toString());
                index = index.toFixed(0);
                index = parseFloat(index);

                const obj = {
                    Stt: 0,
                    SiteId: dataManual.SiteId,
                    TimeStamp: new Date(startDate),
                    Index: index,
                    Output: numberSum,
                    Description: dataManual.Description,
                };

                updateData.push(obj);
            }

            updateData[updateData.length - 1].Index = dataManual.Index;
            updateData[updateData.length - 1].Output += totalMod;
        }
    }

    if (updateData.length > 0) {
        for (const item of updateData) {
            const result = await collection
                .find({ SiteId: item.SiteId, TimeStamp: item.TimeStamp })
                .toArray();

            if (result.length > 0) {
                const insert = await collection.updateMany(
                    {
                        _id: new ObjectId(result[0]._id),
                    },
                    {
                        $set: {
                            Index: item.Index,
                            Output: item.Output,
                        },
                    },
                );

                if (insert.modifiedCount > 0) {
                    countInsert += 1;
                }
            }
        }
    }

    Connect.disconnect();

    return countInsert;
};

module.exports.UpdateOutputByPrecious = async (siteid, timestamp, output) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    const temp = new Date(parseInt(timestamp));

    let data = await collection
        .find({ SiteId: siteid, TimeStamp: temp })
        .toArray();

    if (data.length > 0) {
        const update = await collection.updateMany(
            {
                _id: new ObjectId(data[0]._id),
            },
            {
                $set: {
                    Output: output,
                },
            },
        );
    } else {
        const obj = {
            Stt: 0,
            SiteId: siteid,
            TimeStamp: temp,
            Index: null,
            Output: output,
            Description: '',
        };

        const insert = await collection.insertOne(obj);
    }

    return 0;
};

module.exports.UpdateIndexByPrecious = async (
    siteid,
    timestamp,
    index,
    output,
) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(DataManualCollection);

    const temp = new Date(parseInt(timestamp));

    let data = await collection
        .find({ SiteId: siteid, TimeStamp: temp })
        .toArray();

    if (data.length > 0) {
        const update = await collection.updateMany(
            {
                _id: new ObjectId(data[0]._id),
            },
            {
                $set: {
                    Output: output,
                    Index: index,
                },
            },
        );
    } else {
        const obj = {
            Stt: 0,
            SiteId: siteid,
            TimeStamp: temp,
            Index: index,
            Output: output,
            Description: '',
        };

        const insert = await collection.insertOne(obj);
    }

    return 0;
};
