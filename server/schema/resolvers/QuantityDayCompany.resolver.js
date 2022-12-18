const DataIndexLoggerModel = require('../../models/DataIndexLogger.model');
const SiteSiteModel = require('../../models/SiteSite.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const Utils = require('../../utils');

module.exports = {
    Query: {
        QuantityDayCompany: async (
            parent,
            { company, start, end },
            context,
            infor,
        ) => {
            let result = [];

            let startDate = new Date(parseInt(start));
            let endDate = new Date(parseInt(end));
            let tEnd = new Date(parseInt(end));
            tEnd.setDate(tEnd.getDate() + 1);

            let totalDay = Utils.CalculateSpcaeDay(startDate, tEnd);

            let sites = await SiteSiteModel.GetSiteByCompany(company);

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
                            site._id,
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
                                channels[0]._id != null &&
                                channels[0]._id != undefined &&
                                channels[0]._id != ''
                            ) {
                                let loggerId = channels[0]._id;
                                let channelFlow = channels[0].Forward;
                                let channelReverse = channels[0].Reverse;
                                let startHour = 0;
                                let startMinute = 0;

                                if (channels[0].BeginTime != null) {
                                    let beginTime = new Date(
                                        channels[0].BeginTime,
                                    );
                                    startHour = beginTime.getHours();
                                    startMinute = beginTime.getMinutes();
                                }

                                let listIndexFoward = [];
                                let listIndexReverse = [];

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
                                if (
                                    channelReverse != null &&
                                    channelReverse != undefined &&
                                    channelReverse != ''
                                ) {
                                    let channelIdRevers = `${loggerId}_0${channelReverse}`;

                                    listIndexReverse =
                                        await DataIndexLoggerModel.GetIndexLogger(
                                            channelIdRevers,
                                            start,
                                            end,
                                        );
                                }

                                for (let i = 0; i < totalDay; i++) {
                                    let tempStart = new Date(startDate);
                                    let tempEnd = new Date(startDate);

                                    let tempStart2 = new Date(startDate);
                                    let tempEnd2 = new Date(startDate);

                                    tempStart.setDate(tempStart.getDate() + i);
                                    tempStart.setHours(
                                        tempStart.getHours() + startHour,
                                    );
                                    tempStart.setMinutes(
                                        tempStart.getMinutes() + startMinute,
                                    );

                                    tempEnd.setDate(tempEnd.getDate() + i + 1);
                                    tempEnd.setHours(
                                        tempEnd.getHours() + startHour,
                                    );
                                    tempEnd.setMinutes(
                                        tempEnd.getMinutes() + startMinute,
                                    );
                                    tempEnd.setSeconds(
                                        tempEnd.getSeconds() - 1,
                                    );

                                    tempStart2.setDate(
                                        tempStart2.getDate() + i + 1,
                                    );
                                    tempStart2.setHours(
                                        tempStart2.getHours() + startHour,
                                    );
                                    tempStart2.setMinutes(
                                        tempStart2.getMinutes() + startMinute,
                                    );

                                    tempEnd2.setDate(
                                        tempEnd2.getDate() + i + 2,
                                    );
                                    tempEnd2.setHours(
                                        tempEnd2.getHours() + startHour,
                                    );
                                    tempEnd2.setMinutes(
                                        tempEnd2.getMinutes() + startMinute,
                                    );
                                    tempEnd2.setSeconds(
                                        tempEnd2.getSeconds() - 1,
                                    );

                                    let objQuantity = {};
                                    objQuantity.TimeStamp = tempStart;
                                    objQuantity.Value = null;

                                    let indexForwardStart = 0;
                                    let indexForwardEnd = 0;
                                    let indexReverseStart = 0;
                                    let indexReverseEnd = 0;

                                    let find = listIndexFoward.find(
                                        (el) =>
                                            el.TimeStamp >= tempStart &&
                                            el.TimeStamp <= tempEnd,
                                    );

                                    if (find != undefined) {
                                        indexForwardStart = find.Value;
                                    }

                                    find = listIndexFoward.find(
                                        (el) =>
                                            el.TimeStamp >= tempStart2 &&
                                            el.TimeStamp <= tempEnd2,
                                    );
                                    if (find != undefined) {
                                        indexForwardEnd = find.Value;
                                    }

                                    find = listIndexReverse.find(
                                        (el) =>
                                            el.TimeStamp >= tempStart &&
                                            el.TimeStamp <= tempEnd,
                                    );
                                    if (find != undefined) {
                                        indexReverseStart = find.Value;
                                    }

                                    find = listIndexReverse.find(
                                        (el) =>
                                            el.TimeStamp >= tempStart2 &&
                                            el.TimeStamp <= tempEnd2,
                                    );
                                    if (find != undefined) {
                                        indexReverseEnd = find.Value;
                                    }

                                    objQuantity.Value =
                                        indexForwardEnd -
                                        indexReverseEnd -
                                        (indexForwardStart - indexReverseStart);

                                    obj.ListQuantity.push(objQuantity);
                                }
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
