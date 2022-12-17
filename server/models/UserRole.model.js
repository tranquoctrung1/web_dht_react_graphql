const ConnectDB = require('../db/connect');

const UserRoleCollection = 't_User_Roles';

module.exports.UserRole = class UserRole {
    constructor(Role, Description) {
        this.Role = Role;
        this.Description = Description;
    }
};
