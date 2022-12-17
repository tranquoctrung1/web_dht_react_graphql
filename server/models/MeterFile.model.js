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
