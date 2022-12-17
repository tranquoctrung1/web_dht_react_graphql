const ConnectDB = require('../db/connect');

const GisSiteCollection = 't_Gis_Sites';

module.exports.GisSite = class GisSite {
    constructor(Company, Latitude, Longitude, Zoom) {
        this.Company = Company;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.Zoom = Zoom;
    }
};
