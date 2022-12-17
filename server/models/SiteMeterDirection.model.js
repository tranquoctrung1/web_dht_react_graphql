const ConnectDB = require('../db/connect');

const SiteMeterDirectionCollection = 't_Site_MeterDirections';

module.exports.SiteMeterDirection = class SiteMeterDirection {
    constructor(Direction, Description) {
        this.Direction = Direction;
        this.Description = Description;
    }
};
