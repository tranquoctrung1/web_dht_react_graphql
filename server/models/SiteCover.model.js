const ConnectDB = require('../db/connect');
const { collectDistinct } = require('../utils/collectDistinct');
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

    return result;
};

module.exports.GetAllCoverL = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let data = await collection
        .find({})
        .project({ CoverL: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverL');
};

module.exports.GetAllCoverW = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let data = await collection
        .find({})
        .project({ CoverW: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverW');
};

module.exports.GetAllCoverH = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let data = await collection
        .find({})
        .project({ CoverH: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverH');
};

module.exports.GetAllCorverMeterial = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let data = await collection
        .find({})
        .project({ CoverMeterial: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverMeterial');
};

module.exports.GetAllCoverNL = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let data = await collection
        .find({})
        .project({ CoverNL: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverNL');
};

module.exports.Insert = async (cover) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteCoverCollection);
    let check = await collection.find({ CoverID: cover.CoverID }).toArray();
    if (check.length > 0) {
        return '';
    } else {
        result = await collection.insertOne(cover);

        result = result.insertedId;

        return result;
    }
};

module.exports.Delete = async (cover) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(cover._id),
    });

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
    } catch (err) {
        console.log(err);
    }
    return result;
};
