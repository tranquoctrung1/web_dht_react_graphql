const QuantityDayCompany = require('./QuantityDayCompany.resolver');
const Company = require('./Company.resolver');
const QuantityDayWaterSupply = require('./QuantityDayWaterSupply.resolver');
const QuantityLoggerDayWaterSupply = require('./QuantityLoggerDayWaterSupply.resolver');
const Site = require('./Site.resolver');
const Channel = require('./Channel.resolver');
const SiteAndChannel = require('./SiteAndChannel.resolver');
const DataLogger = require('./DataLogger.resolver');
const QuantityLoggerDay = require('./QuantityLoggerDay.resolver');
const Precious = require('./Precious.resolver');
const UserStaff = require('./UserStaff.resolver');
const DeviceMeter = require('./DeviceMeter.resolver');
const DeviceTransmitter = require('./DeviceTransmitter.resolver');
const DeviceLogger = require('./DeviceLogger.resolver');
const DeviceMeterAccreditationType = require('./DeviceMeterAccreditationType.resolver');
const SiteLevel = require('./SiteLevel.resolver');
const SiteStatus = require('./SiteStatus.resolver');
const SiteMeterDirection = require('./SiteMeterDirection.resolver');
const SiteGroup = require('./SiteGroup.resolver');
const SiteGroup2S = require('./SiteGroup2S.resolver');
const SiteGroup3S = require('./SiteGroup3S.resolver');
const SiteGroup4S = require('./SiteGroup4S.resolver');
const SiteGroup5S = require('./SiteGroup5S.resolver');
const SiteAvailabilities = require('./SiteAvailabilities.resolver');
const SiteCover = require('./SiteCover.resolver');
const DeviceUnit = require('./DeviceUnit.resolver');
const DeviceSiteConfig = require('./DeviceSiteConfig.resolver');
const DeviceChannelConfig = require('./DeviceChannelConfig.resolver');
const DataManual = require('./DataManual.resolver');
const UserUser = require('./UserUser.resolver');
const UserRole = require('./UserRole.resolver');
const Login = require('./Login.resolver');
const SiteFile = require('./SiteFile.resolver');
const DeviceStatus = require('./DeviceStatus.resolver');
const HistorySiteMeter = require('./HistorySiteMeterChange.resolver');

const Nested = require('./Nested.resolver');

module.exports = {
    Query: {
        ...QuantityDayCompany.Query,
        ...Company.Query,
        ...QuantityDayWaterSupply.Query,
        ...QuantityLoggerDayWaterSupply.Query,
        ...Site.Query,
        ...Channel.Query,
        ...SiteAndChannel.Query,
        ...DataLogger.Query,
        ...QuantityLoggerDay.Query,
        ...Precious.Query,
        ...UserStaff.Query,
        ...DeviceMeter.Query,
        ...DeviceTransmitter.Query,
        ...DeviceLogger.Query,
        ...DeviceMeterAccreditationType.Query,
        ...SiteLevel.Query,
        ...SiteStatus.Query,
        ...SiteMeterDirection.Query,
        ...SiteGroup.Query,
        ...SiteGroup2S.Query,
        ...SiteGroup3S.Query,
        ...SiteGroup4S.Query,
        ...SiteGroup5S.Query,
        ...SiteAvailabilities.Query,
        ...SiteCover.Query,
        ...DeviceUnit.Query,
        ...DeviceSiteConfig.Query,
        ...DeviceChannelConfig.Query,
        ...DataManual.Query,
        ...UserUser.Query,
        ...UserRole.Query,
        ...Login.Query,
        ...DeviceStatus.Query,
        ...HistorySiteMeter.Query,
    },

    Mutation: {
        ...Precious.Mutation,
        ...Site.Mutation,
        ...DeviceSiteConfig.Mutation,
        ...DeviceChannelConfig.Mutation,
        ...DataManual.Mutation,
        ...UserUser.Mutation,
        ...DeviceLogger.Mutation,
        ...DeviceMeter.Mutation,
        ...DeviceTransmitter.Mutation,
        ...HistorySiteMeter.Mutation,
    },

    SiteAndChannel: {
        Channels: async (site) => {
            return await Nested.GetChannelBySiteId(site._id);
        },
        LoggerId: async (site) => {
            return await Nested.GetLoggerIdBySiteId(site._id);
        },
    },
};
