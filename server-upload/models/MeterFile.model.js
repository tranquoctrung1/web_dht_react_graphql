const ConnectDB = require('../db/connect');

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

module.exports.Insert = async (meterFile) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(MeterFileCollection);

    let result = await collection.insertOne(meterFile);

    Connect.disconnect();

    return result.insertedId;
};
