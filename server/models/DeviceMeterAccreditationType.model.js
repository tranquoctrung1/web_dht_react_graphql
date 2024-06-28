const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const DeviceMeterAccreditationTypeCollection =
    't_Devices_Meter_Accreditation_Type';

module.exports.DeviceMeterAccreditation = class DeviceMeterAccreditation {
    constructor(AccreditationType, Description) {
        this.AccreditationType = AccreditationType;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        DeviceMeterAccreditationTypeCollection,
    );

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (type) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(
        DeviceMeterAccreditationTypeCollection,
    );

    result = await collection.insertOne(type);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (type) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(
        DeviceMeterAccreditationTypeCollection,
    );

    let result = await collection.deleteMany({
        _id: new ObjectId(type._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (type) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(
            DeviceMeterAccreditationTypeCollection,
        );

        let find = await collection
            .find({ _id: new ObjectId(type._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(type._id),
                },
                {
                    $set: {
                        Description: type.Description,
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
