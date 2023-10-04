const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const MeterFileCollection = 't_Meter_Files';

module.exports.MeterFile = class MeterFile {
    constructor(_id, Serial, FileName, MIMEType, Size, Path, UploadDate) {
        this._id = _id;
        this.Serial = Serial;
        this.FileName = FileName;
        this.MIMEType = MIMEType;
        this.Size = Size;
        this.Path = Path;
        this.UploadDate = UploadDate;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(MeterFileCollection);

    let result = await collection.find({}).sort({ UploadDate: -1 }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (meterFile) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(MeterFileCollection);

    let result = await collection.insertOne(meterFile);

    Connect.disconnect();

    return result.insertedId;
};

module.exports.Delete = async (id) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(MeterFileCollection);

    let result = await collection.deleteMany({
        _id: new ObjectId(id),
    });

    Connect.disconnect();

    return result.deletedCount;
};
