const ConnectDB = require('../db/connect');

const SiteSiteCollection = 't_Site_Sites';

module.exports.SiteSite = class SiteSite {
    constructor(
        _id,
        OldId,
        Location,
        Latitude,
        Longitude,
        ViewGroup,
        StaffId,
        Meter,
        Transmitter,
        Logger,
        DateOfMeterChange,
        DateOfLoggerChange,
        DateOfTransmitterChange,
        DateOfBatteryChange,
        DateOfTransmitterBatteryChange,
        DateOfLoggerBatteryChange,
        DescriptionOfChange,
        ChangeIndex,
        Level,
        Group,
        Company,
        Takeovered,
        TakeoverDate,
        Availability,
        Display,
        Property,
        UsingLogger,
        MeterDirection,
        ProductionCompany,
        IsDistributionCompany,
        QndDistributionCompany,
        IstDoNotCalculateReverse,
        QndDoNotCalculateReverse,
        Description,
        ChangeIndex1,
        Group2,
        Address,
        CoverID,
        Group3,
        Group4,
        Group5,
        District,
    ) {
        this._id = _id;
        this.OldId = OldId;
        this.Location = Location;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.ViewGroup = ViewGroup;
        this.StaffId = StaffId;
        this.Meter = Meter;
        this.Transmitter = Transmitter;
        this.Logger = Logger;
        this.DateOfMeterChange = DateOfMeterChange;
        this.DateOfLoggerChange = DateOfLoggerChange;
        this.DateOfTransmitterChange = DateOfTransmitterChange;
        this.DateOfBatteryChange = DateOfBatteryChange;
        this.DateOfTransmitterBatteryChange = DateOfTransmitterBatteryChange;
        this.DateOfLoggerBatteryChange = DateOfLoggerBatteryChange;
        this.DescriptionOfChange = DescriptionOfChange;
        this.ChangeIndex = ChangeIndex;
        this.Level = Level;
        this.Group = Group;
        this.Company = Company;
        this.TakeoverDate = TakeoverDate;
        this.Takeovered = Takeovered;
        this.Availability = Availability;
        this.Display = Display;
        this.Property = Property;
        this.UsingLogger = UsingLogger;
        this.MeterDirection = MeterDirection;
        this.ProductionCompany = ProductionCompany;
        this.IsDistributionCompany = IsDistributionCompany;
        this.QndDistributionCompany = QndDistributionCompany;
        this.IstDoNotCalculateReverse = IstDoNotCalculateReverse;
        this.QndDoNotCalculateReverse = QndDoNotCalculateReverse;
        this.Description = Description;
        this.ChangeIndex1 = ChangeIndex1;
        this.Group2 = Group2;
        this.Address = Address;
        this.CoverID = CoverID;
        this.Group3 = Group3;
        this.Group4 = Group4;
        this.Group5 = Group5;
        this.District = District;
    }
};

module.exports.GetSiteByCompany = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Company: company, Display: true })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteByWaterSupply = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            $and: [
                {
                    $or: [
                        { ProductionCompany: company },
                        { IstDistributionCompany: company },
                        { QndDistributionCompany: company },
                    ],
                },
                { Display: true },
            ],
        })
        .toArray();

    Connect.disconnect();

    return result;
};
