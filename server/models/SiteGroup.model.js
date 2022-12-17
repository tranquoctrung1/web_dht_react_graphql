const ConnectDB = require('../db/connect');

const SiteGroupCollection = 't_Site_Groups';

module.exports.SiteGroup = class SiteGroup {
    constructor(Group, Description) {
        this.Group = Group;
        this.Description = Description;
    }
};
