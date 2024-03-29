const ConnectDB = require('../db/connect');

const SiteFileCollection = 't_Site_Files';

module.exports.SiteFile = class SiteFile {
    constructor(_id, SiteId, FileName, MIMEType, Size, Path, UploadDate) {
        this._id = _id;
        this.SiteId = SiteId;
        this.FileName = FileName;
        this.MIMEType = MIMEType;
        this.Size = Size;
        this.Path = Path;
        this.UploadDate = UploadDate;
    }
};

module.exports.Insert = async (siteFile) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteFileCollection);

    let result = await collection.insertOne(siteFile);

    Connect.disconnect();

    return result.insertedId;
};
