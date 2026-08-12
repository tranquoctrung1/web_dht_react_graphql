const ConnectDB = require('../db/connect');
const { collectDistinct } = require('../utils/collectDistinct');

const SiteSiteCollection = 't_Site_Sites';

const DeviceMeterCollection = 't_Devices_Meters';
const DeviceTransmitterCollection = 't_Devices_Transmitters';
const DeviceLoggerCollection = 't_Devices_Loggers';

const setDeviceInstalled = async (collectionName, serial, installed) => {
    if (serial === null || serial === undefined || serial === '') {
        return;
    }

    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(collectionName);

    await collection.updateMany(
        { Serial: serial },
        { $set: { Installed: installed } },
    );
};

// oldSite/newSite: site documents (null when inserting/deleting).
// Releases devices no longer attached, marks newly attached ones installed.
const syncDevicesInstalled = async (oldSite, newSite) => {
    const pairs = [
        ['Meter', DeviceMeterCollection],
        ['Transmitter', DeviceTransmitterCollection],
        ['Logger', DeviceLoggerCollection],
    ];

    for (const [field, collectionName] of pairs) {
        const oldSerial = oldSite ? oldSite[field] : null;
        const newSerial = newSite ? newSite[field] : null;

        if (oldSerial && oldSerial !== newSerial) {
            await setDeviceInstalled(collectionName, oldSerial, false);
        }

        if (newSerial) {
            await setDeviceInstalled(collectionName, newSerial, true);
        }
    }
};

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

    return result;
};

module.exports.GetSitesByGroup = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group: group })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByGroup2S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group2: group })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByGroup3S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group3: group })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByGroup4S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group4: group })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByGroup5S = async (group) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Group5: group })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByLevel = async (level) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({ Level: level })
        .sort({ _id: -1 })
        .toArray();

    return result;
};

module.exports.GetSitesByQuantityTotal = async (level) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({ Display: true })
        .sort({ _id: -1 })
        .toArray();

    let result = [];

    for (let site of data) {
        if (site._id !== null && site._id !== undefined && site._id !== '') {
            if (
                site._id[2] == '1' ||
                site._id[3] == '3' ||
                site._id[2] == '4' ||
                site._id[2] == '5'
            ) {
                result.push(site);
            }
        }
    }

    return result;
};

module.exports.GetAllSites = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({}).sort({ _id: 1 }).toArray();

    return result;
};

module.exports.GetAllOldSiteId = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ OldId: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'OldId');
};

module.exports.GetSiteBySiteId = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({ _id: siteid }).toArray();

    return result;
};

module.exports.GetAllViewGroups = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ ViewGroup: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'ViewGroup');
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

    return result;
};

module.exports.GetAllDistrict = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ District: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'District');
};

module.exports.GetAllLevel = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Level: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Level');
};

module.exports.GetAllGroup = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Group: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Group');
};

module.exports.GetAllGroup2 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Group2: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Group2');
};

module.exports.GetAllGroup3 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Group3: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Group3');
};

module.exports.GetAllGroup4 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Group4: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Group4');
};

module.exports.GetAllGroup5 = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Group5: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Group5');
};

module.exports.GetAllCoverID = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ CoverID: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'CoverID');
};

module.exports.GetAllSiteCompanies = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let data = await collection
        .find({})
        .project({ Company: 1, _id: 0 })
        .toArray();

    return collectDistinct(data, 'Company');
};

module.exports.GetSiteMeterDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfMeterChange: { $ne: null, $gte: new Date(date) },
        })
        .sort({ _id: 1 })
        .toArray();

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
                    DateOfMeterChange: { $ne: null, $lte: time },
                },
                {
                    DateOfMeterChange: { $eq: null },
                    TakeoverDate: { $ne: null, $lte: time },
                },
            ],
        })
        .toArray();

    return result;
};

module.exports.GetSiteTransmitterDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfTransmitterChange: { $ne: null, $gte: new Date(date) },
        })
        .toArray();

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
                    DateOfTransmitterChange: { $ne: null, $lte: new Date(time) },
                },
            ],
        })
        .toArray();

    return result;
};

module.exports.GetSiteLoggerDateChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfLoggerChange: { $ne: null, $gte: new Date(date) },
        })
        .toArray();

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
                    DateOfLoggerChange: { $ne: null, $lte: new Date(time) },
                },
            ],
        })
        .toArray();

    return result;
};

module.exports.GetSitDateBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfBatteryChange: { $ne: null, $gte: new Date(date) },
        })
        .toArray();

    return result;
};

module.exports.GetSitDateBatteryChangeByYearUsing = async (date, year) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    const time = new Date(date);

    time.setDate(time.getDate() - year * 365.5);

    let result = await collection
        .find({
            DateOfBatteryChange: { $ne: null, $lte: new Date(date) },
        })
        .toArray();

    return result;
};

module.exports.GetSitDateTranmitterBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfTransmitterBatteryChange: { $ne: null, $gte: new Date(date) },
        })
        .toArray();

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
            DateOfTransmitterBatteryChange: { $ne: null, $lte: new Date(date) },
        })
        .toArray();

    return result;
};

module.exports.GetSitDateLoggerBatteryChange = async (date) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            DateOfLoggerBatteryChange: { $ne: null, $gte: new Date(date) },
        })
        .toArray();

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
            DateOfLoggerBatteryChange: { $ne: null, $lte: new Date(date) },
        })
        .toArray();

    return result;
};

module.exports.GetSiteById = async (siteid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({ _id: siteid }).toArray();

    return result;
};

const textToBinary = (str = '') => {
    let res = '';
    res = str
        .split('')
        .map((char) => {
            return char.charCodeAt(0).toString(2);
        })
        .join(' ');
    return res;
};

module.exports.GetSiteByStaffId = async (staffid) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection.find({}).toArray();

    if (staffid === 'Đ1') {
        result = result.filter(
            (el) => textToBinary(el.StaffId) === '11010000 110001',
        );
    } else if (staffid === 'Đ2') {
        result = result.filter(
            (el) => textToBinary(el.StaffId) === '11010000 110010',
        );
    } else {
        result = result.filter((el) => el.StaffId === staffid);
    }

    return result;
};

module.exports.GetSiteIstOrQndByCompany = async (company) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            $or: [
                { IstDistributionCompany: company },
                { QndDistributionCompany: company },
            ],
        })
        .toArray();

    return result;
};

module.exports.Insert = async (site) => {
    let Connect = new ConnectDB.Connect();

    let result = '';

    let collection = await Connect.connect(SiteSiteCollection);
    let check = await collection.find({ _id: site._id }).toArray();

    if (check.length > 0) {
        return '';
    } else {
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

        result = result.insertedId;

        await syncDevicesInstalled(null, site);

        return result;
    }
};

module.exports.Update = async (site) => {
    try {
        let Connect = new ConnectDB.Connect();

        let collection = await Connect.connect(SiteSiteCollection);

        let oldSites = await collection.find({ _id: site._id }).toArray();
        let oldSite = oldSites.length > 0 ? oldSites[0] : null;

        let result = await collection.deleteMany({
            _id: site._id,
        });

        site.DateOfMeterChange =
            site.DateOfMeterChange === '' || site.DateOfMeterChange === null
                ? null
                : new Date(site.DateOfMeterChange);
        site.DateOfLoggerChange =
            site.DateOfLoggerChange === '' || site.DateOfLoggerChange === null
                ? null
                : new Date(site.DateOfLoggerChange);
        site.DateOfTransmitterChange =
            site.DateOfTransmitterChange === '' ||
            site.DateOfTransmitterChange === null
                ? null
                : new Date(site.DateOfTransmitterChange);
        site.DateOfBatteryChange =
            site.DateOfBatteryChange === '' || site.DateOfBatteryChange === null
                ? null
                : new Date(site.DateOfBatteryChange);
        site.DateOfTransmitterBatteryChange =
            site.DateOfTransmitterBatteryChange === '' ||
            site.DateOfTransmitterBatteryChange === null
                ? null
                : new Date(site.DateOfTransmitterBatteryChange);
        site.DateOfLoggerBatteryChange =
            site.DateOfLoggerBatteryChange === '' ||
            site.DateOfLoggerBatteryChange === null
                ? null
                : new Date(site.DateOfLoggerBatteryChange);

        site.TakeoverDate =
            site.TakeoverDate === '' || site.TakeoverDate === null
                ? null
                : new Date(site.TakeoverDate);

        result = await collection.insertOne(site);

        await syncDevicesInstalled(oldSite, site);

        return result.insertedId;
    } catch (err) {
        console.log(err);
    }
};

module.exports.Delete = async (site) => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let oldSites = await collection.find({ _id: site._id }).toArray();
    let oldSite = oldSites.length > 0 ? oldSites[0] : null;

    let result = await collection.deleteMany({
        _id: site._id,
    });

    await syncDevicesInstalled(oldSite, null);

    return result.deletedCount;
};

module.exports.GetStatisticXNManager = async () => {
    let Connect = new ConnectDB.Connect();

    let collection = await Connect.connect(SiteSiteCollection);

    let result = await collection
        .find({
            Status: 'DSD',
            $or: [{ Company: { $regex: 'XN' } }, { Company: { $regex: 'DA' } }],
            ExcludeFromXNManagerList: { $ne: true },
        })
        .toArray();

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
    } catch (err) {
        console.log(err);
    }
    return result;
};
