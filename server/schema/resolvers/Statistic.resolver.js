const SiteModel = require('../../models/SiteSite.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const DeviceLoggerModel = require('../../models/DeviceLogger.model');
const HistorySiteMeterModel = require('../../models/HistorySiteMeter.model');
const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');
const HistorySiteTransmitterModel = require('../../models/HistorySiteTransmitter.model');
const HistorySiteLoggerModel = require('../../models/HistorySiteLogger.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');

const Utils = require('../../utils');

module.exports = {
    Query: {
        GetStatisticSiteXNManager: async (parent, {}, context, info) => {
            const result = [];

            const listSites = await SiteModel.GetStatisticXNManager();

            const listMeter = await DeviceMeterModel.GetAll();

            let count = 1;
            for (const site of listSites) {
                const obj = {
                    STT: count,
                    SiteId: site._id,
                    Marks: '',
                    Size: 0,
                    Location: site.Location,
                    Level: site.Level,
                    Company: site.Company,
                    Availability: site.Availability,
                    Status: site.Status,
                    UsingLogger: site.UsingLogger,
                    Description: site.Description,
                };

                const find = listMeter.find((el) => el.Serial === site.Meter);
                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                count++;

                resufindTransmitter.push(obj);
            }

            return result;
        },

        GetStatisticMarkSizeXNManager: async (parent, {}, context, info) => {
            const result = [];

            const listSites = await SiteModel.GetStatisticXNManager();

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSites) {
                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    if (result.length <= 0) {
                        const obj = {
                            Provider: find.Provider,
                            Marks: [
                                {
                                    Mark: find.Marks,
                                    Models: [
                                        {
                                            Model: find.Model,
                                            Sizes: [
                                                {
                                                    Size: find.Size,
                                                    Companies: [
                                                        {
                                                            Company: 'Total',
                                                            Amount: 0,
                                                        },
                                                        ...Utils.CreateListCompanyForStatisticMarkSize(
                                                            listSites,
                                                        ),
                                                    ],
                                                },
                                                {
                                                    Size: 'Tổng ' + find.Model,
                                                    Companies: [
                                                        {
                                                            Company: 'Total',
                                                            Amount: 0,
                                                        },
                                                        ...Utils.CreateListCompanyForStatisticMarkSize(
                                                            listSites,
                                                        ),
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        };

                        result.push(obj);

                        Utils.UpdateAmountSize(result, find, site);
                    } else {
                        const findProvider = result.find(
                            (el) => el.Provider === find.Provider,
                        );

                        if (findProvider !== undefined) {
                            const findMark = findProvider.Marks.find(
                                (el) => el.Mark === find.Marks,
                            );

                            if (findMark !== undefined) {
                                const findModel = findMark.Models.find(
                                    (el) => el.Model === find.Model,
                                );

                                if (findModel !== undefined) {
                                    const findSize = findModel.Sizes.find(
                                        (el) => el.Size === find.Size,
                                    );

                                    if (findSize !== undefined) {
                                        const t = site._id[0] + site._id[1];

                                        const findCompany =
                                            findSize.Companies.find(
                                                (el) => el.Company === t,
                                            );

                                        if (findCompany !== undefined) {
                                            Utils.UpdateAmountSize(
                                                result,
                                                find,
                                                site,
                                            );
                                        }
                                    } else {
                                        const obj = {
                                            Size: find.Size,
                                            Companies: [
                                                {
                                                    Company: 'Tổng ',
                                                    Amount: 0,
                                                },
                                                ...Utils.CreateListCompanyForStatisticMarkSize(
                                                    listSites,
                                                ),
                                            ],
                                        };

                                        findModel.Sizes.unshift(obj);

                                        Utils.UpdateAmountSize(
                                            result,
                                            find,
                                            site,
                                        );
                                    }
                                } else {
                                    const obj = {
                                        Model: find.Model,
                                        Sizes: [
                                            {
                                                Size: find.Size,
                                                Companies: [
                                                    {
                                                        Company: 'Total',
                                                        Amount: 0,
                                                    },
                                                    ...Utils.CreateListCompanyForStatisticMarkSize(
                                                        listSites,
                                                    ),
                                                ],
                                            },
                                            {
                                                Size: 'Tổng ' + find.Model,
                                                Companies: [
                                                    {
                                                        Company: 'Total',
                                                        Amount: 0,
                                                    },
                                                    ...Utils.CreateListCompanyForStatisticMarkSize(
                                                        listSites,
                                                    ),
                                                ],
                                            },
                                        ],
                                    };

                                    findMark.Models.push(obj);

                                    Utils.UpdateAmountSize(result, find, site);
                                }
                            } else {
                                const obj = {
                                    Mark: find.Marks,
                                    Models: [
                                        {
                                            Model: find.Model,
                                            Sizes: [
                                                {
                                                    Size: find.Size,
                                                    Companies: [
                                                        {
                                                            Company: 'Total',
                                                            Amount: 0,
                                                        },
                                                        ...Utils.CreateListCompanyForStatisticMarkSize(
                                                            listSites,
                                                        ),
                                                    ],
                                                },
                                                {
                                                    Size: 'Tổng ' + find.Model,
                                                    Companies: [
                                                        {
                                                            Company: 'Total',
                                                            Amount: 0,
                                                        },
                                                        ...Utils.CreateListCompanyForStatisticMarkSize(
                                                            listSites,
                                                        ),
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                };

                                findProvider.Marks.push(obj);

                                Utils.UpdateAmountSize(result, find, site);
                            }
                        } else {
                            const obj = {
                                Provider: find.Provider,
                                Marks: [
                                    {
                                        Mark: find.Marks,
                                        Models: [
                                            {
                                                Model: find.Model,
                                                Sizes: [
                                                    {
                                                        Size: find.Size,
                                                        Companies: [
                                                            {
                                                                Company:
                                                                    'Total',
                                                                Amount: 0,
                                                            },
                                                            ...Utils.CreateListCompanyForStatisticMarkSize(
                                                                listSites,
                                                            ),
                                                        ],
                                                    },
                                                    {
                                                        Size:
                                                            'Tổng ' +
                                                            find.Model,
                                                        Companies: [
                                                            {
                                                                Company:
                                                                    'Total',
                                                                Amount: 0,
                                                            },
                                                            ...Utils.CreateListCompanyForStatisticMarkSize(
                                                                listSites,
                                                            ),
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            };

                            result.push(obj);

                            Utils.UpdateAmountSize(result, find, site);
                        }
                    }
                }
            }

            return result;
        },

        GetStatisticCustomChoiceSite: async (parent, {}, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listMeter = await DeviceMeterModel.GetAll();

            const listLogger = await DeviceLoggerModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Provider: '',
                    Marks: '',
                    Size: null,
                    ApprovalDecision: '',
                    Model: '',
                    Location: site.Location,
                    Level: site.Level,
                    Group: site.Group,
                    Group2: site.Group2,
                    Company: site.Company,
                    Status: site.Status,
                    Availability: site.Availability,
                    IstDistributionCompany: site.IstDistributionCompany,
                    QndDistributionCompany: site.QndDistributionCompany,
                    ProductionCompany: site.ProductionCompany,
                    Property: site.Property,
                    Takeovered: site.Takeovered,
                    UsingLogger: site.UsingLogger,
                    Description: site.Description,
                    LoggerModel: '',
                    Meter: site.Meter,
                    Transmitter: site.Transmitter,
                    Logger: site.Logger,
                    AccreditationDocument: '',
                    AccreditedDate: null,
                    ExpiryDate: null,
                    DateOfMeterChange:
                        site.DateOfMeterChange === null
                            ? site.TakeoverDate === null
                                ? null
                                : site.TakeoverDate
                            : site.DateOfMeterChange,
                    AccreditationType: '',
                    Approved: null,
                };

                const findMeter = listMeter.find(
                    (el) => el.Serial === site.Meter,
                );

                if (findMeter !== undefined) {
                    obj.Provider = findMeter.Provider;
                    obj.Marks = findMeter.Marks;
                    obj.Size = findMeter.Size;
                    obj.ApprovalDecision = findMeter.ApprovalDecision;
                    obj.Model = findMeter.Model;
                    obj.AccreditationDocument = findMeter.AccreditationDocument;
                    obj.AccreditedDate = findMeter.AccreditedDate;
                    obj.ExpiryDate = findMeter.ExpiryDate;
                    obj.AccreditationType = findMeter.AccreditationType;
                    obj.Approved = findMeter.Approved;
                }

                const findLogger = listLogger.find(
                    (el) => el.Serial === site.Logger,
                );

                if (findLogger !== undefined) {
                    obj.LoggerModel = findLogger.Model;
                }

                result.push(obj);
            }

            return result;
        },
        GetStatisticAccredited: async (parent, { date }, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listMeter = await DeviceMeterModel.GetMeterAccreditated(date);

            for (const meter of listMeter) {
                const find = listSite.find((el) => el.Meter === meter.Serial);

                if (find !== undefined) {
                    const obj = {
                        _id: find._id,
                        Location: find.Location,
                        Marks: meter.Marks,
                        Size: meter.Size,
                        DateOfChange: meter.AccreditatedDate,
                        DescriptionOfChange: find.DescriptionOfChange,
                        AccreditationDocument: meter.AccreditationDocument,
                        ExpiryDate: meter.ExpiryDate,
                    };

                    result.push(obj);
                }
            }

            return result;
        },
        GetStatisticMeterChange: async (parent, { date }, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetSiteMeterDateChange(date);

            const listMeter = await DeviceMeterModel.GetAll();

            const listHistorySiteMeter =
                await HistorySiteMeterModel.GetHistoryDateChange(date);

            for (const h of listHistorySiteMeter) {
                const findSite = listSite.find((el) => el._id === h.SiteId);

                if (findSite !== undefined) {
                    const findMeter = listMeter.find(
                        (el) => el.Serial === findSite.Meter,
                    );

                    if (findMeter !== undefined) {
                        const obj = {
                            Meter: h.NewMeterSerial,
                            Transmitter: '',
                            _id: findSite._id,
                            Level: findMeter.ApprovalDecision,
                            Location: findSite.Location,
                            Marks: findMeter.Marks,
                            Size: findMeter.Size,
                            OldMeter: h.OldMeterSerial,
                            OldTran: '',
                            DateOfChange: h.DateChanged,
                            DescriptionOfChange: findSite.DescriptionOfChange,
                            AccreditationDocument:
                                findMeter.AccreditationDocument,
                            ExpiryDate: findMeter.ExpiryDate,
                        };

                        result.push(obj);
                    }
                }
            }

            return result;
        },

        GetStatisticTransmitterChange: async (
            parent,
            { date },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSiteTransmitterDateChange(date);

            const listMeter = await DeviceMeterModel.GetAll();

            const listTransmitter = await DeviceTransmitterModel.GetAll();

            const listHistorySiteTransmitter =
                await HistorySiteTransmitterModel.GetHistoryDateChange(date);

            for (const h of listHistorySiteTransmitter) {
                const findSite = listSite.find((el) => el._id === h.SiteId);

                if (findSite !== undefined) {
                    const findTransmitter = listTransmitter.find(
                        (el) => el.Serial === findSite.Transmitter,
                    );
                    if (findTransmitter !== undefined) {
                        const obj = {
                            Meter: '',
                            Transmitter: h.NewMeterSerial,
                            _id: findSite._id,
                            Location: findSite.Location,
                            Marks: '',
                            Size: 0,
                            Model: findTransmitter.ApprovalDecision,
                            OldMeter: '',
                            OldTran: h.OldMeterSerial,
                            DateOfChange: h.DateChanged,
                            DescriptionOfChange: findSite.DescriptionOfChange,
                            AccreditationDocument: '',
                            ExpiryDate: null,
                        };

                        const findMeter = listMeter.find(
                            (el) => el.Serial === findSite.Meter,
                        );

                        if (findMeter !== undefined) {
                            obj.Marks = findMeter.Marks;
                            obj.Size = findMeter.Size;
                            obj.AccreditationDocument =
                                findMeter.AccreditationDocument;
                            obj.ExpiryDate = findMeter.ExpiryDate;
                        }

                        result.push(obj);
                    }
                }
            }
            return result;
        },

        GetStatisticLoggerChange: async (parent, { date }, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetSiteLoggerDateChange(date);

            const listHistorySiteLogger =
                await HistorySiteLoggerModel.GetHistoryDateChange(date);

            for (const h of listHistorySiteLogger) {
                const findSite = listSite.find((el) => el._id === h.SiteId);

                if (findSite !== undefined) {
                    const obj = {
                        _id: findSite._id,
                        Location: findSite.Location,
                        NewLogger: h.NewMeterSerial,
                        OldLogger: h.OldMeterSerial,
                        DateOfChange: h.DateChanged,
                        DescriptionOfChange: findSite.DescriptionOfChange,
                    };

                    result.push(obj);
                }
            }

            return result;
        },
        GetStatisticBatteryChange: async (parent, { date }, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetSitDateBatteryChange(date);

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSite) {
                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    const obj = {
                        Id: site._id,
                        Meter: site.Meter,
                        Transmitter: site.Transmitter,
                        Location: site.Location,
                        Marks: find.Marks,
                        Size: find.Size,
                        DateOfChange: site.DateOfBatteryChange,
                        DescriptionOfChange: site.DescriptionOfChange,
                        AccreditationDocument: find.AccreditationDocument,
                        ExpiryDate: find.ExpiryDate,
                    };

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticTransmitterBatteryChange: async (
            parent,
            { date },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSitDateTranmitterBatteryChange(
                date,
            );

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSite) {
                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    const obj = {
                        Id: site._id,
                        Meter: site.Meter,
                        Transmitter: site.Transmitter,
                        Location: site.Location,
                        Marks: find.Marks,
                        Size: find.Size,
                        DateOfChange: site.DateOfTransmitterBatteryChange,
                        DescriptionOfChange: site.DescriptionOfChange,
                        AccreditationDocument: find.AccreditationDocument,
                        ExpiryDate: find.ExpiryDate,
                    };

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticLoggerBatteryChange: async (
            parent,
            { date },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSitDateLoggerBatteryChange(
                date,
            );

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSite) {
                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    const obj = {
                        Id: site._id,
                        Meter: site.Meter,
                        Transmitter: site.Transmitter,
                        Location: site.Location,
                        Marks: find.Marks,
                        Size: find.Size,
                        DateOfChange: site.DateOfLoggerBatteryChange,
                        DescriptionOfChange: site.DescriptionOfChange,
                        AccreditationDocument: find.AccreditationDocument,
                        ExpiryDate: find.ExpiryDate,
                    };

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticCustomChoiceMeter: async (parent, {}, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listMeter = await DeviceMeterModel.GetAll();

            for (const meter of listMeter) {
                if (
                    meter.Serial !== null &&
                    meter.Serial !== undefined &&
                    meter.Serial !== ''
                ) {
                    const obj = {
                        Serial: meter.Serial,
                        ReceiptDate: meter.ReceiptDate,
                        AccreditedDate: meter.AccreditedDate,
                        ExpiryDate: meter.ExpiryDate,
                        AccreditationDocument: meter.AccreditationDocument,
                        AccreditationType: meter.AccreditationType,
                        Provider: meter.Provider,
                        Marks: meter.Marks,
                        Size: meter.Size,
                        Model: meter.Model,
                        Status: meter.Status,
                        Installed: meter.Installed,
                        InitialIndex: meter.InitialIndex,
                        Description: meter.Description,
                        SiteId: '',
                        Location: '',
                        TransmitterSerial: meter.SerialTransmitter,
                        SiteCompany: '',
                        SiteStatus: '',
                        Nationality: meter.Nationality,
                    };

                    const findSite = listSite.find(
                        (el) => el.Meter === meter.Serial,
                    );

                    if (findSite !== undefined) {
                        obj.SiteId = findSite._id;
                        obj.Location = findSite.Location;
                        obj.SiteCompany = findSite.Company;
                        obj.SiteStatus = findSite.Status;
                    }

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticCustomChoiceTransmitter: async (
            parent,
            {},
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listTransmitter = await DeviceTransmitterModel.GetAll();

            for (const transmitter of listTransmitter) {
                if (
                    transmitter.Serial !== null &&
                    transmitter.Serial !== undefined &&
                    transmitter.Serial !== ''
                ) {
                    const obj = {
                        Serial: transmitter.Serial,
                        ReceiptDate: transmitter.ReceiptDate,
                        Provider: transmitter.Provider,
                        Marks: transmitter.Marks,
                        Size: transmitter.Size,
                        Model: transmitter.Model,
                        Status: transmitter.Status,
                        Installed: transmitter.Installed,
                        InitialIndex: transmitter.InitialIndex,
                        Description: transmitter.Description,
                        SiteId: '',
                        Location: '',
                        SiteStatus: '',
                        SiteCompany: '',
                    };

                    const findSite = listSite.find(
                        (el) => el.Transmitter === transmitter.Serial,
                    );

                    if (findSite !== undefined) {
                        obj.SiteId = findSite._id;
                        obj.Location = findSite.Location;
                        obj.SiteCompany = findSite.Company;
                        obj.SiteStatus = findSite.Status;
                    }

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticCustomChoiceLogger: async (parent, {}, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listLogger = await DeviceLoggerModel.GetAll();

            const listDeviceSiteConfig = await DeviceSiteConfigModel.GetAll();

            for (const logger of listLogger) {
                if (
                    logger.Serial !== null &&
                    logger.Serial !== undefined &&
                    logger.Serial !== ''
                ) {
                    const obj = {
                        Serial: logger.Serial,
                        ReceiptDate: logger.ReceiptDate,
                        Provider: logger.Provider,
                        Marks: logger.Marks,
                        Model: logger.Model,
                        Status: logger.Status,
                        Installed: logger.Installed,
                        Description: logger.Description,
                        SiteId: '',
                        Location: '',
                        SiteStatus: '',
                        SiteCompany: '',
                        LoggerId: '',
                    };

                    const findSite = listSite.find(
                        (el) => el.Logger === logger.Serial,
                    );

                    if (findSite !== undefined) {
                        obj.SiteId = findSite._id;
                        obj.Location = findSite.Location;
                        obj.SiteCompany = findSite.Company;
                        obj.SiteStatus = findSite.Status;

                        const findLogger = listDeviceSiteConfig.find(
                            (el) => el.SiteId === findSite._id,
                        );

                        if (findLogger !== undefined) {
                            obj.LoggerId = findLogger.LoggerId;
                        }
                    }

                    result.push(obj);
                }
            }

            return result;
        },

        GetStatisticHistoryMeterAndMeterBySiteId: async (
            parent,
            { siteid },
            context,
            info,
        ) => {
            const result = [];

            const listHistoryMeter =
                await HistorySiteMeterModel.GetHistoryBySiteId(siteid);

            const listMeter = await DeviceMeterModel.GetAll();

            for (const h of listHistoryMeter) {
                let count = 1;
                const obj = {
                    STT: count++,
                    DateChanged: h.DateChanged,
                    OldSerial: h.OldMeterSerial,
                    OldProvider: '',
                    OldMarks: '',
                    OldSize: 0,
                    OldModel: '',
                    OldIndex: h.OldMeterIndex,
                    NewSerial: h.NewMeterSerial,
                    NewProvider: '',
                    NewMarks: '',
                    NewSize: 0,
                    NewModel: '',
                    NewIndex: h.NewMeterIndex,
                    AccreditationDocument: '',
                    Description: h.Description,
                };

                const findOldMeter = listMeter.find(
                    (el) => el.Serial === h.OldMeterSerial,
                );
                if (findOldMeter !== undefined) {
                    obj.OldProvider = findOldMeter.Provider;
                    obj.OldMarks = findOldMeter.Marks;
                    obj.OldSize = findOldMeter.Size;
                    obj.OldModel = findOldMeter.Model;
                }

                const findNewMeter = listMeter.find(
                    (el) => el.Serial === h.NewMeterSerial,
                );
                if (findNewMeter !== undefined) {
                    obj.NewProvider = findNewMeter.Provider;
                    obj.NewMarks = findNewMeter.Marks;
                    obj.NewSize = findNewMeter.Size;
                    obj.NewModel = findNewMeter.Model;
                    obj.AccreditationDocument =
                        findNewMeter.AccreditationDocument;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticHistoryTransmitterAndTransmitterBySiteId: async (
            parent,
            { siteid },
            context,
            info,
        ) => {
            const result = [];

            const listHistoryTransmitter =
                await HistorySiteTransmitterModel.GetHistoryBySiteId(siteid);

            const listTransmitter = await DeviceTransmitterModel.GetAll();

            for (const h of listHistoryTransmitter) {
                let count = 1;
                const obj = {
                    STT: count++,
                    DateChanged: h.DateChanged,
                    OldSerial: h.OldMeterSerial,
                    OldProvider: '',
                    OldMarks: '',
                    OldSize: 0,
                    OldModel: '',
                    OldIndex: h.OldMeterIndex,
                    NewSerial: h.NewMeterSerial,
                    NewProvider: '',
                    NewMarks: '',
                    NewSize: 0,
                    NewModel: '',
                    NewIndex: h.NewMeterIndex,
                    Description: h.Description,
                };

                const findOldTransmitter = listTransmitter.find(
                    (el) => el.Serial === h.OldMeterSerial,
                );
                if (findOldTransmitter !== undefined) {
                    obj.OldProvider = findOldTransmitter.Provider;
                    obj.OldMarks = findOldTransmitter.Marks;
                    obj.OldSize = findOldTransmitter.Size;
                    obj.OldModel = findOldTransmitter.Model;
                }

                const findNewTransmitter = listTransmitter.find(
                    (el) => el.Serial === h.NewMeterSerial,
                );
                if (findNewTransmitter !== undefined) {
                    obj.NewProvider = findNewTransmitter.Provider;
                    obj.NewMarks = findNewTransmitter.Marks;
                    obj.NewSize = findNewTransmitter.Size;
                    obj.NewModel = findNewTransmitter.Model;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticHistoryLoggerAndLoggerBySiteId: async (
            parent,
            { siteid },
            context,
            info,
        ) => {
            const result = [];

            const listHistoryLogger =
                await HistorySiteLoggerModel.GetHistoryBySiteId(siteid);

            const listLogger = await DeviceLoggerModel.GetAll();

            for (const h of listHistoryLogger) {
                let count = 1;
                const obj = {
                    STT: count++,
                    DateChanged: h.DateChanged,
                    OldSerial: h.OldMeterSerial,
                    OldProvider: '',
                    OldMarks: '',
                    OldModel: '',
                    OldIndex: h.OldMeterIndex,
                    NewSerial: h.NewMeterSerial,
                    NewProvider: '',
                    NewMarks: '',
                    NewModel: '',
                    NewIndex: h.NewMeterIndex,
                    Description: h.Description,
                };

                const findOldLogger = listLogger.find(
                    (el) => el.Serial === h.OldMeterSerial,
                );
                if (findOldLogger !== undefined) {
                    obj.OldProvider = findOldLogger.Provider;
                    obj.OldMarks = findOldLogger.Marks;
                    obj.OldModel = findOldLogger.Model;
                }

                const findNewLogger = listLogger.find(
                    (el) => el.Serial === h.NewMeterSerial,
                );
                if (findNewLogger !== undefined) {
                    obj.NewProvider = findNewLogger.Provider;
                    obj.NewMarks = findNewLogger.Marks;
                    obj.NewModel = findNewLogger.Model;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticAccreditationAndExpiryDate: async (
            parent,
            { date },
            context,
            info,
        ) => {
            const result = [];

            const listMeter = await DeviceMeterModel.GetMeterExpiryDate(date);

            const listSite = await SiteModel.GetAllSites();

            for (const meter of listMeter) {
                const findSite = listSite.find(
                    (el) => el.Meter === meter.Serial,
                );

                if (findSite !== undefined) {
                    const obj = {
                        _id: findSite._id,
                        Location: findSite.Location,
                        Marks: meter.Marks,
                        Size: meter.Size,
                        DateOfChange: meter.AccreditedDate,
                        DescriptionOfChange: findSite.DescriptionOfChange,
                        AccreditationDocument: meter.AccreditationDocument,
                        ExpiryDate: meter.ExpiryDate,
                    };

                    result.push(obj);
                }
            }

            return result;
        },
        GetStatisticCustomChoiceMarkSize: async (parent, {}, context, info) => {
            const result = [];

            const listSite = await SiteModel.GetAllSites();

            const listMeter = await DeviceMeterModel.GetAll();

            const listLogger = await DeviceLoggerModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Provider: '',
                    Marks: '',
                    Size: null,
                    ApprovalDecision: '',
                    Model: '',
                    Location: site.Location,
                    Level: site.Level,
                    Group: site.Group,
                    Group2: site.Group2,
                    Company: site.Company,
                    Status: site.Status,
                    Availability: site.Availability,
                    IstDistributionCompany: site.IstDistributionCompany,
                    QndDistributionCompany: site.QndDistributionCompany,
                    ProductionCompany: site.ProductionCompany,
                    Property: site.Property,
                    Takeovered: site.Takeovered,
                    UsingLogger: site.UsingLogger,
                    Description: site.Description,
                    LoggerModel: '',
                    Meter: site.Meter,
                    Transmitter: site.Transmitter,
                    Logger: site.Logger,
                    AccreditationDocument: '',
                    AccreditedDate: null,
                    ExpiryDate: null,
                    DateOfMeterChange:
                        site.DateOfMeterChange === null
                            ? site.TakeoverDate === null
                                ? null
                                : site.TakeoverDate
                            : site.DateOfMeterChange,
                    AccreditationType: '',
                    Approved: null,
                };

                const findMeter = listMeter.find(
                    (el) => el.Serial === site.Meter,
                );

                if (findMeter !== undefined) {
                    obj.Provider = findMeter.Provider;
                    obj.Marks = findMeter.Marks;
                    obj.Size = findMeter.Size;
                    obj.ApprovalDecision = findMeter.ApprovalDecision;
                    obj.Model = findMeter.Model;
                    obj.AccreditationDocument = findMeter.AccreditationDocument;
                    obj.AccreditedDate = findMeter.AccreditedDate;
                    obj.ExpiryDate = findMeter.ExpiryDate;
                    obj.AccreditationType = findMeter.AccreditationType;
                    obj.Approved = findMeter.Approved;
                }

                const findLogger = listLogger.find(
                    (el) => el.Serial === site.Logger,
                );

                if (findLogger !== undefined) {
                    obj.LoggerModel = findLogger.Model;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticMeterChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSiteMeterDateChangeByYearUsing(
                date,
                year,
            );

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    Size: 0,
                    DateOfChange: site.DateOfMeterChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                    TakeoverDate: site.TakeoverDate,
                };

                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                result.push(obj);
            }

            return result;
        },
        GetStatisticTransmitterChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite =
                await SiteModel.GetSiteTransmitterDateChangeByYearUsing(
                    date,
                    year,
                );

            const listTransmitter = await DeviceTransmitterModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    Size: 0,
                    DateOfChange: site.DateOfTransmitterChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                };

                const find = listTransmitter.find(
                    (el) => el.Serial === site.Transmitter,
                );

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                result.push(obj);
            }

            return result;
        },
        GetStatisticLoggerChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSiteLoggerDateChangeByYearUsing(
                date,
                year,
            );

            const listLogger = await DeviceLoggerModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    DateOfChange: site.DateOfLoggerChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                };

                const find = listLogger.find((el) => el.Serial === site.Logger);

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticBatteryChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite = await SiteModel.GetSitDateBatteryChangeByYearUsing(
                date,
                year,
            );

            const listMeter = await DeviceMeterModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    Size: 0,
                    DateOfChange: site.DateOfBatteryChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                };

                const find = listMeter.find((el) => el.Serial === site.Meter);

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticTransmitterBatteryChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite =
                await SiteModel.GetSitDateTransmitterBatteryChangeByYearUsing(
                    date,
                    year,
                );

            const listTransmitter = await DeviceTransmitterModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    Size: 0,
                    DateOfChange: site.DateOfTransmitterBatteryChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                };

                const find = listTransmitter.find(
                    (el) => el.Serial === site.Transmitter,
                );

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                    obj.Size = find.Size;
                }

                result.push(obj);
            }

            return result;
        },

        GetStatisticLoggerBatteryChangeByYearUsing: async (
            parent,
            { date, year },
            context,
            info,
        ) => {
            const result = [];

            const listSite =
                await SiteModel.GetSitDateLoggerBatteryChangeByYearUsing(
                    date,
                    year,
                );

            const listLogger = await DeviceLoggerModel.GetAll();

            for (const site of listSite) {
                const obj = {
                    _id: site._id,
                    Location: site.Location,
                    Marks: '',
                    DateOfChange: site.DateOfLoggerBatteryChange,
                    DescriptionOfChange: site.DescriptionOfChange,
                    Company: site.Company,
                    Status: site.Status,
                };

                const find = listLogger.find((el) => el.Serial === site.Logger);

                if (find !== undefined) {
                    obj.Marks = find.Marks;
                }

                result.push(obj);
            }

            return result;
        },
    },
};
