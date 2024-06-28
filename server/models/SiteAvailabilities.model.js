const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const SiteAvailabilitiesCollection = 't_Site_Availabilities';

module.exports.SiteAvailabilities = class SiteAvailabilities {
    constructor(Availability, Description) {
        this.Availability = Availability;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteAvailabilitiesCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (available) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteAvailabilitiesCollection);

    result = await collection.insertOne(available);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (available) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteAvailabilitiesCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(available._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (available) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteAvailabilitiesCollection);

        let find = await collection
            .find({ _id: new ObjectId(available._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(available._id),
                },
                {
                    $set: {
                        Description: available.Description,
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
