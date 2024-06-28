const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteStatusCollection = 't_Site_Status';

module.exports.SiteStatus = class SiteStatus {
    constructor(Status, Description) {
        this.Status = Status;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteStatusCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (status) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteStatusCollection);

    result = await collection.insertOne(status);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (status) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteStatusCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(status._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (status) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteStatusCollection);

        let find = await collection
            .find({ _id: new ObjectId(status._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(status._id),
                },
                {
                    $set: {
                        Description: status.Description,
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
