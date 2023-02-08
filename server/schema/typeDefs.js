const { gql } = require('graphql-tag');

module.exports = gql`
    # scalar
    scalar Date

    # declare type
    type Quantity {
        TimeStamp: Date
        Value: Float
        IsEnoughData: Boolean
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

    type Company {
        Company: String
        Production: Int
        Description: String
    }

    type QuantityDayWaterSupply {
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
        IstDoNotCalculateReverse: Int
        QndDoNotCalculateReverse: Int
        ListQuantity: [Quantity]
    }

    type QuantityLoggerDayWaterSupply {
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
        IstDoNotCalculateReverse: Int
        QndDoNotCalculateReverse: Int
        ListQuantity: [Quantity]
    }

    # declare Query
    type Query {
        QuantityDayCompany(
            company: String!
            start: String!
            end: String!
        ): [QuantityDayCompany!]!

        GetCompanies: [Company!]

        QuantityDayWaterSupply(
            company: String!
            start: String!
            end: String!
        ): [QuantityDayWaterSupply!]!

        QuantityLoggerDayWaterSupply(
            company: String!
            start: String!
            end: String!
        ): [QuantityLoggerDayWaterSupply!]!
    }

    # declare Mutation
`;
