const ConnectDB = require('../db/connect');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

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

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserUserCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetUserByUId = async (Uid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserUserCollection);

    let result = await collection.find({ Uid: Uid }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (user) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(UserUserCollection);

    user.TimeStamp = new Date(user.TimeStamp);

    let find = await collection.find({ Uid: user.Uid }).toArray();

    if (find.length <= 0) {
        let salt = bcrypt.genSaltSync(parseInt(process.env.GEN_SALT || 10));
        let password = bcrypt.hashSync(user.Pwd, salt);

        user.Pwd = password;

        result = await collection.insertOne(user);

        result = result.insertedId;
    }

    Connect.disconnect();

    return result;
};

module.exports.Delete = async (user) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserUserCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(user._id),
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.Update = async (user) => {
    let result = 0;

    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(UserUserCollection);

        user.TimeStamp = new Date(user.TimeStamp);

        let salt = bcrypt.genSaltSync(parseInt(process.env.GEN_SALT || 10));
        let password = bcrypt.hashSync(user.Pwd, salt);

        user.Pwd = password;

        result = await collection.updateMany(
            {
                _id: new ObjectId(user._id),
            },
            {
                $set: {
                    Pwd: user.Pwd,
                    Role: user.Role,
                    Company: user.Company,
                },
            },
        );

        result = result.modifiedCount;

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }

    return result;
};

module.exports.UpdatePassword = async (user) => {
    let result = 0;

    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(UserUserCollection);

        let salt = bcrypt.genSaltSync(parseInt(process.env.GEN_SALT || 10));
        let password = bcrypt.hashSync(user.NewPwd, salt);

        result = await collection.updateMany(
            {
                Uid: user.Uid,
            },
            {
                $set: {
                    Pwd: password,
                },
            },
        );

        result = result.modifiedCount;

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }

    return result;
};

module.exports.VerifyPassword = async (Uid, Pwd) => {
    let check = 0;

    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(UserUserCollection);

    let result = await collection.find({ Uid: Uid }).toArray();

    if (result.length > 0) {
        let dbPassword = result[0].Pwd;
        if (bcrypt.compareSync(Pwd, dbPassword)) {
            check = 1;
        }
    }

    Connect.disconnect();

    return check;
};
