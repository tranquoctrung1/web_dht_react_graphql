const QuantityDayCompany = require('./QuantityDayCompany.resolver');

module.exports = {
    Query: {
        ...QuantityDayCompany.Query,
    },
};
