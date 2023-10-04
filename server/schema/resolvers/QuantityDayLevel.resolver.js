const DataIndexLoggerModel = require('../../models/DataIndexLogger.model');
const SiteSiteModel = require('../../models/SiteSite.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const DataManualModel = require('../../models/DataManual.model');
const Utils = require('../../utils');

module.exports = {
    Query: {
        QuantityDayLevel: async (
            parent,
            { level, start, end },
            context,
            infor,
        ) => {
            let result = [];

            let startDate = new Date(parseInt(start));
            let endDate = new Date(parseInt(end));
            let tEnd = new Date(parseInt(end));
            tEnd.setDate(tEnd.getDate() + 1);

            let totalDay = Utils.CalculateSpcaeDay(startDate, endDate) + 1;

            let sites = await SiteSiteModel.GetSitesByLevel(level);
            if (sites.length > 0) {
                for (let site of sites) {
                    let obj = {};
                    obj.SiteId = site._id;
                    obj.Location = site.Location;
                    obj.Address = site.Address;
                    obj.OldId = site.OldId;
                    obj.Company = site.Company;
                    obj.ListQuantity = [];
                    obj.MeterDirection = site.MeterDirection;
                    obj.IstDistributionCompany = site.IstDistributionCompany;
                    obj.QndDistributionCompany = site.QndDistributionCompany;
                    obj.Size = 0;
                    obj.Marks = '';
                    obj.Display = site.Display;

                    if (
                        site._id != null &&
                        site._id != undefined &&
                        site._id != ''
                    ) {
                        let meter = await DeviceMeterModel.GetMeterBySerial(
                            site.Meter,
                        );
                        if (meter.length > 0) {
                            obj.Marks = meter[0].Marks;
                            obj.Size = meter[0].Size;
                        }

                        let channels =
                            await DeviceSiteConfigModel.GetChannelBySiteId(
                                site._id,
                            );

                        if (channels.length > 0) {
                            if (
                                channels[0].LoggerId != null &&
                                channels[0].LoggerId != undefined &&
                                channels[0].LoggerId != ''
                            ) {
                                let loggerId = channels[0].LoggerId;
                                let channelFlow = channels[0].Forward;
                                //let channelReverse = channels[0].Reverse;
                                let startHour = 0;
                                //let startMinute = 0;

                                if (channels[0].BeginTime != null) {
                                    let beginTime = new Date(
                                        channels[0].BeginTime,
                                    );
                                    startHour = beginTime.getHours();
                                    //startMinute = beginTime.getMinutes();
                                }

                                let listIndexFoward = [];
                                //let listIndexReverse = [];

                                if (
                                    channelFlow != null &&
                                    channelFlow != undefined &&
                                    channelFlow != ''
                                ) {
                                    let channelIdForward = `${loggerId}_0${channelFlow}`;

                                    listIndexFoward =
                                        await DataIndexLoggerModel.GetIndexLogger(
                                            channelIdForward,
                                            start,
                                            end,
                                        );
                                }
                                // if (
                                //     channelReverse != null &&
                                //     channelReverse != undefined &&
                                //     channelReverse != ''
                                // ) {
                                //     let channelIdRevers = `${loggerId}_0${channelReverse}`;

                                //     listIndexReverse =
                                //         await DataIndexLoggerModel.GetIndexLogger(
                                //             channelIdRevers,
                                //             start,
                                //             end,
                                //         );
                                // }

                                for (let i = 0; i < totalDay; i++) {
                                    let objQuantity = {};
                                    objQuantity.TimeStamp = null;
                                    objQuantity.Value = 0;
                                    objQuantity.IsEnoughData = true;

                                    let tempStartDataManual = new Date(
                                        startDate,
                                    );
                                    tempStartDataManual.setDate(
                                        tempStartDataManual.getDate() + i,
                                    );

                                    let dataManual =
                                        await DataManualModel.GetDataManualBySiteIdReport(
                                            site._id,
                                            tempStartDataManual,
                                        );
                                    if (
                                        dataManual.length > 0 &&
                                        dataManual[0].Output !== null &&
                                        dataManual[0].Output !== undefined
                                    ) {
                                        tempStartDataManual.setHours(
                                            tempStartDataManual.getHours() + 7,
                                        );
                                        objQuantity.TimeStamp =
                                            tempStartDataManual;
                                        objQuantity.Value =
                                            dataManual[0].Output;
                                    } else {
                                        // let tempStart = new Date(startDate);
                                        // let tempEnd = new Date(startDate);

                                        let tempStart2 = new Date(startDate);
                                        let tempEnd2 = new Date(startDate);

                                        // tempStart.setDate(
                                        //     tempStart.getDate() + i - 1,
                                        // );
                                        // tempStart.setHours(
                                        //     tempStart.getHours() + startHour,
                                        // );
                                        // tempStart.setMinutes(
                                        //     tempStart.getMinutes()
                                        // 	// +    startMinute,
                                        // );

                                        // tempEnd.setDate(tempEnd.getDate() + i);
                                        // tempEnd.setHours(
                                        //     tempEnd.getHours() + startHour,
                                        // );
                                        // tempEnd.setMinutes(
                                        //     tempEnd.getMinutes() //+ startMinute,
                                        // );
                                        // tempEnd.setSeconds(
                                        //     tempEnd.getSeconds() - 1,
                                        // );

                                        tempStart2.setDate(
                                            tempStart2.getDate() + i,
                                        );
                                        tempStart2.setHours(
                                            tempStart2.getHours() + startHour,
                                        );
                                        // tempStart2.setMinutes(
                                        //     tempStart2.getMinutes(),
                                        //     //+    startMinute,
                                        // );

                                        tempEnd2.setDate(
                                            tempEnd2.getDate() + i + 1,
                                        );
                                        tempEnd2.setHours(
                                            tempEnd2.getHours() + startHour,
                                        );
                                        // tempEnd2.setMinutes(
                                        //     tempEnd2.getMinutes(), //+ startMinute,
                                        // );
                                        tempEnd2.setSeconds(
                                            tempEnd2.getSeconds() - 1,
                                        );

                                        // let indexForwardStart = null;
                                        // let indexForwardEnd = null;
                                        // let indexReverseStart = null;
                                        // let indexReverseEnd = null;

                                        // let find = listIndexFoward.find(
                                        //     (el) =>
                                        //         el.TimeStamp >= tempStart &&
                                        //         el.TimeStamp <= tempEnd,
                                        // );

                                        // if (find != undefined) {
                                        //     indexForwardStart = find.Value;
                                        // }

                                        let find = listIndexFoward.find(
                                            (el) =>
                                                el.TimeStamp >= tempStart2 &&
                                                el.TimeStamp <= tempEnd2,
                                        );
                                        if (find != undefined) {
                                            objQuantity.Value = find.Value;
                                            objQuantity.IsEnoughData =
                                                find.IsEnoughData;
                                        }

                                        // find = listIndexReverse.find(
                                        //     (el) =>
                                        //         el.TimeStamp >= tempStart &&
                                        //         el.TimeStamp <= tempEnd,
                                        // );
                                        // if (find != undefined) {
                                        //     indexReverseStart = find.Value;
                                        // }

                                        // find = listIndexReverse.find(
                                        //     (el) =>
                                        //         el.TimeStamp >= tempStart2 &&
                                        //         el.TimeStamp <= tempEnd2,
                                        // );
                                        // if (find != undefined) {
                                        //     indexReverseEnd = find.Value;
                                        // }

                                        // let findEnoughData =
                                        //     listIndexFoward.find(
                                        //         (el) =>
                                        //             el.TimeStamp >= tempStart &&
                                        //             el.TimeStamp <= tempEnd &&
                                        //             el.IsEnoughData === false,
                                        //     );

                                        // if (findEnoughData != undefined) {
                                        //     objQuantity.IsEnoughData = false;
                                        // } else {
                                        //     findEnoughData =
                                        //         listIndexReverse.find(
                                        //             (el) =>
                                        //                 el.TimeStamp >=
                                        //                     tempStart &&
                                        //                 el.TimeStamp <=
                                        //                     tempEnd &&
                                        //                 el.IsEnoughData ===
                                        //                     false,
                                        //         );

                                        //     if (findEnoughData != undefined) {
                                        //         objQuantity.IsEnoughData = false;
                                        //     } else {
                                        //         objQuantity.IsEnoughData = true;
                                        //     }
                                        // }

                                        objQuantity.TimeStamp = tempStart2;

                                        // if (
                                        //     (indexForwardEnd != null ||
                                        //         indexReverseEnd != null) &&
                                        //     (indexForwardStart != null ||
                                        //         indexReverseStart != null)
                                        // ) {
                                        //     objQuantity.Value =
                                        //         indexForwardEnd -
                                        //         indexReverseEnd -
                                        //         (indexForwardStart -
                                        //             indexReverseStart);
                                        // } else {
                                        //     objQuantity.Value = 0;
                                        //     objQuantity.IsEnoughData = false;
                                        // }
                                    }

                                    obj.ListQuantity.push(objQuantity);
                                }
                            }
                        } else {
                            for (let i = 0; i < totalDay; i++) {
                                let tempStart2 = new Date(startDate);

                                tempStart2.setDate(tempStart2.getDate() + i);

                                let objQuantity = {};
                                objQuantity.TimeStamp = tempStart2;
                                objQuantity.Value = 0;
                                objQuantity.IsEnoughData = false;

                                obj.ListQuantity.push(objQuantity);
                            }
                        }
                    }
                    result.push(obj);
                }
            }

            return result;
        },
    },
};
