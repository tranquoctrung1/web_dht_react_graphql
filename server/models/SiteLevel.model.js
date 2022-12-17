const ConnectDB = require('../db/connect');

const SiteLevelCollection = 't_Site_Levels';

module.exports.SiteLevel = class SiteLevel {
    constructor(Level, Description) {
        this.Level = Level;
        this.Description = Description;
    }
};
