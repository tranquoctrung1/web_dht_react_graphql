const ConnectDB = require('../db/connect');

const UserUser02Collection = 't_User_Users_02';

module.exports.UserUser = class UserUser {
    constructor(_id, username, password, fullname, email, phone, role) {
        this._id = _id;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.role = role;
        this.password = password;
        this.phone = phone;
    }
};
