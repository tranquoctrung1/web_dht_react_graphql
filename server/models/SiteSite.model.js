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
        Status,
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
        this.Status = Status;
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
        .sort({ _id: -1 })
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
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByGroup = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group: group })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByGroup2S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group2: group })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByGroup3S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group3: group })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByGroup4S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group4: group })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByGroup5S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group5: group })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitesByLevel = async (level) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Level: level })
        .sort({ _id: -1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllSites = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({}).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllOldSiteId = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.OldId);

            if (find === undefined) {
                result.push(site.OldId);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetSiteBySiteId = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({ _id: siteid }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllViewGroups = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.ViewGroup);

            if (find === undefined) {
                result.push(site.ViewGroup);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetSiteByWaterSubtractB2ForTA = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let listSites = [
        'ta2008',
        'ta2004',
        'ta2003',
        'ta2006',
        'ta2009',
        'ta2007',
        'ta2005',
        'ta2014',
        'ta2010',
        'ta2015',
        'ta2012',
        'ta2011',
        'ta2013',
        'ta2016',
        'ta2017',
        'bc2022',
    ];

    let result = await collection
        .find({ _id: { $in: listSites } })
        .sort({ _id: 1 })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetAllDistrict = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.District);

            if (find === undefined) {
                result.push(site.District);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllLevel = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Level);

            if (find === undefined) {
                result.push(site.Level);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllGroup = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Group);

            if (find === undefined) {
                result.push(site.Group);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllGroup2 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Group2);

            if (find === undefined) {
                result.push(site.Group2);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllGroup3 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Group3);

            if (find === undefined) {
                result.push(site.Group3);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllGroup4 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Group4);

            if (find === undefined) {
                result.push(site.Group4);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllGroup5 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Group5);

            if (find === undefined) {
                result.push(site.Group5);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllCoverID = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.CoverID);

            if (find === undefined) {
                result.push(site.CoverID);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetAllSiteCompanies = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = [];

    let data = await collection.find({}).toArray();

    if (data.length > 0) {
        for (const site of data) {
            let find = result.find((el) => el === site.Company);

            if (find === undefined) {
                result.push(site.Company);
            }
        }
    }

    Connect.disconnect();

    return result;
};

module.exports.GetSiteMeterDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfMeterChange: { $ne: null },
            DateOfMeterChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteMeterDateChangeByYearUsing = async (date, year) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            $or: [
                {
                    DateOfMeterChange: { $ne: null },
                    DateOfMeterChange: { $lte: new Date(time) },
                },
                {
                    DateOfMeterChange: { $eq: null },
                    TakeoverDate: { $ne: null },
                    TakeoverDate: { $lte: time },
                },
            ],
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteTransmitterDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfTransmitterChange: { $ne: null },
            DateOfTransmitterChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteTransmitterDateChangeByYearUsing = async (date, year) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            $or: [
                {
                    DateOfTransmitterChange: { $ne: null },
                    DateOfTransmitterChange: { $lte: new Date(time) },
                },
            ],
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteLoggerDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfLoggerChange: { $ne: null },
            DateOfLoggerChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteLoggerDateChangeByYearUsing = async (date, year) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            $or: [
                {
                    DateOfLoggerChange: { $ne: null },
                    DateOfLoggerChange: { $lte: new Date(time) },
                },
            ],
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfBatteryChange: { $ne: null },
            DateOfBatteryChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateBatteryChangeByYearUsing = async (date, year) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            DateOfBatteryChange: { $ne: null },
            DateOfBatteryChange: { $lte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateTranmitterBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfTransmitterBatteryChange: { $ne: null },
            DateOfTransmitterBatteryChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateTransmitterBatteryChangeByYearUsing = async (
    date,
    year,
) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            DateOfTransmitterBatteryChange: { $ne: null },
            DateOfTransmitterBatteryChange: { $lte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateLoggerBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfLoggerBatteryChange: { $ne: null },
            DateOfLoggerBatteryChange: { $gte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSitDateLoggerBatteryChangeByYearUsing = async (
    date,
    year,
) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            DateOfLoggerBatteryChange: { $ne: null },
            DateOfLoggerBatteryChange: { $lte: new Date(date) },
        })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.GetSiteById = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({ _id: siteid }).toArray();

    Connect.disconnect();

    return result;
};

module.exports.Insert = async (site) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteSiteCollection);

    site.DateOfMeterChange =
        site.DateOfMeterChange === '' ? null : new Date(site.DateOfMeterChange);
    site.DateOfLoggerChange =
        site.DateOfLoggerChange === ''
            ? null
            : new Date(site.DateOfLoggerChange);
    site.DateOfTransmitterChange =
        site.DateOfTransmitterChange === ''
            ? null
            : new Date(site.DateOfTransmitterChange);
    site.DateOfBatteryChange =
        site.DateOfBatteryChange === ''
            ? null
            : new Date(site.DateOfBatteryChange);
    site.DateOfTransmitterBatteryChange =
        site.DateOfTransmitterBatteryChange === ''
            ? null
            : new Date(site.DateOfTransmitterBatteryChange);
    site.DateOfLoggerBatteryChange =
        site.DateOfLoggerBatteryChange === ''
            ? null
            : new Date(site.DateOfLoggerBatteryChange);

    site.TakeoverDate =
        site.TakeoverDate === '' ? null : new Date(site.TakeoverDate);

    result = await collection.insertOne(site);

    result = result.insertedId;

    Connect.disconnect();

    return result;
};

module.exports.Update = async (site) => {
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteSiteCollection);

        let result = await collection.deleteMany({
            _id: site._id,
        });

        site.DateOfMeterChange =
            site.DateOfMeterChange === ''
                ? null
                : new Date(site.DateOfMeterChange);
        site.DateOfLoggerChange =
            site.DateOfLoggerChange === ''
                ? null
                : new Date(site.DateOfLoggerChange);
        site.DateOfTransmitterChange =
            site.DateOfTransmitterChange === ''
                ? null
                : new Date(site.DateOfTransmitterChange);
        site.DateOfBatteryChange =
            site.DateOfBatteryChange === ''
                ? null
                : new Date(site.DateOfBatteryChange);
        site.DateOfTransmitterBatteryChange =
            site.DateOfTransmitterBatteryChange === ''
                ? null
                : new Date(site.DateOfTransmitterBatteryChange);
        site.DateOfLoggerBatteryChange =
            site.DateOfLoggerBatteryChange === ''
                ? null
                : new Date(site.DateOfLoggerBatteryChange);

        site.TakeoverDate =
            site.TakeoverDate === '' ? null : new Date(site.TakeoverDate);

        result = await collection.insertOne(site);

        Connect.disconnect();

        return result.insertedId;
    } catch (err) {
        console.log(err);
    }
};

module.exports.Delete = async (site) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.deleteMany({
        _id: site._id,
    });

    Connect.disconnect();

    return result.deletedCount;
};

module.exports.GetStatisticXNManager = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Status: 'DSD', $or: [{ Company: 'XN' }, { Company: 'DA' }] })
        .toArray();

    Connect.disconnect();

    return result;
};

module.exports.UpdateMeterDateChange = async (site) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteSiteCollection);

        let find = await collection.find({ _id: site._id }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: site._id,
                },
                {
                    $set: {
                        Meter: site.Meter,
                        DateOfMeterChange:
                            site.DateOfMeterChange === ''
                                ? null
                                : new Date(site.DateOfMeterChange),
                    },
                },
            );

            result = update.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }
    return result;
};

module.exports.UpdateTransmitterDateChange = async (site) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteSiteCollection);

        let find = await collection.find({ _id: site._id }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: site._id,
                },
                {
                    $set: {
                        Transmitter: site.Transmitter,
                        DateOfTransmitterChange:
                            site.DateOfTransmitterChange === ''
                                ? null
                                : new Date(site.DateOfTransmitterChange),
                    },
                },
            );

            result = update.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }
    return result;
};

module.exports.UpdateLoggerDateChange = async (site) => {
    let result = 0;
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteSiteCollection);

        let find = await collection.find({ _id: site._id }).toArray();

        if (find.length > 0) {
            // update channel
            let update = await collection.updateMany(
                {
                    _id: site._id,
                },
                {
                    $set: {
                        Logger: site.Logger,
                        DateOfLoggerChange:
                            site.DateOfLoggerChange === ''
                                ? null
                                : new Date(site.DateOfLoggerChange),
                    },
                },
            );

            result = update.modifiedCount;
        }

        Connect.disconnect();
    } catch (err) {
        console.log(err);
    }
    return result;
};
