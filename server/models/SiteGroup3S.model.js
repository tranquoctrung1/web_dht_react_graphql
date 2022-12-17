const ConnectDB = require('../db/connect');

const SiteGroup3SCollection = 't_Site_Group3s';

module.exports.SiteGroup3S = class SiteGroup3S {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};
