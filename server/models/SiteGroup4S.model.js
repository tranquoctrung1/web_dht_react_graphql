const ConnectDB = require('../db/connect');

const SiteGroup4SCollection = 't_Site_Group4s';

module.exports.SiteGroup4S = class SiteGroup4S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};
