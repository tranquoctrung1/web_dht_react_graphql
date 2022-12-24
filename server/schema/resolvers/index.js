const QuantityDayCompany = require('./QuantityDayCompany.resolver');
const Company = require('./Company.resolver');
module.exports = {
    Query: {
        ...QuantityDayCompany.Query,
        ...Company.Query,
    },
};
