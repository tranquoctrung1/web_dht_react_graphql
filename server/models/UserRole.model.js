const ConnectDB = require('../db/connect');

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
