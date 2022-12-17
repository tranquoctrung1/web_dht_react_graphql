const ConnectDB = require('../db/connect');

const SiteAvailabilitiesCollection = 't_Site_Availabilities';

module.exports.SiteAvailabilities = class SiteAvailabilities {
    constructor(Availability, Description) {
        this.Availability = Availability;
        this.Description = Description;
    }
};
