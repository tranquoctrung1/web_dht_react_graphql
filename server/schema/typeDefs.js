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

    type QuantityLoggerByTimeStamp {
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

    type Periods {
        Period: String
        Quantity: Float
    }

    type DateCalclogger {
        Quantity: Float
        From: String
        To: String
        DateRange: [String]
    }

    type Location {
        SiteId: String
        Reason: String
        Location: String
        Periods: [Periods]
        AverageDate: [[String]]
        DateCalclogger: [DateCalclogger]
        QuantityLogger: Float
        TotalQuantity: Float
        PrevTetHoliday: [String]
        NextTetHoliday: [String]
        TenDayPrevTetHoliday: [String]
        KFactory: Float
        AveragePrevTetHoliday: Float
        AverageTenDayPrevTetHoliday: Float
    }

    type Index {
        SiteId: String
        Location: String
        PreviousPeriodIndex: Float
        NextPeriodIndex: Float
    }

    type LockValve {
        SiteId: String
        Location: String
    }

    type SubtractWaterB1 {
        NumberPrecious: String
        Content: String
        Provider: String
        AmountWater: Float
        Note: String
    }

    type SubtractWaterB2 {
        NumberPrecious: String
        Content: String
        Provider: String
        AmountWater: Float
        Note: String
    }

    type WaterCustomer {
        NumberPrecious: String
        DatePublished: String
        AmountMeter: Float
        AmountWater: Float
        Note: String
    }

    type Precious {
        _id: ID!
        Company: String!
        CompanyName: String
        Start: String
        End: String
        Period: String
        CreateAt: String
        UsernameCreated: String
        Location: [Location]
        Index: [Index]
        LockValve: [LockValve]
        SubtractWaterB1: [SubtractWaterB1]
        SubtractWaterB2: [SubtractWaterB2]
        WaterCustomer: [WaterCustomer]
    }

    type IdOutput {
        idReturn: String
    }

    type RowModified {
        nRow: Int
    }

    type UserStaff {
        _id: String
        FirstName: String
        LastName: String
    }

    # type input
    input PeriodsInput {
        Period: String
        Quantity: Float
    }

    input DateCalcloggerInput {
        Quantity: Float
        From: String
        To: String
        DateRange: [String]
    }

    input LocationInput {
        SiteId: String
        Reason: String
        Location: String
        Periods: [PeriodsInput]
        AverageDate: [[String]]
        DateCalclogger: [DateCalcloggerInput]
        QuantityLogger: Float
        TotalQuantity: Float
        PrevTetHoliday: [String]
        NextTetHoliday: [String]
        TenDayPrevTetHoliday: [String]
        KFactory: Float
        AveragePrevTetHoliday: Float
        AverageTenDayPrevTetHoliday: Float
    }

    input IndexInput {
        SiteId: String
        Location: String
        PreviousPeriodIndex: Float
        NextPeriodIndex: Float
    }

    input LockValveInput {
        SiteId: String
        Location: String
    }

    input SubtractWaterB1Input {
        NumberPrecious: String
        Content: String
        Provider: String
        AmountWater: Float
        Note: String
    }

    input SubtractWaterB2Input {
        NumberPrecious: String
        Content: String
        Provider: String
        AmountWater: Float
        Note: String
    }

    input WaterCustomerInput {
        NumberPrecious: String
        DatePublished: String
        AmountMeter: Float
        AmountWater: Float
        Note: String
    }

    input PreciousInput {
        Company: String
        CompanyName: String
        Start: String
        End: String
        Period: String
        CreateAt: String
        UsernameCreated: String
        Location: [LocationInput]
        Index: [IndexInput]
        LockValve: [LockValveInput]
        SubtractWaterB1: [SubtractWaterB1Input]
        SubtractWaterB2: [SubtractWaterB2Input]
        WaterCustomer: [WaterCustomerInput]
    }

    input PreciousUpdateInput {
        _id: ID
        Company: String
        CompanyName: String
        Start: String
        End: String
        Period: String
        CreateAt: String
        UsernameCreated: String
        Location: [LocationInput]
        Index: [IndexInput]
        LockValve: [LockValveInput]
        SubtractWaterB1: [SubtractWaterB1Input]
        SubtractWaterB2: [SubtractWaterB2Input]
        WaterCustomer: [WaterCustomerInput]
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

        QuantityLoggerDay(
            siteid: String!
            company: String!
            start: String!
            end: String!
        ): Float!

        GetSiteByWaterSupply(company: String!): [Site!]!

        QuantityLoggerByTimeStamp(
            siteid: String!
            company: String!
            start: String!
            end: String!
        ): [QuantityLoggerByTimeStamp!]!

        GetAllPrecious: [Precious]

        GetPreciousByCompany(company: String): [Precious]

        GetSiteByWaterSubtractB2ForTA: [Site]

        GetAllViewGroups: [String]

        GetAllStaffs: [UserStaff]

        GetAllOldSiteId: [String]
    }

    # declare Mutation
    type Mutation {
        InsertPrecious(precious: PreciousInput): IdOutput

        UpdatePrecious(precious: PreciousUpdateInput): IdOutput

        DeletePrecious(precious: PreciousUpdateInput): RowModified
    }
`;
