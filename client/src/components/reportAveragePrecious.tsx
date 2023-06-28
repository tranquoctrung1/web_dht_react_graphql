import { Button, Center, Col, Grid, Select, Space, Text } from '@mantine/core';
import { DateInput, DateTimePicker } from '@mantine/dates';

import {
    IconBookmarkEdit,
    IconDeviceFloppy,
    IconFileX,
    IconMapPinFilled,
    IconPlus,
    IconTrash,
} from '@tabler/icons-react';

import { useEffect, useState } from 'react';

import {
    useDeletePreciousMutation,
    useGetCompaniesQuery,
    useGetPreciousByCompanyLazyQuery,
    useInsertPreciousMutation,
    useQuantityLoggerDayWaterSupplyLazyQuery,
    useUpdatePreciousMutation,
} from '../__generated__/graphql';

import Companies from '../types/companies.type';

import AddIndex from './addIndex';
import AddLocation from './addLocation';
import AddLockValve from './addLockValve';
import AddSubtractWaterB1 from './addSubtractWaterB1';
import AddSubtractWaterB2 from './addSubtractWaterB2';
import AddWaterCustomer from './addWaterCustomer';

import { useDispatch, useSelector } from 'react-redux';

import { AddIndexState, addIndex, addIndexs } from '../features/addIndex';
import {
    AddLocationState,
    addLocation,
    addLocations,
} from '../features/addLocation';
import {
    AddLockValveState,
    addLockValve,
    addLockValves,
} from '../features/addLockValve';
import {
    AddSubtractWaterB1State,
    addSubtractWaterB1,
    addSubtractWaterB1s,
} from '../features/addSubtractWaterB1';
import {
    AddSubtractWaterB2State,
    addSubtractWaterB2,
    addSubtractWaterB2s,
} from '../features/addSubtractWaterB2';
import {
    AddWaterCustomerState,
    addWaterCustomer,
    addWaterCustomers,
} from '../features/addWaterCustomer';
import {
    CurrentCompanyPreciousState,
    setCurrentCompanyPrecious,
} from '../features/currentCompanyPercious';

import {
    CurrentCompanyNamePreciousState,
    setCurrentCompanyNamePrecious,
} from '../features/currentCompanyNamePrecious';

import {
    CurrentEndDatePreciousState,
    setCurrentEndDatePrecious,
} from '../features/currentEndDatePrecious';
import {
    CurrentStartDatePreciousState,
    setCurrentStartDatePrecious,
} from '../features/currentStartDatePrecious';

import {
    QuantityWaterSupplyState,
    setQuantityWaterSupply,
} from '../features/quantityWaterSupply';

import {
    ListPreciousState,
    addListPrecious,
    deleteListPrecious,
    insertListPrecious,
    updateListPrecious,
} from '../features/listPrecious';

import currentPreciousId, {
    CurrentPreciousIdState,
    setCurrentPreciousId,
} from '../features/currentPreciousId';

import AveragePrecious from './averagePrecious';
import QuantityPrecious from './quantityPrecious';

import {
    convertDatePeriodToMonth,
    convertDatePeriodToYear,
    convertDateToPeriod,
    convertStringMilisecondToStringDate,
} from '../utils/utils';

import { getFontSizeValue } from '@mantine/core/lib/Box/style-system-props/value-getters/get-font-size-value';
import Swal from 'sweetalert2';

const ReportAveragePrecious = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [tetHolidayPre, setTetHolidayPre] = useState(null);
    const [tetHoliday, setTetHoliday] = useState(null);

    const [isLoadingQuantity, setIsLoadingQuantity] = useState(false);

    const addLocationState = useSelector(AddLocationState);
    const addIndexState = useSelector(AddIndexState);
    const addLockValveState = useSelector(AddLockValveState);
    const addSubtractWaterB1State = useSelector(AddSubtractWaterB1State);
    const addSubtractWaterB2State = useSelector(AddSubtractWaterB2State);
    const addWaterCustomerState = useSelector(AddWaterCustomerState);
    const currentCompanyPreciousState = useSelector(
        CurrentCompanyPreciousState,
    );
    const currentStartDatePreciousState = useSelector(
        CurrentStartDatePreciousState,
    );
    const currentEndDatePreciousState = useSelector(
        CurrentEndDatePreciousState,
    );
    const quantityWaterSupplyState = useSelector(QuantityWaterSupplyState);
    const currentCompanyNamePreciousState = useSelector(
        CurrentCompanyNamePreciousState,
    );
    const listPreciousState = useSelector(ListPreciousState);
    const currentPreciousIdState = useSelector(CurrentPreciousIdState);

    const dispatch = useDispatch();

    const { data, error, loading } = useGetCompaniesQuery();

    const [getQuantityDayLoggerWaterSupply, { data: dataQuantity }] =
        useQuantityLoggerDayWaterSupplyLazyQuery();

    const [getPreciousByCompany, { data: dataPrecious }] =
        useGetPreciousByCompanyLazyQuery();

    const [insertPrecious, { data: insertPreciousDataReturn }] =
        useInsertPreciousMutation();

    const [updatePrecious, { data: updatePreciousDataReturn }] =
        useUpdatePreciousMutation();

    const [deletePrecious, { data: deletePreciousDataReturn }] =
        useDeletePreciousMutation();

    //@ts-ignore
    let tempData = [];

    if (data != null && data != undefined) {
        if (data.GetCompanies != null && data.GetCompanies != undefined) {
            if (data.GetCompanies.length > 0) {
                for (let company of data.GetCompanies) {
                    let obj: Companies = {
                        // @ts-ignore comment
                        value: company.Company,
                        // @ts-ignore comment
                        label: `${company.Company} - ${company.Description}`,
                    };

                    tempData.push(obj);
                }
            }
        }
    }

    const getDataQuantity = (company: string, start: number, end: number) => {
        if (
            company !== '' &&
            company !== undefined &&
            company !== null &&
            start != null &&
            start !== undefined &&
            start !== 0 &&
            end != null &&
            end !== undefined &&
            end !== 0
        ) {
            setIsLoadingQuantity(true);
            getQuantityDayLoggerWaterSupply({
                variables: {
                    company: company,
                    start: start.toString(),
                    end: end.toString(),
                },
            })
                .then((res) => {
                    if (res.data !== undefined) {
                        dispatch(
                            setQuantityWaterSupply(
                                //@ts-ignore
                                res.data.QuantityLoggerDayWaterSupply,
                            ),
                        );
                    }

                    setIsLoadingQuantity(false);
                })
                .catch((err) => console.log(err));
        }
    };

    const onStartDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setStartDate(e);
            dispatch(setCurrentStartDatePrecious(e.getTime()));

            //@ts-ignore
            getDataQuantity(
                currentCompanyPreciousState,
                e.getTime(),
                //@ts-ignore
                currentEndDatePreciousState,
            );
        }
    };

    const onEndDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setEndDate(e);
            dispatch(setCurrentEndDatePrecious(e.getTime()));

            //@ts-ignore
            getDataQuantity(
                //@ts-ignore
                currentCompanyPreciousState,
                //@ts-ignore
                currentStartDatePreciousState,
                e.getTime(),
            );
        }
    };

    const onTetHoliDayPreChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setTetHolidayPre(e.getTime());
        }
    };

    const onTetHoliDayChanged = (e: any) => {
        setTetHoliday(e.getTime());
    };

    const onCompanyChanged = (e: any) => {
        dispatch(setCurrentCompanyPrecious(e));

        if (tempData.length > 0) {
            //@ts-ignore
            let find = tempData.find((el) => el.value === e);

            if (find !== undefined) {
                dispatch(setCurrentCompanyNamePrecious(find.label));
            }
        }

        //@ts-ignore
        getDataQuantity(
            e,
            //@ts-ignore
            currentStartDatePreciousState,
            //@ts-ignore
            currentEndDatePreciousState,
        );

        getPreciousByCompany({
            variables: {
                company: e,
            },
        })
            .then((res) => {
                if (res.data !== undefined) {
                    //@ts-ignore
                    if (res.data.GetPreciousByCompany.length > 0) {
                        let temp = [];
                        //@ts-ignore
                        for (let item of res.data.GetPreciousByCompany) {
                            let i = JSON.parse(JSON.stringify(item));
                            temp.push(i);
                        }

                        //@ts-ignore
                        dispatch(addListPrecious(temp));
                    } else {
                        dispatch(addListPrecious([]));
                    }
                }
            })
            .catch((err) => console.log(err));
    };

    const onAddLocationClicked = () => {
        let obj = {
            SiteId: '',
            Location: '',
            Periods: [{}, {}, {}],
            AverageDate: [],
            DateCalclogger: [],
            QuantityLogger: 0,
            TotalQuantity: 0,
        };
        // @ts-ignore
        dispatch(addLocation(obj));
    };

    const onAddIndexClicked = () => {
        let obj = {
            SiteId: '',
            Location: '',
            PreviousPeriodIndex: '',
            NextPeriodIndex: '',
        };

        //@ts-ignore
        dispatch(addIndex(obj));
    };

    const onAddLockValveClicked = () => {
        let obj = {
            SiteId: '',
            Location: '',
        };

        //@ts-ignore
        dispatch(addLockValve(obj));
    };

    const onAddSubtractB1Clicked = () => {
        let obj = {
            NumberPrecious: '',
            Content: '',
            Provider: '',
            AmountWater: 0,
            Note: '',
        };

        //@ts-ignore
        dispatch(addSubtractWaterB1(obj));
    };

    const onAddSubtractB2Clicked = () => {
        let obj = {
            NumberPrecious: '',
            Content: '',
            Provider: '',
            AmountWater: 0,
            Note: '',
        };

        //@ts-ignore
        dispatch(addSubtractWaterB2(obj));
    };

    const onAddWaterCustomerClicked = () => {
        let obj = {
            NumberPrecious: '',
            DatePublished: '',
            AmountMeter: 0,
            AmountWater: 0,
            Note: '',
        };

        //@ts-ignore
        dispatch(addWaterCustomer(obj));
    };

    const onExportAveragePreciousClicked = () => {
        const header =
            "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        const footer = '</body></html>';
        const sourceHTML =
            header +
            // @ts-ignore
            document.getElementById('average-precious').innerHTML +
            footer;

        const source =
            'data:application/vnd.ms-word;charset=utf-8,' +
            encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `_bien_ban_trung_binh_${currentCompanyPreciousState}_ky_${convertDatePeriodToMonth(
            //@ts-ignore
            currentEndDatePreciousState,
            //@ts-ignore
        )}_${convertDatePeriodToYear(currentEndDatePreciousState)}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    };

    const onExportQuantityPreciousClicked = () => {
        const header =
            "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        const footer = '</body></html>';
        const sourceHTML =
            header +
            // @ts-ignore
            document.getElementById('quantity-precious').innerHTML +
            footer;

        const source =
            'data:application/vnd.ms-word;charset=utf-8,' +
            encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `_bien_ban_san_luong_${currentCompanyPreciousState}_ky_${convertDatePeriodToMonth(
            //@ts-ignore
            currentEndDatePreciousState,
            //@ts-ignore
        )}_${convertDatePeriodToYear(currentEndDatePreciousState)}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    };

    const onInsertPreciousClicked = () => {
        let isAllow = true;

        if (
            currentCompanyPreciousState === null ||
            currentCompanyPreciousState === undefined ||
            currentCompanyPreciousState === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn công ty!!!',
            });

            isAllow = false;
        }
        if (
            currentStartDatePreciousState === null ||
            currentStartDatePreciousState === undefined ||
            currentStartDatePreciousState === 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn ngày bắt đầu!!!',
            });

            isAllow = false;
        }

        if (
            currentEndDatePreciousState === null ||
            currentEndDatePreciousState === undefined ||
            currentEndDatePreciousState === 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn ngày kết thúc!!!',
            });

            isAllow = false;
        }

        if (isAllow) {
            let addLocationLocal = JSON.parse(JSON.stringify(addLocationState));

            if (addLocationLocal.length > 0) {
                for (let item of addLocationLocal) {
                    //@ts-ignore
                    if (item.Periods.length > 0) {
                        //@ts-ignore
                        for (let i of item.Periods) {
                            if (i.Period !== undefined && i.Period !== null) {
                                i.Period = i.Period.toString();
                            }
                        }
                    }

                    //@ts-ignore
                    if (item.AverageDate.length > 0) {
                        let tmp = [];
                        //@ts-ignore
                        for (let i of item.AverageDate) {
                            let temp = [];
                            for (let d of i) {
                                d = d.toString();
                                temp.push(d);
                            }
                            tmp.push(temp);
                        }

                        item.AverageDate = tmp;
                    }
                    //@ts-ignore
                    if (item.DateCalclogger.length > 0) {
                        //@ts-ignore
                        for (let i of item.DateCalclogger) {
                            i.From = i.From.toString();
                            i.To = i.To.toString();

                            if (i.DateRange.length > 0) {
                                let temp = [];
                                for (let d of i.DateRange) {
                                    d = d.toString();
                                    temp.push(d);
                                }

                                i.DateRange = temp;
                            }
                        }
                    }
                }
            }

            let obj = {
                Company: currentCompanyPreciousState,
                CompanyName: currentCompanyNamePreciousState,
                Start: currentStartDatePreciousState.toString(),
                End: currentEndDatePreciousState.toString(),
                //@ts-ignore
                Period: convertDateToPeriod(currentEndDatePreciousState),
                CreateAt: new Date(Date.now()).getTime().toString(),
                UsernameCreated: 'admin',
                Location: addLocationLocal,
                Index: addIndexState,
                LockValve: addLockValveState,
                SubtractWaterB1: addSubtractWaterB1State,
                SubtractWaterB2: addSubtractWaterB2State,
                WaterCustomer: addWaterCustomerState,
            };

            insertPrecious({
                variables: {
                    //@ts-ignore
                    precious: obj,
                },
            })
                .then((res) => {
                    if (res.data !== undefined) {
                        if (res.data?.InsertPrecious?.idReturn !== '') {
                            dispatch(
                                setCurrentPreciousId(
                                    //@ts-ignore
                                    res.data.InsertPrecious.idReturn,
                                ),
                            );
                            //@ts-ignore
                            obj._id = res.data.InsertPrecious.idReturn;
                            //@ts-ignore
                            dispatch(insertListPrecious(obj));

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm biên bản thành công',
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm biên không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm biên bản bị lỗi!!!',
                    });
                    console.log(err);
                });
        }
    };

    const onChoosePreciousClicked = (precious: any) => {
        dispatch(setCurrentStartDatePrecious(parseInt(precious.Start)));
        dispatch(setCurrentEndDatePrecious(parseInt(precious.End)));

        getDataQuantity(
            currentCompanyPreciousState,
            parseInt(precious.Start),
            parseInt(precious.End),
        );

        //@ts-ignore
        setStartDate(new Date(parseInt(precious.Start)));
        //@ts-ignore
        setEndDate(new Date(parseInt(precious.End)));

        dispatch(setCurrentPreciousId(precious._id));
        let addLocationLocal = JSON.parse(JSON.stringify(precious.Location));

        if (addLocationLocal.length > 0) {
            for (let item of addLocationLocal) {
                //@ts-ignore
                if (item.Periods.length > 0) {
                    //@ts-ignore
                    for (let i of item.Periods) {
                        if (i.Period !== undefined && i.Period !== null) {
                            i.Period = parseInt(i.Period);
                        }
                    }
                }
                //@ts-ignore
                if (item.AverageDate.length > 0) {
                    let tmp = [];
                    //@ts-ignore
                    for (let i of item.AverageDate) {
                        let temp = [];
                        for (let d of i) {
                            d = parseInt(d);
                            temp.push(d);
                        }
                        tmp.push(temp);
                    }
                    item.AverageDate = tmp;
                }

                //@ts-ignore
                if (item.DateCalclogger.length > 0) {
                    //@ts-ignore
                    for (let i of item.DateCalclogger) {
                        i.From = parseInt(i.From);
                        i.To = parseInt(i.To);

                        if (i.DateRange.length > 0) {
                            let temp = [];
                            for (let d of i.DateRange) {
                                d = parseInt(d);
                                temp.push(d);
                            }

                            i.DateRange = temp;
                        }
                    }
                }
            }

            dispatch(addLocations(addLocationLocal));
        }
        dispatch(addIndexs(precious.Index));
        dispatch(addLockValves(precious.LockValve));
        dispatch(addSubtractWaterB1s(precious.SubtractWaterB1));
        dispatch(addSubtractWaterB2s(precious.SubtractWaterB2));
        dispatch(addWaterCustomers(precious.WaterCustomer));
    };

    const onUpdatePreciousClicked = () => {
        let isAllow = true;

        if (
            currentCompanyPreciousState === null ||
            currentCompanyPreciousState === undefined ||
            currentCompanyPreciousState === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn công ty!!!',
            });

            isAllow = false;
        }
        if (
            currentStartDatePreciousState === null ||
            currentStartDatePreciousState === undefined ||
            currentStartDatePreciousState === 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn ngày bắt đầu!!!',
            });

            isAllow = false;
        }

        if (
            currentEndDatePreciousState === null ||
            currentEndDatePreciousState === undefined ||
            currentEndDatePreciousState === 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn ngày kết thúc!!!',
            });

            isAllow = false;
        }

        if (isAllow) {
            let addLocationLocal = JSON.parse(JSON.stringify(addLocationState));

            if (addLocationLocal.length > 0) {
                for (let item of addLocationLocal) {
                    //@ts-ignore
                    if (item.Periods.length > 0) {
                        //@ts-ignore
                        for (let i of item.Periods) {
                            if (i.Period !== undefined && i.Period !== null) {
                                i.Period = i.Period.toString();
                            }
                        }
                    }

                    //@ts-ignore
                    if (item.AverageDate.length > 0) {
                        let tmp = [];
                        //@ts-ignore
                        for (let i of item.AverageDate) {
                            let temp = [];
                            for (let d of i) {
                                d = d.toString();
                                temp.push(d);
                            }
                            tmp.push(temp);
                        }

                        item.AverageDate = tmp;
                    }
                    //@ts-ignore
                    if (item.DateCalclogger.length > 0) {
                        //@ts-ignore
                        for (let i of item.DateCalclogger) {
                            i.From = i.From.toString();
                            i.To = i.To.toString();

                            if (i.DateRange.length > 0) {
                                let temp = [];
                                for (let d of i.DateRange) {
                                    d = d.toString();
                                    temp.push(d);
                                }

                                i.DateRange = temp;
                            }
                        }
                    }
                }
            }

            let obj = {
                _id: currentPreciousIdState,
                Company: currentCompanyPreciousState,
                CompanyName: currentCompanyNamePreciousState,
                Start: currentStartDatePreciousState.toString(),
                End: currentEndDatePreciousState.toString(),
                //@ts-ignore
                Period: convertDateToPeriod(currentEndDatePreciousState),
                CreateAt: new Date(Date.now()).getTime().toString(),
                UsernameCreated: 'admin',
                Location: addLocationLocal,
                Index: addIndexState,
                LockValve: addLockValveState,
                SubtractWaterB1: addSubtractWaterB1State,
                SubtractWaterB2: addSubtractWaterB2State,
                WaterCustomer: addWaterCustomerState,
            };

            updatePrecious({
                variables: {
                    //@ts-ignore
                    precious: obj,
                },
            })
                .then((res) => {
                    if (res.data !== undefined) {
                        if (res.data?.UpdatePrecious?.idReturn !== '') {
                            dispatch(
                                setCurrentPreciousId(
                                    //@ts-ignore
                                    res.data.UpdatePrecious.idReturn,
                                ),
                            );

                            //@ts-ignore
                            dispatch(updateListPrecious(obj));

                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Sửa biên bản thành công',
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Sửa biên không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Sửa biên bản bị lỗi!!!',
                    });
                    console.log(err);
                });
        }
    };

    const onDeletePreciousClicked = () => {
        Swal.fire({
            title: 'Xóa biên bản?',
            text: 'Xóa biên bản không thể nào hồi phục lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                let addLocationLocal = JSON.parse(
                    JSON.stringify(addLocationState),
                );

                if (addLocationLocal.length > 0) {
                    for (let item of addLocationLocal) {
                        //@ts-ignore
                        if (item.Periods.length > 0) {
                            //@ts-ignore
                            for (let i of item.Periods) {
                                if (
                                    i.Period !== undefined &&
                                    i.Period !== null
                                ) {
                                    i.Period = i.Period.toString();
                                }
                            }
                        }

                        //@ts-ignore
                        if (item.AverageDate.length > 0) {
                            let tmp = [];
                            //@ts-ignore
                            for (let i of item.AverageDate) {
                                let temp = [];
                                for (let d of i) {
                                    d = d.toString();
                                    temp.push(d);
                                }
                                tmp.push(temp);
                            }

                            item.AverageDate = tmp;
                        }
                        //@ts-ignore
                        if (item.DateCalclogger.length > 0) {
                            //@ts-ignore
                            for (let i of item.DateCalclogger) {
                                i.From = i.From.toString();
                                i.To = i.To.toString();

                                if (i.DateRange.length > 0) {
                                    let temp = [];
                                    for (let d of i.DateRange) {
                                        d = d.toString();
                                        temp.push(d);
                                    }

                                    i.DateRange = temp;
                                }
                            }
                        }
                    }
                }

                let obj = {
                    _id: currentPreciousIdState,
                    Company: currentCompanyPreciousState,
                    CompanyName: currentCompanyNamePreciousState,
                    Start: currentStartDatePreciousState.toString(),
                    End: currentEndDatePreciousState.toString(),
                    //@ts-ignore
                    Period: convertDateToPeriod(currentEndDatePreciousState),
                    CreateAt: new Date(Date.now()).getTime().toString(),
                    UsernameCreated: 'admin',
                    Location: addLocationLocal,
                    Index: addIndexState,
                    LockValve: addLockValveState,
                    SubtractWaterB1: addSubtractWaterB1State,
                    SubtractWaterB2: addSubtractWaterB2State,
                    WaterCustomer: addWaterCustomerState,
                };

                deletePrecious({
                    variables: {
                        //@ts-ignore
                        precious: obj,
                    },
                })
                    .then((res) => {
                        if (res.data !== undefined) {
                            if (res.data?.DeletePrecious?.nRow !== 0) {
                                dispatch(setCurrentPreciousId(''));
                                //@ts-ignore
                                dispatch(deleteListPrecious(obj));
                                dispatch(addLocations([]));
                                dispatch(addIndexs([]));
                                dispatch(addLockValves([]));
                                dispatch(addSubtractWaterB1s([]));
                                dispatch(addSubtractWaterB2s([]));
                                dispatch(addWaterCustomers([]));

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Xóa biên bản thành công',
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Xóa biên không thành công',
                                });
                            }
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Xóa biên bản bị lỗi!!!',
                        });
                        console.log(err);
                    });
            }
        });
    };

    return (
        <>
            <Grid style={{ marginBottom: '20px' }}>
                <Col md={4} sm={12}>
                    <Select
                        label="Chọn công ty"
                        placeholder="Chọn công ty"
                        clearable
                        searchable
                        nothingFound="Không tìm thấy!!"
                        data={tempData}
                        onChange={onCompanyChanged}
                    />
                </Col>
                <Col md={4} sm={12}>
                    <DateTimePicker
                        clearable
                        placeholder="Ngày bắt đầu"
                        label="Ngày bắt đầu"
                        valueFormat="DD/MM/YYYY"
                        value={startDate}
                        onChange={onStartDateChanged}
                    />
                </Col>
                <Col md={4} sm={12}>
                    <DateTimePicker
                        clearable
                        placeholder="Ngày kết thúc"
                        label="Ngày kết thúc"
                        valueFormat="DD/MM/YYYY"
                        value={endDate}
                        onChange={onEndDateChanged}
                    />
                </Col>
            </Grid>
            <Grid>
                <Col
                    md={4}
                    sm={12}
                    style={{ border: '1px solid #95a5a6', padding: '20px' }}
                >
                    <Grid>
                        <Col span={12}>Biên bản đã lưu</Col>
                        {listPreciousState.length > 0 && (
                            <>
                                {listPreciousState.map((el) => (
                                    <Col
                                        // @ts-ignore
                                        key={el._id}
                                        span={12}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            //@ts-ignore
                                            onChoosePreciousClicked(el)
                                        }
                                    >
                                        {/* @ts-ignore */}
                                        <Text weight={500} size="1.1rem">
                                            {/* @ts-ignore */}
                                            {/* @ts-ignore */}- Kỳ {el.Period} (
                                            <span style={{ fontSize: '.8rem' }}>
                                                {/* @ts-ignore */}
                                                {el.UsernameCreated} -{' '}
                                                {convertStringMilisecondToStringDate(
                                                    //@ts-ignore
                                                    el.CreateAt,
                                                )}
                                                )
                                            </span>
                                        </Text>{' '}
                                    </Col>
                                ))}
                            </>
                        )}
                    </Grid>
                </Col>
                <Col
                    md={8}
                    sm={12}
                    style={{ border: '1px solid #95a5a6', padding: '20px' }}
                >
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Tính Trung Bình Kỳ Của Khu Vực
                    </Text>
                    <DateInput
                        placeholder="Ngày tết năm trước"
                        label="Ngày tết năm trước"
                        valueFormat="DD/MM/YYYY"
                        onChange={onTetHoliDayPreChanged}
                    />
                    <Space h="md" />
                    <DateInput
                        placeholder="Ngày tết năm nay"
                        label="Ngày tết năm nay"
                        valueFormat="DD/MM/YYYY"
                        onChange={onTetHoliDayChanged}
                    />
                    <Space h="md" />
                    {addLocationState.length > 0 ? (
                        <div
                            style={{
                                padding: '10px',
                                border: '1px solid #95a5a6',
                                borderRadius: '10px',
                            }}
                        >
                            {addLocationState.map((el, index) => {
                                return (
                                    <AddLocation key={index} index={index} />
                                );
                            })}
                        </div>
                    ) : null}
                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddLocationClicked}
                    >
                        Vị trí
                    </Button>
                    <Space h="md" />
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Nhập Chỉ Số
                    </Text>
                    {addIndexState.length > 0 ? (
                        <>
                            <Space h="md" />
                            <div
                                style={{
                                    padding: '10px',
                                    border: '1px solid #95a5a6',
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid>
                                    <Col span={5}>
                                        <Center>
                                            <IconMapPinFilled size="1.125rem"></IconMapPinFilled>
                                            <Text weight={500}>Vị trí</Text>
                                        </Center>
                                    </Col>
                                    <Col span={3}>
                                        <Center>
                                            <Text weight={500}>
                                                C/s Kỳ trước
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={3}>
                                        <Center>
                                            <Text weight={500}>C/s Kỳ sau</Text>
                                        </Center>
                                    </Col>
                                    <Col span={1}></Col>
                                </Grid>
                                {/* @ts-ignore */}
                                {addIndexState.map((el, index) => {
                                    return (
                                        <AddIndex key={index} index={index} />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}

                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddIndexClicked}
                    >
                        Chỉ số
                    </Button>
                    <Space h="md" />
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Nhập Khóa Van
                    </Text>
                    <Space h="md" />
                    {addLockValveState.length > 0 ? (
                        <>
                            <div
                                style={{
                                    padding: '10px',
                                    border: '1px solid #95a5a6',
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid>
                                    <Col span={11}>
                                        <Center>
                                            <IconMapPinFilled size="1.125rem"></IconMapPinFilled>
                                            <Text weight={500}>Vị trí</Text>
                                        </Center>
                                    </Col>

                                    <Col span={1}></Col>
                                </Grid>
                                {addLockValveState.map((el, index) => {
                                    return (
                                        <AddLockValve
                                            key={index}
                                            index={index}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}

                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddLockValveClicked}
                    >
                        Khóa van
                    </Button>
                    <Space h="md" />
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Lượng Nước Giảm Trừ (B1)
                    </Text>
                    {addSubtractWaterB1State.length > 0 ? (
                        <>
                            <Space h="md" />
                            <div
                                style={{
                                    padding: '10px',
                                    border: '1px solid #95a5a6',
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Số biên bản/ Ngày phát hành
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={3}>
                                        <Center>
                                            <Text weight={500}>
                                                Nội dung giảm trừ
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Đơn vị thi công
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Lượng nước giảm trừ (m3)
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>Ghi chú</Text>
                                        </Center>
                                    </Col>
                                    <Col span={1}></Col>
                                </Grid>
                                {addSubtractWaterB1State.map((el, index) => {
                                    return (
                                        <AddSubtractWaterB1
                                            key={index}
                                            index={index}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}

                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddSubtractB1Clicked}
                    >
                        Thêm B1
                    </Button>
                    <Space h="md" />
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Lượng Nước Giảm Trừ (B2)
                    </Text>
                    {addSubtractWaterB2State.length > 0 ? (
                        <>
                            <Space h="md" />
                            <div
                                style={{
                                    padding: '10px',
                                    border: '1px solid #95a5a6',
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Số biên bản/ Ngày phát hành
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={3}>
                                        <Center>
                                            <Text weight={500}>
                                                Nội dung giảm trừ
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Đơn vị thi công
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Lượng nước giảm trừ (m3)
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>Ghi chú</Text>
                                        </Center>
                                    </Col>
                                    <Col span={1}></Col>
                                </Grid>
                                {addSubtractWaterB2State.map((el, index) => {
                                    return (
                                        <AddSubtractWaterB2
                                            key={index}
                                            index={index}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}
                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddSubtractB2Clicked}
                    >
                        Thêm B2
                    </Button>
                    <Space h="md" />
                    <Text
                        transform="uppercase"
                        color="blue"
                        weight={500}
                        size="1.2rem"
                    >
                        Lượng Nước Qua Đồng Hồ Khách Hàng Cũng Là Đồng Hồ Tổng
                        (A2)
                    </Text>
                    {addWaterCustomerState.length > 0 ? (
                        <>
                            <Space h="md" />
                            <div
                                style={{
                                    padding: '10px',
                                    border: '1px solid #95a5a6',
                                    borderRadius: '10px',
                                }}
                            >
                                <Grid>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Số biên bản
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Ngày phát hành
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>
                                                Số lượng đồng hồ
                                            </Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>Lượng nước</Text>
                                        </Center>
                                    </Col>
                                    <Col span={2}>
                                        <Center>
                                            <Text weight={500}>Ghi chú</Text>
                                        </Center>
                                    </Col>
                                    <Col span={1}></Col>
                                </Grid>
                                {addWaterCustomerState.map((el, index) => {
                                    return (
                                        <AddWaterCustomer
                                            key={index}
                                            index={index}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}

                    <Space h="md" />
                    <Button
                        leftIcon={<IconPlus />}
                        variant="filled"
                        onClick={onAddWaterCustomerClicked}
                    >
                        Lượng Nước ĐH Khách Hàng
                    </Button>
                </Col>
            </Grid>
            <Grid style={{ marginTop: '10px' }}>
                <Col span={12}>
                    <Center>
                        <Button
                            leftIcon={<IconDeviceFloppy />}
                            variant="filled"
                            color="green"
                            onClick={onInsertPreciousClicked}
                        >
                            Lưu biên bản
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconBookmarkEdit />}
                            variant="filled"
                            color="blue"
                            onClick={onUpdatePreciousClicked}
                        >
                            Sửa biên bản
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconTrash />}
                            variant="filled"
                            color="red"
                            onClick={onDeletePreciousClicked}
                        >
                            Xóa biên bản
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconFileX />}
                            variant="filled"
                            color="orange"
                            onClick={onExportAveragePreciousClicked}
                        >
                            Biên bản TB
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconFileX />}
                            variant="filled"
                            color="orange"
                            disabled={isLoadingQuantity}
                            onClick={onExportQuantityPreciousClicked}
                        >
                            Biên bản sản lượng
                        </Button>
                    </Center>
                </Col>
            </Grid>
            <template>
                <Grid>
                    <Col span={12}>
                        <AveragePrecious />
                    </Col>
                </Grid>
            </template>
            {/* <template> */}
            <Grid>
                <Col span={12}>{<QuantityPrecious />}</Col>
            </Grid>
            {/* </template> */}
        </>
    );
};

export default ReportAveragePrecious;
