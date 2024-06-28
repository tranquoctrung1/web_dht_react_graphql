const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteLevelCollection = 't_Site_Levels';

module.exports.SiteLevel = class SiteLevel {
    constructor(Level, Description) {
        this.Level = Level;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteLevelCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (siteLevel) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteLevelCollection);

    result = await collection.insertOne(siteLevel);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (siteLevel) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteLevelCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(siteLevel._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (siteLevel) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteLevelCollection);

        let find = await collection
            .find({ _id: new ObjectId(siteLevel._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(siteLevel._id),
                },
                {
                    $set: {
                        Description: siteLevel.Description,
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
