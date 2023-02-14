const DeviceChannelConfigModel = require('../../models/DeviceChannelConfig.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');

module.exports.GetChannelBySiteId = async (siteid) => {
    let result = [];

    let deviceSites = await DeviceSiteConfigModel.GetChannelBySiteId(siteid);

    if (deviceSites.length > 0) {
        let loggerid = deviceSites[0].LoggerId;

        if (loggerid != '' && loggerid != undefined && loggerid != null) {
            result = await DeviceChannelConfigModel.GetChannelByLoggerId(
                loggerid,
            );
        }
    }

    return result;
};

module.exports.GetLoggerIdBySiteId = async (siteid) => {
    let result = '';

    let deviceSites = await DeviceSiteConfigModel.GetChannelBySiteId(siteid);

    if (deviceSites.length > 0) {
        result = deviceSites[0].LoggerId;
    }

    return result;
};
