const ConnectDB = require('../db/connect');

const SiteStatusCollection = 't_Site_Status';

module.exports.SiteStatus = class SiteStatus {
    constructor(Status, Description) {
        this.Status = Status;
        this.Description = Description;
    }
};
