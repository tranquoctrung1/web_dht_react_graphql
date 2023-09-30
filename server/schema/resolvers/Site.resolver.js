const SiteModel = require('../../models/SiteSite.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const DeviceLoggerModel = require('../../models/DeviceLogger.model');
const HistorySiteMeterModel = require('../../models/HistorySiteMeter.model');
const DeviceTransmitterModel = require('../../models/DeviceTransmitter.model');
const HistorySiteTransmitterModel = require('../../models/HistorySiteTransmitter.model');
const HistorySiteLoggerModel = require('../../models/HistorySiteLogger.model');

module.exports = {
    Query: {
        GetAllSites: async (parent, {}, context, info) => {
            return await SiteModel.GetAllSites();
        },
        GetAllOldSiteId: async (parent, {}, context, info) => {
            return await SiteModel.GetAllOldSiteId();
        },
        GetSiteByWaterSupply: async (parent, { company }, context, info) => {
            return await SiteModel.GetSiteByWaterSupply(company);
        },
        GetAllViewGroups: async (parent, {}, context, info) => {
            return await SiteModel.GetAllViewGroups();
        },
        GetSiteByWaterSubtractB2ForTA: async (parent, {}, context, infor) => {
            return await SiteModel.GetSiteByWaterSubtractB2ForTA();
        },
        GetAllLevel: async (parent, {}, context, info) => {
            return await SiteModel.GetAllLevel();
        },
        GetAllDistrict: async (parent, {}, context, info) => {
            return await SiteModel.GetAllDistrict();
        },
        GetAllGroup: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup();
        },
        GetAllGroup2: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup2();
        },
        GetAllGroup3: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup3();
        },
        GetAllGroup4: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup4();
        },
        GetAllGroup5: async (parent, {}, context, info) => {
            return await SiteModel.GetAllGroup5();
        },
        GetAllCoverID: async (parent, {}, context, info) => {
            return await SiteModel.GetAllCoverID();
        },
        GetAllSiteCompanies: async (parent, {}, context, info) => {
            return await SiteModel.GetAllSiteCompanies();
        },
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
    },

    Mutation: {
        InsertSite: async (parent, { site }, context, info) => {
            return await SiteModel.Insert(site);
        },
        UpdateSite: async (parent, { site }, context, info) => {
            return await SiteModel.Update(site);
        },
        DeleteSite: async (parent, { site }, context, info) => {
            return await SiteModel.Delete(site);
        },
        UpdateSiteMeterDateChange: async (parent, { site }, context, info) => {
            return await SiteModel.UpdateMeterDateChange(site);
        },
        UpdateSiteTransmitterDateChange: async (
            parent,
            { site },
            context,
            info,
        ) => {
            return await SiteModel.UpdateTransmitterDateChange(site);
        },
        UpdateSiteLoggerDateChange: async (parent, { site }, context, info) => {
            return await SiteModel.UpdateLoggerDateChange(site);
        },
    },
};
