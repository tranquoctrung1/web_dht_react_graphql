const SiteModel = require('../../models/SiteSite.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const DeviceLoggerModel = require('../../models/DeviceLogger.model');
const HistorySiteMeterModel = require('../../models/HistorySiteMeter.model');
const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');
const HistorySiteTransmitterModel = require('../../models/HistorySiteTransmitter.model');
const HistorySiteLoggerModel = require('../../models/HistorySiteLogger.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');

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

        // // need complete
        // GetStatisticMarkSizeXNManager: async (parent, {}, context, info) => {
        //     const result = [];

        //     const listSites = await SiteModel.GetStatisticXNManager();

        //     const listMeter = await DeviceMeterModel.GetAll();

        //     for (const site of listSites) {
        //         const find = listMeter.find((el) => el.Serial === site.Meter);

        //         if (find !== undefined) {
        //             if (result.length <= 0) {
        //                 const obj = {
        //                     Provider: find.Provider,
        //                     Marks: [
        //                         {
        //                             Mark: find.Marks,
        //                             Models: [
        //                                 {
        //                                     Model: find.Model,
        //                                     Sizes: [
        //                                         {
        //                                             Size: find.Size,
        //                                             Companies: [],
        //                                         },
        //                                     ],
        //                                 },
        //                             ],
        //                         },
        //                     ],
        //                 };

        //                 result.push(obj);
        //             } else {
        //                 const findProvider = result.find(
        //                     (el) => el.Provider === find.Provider,
        //                 );

        //                 if (findProvider !== undefined) {
        //                     if (find.Provider.Mark.length <= 0) {
        //                     } else {
        //                     }
        //                 } else {
        //                     const obj = {
        //                         Provider: findProvider.Provider,
        //                         Size: [],
        //                     };

        //                     result.push(obj);
        //                 }
        //             }
        //         } else {
        //         }
        //     }
        // },

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
    },
};
