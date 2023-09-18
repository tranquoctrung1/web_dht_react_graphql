const ConnectDB = require('../db/connect');

const SiteCoverCollection = 't_Site_Covers';

module.exports.SiteCover = class SiteCover {
    constructor(CoverID, CoverL, CoverW, CoverH, CorverMeterial, CoverNL) {
        this.CoverID = CoverID;
        this.CoverL = CoverL;
        this.CoverW = CoverW;
        this.CoverH = CoverH;
        this.CorverMeterial = CorverMeterial;
        this.CoverNL = CoverNL;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteCoverCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};
