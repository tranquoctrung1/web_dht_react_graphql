const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteCoverCollection = 't_Site_Covers';

module.exports.SiteCover = class SiteCover {
    constructor(CoverID, CoverL, CoverW, CoverH, CorverMeterial, CoverNL) {
        this.CoverID = CoverID;
        this.CoverL = CoverL;
        this.CoverW = CoverW;
        this.CoverH = CoverH;
        this.CoverMeterial = CoverMeterial;
        this.CoverNL = CoverNL;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllCoverL = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const cover of data) {
            let find = result.find((el) => el === cover.CoverL);

            if (find === undefined) {
                result.push(cover.CoverL);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllCoverW = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const cover of data) {
            let find = result.find((el) => el === cover.CoverW);

            if (find === undefined) {
                result.push(cover.CoverW);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllCoverH = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const cover of data) {
            let find = result.find((el) => el === cover.CoverH);

            if (find === undefined) {
                result.push(cover.CoverH);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllCorverMeterial = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const cover of data) {
            let find = result.find((el) => el === cover.CoverMeterial);

            if (find === undefined) {
                result.push(cover.CoverMeterial);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllCoverNL = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const cover of data) {
            let find = result.find((el) => el === cover.CoverNL);

            if (find === undefined) {
                result.push(cover.CoverNL);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (cover) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteCoverCollection);
    let check = await collection.find({ CoverID: cover.CoverID }).toArray();
    if (check.length > 0) {
        Connect.disconnect();
        return '';
    } else {
        result = await collection.insertOne(cover);

        result = result.insertedId;

        Connect.disconnect();

        return result;
    }
};

module.exports.Delete = async (cover) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(cover._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (cover) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteCoverCollection);

        let find = await collection
            .find({ _id: new ObjectId(cover._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(cover._id),
                },
                {
                    $set: {
                        CoverL: cover.CoverL,
                        CoverH: cover.CoverH,
                        CoverW: cover.CoverW,
                        CoverMeterial: cover.CoverMeterial,
                        CoverNL: cover.CoverNL,
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
