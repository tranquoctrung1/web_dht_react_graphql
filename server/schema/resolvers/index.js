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
    },

    Mutation: {
        ...Precious.Mutation,
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
