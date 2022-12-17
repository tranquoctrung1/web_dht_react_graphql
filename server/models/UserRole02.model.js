const ConnectDB = require('../db/connect');

const UserRole02Collection = 't_User_Roles_02';

module.exports.UserRole02 = class UserRole02 {
    constructor(roleid, rolename) {
        this.roleid = roleid;
        this.rolename = rolename;
    }
};
