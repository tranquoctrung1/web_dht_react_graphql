const ConnectDB = require('../db/connect');

const UserUserCollection = 't_User_Users';

module.exports.UserUser = class UserUser {
    constructor(
        Uid,
        StaffId,
        Pwd,
        Salt,
        Role,
        Active,
        TimeStamp,
        Ip,
        LogCount,
        Zoom,
        Company,
        Language,
    ) {
        this.Uid = Uid;
        this.StaffId = StaffId;
        this.Pwd = Pwd;
        this.Salt = Salt;
        this.Role = Role;
        this.Active = Active;
        this.TimeStamp = TimeStamp;
        this.Ip = Ip;
        this.LogCount = LogCount;
        this.Zoom = Zoom;
        this.Company = Company;
        this.Language = Language;
    }
};
