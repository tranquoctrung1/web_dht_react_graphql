import {
    Center,
    Col,
    Grid,
    NumberInput,
    Select,
    Text,
    TextInput,
} from '@mantine/core';
import { DatePickerInput, DateTimePicker, TimeInput } from '@mantine/dates';
import { IconMapPinFilled, IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
import AddLocationInterface from '../types/addLocation.type';

import { useDispatch, useSelector } from 'react-redux';
import {
    AddLocationState,
    deleteLocation,
    updateAverageDate,
    updateAveragePrevTetHoliday,
    updateAverageTenDayPrevTetHoliday,
    updateDateCalclogger,
    updateKFactory,
    updateNextTetHoliday,
    updatePeriods,
    updatePrevTetHoliday,
    updateQuantityForPeriod,
    updateQuantityLogger,
    updateReason,
    updateSite,
    updateTenDayPrevTetHoliday,
    updateNumberLockPeriod,
} from '../features/addLocation';

import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';

import {
    useGetSiteByWaterSupplyQuery,
    useQuantityLoggerByTimeStampLazyQuery,
    useQuantityLoggerDayLazyQuery,
} from '../__generated__/graphql';

import { CurrentEndDatePreciousState } from '../features/currentEndDatePrecious';
import { CurrentStartDatePreciousState } from '../features/currentStartDatePrecious';

import Site from '../types/site.type';

import Swal from 'sweetalert2';

import {
    detectedDateRangeContinuous,
    detectedDateRemainInPeriod,
    detectedDateRemainInPeriodByMilisecond,
} from '../utils/utils';

const AddLocation = ({ index }: AddLocationInterface) => {
    const [searchValue, onSearchChange] = useState('');
    const [reason, setReason] = useState('');
    const [averageDate, setAverageDate] = useState<Date[]>([]);
    const [dateCalcLogger, setDateCalcLogger] = useState<Date[]>([]);
    const [period1, setPeriod1] = useState(null);
    const [period2, setPeriod2] = useState(null);
    const [period3, setPeriod3] = useState(null);
    const [quantityPeriod1, setQuantityPeriod1] = useState(0);
    const [quantityPeriod2, setQuantityPeriod2] = useState(0);
    const [quantityPeriod3, setQuantityPeriod3] = useState(0);
    const [siteid, setSiteId] = useState('');
    const [sitename, setSiteName] = useState('');
    const [quantityLogger, setQuantityLogger] = useState(0);
    const [prevTetHoliday, setPrevTetHoliday] = useState<Date[]>([]);
    const [nextTetHoliday, setNextTetHoliday] = useState<Date[]>([]);
    const [numberLockPeriod, setNumberLockPeriod] = useState(0);

    const addLocationState = useSelector(AddLocationState);

    const currentCompanyPreciousState = useSelector(
        CurrentCompanyPreciousState,
    );

    const currentStartDatePreciousState = useSelector(
        CurrentStartDatePreciousState,
    );
    const currentEndDatePreciousState = useSelector(
        CurrentEndDatePreciousState,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        let location = addLocationState[index];

        //@ts-ignore
        onSearchChange(location.Location);
        //@ts-ignore
        setSiteId(location.SiteId);
        //@ts-ignore
        setReason(location.Reason);
        //@ts-ignore
        setSiteName(location.Location);
        if (
            //@ts-ignore
            location.Periods[0].Period !== null &&
            //@ts-ignore
            location.Periods[0].Period !== undefined
        ) {
            //@ts-ignore
            setPeriod1(new Date(location.Periods[0].Period));
            //@ts-ignore
            setQuantityPeriod1(location.Periods[0].Quantity);
        }
        if (
            //@ts-ignore
            location.Periods[1].Period !== null &&
            //@ts-ignore
            location.Periods[1].Period !== undefined
        ) {
            //@ts-ignore
            setPeriod2(new Date(location.Periods[1].Period));
            //@ts-ignore
            setQuantityPeriod2(location.Periods[1].Quantity);
        }
        if (
            //@ts-ignore
            location.Periods[2].Period !== null &&
            //@ts-ignore
            location.Periods[2].Period !== undefined
        ) {
            //@ts-ignore
            setPeriod3(new Date(location.Periods[2].Period));
            //@ts-ignore
            setQuantityPeriod3(location.Periods[2].Quantity);
        }
        //@ts-ignore
        if (location.AverageDate.length > 0) {
            let tempAverageDate = [];
            //@ts-ignore
            for (let item of location.AverageDate) {
                for (let i of item) {
                    tempAverageDate.push(new Date(i));
                }
            }
            setAverageDate([...tempAverageDate]);
        }
        //@ts-ignore
        if (location.DateCalclogger.length > 0) {
            let tempDateCalclogger = [];
            let sumLogger = 0;
            //@ts-ignore
            for (let item of location.DateCalclogger) {
                if (item.Quantity !== null && item.Quantity !== undefined) {
                    sumLogger += item.Quantity;
                }

                if (item.DateRange.length > 0) {
                    for (let i of item.DateRange) {
                        tempDateCalclogger.push(new Date(i));
                    }
                }
            }

            setDateCalcLogger([...tempDateCalclogger]);
            setQuantityLogger(sumLogger);
        }

        if (
            //@ts-ignore
            location.PrevTetHoliday !== null &&
            //@ts-ignore
            location.PrevTetHoliday !== undefined
        ) {
            //@ts-ignore
            if (location.PrevTetHoliday.length > 0) {
                let temp = [];
                //@ts-ignore
                for (let item of location.PrevTetHoliday) {
                    temp.push(new Date(item));
                }

                setPrevTetHoliday([...temp]);
            } else {
                setPrevTetHoliday([]);
            }
        } else {
            setPrevTetHoliday([]);
        }

        if (
            //@ts-ignore
            location.NextTetHoliday !== null &&
            //@ts-ignore
            location.NextTetHoliday !== undefined
        ) {
            //@ts-ignore
            if (location.NextTetHoliday.length > 0) {
                let temp = [];
                //@ts-ignore
                for (let item of location.NextTetHoliday) {
                    temp.push(new Date(item));
                }

                setNextTetHoliday([...temp]);
            } else {
                setNextTetHoliday([]);
            }
        } else {
            setNextTetHoliday([]);
        }

        // //@ts-ignore
        // setNumberLockPeriod(location.NumberLockPeriod);
    }, [addLocationState[index]]);

    const { data, error, loading } = useGetSiteByWaterSupplyQuery({
        variables: { company: currentCompanyPreciousState },
    });

    const [
        getQuantityLoggerDay,
        { loading: loadingQuantity, error: errorQuantity, data: dataQuantity },
    ] = useQuantityLoggerDayLazyQuery();

    const [
        getQuantityLoggerDay2,
        {
            loading: loadingQuantity2,
            error: errorQuantity2,
            data: dataQuantity2,
        },
    ] = useQuantityLoggerDayLazyQuery();

    const [
        getQuantityLoggerDay3,
        {
            loading: loadingQuantity3,
            error: errorQuantity3,
            data: dataQuantity3,
        },
    ] = useQuantityLoggerDayLazyQuery();

    const [getQuantityLoggerPrevTet, { data: dataQuantityPrevTet }] =
        useQuantityLoggerDayLazyQuery();

    const [getQuantityLoggerTenDayTet, { data: dataQuantityTenDayTet }] =
        useQuantityLoggerDayLazyQuery();

    const [
        getQuantityLoggerByTimeStamp,
        { data: dataQuantityLoggerByTimeStamp },
    ] = useQuantityLoggerByTimeStampLazyQuery();

    //@ts-ignore
    let tempDataSite = [];

    if (data != null && data != undefined) {
        if (
            data.GetSiteByWaterSupply != null &&
            data.GetSiteByWaterSupply != undefined
        ) {
            if (data.GetSiteByWaterSupply.length > 0) {
                for (let site of data.GetSiteByWaterSupply) {
                    let obj: Site = {
                        // @ts-ignore comment
                        value: site._id,
                        // @ts-ignore comment
                        label: `${site._id} - ${site.Location}`,
                    };

                    tempDataSite.push(obj);
                }
            }
        }
    }

    const onCloseAddLocationClicked = () => {
        dispatch(deleteLocation(index));
    };

    const onSelectSiteChanged = (e: any) => {
        if (e !== null) {
            setSiteId(e);

            if (tempDataSite.length > 0) {
                //@ts-ignore
                let find = tempDataSite.find((el) => el.value === e);
                if (find !== undefined) {
                    setSiteName(find.label);

                    let obj = {
                        index: index,
                        SiteId: e,
                        Location: find.label,
                    };
                    // @ts-ignore
                    dispatch(updateSite(obj));
                }
            }
        } else {
            let obj = {
                index: index,
                SiteId: '',
                Location: '',
            };
            // @ts-ignore
            dispatch(updateSite(obj));
        }
    };

    const getQuantity = (e: any) => {
        if (e !== null) {
            let isAllow = true;

            let dayOfStartDate = 1;
            let dayOfEndDate = 1;

            if (currentStartDatePreciousState !== 0) {
                dayOfStartDate = new Date(
                    //@ts-ignore
                    currentStartDatePreciousState,
                ).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày bắt đầu!!!',
                });
            }

            if (currentEndDatePreciousState !== 0) {
                //@ts-ignore
                dayOfEndDate = new Date(currentEndDatePreciousState).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày kết thúc!!!',
                });
            }

            if (isAllow) {
                let startDate = new Date(
                    e.getFullYear(),
                    e.getMonth() - 1,
                    dayOfStartDate,
                    0,
                    0,
                    0,
                );
                let endDate = new Date(
                    e.getFullYear(),
                    e.getMonth(),
                    dayOfEndDate,
                    0,
                    0,
                    0,
                );

                let totalMiliSecondStartDate = startDate.getTime();
                let totalMiliSecondEndDate = endDate.getTime();

                getQuantityLoggerDay({
                    variables: {
                        siteid: siteid,
                        company: currentCompanyPreciousState,
                        start: totalMiliSecondStartDate.toString(),
                        end: totalMiliSecondEndDate.toString(),
                    },
                }).then((res) => {
                    if (res.data !== undefined) {
                        let obj = {
                            index: index,
                            indexPeriod: 0,
                            //@ts-ignore
                            Period: e.getTime(),
                            Quantity: res.data.QuantityLoggerDay,
                        };
                        //@ts-ignore
                        dispatch(updatePeriods(obj));
                        setQuantityPeriod1(res.data.QuantityLoggerDay);
                    }
                });
            }
        }
    };

    const getQuantity2 = (e: any) => {
        if (e !== null) {
            let isAllow = true;

            let dayOfStartDate = 1;
            let dayOfEndDate = 1;

            if (currentStartDatePreciousState !== 0) {
                dayOfStartDate = new Date(
                    //@ts-ignore
                    currentStartDatePreciousState,
                ).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày bắt đầu!!!',
                });
            }

            if (currentEndDatePreciousState !== 0) {
                //@ts-ignore
                dayOfEndDate = new Date(currentEndDatePreciousState).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày kết thúc!!!',
                });
            }

            if (isAllow) {
                let startDate = new Date(
                    e.getFullYear(),
                    e.getMonth() - 1,
                    dayOfStartDate,
                    0,
                    0,
                    0,
                );
                let endDate = new Date(
                    e.getFullYear(),
                    e.getMonth(),
                    dayOfEndDate,
                    0,
                    0,
                    0,
                );

                let totalMiliSecondStartDate = startDate.getTime();
                let totalMiliSecondEndDate = endDate.getTime();

                getQuantityLoggerDay2({
                    variables: {
                        siteid: siteid,
                        company: currentCompanyPreciousState,
                        start: totalMiliSecondStartDate.toString(),
                        end: totalMiliSecondEndDate.toString(),
                    },
                }).then((res) => {
                    if (res.data !== undefined) {
                        let obj = {
                            index: index,
                            indexPeriod: 1,
                            //@ts-ignore
                            Period: e.getTime(),
                            Quantity: res.data.QuantityLoggerDay,
                        };
                        //@ts-ignore
                        dispatch(updatePeriods(obj));
                        setQuantityPeriod2(res.data.QuantityLoggerDay);
                    }
                });
            }
        }
    };

    const getQuantity3 = (e: any) => {
        if (e !== null) {
            let isAllow = true;

            let dayOfStartDate = 1;
            let dayOfEndDate = 1;

            if (currentStartDatePreciousState !== 0) {
                dayOfStartDate = new Date(
                    //@ts-ignore
                    currentStartDatePreciousState,
                ).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày bắt đầu!!!',
                });
            }

            if (currentEndDatePreciousState !== 0) {
                //@ts-ignore
                dayOfEndDate = new Date(currentEndDatePreciousState).getDate();
            } else {
                isAllow = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Chưa chọn ngày kết thúc!!!',
                });
            }

            if (isAllow) {
                let startDate = new Date(
                    e.getFullYear(),
                    e.getMonth() - 1,
                    dayOfStartDate,
                    0,
                    0,
                    0,
                );
                let endDate = new Date(
                    e.getFullYear(),
                    e.getMonth(),
                    dayOfEndDate,
                    0,
                    0,
                    0,
                );

                let totalMiliSecondStartDate = startDate.getTime();
                let totalMiliSecondEndDate = endDate.getTime();

                getQuantityLoggerDay3({
                    variables: {
                        siteid: siteid,
                        company: currentCompanyPreciousState,
                        start: totalMiliSecondStartDate.toString(),
                        end: totalMiliSecondEndDate.toString(),
                    },
                }).then((res) => {
                    if (res.data !== undefined) {
                        let obj = {
                            index: index,
                            indexPeriod: 2,
                            //@ts-ignore
                            Period: e.getTime(),
                            Quantity: res.data.QuantityLoggerDay,
                        };
                        //@ts-ignore
                        dispatch(updatePeriods(obj));
                        setQuantityPeriod3(res.data.QuantityLoggerDay);
                    }
                });
            }
        }
    };

    const onPeriod1Changed = (e: any) => {
        setPeriod1(e);
        if (e != null) {
            getQuantity(e);
        } else {
            let obj = {
                index: index,
                indexPeriod: 0,
                Period: null,
                Quantity: 0,
            };
            // @ts-ignore
            dispatch(updatePeriods(obj));
        }
    };

    const onPeriod2Changed = (e: any) => {
        setPeriod2(e);
        if (e != null) {
            getQuantity2(e);
        } else {
            let obj = {
                index: index,
                indexPeriod: 1,
                Period: null,
                Quantity: 0,
            };
            // @ts-ignore
            dispatch(updatePeriods(obj));
        }
    };

    const onPeriod3Changed = (e: any) => {
        setPeriod3(e);
        if (e != null) {
            getQuantity3(e);
        } else {
            let obj = {
                index: index,
                indexPeriod: 2,
                Period: null,
                Quantity: 0,
            };
            // @ts-ignore
            dispatch(updatePeriods(obj));
        }
    };

    const onAverageDateBlured = (e: any) => {
        if (averageDate.length > 0) {
            let averageMiliSeconds = averageDate.map((el) => el.getTime());

            let obj = {
                index: index,
                AverageDate: detectedDateRangeContinuous(averageMiliSeconds),
            };

            setDateCalcLogger([
                ...detectedDateRemainInPeriod(
                    averageMiliSeconds,
                    // @ts-ignore
                    currentStartDatePreciousState,
                    currentEndDatePreciousState,
                ),
            ]);

            //@ts-ignore
            dispatch(updateAverageDate(obj));

            let resultDateRange = detectedDateRemainInPeriodByMilisecond(
                averageMiliSeconds,
                //@ts-ignore
                currentStartDatePreciousState,
                currentEndDatePreciousState,
            );

            let timeContinuous = detectedDateRangeContinuous(resultDateRange);

            if (timeContinuous.length > 0) {
                getQuantityLoggerByTimeStamp({
                    variables: {
                        company: currentCompanyPreciousState,
                        siteid: siteid,
                        start: currentStartDatePreciousState.toString(),
                        end: currentEndDatePreciousState.toString(),
                    },
                }).then((res) => {
                    if (res.data !== undefined) {
                        let temp = [];

                        let quantityLoggerLocal = 0;
                        for (let date of timeContinuous) {
                            let sumQuantity = 0;
                            let timeRange = date;
                            let from = date[0];
                            let to = date[date.length - 1];

                            if (
                                res.data.QuantityLoggerByTimeStamp !== null &&
                                res.data.QuantityLoggerByTimeStamp !==
                                    undefined &&
                                res.data.QuantityLoggerByTimeStamp.length > 0
                            ) {
                                if (
                                    res.data.QuantityLoggerByTimeStamp[0]
                                        .ListQuantity !== null &&
                                    res.data.QuantityLoggerByTimeStamp[0]
                                        .ListQuantity !== undefined &&
                                    res.data.QuantityLoggerByTimeStamp[0]
                                        .ListQuantity.length > 0
                                ) {
                                    for (let i of date) {
                                        let find =
                                            res.data.QuantityLoggerByTimeStamp[0].ListQuantity.find(
                                                (el) =>
                                                    new Date(
                                                        //@ts-ignore
                                                        el.TimeStamp,
                                                    ).getTime() ===
                                                    i + 25200000,
                                            );
                                        if (find) {
                                            if (
                                                find.Value !== null &&
                                                find.Value !== undefined
                                            ) {
                                                sumQuantity += find.Value;
                                                quantityLoggerLocal +=
                                                    find.Value;
                                            } else {
                                                sumQuantity += 0;
                                                quantityLoggerLocal += 0;
                                            }
                                        }
                                    }
                                }
                            }

                            let obj = {
                                Quantity: sumQuantity,
                                From: from,
                                To: to,
                                DateRange: timeRange,
                            };

                            temp.push(obj);
                        }

                        let obj = {
                            index: index,
                            DateCalclogger: temp,
                        };

                        // @ts-ignore
                        dispatch(updateDateCalclogger(obj));

                        let obj2 = {
                            index: index,
                            QuantityLogger: quantityLoggerLocal,
                        };
                        // @ts-ignore
                        dispatch(updateQuantityLogger(obj2));
                        setQuantityLogger(quantityLoggerLocal);
                    }
                });
            } else {
                let obj = {
                    index: index,
                    DateCalclogger: [],
                };

                // @ts-ignore
                dispatch(updateDateCalclogger(obj));
                setQuantityLogger(0);
            }
        }
    };

    const onQuantityPeriod1Blured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseInt(e.target.value);
        }

        let obj = {
            index: index,
            indexPeriod: 0,
            Quantity: number,
        };
        // @ts-ignore
        dispatch(updateQuantityForPeriod(obj));
        setQuantityPeriod1(number);
    };

    const onQuantityPeriod2Blured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseInt(e.target.value);
        }

        let obj = {
            index: index,
            indexPeriod: 1,
            Quantity: number,
        };
        // @ts-ignore
        dispatch(updateQuantityForPeriod(obj));
        setQuantityPeriod2(number);
    };

    const onQuantityPeriod3Blured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseInt(e.target.value);
        }

        let obj = {
            index: index,
            indexPeriod: 2,
            Quantity: number,
        };
        // @ts-ignore
        dispatch(updateQuantityForPeriod(obj));
        setQuantityPeriod3(number);
    };

    const onReasonBlured = (e: any) => {
        let obj = {
            index: index,
            Reason: reason,
        };

        //@ts-ignore
        dispatch(updateReason(obj));
    };

    const onPreTetHolidayBlured = (e: any) => {
        let prevTetHolidayMilisecond = prevTetHoliday.map((el) => el.getTime());

        let obj = {
            index: index,
            PrevTetHoliday: prevTetHolidayMilisecond,
        };

        //@ts-ignore
        dispatch(updatePrevTetHoliday(obj));

        if (prevTetHoliday.length > 0) {
            let tempMiliSecond = [];

            for (let i = 10; i >= 1; i--) {
                let temp = new Date(prevTetHoliday[0]);
                tempMiliSecond.push(temp.setDate(temp.getDate() - i));
            }

            let objUpdateTenDay = {
                index: index,
                TenDayPrevTetHoliday: tempMiliSecond,
            };

            //@ts-ignore
            dispatch(updateTenDayPrevTetHoliday(objUpdateTenDay));

            const getQuantityLoggerPrevTetData = getQuantityLoggerPrevTet({
                variables: {
                    siteid: siteid,
                    company: currentCompanyPreciousState,
                    start: prevTetHolidayMilisecond[0].toString(),
                    end: prevTetHolidayMilisecond[
                        prevTetHolidayMilisecond.length - 1
                    ].toString(),
                },
            });

            const getQuantityLoggerTenDayTetData = getQuantityLoggerTenDayTet({
                variables: {
                    siteid: siteid,
                    company: currentCompanyPreciousState,
                    start: tempMiliSecond[0].toString(),
                    end: tempMiliSecond[tempMiliSecond.length - 1].toString(),
                },
            });

            Promise.all([
                getQuantityLoggerPrevTetData,
                getQuantityLoggerTenDayTetData,
            ])
                .then((res) => {
                    if (res != null && res != undefined) {
                        if (res[0].data !== null && res[0].data !== undefined) {
                            if (
                                res[0].data.QuantityLoggerDay !== null &&
                                res[0].data.QuantityLoggerDay !== undefined
                            ) {
                                let averageTet =
                                    res[0].data.QuantityLoggerDay /
                                    prevTetHolidayMilisecond.length;

                                averageTet = averageTet
                                    ? parseFloat(averageTet.toFixed(2))
                                    : 0;

                                let objUpdateAverageTet = {
                                    index: index,
                                    AveragePrevTetHoliday: averageTet,
                                };

                                dispatch(
                                    updateAveragePrevTetHoliday(
                                        //@ts-ignore
                                        objUpdateAverageTet,
                                    ),
                                );

                                if (
                                    res[1].data !== null &&
                                    res[1].data !== undefined
                                ) {
                                    if (
                                        res[1].data.QuantityLoggerDay !==
                                            null &&
                                        res[1].data.QuantityLoggerDay !==
                                            undefined
                                    ) {
                                        let averageTenDayTet =
                                            res[0].data.QuantityLoggerDay /
                                            tempMiliSecond.length;

                                        averageTenDayTet = averageTenDayTet
                                            ? parseFloat(
                                                  averageTenDayTet.toFixed(2),
                                              )
                                            : 0;

                                        let objUpdateAverageTenDayTet = {
                                            index: index,
                                            AverageTenDayPrevTetHoliday:
                                                averageTenDayTet,
                                        };

                                        dispatch(
                                            updateAverageTenDayPrevTetHoliday(
                                                //@ts-ignore
                                                objUpdateAverageTenDayTet,
                                            ),
                                        );

                                        let kFactory =
                                            averageTet / averageTenDayTet;

                                        kFactory = kFactory
                                            ? parseFloat(kFactory.toFixed(2))
                                            : 1;

                                        let objUpdateKFactory = {
                                            index: index,
                                            KFactory: kFactory,
                                        };

                                        dispatch(
                                            //@ts-ignore
                                            updateKFactory(objUpdateKFactory),
                                        );
                                    }
                                }
                            }
                        }
                    }
                })
                .catch((err) => console.log(err));
        } else {
            let objUpdateTenDay = {
                index: index,
                TenDayPrevTetHoliday: [],
            };

            //@ts-ignore
            dispatch(updateTenDayPrevTetHoliday(objUpdateTenDay));

            let objUpdateAverageTet = {
                index: index,
                AveragePrevTetHoliday: 0,
            };

            dispatch(
                updateAveragePrevTetHoliday(
                    //@ts-ignore
                    objUpdateAverageTet,
                ),
            );

            let objUpdateAverageTenDayTet = {
                index: index,
                AverageTenDayPrevTetHoliday: 0,
            };

            dispatch(
                updateAveragePrevTetHoliday(
                    //@ts-ignore
                    objUpdateAverageTenDayTet,
                ),
            );

            let objUpdateKFactory = {
                index: index,
                KFactory: 1,
            };

            dispatch(
                //@ts-ignore
                updateKFactory(objUpdateKFactory),
            );
        }
    };

    const onNextTetHolidayBlured = (e: any) => {
        let nextTetHolidayMilisecond = nextTetHoliday.map((el) => el.getTime());

        let obj = {
            index: index,
            NextTetHoliday: nextTetHolidayMilisecond,
        };

        //@ts-ignore
        dispatch(updateNextTetHoliday(obj));
    };

    const onNumberLockPeriodBlured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseFloat(e.target.value);
        }

        let obj = {
            index: index,
            NumberLockPeriod: number,
        };
        // @ts-ignore
        dispatch(updateNumberLockPeriod(obj));
    };

    return (
        <Grid>
            <Col
                span={12}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <IconX
                    size="1.5rem"
                    color="red"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddLocationClicked}
                ></IconX>
            </Col>

            <Col span={12}>
                <Select
                    label={
                        <>
                            <Center>
                                <IconMapPinFilled size="1.125rem"></IconMapPinFilled>
                                <Text weight={500}>Vị trí</Text>
                            </Center>
                        </>
                    }
                    placeholder="Chọn vị trí"
                    searchable
                    value={siteid}
                    nothingFound="Không tìm thấy"
                    data={tempDataSite}
                    clearable
                    onChange={onSelectSiteChanged}
                />
            </Col>
            <Col span={12}>
                <TextInput
                    placeholder="Lý do tính trung bình"
                    label="Lý do tính trung bình"
                    value={reason}
                    onBlur={onReasonBlured}
                    //@ts-ignore
                    onChange={(e) => setReason(e.currentTarget.value)}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    valueFormat="DD/MM/YYYY"
                    type="multiple"
                    label="Ngày tết năm trước"
                    placeholder="Ngày tết năm trước"
                    value={prevTetHoliday}
                    onChange={setPrevTetHoliday}
                    mx="auto"
                    onBlur={onPreTetHolidayBlured}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    valueFormat="DD/MM/YYYY"
                    type="multiple"
                    label="Ngày tết năm sau"
                    placeholder="Ngày tết năm sau"
                    value={nextTetHoliday}
                    onChange={setNextTetHoliday}
                    mx="auto"
                    onBlur={onNextTetHolidayBlured}
                />
            </Col>
            <Col span={6}>
                <DateTimePicker
                    clearable
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    value={period1}
                    mx="auto"
                    onChange={onPeriod1Changed}
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    onBlur={onQuantityPeriod1Blured}
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    value={quantityPeriod1}
                />
            </Col>
            <Col span={6}>
                <DateTimePicker
                    clearable
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    value={period2}
                    mx="auto"
                    onChange={onPeriod2Changed}
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    onBlur={onQuantityPeriod2Blured}
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    value={quantityPeriod2}
                />
            </Col>
            <Col span={6}>
                <DateTimePicker
                    clearable
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    mx="auto"
                    value={period3}
                    onChange={onPeriod3Changed}
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    onBlur={onQuantityPeriod3Blured}
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    value={quantityPeriod3}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    valueFormat="DD/MM/YYYY"
                    type="multiple"
                    label="Ngày trung bình"
                    placeholder="Ngày trung bình"
                    value={averageDate}
                    onChange={setAverageDate}
                    mx="auto"
                    onBlur={onAverageDateBlured}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    valueFormat="DD/MM/YYYY"
                    type="multiple"
                    label="Ngày tính sản lượng logger"
                    placeholder="Ngày tính sản lượng logger"
                    disabled
                    value={dateCalcLogger}
                    mx="auto"
                />
            </Col>
            <Col span={12}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng logger"
                    value={quantityLogger}
                    disabled
                />
            </Col>
            {/* <Col span={12}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Số chốt kỳ"
                    value={numberLockPeriod}
                    onBlur={onNumberLockPeriodBlured}
                />
            </Col> */}
        </Grid>
    );
};

export default AddLocation;
