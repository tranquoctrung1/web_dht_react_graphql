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

    type Site {
        _id: String!
        OldId: String
        Location: String
        Latitude: Float
        Longitude: Float
        ViewGroup: String
        StaffId: String
        Meter: String
        Transmitter: String
        Logger: String
        DateOfMeterChange: Date
        DateOfLoggerChange: Date
        DateOfTransmitterChange: Date
        DateOfBatteyChange: Date
        DateOfTransmitterBatteryChgange: Date
        DateOfLoggerBatteryChange: Date
        DescriptionOfChange: String
        ChangeIndex: Float
        Level: String
        Group: String
        Company: String
        Takeovered: Boolean
        TakeoverDate: Date
        Availability: String
        Display: Boolean
        Property: Boolean
        UsingLogger: Boolean
        MeterDirection: String
        ProductionCompany: String
        IsDistributionCompany: String
        QndDistributionCompany: String
        IstDoNotCalculateReverse: Boolean
        QndDoNotCalculateReverse: Boolean
        Description: String
        ChangeIndex1: Float
        Group2: String
        Address: String
        CoverID: String
        Group3: String
        Group4: String
        Group5: String
        District: String
        IsErrorBattery: Boolean
    }

    type Channel {
        _id: String
        LoggerId: String
        Name: String
        Unit: String
        LastTimeStamp: Date
        LastValue: Float
        Description: String
        BaseMin: Float
        BaseMax: Float
        BaseLine: Float
        GroupChannel: String
        Pressure1: Boolean
        Pressure2: Boolean
        ForwardFlow: Boolean
        ReverseFlow: Boolean
        DisplayOnGraph: Boolean
        IndexTimeStamp: Date
        LastIndex: Float
        StatusViewAlarm: Boolean
    }

    type SiteAndChannel {
        _id: String!
        OldId: String
        Location: String
        Latitude: Float
        LoggerId: String
        Longitude: Float
        Level: String
        Group: String
        Company: String
        Description: String
        Group2: String
        Address: String
        Group3: String
        Group4: String
        Group5: String
        District: String
        IsErrorBattery: Boolean
        Channels: [Channel!]
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

    type DataLogger {
        TimeStamp: Date
        Value: Float
    }

    type QuantityLoggerDay {
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

        GetAllSites: [Site]!

        GetChannelByLoggerId(loggerid: String!): [Channel]

        GetAllSiteAndChannel: [SiteAndChannel!]

        GetDataLoggerByTimeStamp(
            channelid: String!
            start: String!
            end: String!
        ): [DataLogger!]

        GetDataLoggerByLastRecord(channelid: String!): [DataLogger!]

        QuantityLoggerDay(siteid: String!, start: String!, end: String!): Float!

        GetSiteByWaterSupply(company: String!): [Site!]!
    }

    # declare Mutation
`;
