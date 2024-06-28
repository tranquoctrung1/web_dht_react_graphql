const ConnectDB = require('../db/connect');

const UserStaffCollection = 't_User_Staffs';

module.exports.UserStaff = class UserStaff {
    constructor(_id, FirstName, LastName) {
        this._id = _id;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
};

module.exports.GetAllStaffs = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserStaffCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (staff) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(UserStaffCollection);

    result = await collection.insertOne(staff);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (staff) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserStaffCollection);

    let result = await collection.deleteMany({
        _id: staff._id,
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (staff) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(UserStaffCollection);

        let find = await collection.find({ _id: staff._id }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: staff._id,
                },
                {
                    $set: {
                        FirstName: staff.FirstName,
                        LastName: staff.LastName,
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
