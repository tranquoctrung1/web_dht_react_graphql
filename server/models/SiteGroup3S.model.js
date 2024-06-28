const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteGroup3SCollection = 't_Site_Group3s';

module.exports.SiteGroup3S = class SiteGroup3S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup3SCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (siteGroup) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteGroup3SCollection);

    result = await collection.insertOne(siteGroup);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (siteGroup) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteGroup3SCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(siteGroup._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (siteGroup) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteGroup3SCollection);

        let find = await collection
            .find({ _id: new ObjectId(siteGroup._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(siteGroup._id),
                },
                {
                    $set: {
                        Description: siteGroup.Description,
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
