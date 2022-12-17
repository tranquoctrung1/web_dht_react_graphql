const ConnectDB = require('../db/connect');

const ReportBBCollection = 't_Report_BB';

module.exports.ReportBB = class ReportBB {
    constructor(_id, company, starttime, endtime, data_bienban) {
        this._id = _id;
        this.company = company;
        this.starttime = starttime;
        this.endtime = endtime;
        this.data_bienban = data_bienban;
    }
};
