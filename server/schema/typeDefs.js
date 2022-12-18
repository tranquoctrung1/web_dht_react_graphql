const { gql } = require('graphql-tag');

module.exports = gql`
    # scalar
    scalar Date

    # declare type
    type Quantity {
        TimeStamp: Date
        Value: Float
    }

    type QuantityDayCompany {
        SiteId: String!
        Location: String
        Marks: String
        Size: Int
        MeterDirection: String
        IstDistributionCompany: String
        QndDistributionCompany: String
        OldId: String
        Company: String
        Address: String
        Display: Boolean
        ListQuantity: [Quantity]
    }

    # declare Query
    type Query {
        QuantityDayCompany(
            company: String!
            start: String!
            end: String!
        ): [QuantityDayCompany!]!
    }

    # declare Mutation
`;
