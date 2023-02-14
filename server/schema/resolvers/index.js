const QuantityDayCompany = require('./QuantityDayCompany.resolver');
const Company = require('./Company.resolver');
const QuantityDayWaterSupply = require('./QuantityDayWaterSupply.resolver');
const QuantityLoggerDayWaterSupply = require('./QuantityLoggerDayWaterSupply.resolver');
const Site = require('./Site.resolver');
const Channel = require('./Channel.resolver');
const SiteAndChannel = require('./SiteAndChannel.resolver');
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
