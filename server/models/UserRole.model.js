const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const UserRoleCollection = 't_User_Roles';

module.exports.UserRole = class UserRole {
    constructor(Role, Description) {
        this.Role = Role;
        this.Description = Description;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserRoleCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (role) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(UserRoleCollection);

    result = await collection.insertOne(role);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (role) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserRoleCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(role._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (role) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(UserRoleCollection);

        let find = await collection
            .find({ _id: new ObjectId(role._id) })
            .toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: new ObjectId(role._id),
                },
                {
                    $set: {
                        Description: role.Description,
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
