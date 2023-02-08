const QuantityDayCompany = require('./QuantityDayCompany.resolver');
const Company = require('./Company.resolver');
const QuantityDayWaterSupply = require('./QuantityDayWaterSupply.resolver');
const QuantityLoggerDayWaterSupply = require('./QuantityLoggerDayWaterSupply.resolver');
module.exports = {
    Query: {
        ...QuantityDayCompany.Query,
        ...Company.Query,
        ...QuantityDayWaterSupply.Query,
        ...QuantityLoggerDayWaterSupply.Query,
    },
};
