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
        DateOfBatteryChange: Date
        DateOfTransmitterBatteryChange: Date
        DateOfLoggerBatteryChange: Date
        DescriptionOfChange: String
        ChangeIndex: Float
        Level: String
        Group: String
        Company: String
        Takeovered: Boolean
        TakeoverDate: Date
        Availability: String
        Status: String
        Display: Boolean
        Property: Boolean
        UsingLogger: Boolean
        MeterDirection: String
        ProductionCompany: String
        IstDistributionCompany: String
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
        NumberLockPeriod: Float
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

    type DeviceMeter {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Status: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        SerialTransmitter: String
        Nationality: String
    }

    type DeviceTransmitter {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        MeterSerial: String
        Status: String
    }

    type DeviceLogger {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        Provider: String
        Marks: String
        Model: String
        Installed: Boolean
        Description: String
        Status: String
    }

    type DeviceMeterAccreditationType {
        _id: ID!
        AccreditationType: String
        Description: String
    }

    type SiteLevel {
        _id: ID!
        Level: String
        Description: String
    }

    type SiteStatus {
        _id: ID!
        Status: String
        Description: String
    }

    type SiteMeterDirection {
        _id: ID!
        Direction: String
        Description: String
    }

    type SiteGroup {
        _id: ID!
        Group: String
        Description: String
    }

    type SiteGroup2S {
        _id: ID!
        Group: String
        Description: String
    }

    type SiteGroup3S {
        _id: ID!
        Group: String
        Description: String
    }

    type SiteGroup4S {
        _id: ID!
        Group: String
        Description: String
    }

    type SiteGroup5S {
        _id: ID!
        Group: String
        Description: String
    }

    type SiteAvailabilities {
        _id: ID!
        Availability: String
        Description: String
    }

    type SiteCover {
        _id: ID!
        CoverID: String
        CoverL: Int
        CoverW: Int
        CoverH: Int
        CoverMeterial: String
        CoverNL: Int
    }

    type Unit {
        _id: ID!
        Unit: String
        Description: String
    }

    type DeviceSiteConfig {
        _id: ID!
        LoggerId: String
        SiteId: String
        Tel: String
        Pressure: Int
        Forward: Int
        Reverse: Int
        Interval: Int
        BeginTime: Date
        ZoomInit: Int
        ZoomOn: Int
        Pressure1: Int
    }

    type DataManual {
        _id: ID!
        Stt: Int
        SiteId: String
        TimeStamp: Date
        Index: Float
        Output: Float
        Description: String
    }

    type StatisticSiteXNManager {
        STT: Int
        SiteId: String
        Marks: String
        Size: Int
        Location: String
        Level: String
        Company: String
        Availability: String
        Status: String
        UsingLogger: Boolean
        Description: String
    }

    type User {
        _id: ID!
        Uid: String
        StaffId: String
        Pwd: String
        Salt: String
        Role: String
        Active: Boolean
        TimeStamp: Date
        Ip: String
        LogCount: Int
        Zoom: Int
        Company: String
        Language: String
    }

    type Role {
        _id: ID!
        Role: String
        Description: String
    }

    type Login {
        token: String
        Role: String
        Uid: String
        Company: String
    }

    type DeviceStatus {
        Status: String
        Description: String
    }

    type HistorySiteMeter {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    type HistorySiteTransmitter {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    type HistorySiteLogger {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    type StatisticCustomChoiceSite {
        _id: String
        Provider: String
        Marks: String
        Size: Int
        ApprovalDecision: String
        Model: String
        Location: String
        Level: String
        Group: String
        Group2: String
        Company: String
        Status: String
        Availability: String
        IstDistributionCompany: String
        QndDistributionCompany: String
        ProductionCompany: String
        Property: Boolean
        Takeovered: Boolean
        UsingLogger: Boolean
        Description: String
        LoggerModel: String
        Meter: String
        Transmitter: String
        Logger: String
        AccreditationDocument: String
        AccreditedDate: Date
        ExpiryDate: Date
        DateOfMeterChange: Date
        AccreditationType: String
        Approved: Boolean
    }

    type StatisticAccredited {
        _id: String
        Location: String
        Size: Int
        Marks: String
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticMeterChange {
        Meter: String
        Transmitter: String
        _id: String
        Level: String
        Location: String
        Marks: String
        Size: Int
        OldMeter: String
        OldTran: String
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticTransmitterChange {
        Meter: String
        Transmitter: String
        _id: String
        Location: String
        Marks: String
        Size: Int
        Model: String
        OldMeter: String
        OldTran: String
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticLoggerChange {
        _id: String
        Location: String
        OldLogger: String
        NewLogger: String
        DateOfChange: Date
        DescriptionOfChange: String
    }

    type StatisticBatteryChange {
        Id: String
        Meter: String
        Transmitter: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticTransmitterBatteryChange {
        Id: String
        Meter: String
        Transmitter: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticLoggerBatteryChange {
        Id: String
        Meter: String
        Transmitter: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type StatisticCustomChoiceMeter {
        Serial: String
        ReceiptDate: Date
        AccreditedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Status: String
        Installed: Boolean
        InitialIndex: Float
        Description: String
        SiteId: String
        Location: String
        TransmitterSerial: String
        SiteCompany: String
        SiteStatus: String
        Nationality: String
    }

    type StatisticCustomChoiceTransmitter {
        Serial: String
        ReceiptDate: Date
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Status: String
        Installed: Boolean
        InitialIndex: Float
        Description: String
        SiteId: String
        Location: String
        SiteStatus: String
        SiteCompany: String
    }

    type StatisticCustomChoiceLogger {
        Serial: String
        ReceiptDate: Date
        Provider: String
        Marks: String
        Model: String
        Status: String
        Installed: Boolean
        Description: String
        SiteId: String
        Location: String
        SiteStatus: String
        SiteCompany: String
        LoggerId: String
    }

    type StatisticHistoryMeterAndMeterBySiteId {
        STT: Int
        DateChanged: Date
        OldSerial: String
        OldProvider: String
        OldMarks: String
        OldSize: Int
        OldModel: String
        OldIndex: Float
        NewSerial: String
        NewProvider: String
        NewMarks: String
        NewSize: Int
        NewModel: String
        NewIndex: Float
        AccreditationDocument: String
        Description: String
    }

    type StatisticHistoryTransmitterAndTransmitterBySiteId {
        STT: Int
        DateChanged: Date
        OldSerial: String
        OldProvider: String
        OldMarks: String
        OldSize: Int
        OldModel: String
        OldIndex: Float
        NewSerial: String
        NewProvider: String
        NewMarks: String
        NewSize: Int
        NewModel: String
        NewIndex: Float
        Description: String
    }

    type StatisticHistoryLoggerAndLoggerBySiteId {
        STT: Int
        DateChanged: Date
        OldSerial: String
        OldProvider: String
        OldMarks: String
        OldModel: String
        OldIndex: Float
        NewSerial: String
        NewProvider: String
        NewMarks: String
        NewModel: String
        NewIndex: Float
        Description: String
    }

    type StatisticAccreditationAndExpiryDate {
        _id: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        AccreditationDocument: String
        ExpiryDate: Date
    }

    type CompanyInStatisticMarkSize {
        Company: String
        Amount: Int
    }

    type SizeInStatisticMarkSize {
        Size: String
        Companies: [CompanyInStatisticMarkSize]
    }

    type ModelInStatisticMarkSize {
        Model: String
        Sizes: [SizeInStatisticMarkSize]
    }

    type MarkInStatisticMarkSize {
        Mark: String
        Models: [ModelInStatisticMarkSize]
    }

    type StatisticMarkSizeXNManager {
        Provider: String
        Marks: [MarkInStatisticMarkSize]
    }

    type StatisticCustomChoiceMarkSize {
        _id: String
        Provider: String
        Marks: String
        Size: Int
        ApprovalDecision: String
        Model: String
        Location: String
        Level: String
        Group: String
        Group2: String
        Company: String
        Status: String
        Availability: String
        IstDistributionCompany: String
        QndDistributionCompany: String
        ProductionCompany: String
        Property: Boolean
        Takeovered: Boolean
        UsingLogger: Boolean
        Description: String
        LoggerModel: String
        Meter: String
        Transmitter: String
        Logger: String
        AccreditationDocument: String
        AccreditedDate: Date
        ExpiryDate: Date
        DateOfMeterChange: Date
        AccreditationType: String
        Approved: Boolean
    }

    type StatisticMeterDateChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
        TakeoverDate: Date
    }

    type StatisticTransmitterDateChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
    }

    type StatisticLoggerDateChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
    }

    type StatisticBatteryChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
    }

    type StatisticTransmitterBatteryChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        Size: Int
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
    }

    type StatisticLoggerBatteryChangeByYearUsing {
        _id: String
        Location: String
        Marks: String
        DateOfChange: Date
        DescriptionOfChange: String
        Company: String
        Status: String
    }

    type QuantityDayGroup {
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

    type QuantityDayGroup2 {
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

    type QuantityDayGroup3 {
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

    type QuantityDayGroup4 {
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

    type QuantityDayGroup5 {
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

    type QuantityDayLevel {
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

    type QuantityDayTotal {
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

    type UserAndStaff {
        _id: ID!
        Uid: String
        StaffId: String
        Pwd: String
        Salt: String
        Role: String
        Active: Boolean
        TimeStamp: Date
        Ip: String
        LogCount: Int
        Zoom: Int
        Company: String
        Language: String
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
        NumberLockPeriod: Float
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

    input SiteInput {
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
        DateOfBatteryChange: Date
        DateOfTransmitterBatteryChange: Date
        DateOfLoggerBatteryChange: Date
        DescriptionOfChange: String
        ChangeIndex: Float
        Level: String
        Group: String
        Company: String
        Takeovered: Boolean
        TakeoverDate: Date
        Availability: String
        Status: String
        Display: Boolean
        Property: Boolean
        UsingLogger: Boolean
        MeterDirection: String
        ProductionCompany: String
        IstDistributionCompany: String
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
    }

    input DeviceSiteConfigInsertInput {
        LoggerId: String
        SiteId: String
        Tel: String
        Pressure: Int
        Forward: Int
        Reverse: Int
        BeginTime: Date
        Interval: Int
        ZoomInit: Int
        ZoomOn: Int
        Pressure1: Int
    }

    input DeviceSiteConfigUpdateInput {
        _id: ID!
        LoggerId: String
        SiteId: String
        Tel: String
        Pressure: Int
        Forward: Int
        Reverse: Int
        BeginTime: Date
        Interval: Int
        ZoomInit: Int
        ZoomOn: Int
        Pressure1: Int
    }

    input ChannelInput {
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

    input DataManualInsertInput {
        Stt: Int
        SiteId: String
        TimeStamp: Date
        Index: Float
        Output: Float
        Description: String
    }

    input DataManualUpdateInput {
        _id: ID!
        Stt: Int
        SiteId: String
        TimeStamp: Date
        Index: Float
        Output: Float
        Description: String
    }

    input UserInsertInput {
        Uid: String
        StaffId: String
        Pwd: String
        Salt: String
        Role: String
        Active: Boolean
        TimeStamp: Date
        Ip: String
        LogCount: Int
        Zoom: Int
        Company: String
        Language: String
    }

    input UserUpdateInput {
        _id: ID!
        Uid: String
        StaffId: String
        Pwd: String
        Salt: String
        Role: String
        Active: Boolean
        TimeStamp: Date
        Ip: String
        LogCount: Int
        Zoom: Int
        Company: String
        Language: String
    }

    input UserUpdatePasswordInput {
        Uid: String
        Pwd: String
        NewPwd: String
        RepeatNewPwd: String
    }

    input DeviceLoggerInsertInput {
        Serial: String
        ReceiptDate: Date
        Provider: String
        Marks: String
        Model: String
        Installed: Boolean
        Description: String
        Status: String
    }

    input DeviceLoggerUpdateInput {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        Provider: String
        Marks: String
        Model: String
        Installed: Boolean
        Description: String
        Status: String
    }

    input DeviceMeterInsertInput {
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Status: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        SerialTransmitter: String
        Nationality: String
    }

    input DeviceMeterUpdateInput {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Status: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        SerialTransmitter: String
        Nationality: String
    }

    input DeviceTransmitterInsertInput {
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        MeterSerial: String
        Status: String
    }

    input DeviceTransmitterUpdateInput {
        _id: ID!
        Serial: String
        ReceiptDate: Date
        AccreditatedDate: Date
        ExpiryDate: Date
        AccreditationDocument: String
        AccreditationType: String
        Provider: String
        Marks: String
        Size: Int
        Model: String
        Installed: Boolean
        InstallIndex: Float
        Description: String
        AppovalDate: Date
        Approvaled: Date
        AppovalDecision: String
        MeterSerial: String
        Status: String
    }

    input HistorySiteMeterInsertInput {
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input HistorySiteMeterUpdateInput {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input SiteMeterDateChangeUpdateInput {
        _id: String
        Meter: String
        DateOfMeterChange: Date
    }

    input DeviceMeterInstallUpdateInput {
        Serial: String
        Installed: Boolean
    }

    input HistorySiteTransmitterInsertInput {
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input HistorySiteTransmitterUpdateInput {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input SiteTransmitterDateChangeUpdateInput {
        _id: String
        Transmitter: String
        DateOfTransmitterChange: Date
    }

    input DeviceTransmitterInstallUpdateInput {
        Serial: String
        Installed: Boolean
    }

    input HistorySiteLoggerInsertInput {
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input HistorySiteLoggerUpdateInput {
        _id: ID!
        DateChanged: Date
        SiteId: String
        OldMeterSerial: String
        NewMeterSerial: String
        OldMeterIndex: Float
        NewMeterIndex: Float
        Description: String
    }

    input SiteLoggerDateChangeUpdateInput {
        _id: String
        Logger: String
        DateOfLoggerChange: Date
    }

    input DeviceLoggerInstallUpdateInput {
        Serial: String
        Installed: Boolean
    }

    input SiteCoverInsertInput {
        CoverID: String
        CoverL: Int
        CoverW: Int
        CoverH: Int
        CoverMeterial: String
        CoverNL: Int
    }

    input SiteCoverUpdateInput {
        _id: ID!
        CoverID: String
        CoverL: Int
        CoverW: Int
        CoverH: Int
        CoverMeterial: String
        CoverNL: Int
    }

    input UpdateActiveUserInput {
        Uid: String
        Active: Boolean
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

        GetAllLevel: [String]

        GetAllDistrict: [String]

        GetAllGroup: [String]

        GetAllGroup2: [String]

        GetAllGroup3: [String]

        GetAllGroup4: [String]

        GetAllGroup5: [String]

        GetAllCoverID: [String]

        GetAllMeterNotInstall: [DeviceMeter]

        GetAllTransmitterNotInstall: [DeviceTransmitter]

        GetAllLoggerNotInstall: [DeviceLogger]

        GetAllMeter: [DeviceMeter]

        GetAllTransmitter: [DeviceTransmitter]

        GetAllLogger: [DeviceLogger]

        GetAllMeterAccreditationType: [DeviceMeterAccreditationType]

        GetAllSiteLevel: [SiteLevel]

        GetAllSiteStatus: [SiteStatus]

        GetAllSiteMeterDirection: [SiteMeterDirection]

        GetAllSiteGroup: [SiteGroup]

        GetAllSiteGroup2S: [SiteGroup2S]

        GetAllSiteGroup3S: [SiteGroup3S]

        GetAllSiteGroup4S: [SiteGroup4S]

        GetAllSiteGroup5S: [SiteGroup5S]

        GetAllSiteAvailabilities: [SiteAvailabilities]

        GetAllSiteCover: [SiteCover]

        GetAllSiteCompanies: [String]

        GetAllUnit: [Unit]

        GetAllDeviceSiteConfig: [DeviceSiteConfig]

        GetAllDeviceChannelConifg: [Channel]

        GetAllDataManual: [DataManual]

        GetDataManualBySiteId(siteid: String): [DataManual]

        GetDataManualBySiteIdAndTimeStamp(
            siteid: String
            start: String
            end: String
        ): [DataManual]

        GetStatisticSiteXNManager: [StatisticSiteXNManager]

        GetAllUser: [User]

        GetAllRole: [Role]

        LoginAction(username: String, password: String): Login

        VerifyPassword(Uid: String, Pwd: String): Int

        GetLoggerProvider: [String]

        GetLoggerMarks: [String]

        GetLoggerModel: [String]

        GetAllDeviceStatus: [DeviceStatus]

        GetMeterNationalities: [String]

        GetMeterProvider: [String]

        GetMeterModel: [String]

        GetMeterMarks: [String]

        GetMeterSize: [Int]

        GetTransmitterProvider: [String]

        GetTransmitterModel: [String]

        GetTransmitterMarks: [String]

        GetTransmitterSize: [Int]

        GetAllHistorySiteMeter: [HistorySiteMeter]

        GetAllHistorySiteTransmitter: [HistorySiteTransmitter]

        GetAllHistorySiteLogger: [HistorySiteLogger]

        GetStatisticCustomChoiceSite: [StatisticCustomChoiceSite]

        GetStatisticAccredited(date: Date): [StatisticAccredited]

        GetStatisticMeterChange(date: Date): [StatisticMeterChange]

        GetStatisticTransmitterChange(date: Date): [StatisticTransmitterChange]

        GetStatisticLoggerChange(date: Date): [StatisticLoggerChange]

        GetStatisticBatteryChange(date: Date): [StatisticBatteryChange]

        GetStatisticTransmitterBatteryChange(
            date: Date
        ): [StatisticTransmitterBatteryChange]

        GetStatisticLoggerBatteryChange(
            date: Date
        ): [StatisticLoggerBatteryChange]

        GetStatisticCustomChoiceMeter: [StatisticCustomChoiceMeter]

        GetStatisticCustomChoiceTransmitter: [StatisticCustomChoiceTransmitter]

        GetStatisticCustomChoiceLogger: [StatisticCustomChoiceLogger]

        GetSiteById(siteid: String): Site

        GetHistoryTransmitterBySiteId(siteid: String): [HistorySiteTransmitter]

        GetHistoryLoggerBySiteId(siteid: String): [HistorySiteLogger]

        GetHistoryMeterBySiteId(siteid: String): [HistorySiteMeter]

        GetStatisticHistoryMeterAndMeterBySiteId(
            siteid: String
        ): [StatisticHistoryMeterAndMeterBySiteId]

        GetStatisticHistoryTransmitterAndTransmitterBySiteId(
            siteid: String
        ): [StatisticHistoryTransmitterAndTransmitterBySiteId]

        GetStatisticHistoryLoggerAndLoggerBySiteId(
            siteid: String
        ): [StatisticHistoryLoggerAndLoggerBySiteId]

        GetStatisticAccreditationAndExpiryDate(
            date: Date
        ): [StatisticAccreditationAndExpiryDate]

        GetStatisticMarkSizeXNManager: [StatisticMarkSizeXNManager]

        GetStatisticCustomChoiceMarkSize: [StatisticCustomChoiceMarkSize]

        GetStatisticMeterChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticMeterDateChangeByYearUsing]

        GetStatisticTransmitterChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticTransmitterDateChangeByYearUsing]

        GetStatisticLoggerChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticLoggerDateChangeByYearUsing]

        GetStatisticBatteryChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticBatteryChangeByYearUsing]

        GetStatisticTransmitterBatteryChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticTransmitterBatteryChangeByYearUsing]

        GetStatisticLoggerBatteryChangeByYearUsing(
            date: Date
            year: Int
        ): [StatisticLoggerBatteryChangeByYearUsing]

        GetAllCoverL: [Int]

        GetAllCoverW: [Int]

        GetAllCoverH: [Int]

        GetAllCorverMeterial: [String]

        GetAllCoverNL: [Int]

        QuantityDayGroup(
            group: String!
            start: String!
            end: String!
        ): [QuantityDayGroup!]!

        QuantityDayGroup2(
            group: String!
            start: String!
            end: String!
        ): [QuantityDayGroup2!]!

        QuantityDayGroup3(
            group: String!
            start: String!
            end: String!
        ): [QuantityDayGroup3!]!

        QuantityDayGroup4(
            group: String!
            start: String!
            end: String!
        ): [QuantityDayGroup4!]!

        QuantityDayGroup5(
            group: String!
            start: String!
            end: String!
        ): [QuantityDayGroup5!]!

        QuantityDayLevel(
            level: String!
            start: String!
            end: String!
        ): [QuantityDayLevel!]!

        QuantityDayTotal(start: String!, end: String!): [QuantityDayTotal!]!

        GetAllUserAndStaff: [UserAndStaff]

        VerifyToken(token: String): String

        GetHistoryMeterByMeter(meterSerial: String): [HistorySiteMeter]
    }

    # declare Mutation
    type Mutation {
        InsertPrecious(precious: PreciousInput): IdOutput

        UpdatePrecious(precious: PreciousUpdateInput): IdOutput

        DeletePrecious(precious: PreciousUpdateInput): RowModified

        InsertSite(site: SiteInput): String

        UpdateSite(site: SiteInput): String

        DeleteSite(site: SiteInput): Int

        InsertDeviceSiteConfig(siteConfig: DeviceSiteConfigInsertInput): String

        UpdateDeviceSiteConfig(siteConfig: DeviceSiteConfigUpdateInput): String

        DeleteDeviceSiteConfig(siteConfig: DeviceSiteConfigUpdateInput): Int

        UpdateDeviceChannelConfig(channel: ChannelInput): String

        DeleteDeviceChannelConifg(channel: ChannelInput): Int

        InsertDataManual(dataManual: DataManualInsertInput): String

        InsertIndexDataManual(dataManual: DataManualInsertInput): Int

        UpdateDataManual(dataManual: DataManualUpdateInput): Int

        UpdateIndexDataManual(dataManual: DataManualUpdateInput): Int

        DeleteDataManual(dataManual: DataManualUpdateInput): Int

        InsertUser(user: UserInsertInput): String

        UpdateUser(user: UserUpdateInput): Int

        DeleteUser(user: UserUpdateInput): Int

        UpdatePassword(user: UserUpdatePasswordInput): Int

        InsertLogger(logger: DeviceLoggerInsertInput): String

        UpdateLogger(logger: DeviceLoggerUpdateInput): Int

        DeleteLogger(logger: DeviceLoggerUpdateInput): Int

        InsertMeter(meter: DeviceMeterInsertInput): String

        UpdateMeter(meter: DeviceMeterUpdateInput): Int

        DeleteMeter(meter: DeviceMeterUpdateInput): Int

        InsertTransmitter(transmitter: DeviceTransmitterInsertInput): String

        UpdateTransmitter(transmitter: DeviceTransmitterUpdateInput): Int

        DeleteTransmitter(transmitter: DeviceTransmitterUpdateInput): Int

        InsertHistorySiteMeter(history: HistorySiteMeterInsertInput): String

        UpdateHistorySiteMeter(history: HistorySiteMeterUpdateInput): Int

        DeleteHistorySiteMeter(history: HistorySiteMeterUpdateInput): Int

        UpdateSiteMeterDateChange(site: SiteMeterDateChangeUpdateInput): Int

        UpdateMeterInstall(meter: DeviceMeterInstallUpdateInput): Int

        InsertHistorySiteTransmitter(
            history: HistorySiteTransmitterInsertInput
        ): String

        UpdateHistorySiteTransmitter(
            history: HistorySiteTransmitterUpdateInput
        ): Int

        DeleteHistorySiteTransmitter(
            history: HistorySiteTransmitterUpdateInput
        ): Int

        UpdateSiteTransmitterDateChange(
            site: SiteTransmitterDateChangeUpdateInput
        ): Int

        UpdateTransmitterInstall(
            transmitter: DeviceTransmitterInstallUpdateInput
        ): Int

        InsertHistorySiteLogger(history: HistorySiteLoggerInsertInput): String

        UpdateHistorySiteLogger(history: HistorySiteLoggerUpdateInput): Int

        DeleteHistorySiteLogger(history: HistorySiteLoggerUpdateInput): Int

        UpdateSiteLoggerDateChange(site: SiteLoggerDateChangeUpdateInput): Int

        UpdateLoggerInstall(logger: DeviceLoggerInstallUpdateInput): Int

        InsertCover(cover: SiteCoverInsertInput): String

        UpdateCover(cover: SiteCoverUpdateInput): Int

        DeleteCover(cover: SiteCoverUpdateInput): Int

        UpdateActiveUser(user: UpdateActiveUserInput): Int
    }
`;
