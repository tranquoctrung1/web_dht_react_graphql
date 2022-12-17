const ConnectDB = require('../db/connect');

const UserStaffCollection = 't_User_Staffs';

module.exports.UserStaff = class UserStaff {
    constructor(_id, FirstName, LastName) {
        this._id = _id;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
};
