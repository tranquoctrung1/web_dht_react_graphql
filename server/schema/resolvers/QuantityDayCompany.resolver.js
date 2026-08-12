const DataIndexLoggerModel = require('../../models/DataIndexLogger.model');
const SiteSiteModel = require('../../models/SiteSite.model');
const DeviceSiteConfigModel = require('../../models/DeviceSiteConfig.model');
const DeviceMeterModel = require('../../models/DeviceMeter.model');
const DataManualModel = require('../../models/DataManual.model');
const PreciousModel = require('../../models/Precious.model');
const Utils = require('../../utils');

const getDayKey = (date) =>
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const eachDay = function* (start, end) {
    const cur = new Date(start);
    cur.setHours(0, 0, 0, 0);
    const last = new Date(end);
    last.setHours(0, 0, 0, 0);
    while (cur <= last) {
        yield new Date(cur);
        cur.setDate(cur.getDate() + 1);
    }
};

// Once a "biên bản" (Precious) is saved, its "Tính TB" / "Chỉ số" / "Khóa
// van" entries must immediately be reflected in the per-day company
// production report — not just in the biên bản's own on-screen preview.
// Since QuantityDayCompany reports per day but these entries are recorded
// per period/date-range, each entry's total is spread evenly across the
// days it covers so the daily figures sum back to the recorded total.
const getPreciousOverrides = async (company, startDate, endDate) => {
    const preciousList = await PreciousModel.GetPreciousByCompany(company);

    const lockedBySite = {};
    const averageBySite = {};
    const indexPeriodsBySite = {};

    for (const precious of preciousList) {
        const periodStart = new Date(precious.Start);
        const periodEnd = new Date(precious.End);

        // Skip biên bản periods that don't overlap the requested range.
        if (periodEnd < startDate || periodStart > endDate) {
            continue;
        }

        if (Array.isArray(precious.LockValve)) {
            for (const lv of precious.LockValve) {
                if (!lockedBySite[lv.SiteId]) {
                    lockedBySite[lv.SiteId] = [];
                }
                lockedBySite[lv.SiteId].push({ periodStart, periodEnd });
            }
        }

        if (Array.isArray(precious.Location)) {
            for (const loc of precious.Location) {
                if (
                    loc.TotalQuantity === null ||
                    loc.TotalQuantity === undefined ||
                    !Array.isArray(loc.AverageDate) ||
                    loc.AverageDate.length === 0
                ) {
                    continue;
                }

                const days = [];
                for (const range of loc.AverageDate) {
                    if (!Array.isArray(range) || range.length < 2) {
                        continue;
                    }
                    const from = new Date(range[0]);
                    const to = new Date(range[1]);
                    if (isNaN(from) || isNaN(to)) {
                        continue;
                    }
                    for (const d of eachDay(from, to)) {
                        days.push(d);
                    }
                }

                if (days.length === 0) {
                    continue;
                }

                const valuePerDay = loc.TotalQuantity / days.length;

                if (!averageBySite[loc.SiteId]) {
                    averageBySite[loc.SiteId] = {};
                }
                for (const d of days) {
                    averageBySite[loc.SiteId][getDayKey(d)] = valuePerDay;
                }
            }
        }

        if (Array.isArray(precious.Index)) {
            for (const idx of precious.Index) {
                if (
                    idx.PreviousPeriodIndex === null ||
                    idx.PreviousPeriodIndex === undefined ||
                    idx.NextPeriodIndex === null ||
                    idx.NextPeriodIndex === undefined
                ) {
                    continue;
                }

                if (!indexPeriodsBySite[idx.SiteId]) {
                    indexPeriodsBySite[idx.SiteId] = [];
                }
                indexPeriodsBySite[idx.SiteId].push({
                    periodStart,
                    periodEnd,
                    total: idx.NextPeriodIndex - idx.PreviousPeriodIndex,
                });
            }
        }
    }

    return { lockedBySite, averageBySite, indexPeriodsBySite };
};

const isDateLocked = (ranges, date) => {
    if (ranges === undefined) {
        return false;
    }
    return ranges.some((r) => date >= r.periodStart && date <= r.periodEnd);
};

const getAverageValue = (bySite, date) => {
    if (bySite === undefined) {
        return undefined;
    }
    return bySite[getDayKey(date)];
};

// Index total is period-level (one number for the whole biên bản), so it's
// spread evenly across the days of that period. Sign mirrors the client's
// renderWaterMeter: reversed when the site feeds water FROM this company
// TO another distribution company (IstDistributionCompany set and not
// equal to the company being reported on).
const getIndexValue = (periods, date, siteIstDistributionCompany, company) => {
    if (periods === undefined) {
        return undefined;
    }

    const period = periods.find(
        (p) => date >= p.periodStart && date <= p.periodEnd,
    );
    if (period === undefined) {
        return undefined;
    }

    const totalDays = Math.round(
        (period.periodEnd - period.periodStart) / 86400000 + 1,
    );
    let valuePerDay = period.total / totalDays;

    if (
        siteIstDistributionCompany !== '' &&
        siteIstDistributionCompany !== null &&
        siteIstDistributionCompany !== undefined &&
        siteIstDistributionCompany !== company
    ) {
        valuePerDay *= -1;
    }

    return valuePerDay;
};

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

            let totalDay = Utils.CalculateSpcaeDay(startDate, endDate) + 1;

            let { lockedBySite, averageBySite, indexPeriodsBySite } =
                await getPreciousOverrides(company, startDate, endDate);

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

                                    // "Tính TB" / "Chỉ số" / "Khóa van" saved in a biên
                                    // bản take precedence over manual/logger data, same
                                    // priority order as the client's renderWaterMeter
                                    // (average, then index, then lock-valve last/wins).
                                    const avgValue = getAverageValue(
                                        averageBySite[site._id],
                                        tempStartDataManual,
                                    );
                                    if (avgValue !== undefined) {
                                        objQuantity.Value = avgValue;
                                        objQuantity.IsEnoughData = true;
                                    }

                                    const idxValue = getIndexValue(
                                        indexPeriodsBySite[site._id],
                                        tempStartDataManual,
                                        site.IstDistributionCompany,
                                        company,
                                    );
                                    if (idxValue !== undefined) {
                                        objQuantity.Value = idxValue;
                                        objQuantity.IsEnoughData = true;
                                    }

                                    if (
                                        isDateLocked(
                                            lockedBySite[site._id],
                                            tempStartDataManual,
                                        )
                                    ) {
                                        objQuantity.Value = 0;
                                        objQuantity.IsEnoughData = true;
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

                                const avgValue = getAverageValue(
                                    averageBySite[site._id],
                                    tempStart2,
                                );
                                if (avgValue !== undefined) {
                                    objQuantity.Value = avgValue;
                                    objQuantity.IsEnoughData = true;
                                }

                                const idxValue = getIndexValue(
                                    indexPeriodsBySite[site._id],
                                    tempStart2,
                                    site.IstDistributionCompany,
                                    company,
                                );
                                if (idxValue !== undefined) {
                                    objQuantity.Value = idxValue;
                                    objQuantity.IsEnoughData = true;
                                }

                                if (
                                    isDateLocked(
                                        lockedBySite[site._id],
                                        tempStart2,
                                    )
                                ) {
                                    objQuantity.Value = 0;
                                    objQuantity.IsEnoughData = true;
                                }

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
