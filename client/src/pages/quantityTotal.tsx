import {
    Button,
    Center,
    Col,
    Grid,
    Select,
    Space,
    Table,
    Text,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { motion } from 'framer-motion';

import { useQuantityDayTotalLazyQuery } from '../__generated__/graphql';

import { useState, useEffect } from 'react';

import Swal from 'sweetalert2';

import {
    convertDateToStringNotTime,
    convertDateToStringNotTimeForTitle,
    quickSort,
} from '../utils/utils';
// @ts-ignore comment
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import Companies from '../types/companies.type';

import { checkAdminViewerRole } from '../utils/utils';

const QuantityTotalPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [isAdminViewer, setIsAdminViewer] = useState(false);
    const [
        getQuantityCompany,
        { loading: loadingQuantity, error: errorQuantity, data: dataQuanity },
    ] = useQuantityDayTotalLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());
    }, []);

    const onStartDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setStartDate(e);
        }
    };

    const onEndDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setEndDate(e);
        }
    };

    const onViewClicked = (e: any) => {
        if (startDate == null || startDate == undefined || startDate == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn thời gian bắt đầu!',
            });
        } else if (endDate == null || endDate == undefined || endDate == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn thời gian kết thúc!',
            });
        } else {
            getQuantityCompany({
                variables: {
                    // @ts-ignore comment
                    start: startDate.getTime().toString(),
                    // @ts-ignore comment
                    end: endDate.getTime().toString(),
                },
            });
        }
    };

    const renderTableQuantity = (data: any) => {
        let sortedData = quickSort(data.QuantityDayTotal);

        if (data != null && data != undefined) {
            if (sortedData != null && sortedData != undefined) {
                if (sortedData.length > 0) {
                    let maxLengthQuantity = sortedData[0].ListQuantity.length;
                    let indexMaxLengthQuantity = 0;

                    let body = [];
                    let bodyTotal = [];
                    let sumBodyTotal = 0;
                    let avgBodyTotal = 0;

                    let cangio = [];
                    let isCangio = false;
                    let countCanGio = 0;
                    let sumCanGio = 0;
                    let avgCangio = 0;

                    let outlet = [];
                    let isOutlet = false;
                    let countOutlet = 0;
                    let sumOutlet = 0;
                    let avgOutlet = 0;

                    let tachmang = [];
                    let isTachMang = false;
                    let countTachMang = 0;
                    let sumTachMang = 0;
                    let avgTachMang = 0;

                    let gieng = [];
                    let isGieng = false;
                    let countGieng = 0;
                    let sumGieng = 0;
                    let avgGieng = 0;

                    let nuocngam = [];
                    let isNuocNgam = false;
                    let sumNuocNgam = 0;
                    let countNuocNgam = 0;
                    let avgNuocNgam = 0;

                    let xahoihoa = [];
                    let isXaHoiHoa = false;
                    let countXaHoiHoa = 0;
                    let sumXaHoiHoa = 0;
                    let avgXaHoiHoa = 0;

                    for (let i = 0; i < sortedData.length; i++) {
                        isCangio = false;
                        isOutlet = false;
                        isTachMang = false;
                        isGieng = false;
                        isNuocNgam = false;
                        isXaHoiHoa = false;

                        if (
                            sortedData[i].ListQuantity.length >
                            maxLengthQuantity
                        ) {
                            maxLengthQuantity =
                                sortedData[i].ListQuantity.length;
                            indexMaxLengthQuantity = i;
                        }

                        let sum = 0;
                        let count = 0;
                        let avg = 0;
                        let tempSumCanGio = 0;
                        let tempcountCanGio = 0;
                        let tempSumOutlet = 0;
                        let tempCountOutlet = 0;
                        let tempSumTachMang = 0;
                        let tempCountTachMang = 0;
                        let tempSumNuocNgam = 0;
                        let tempCountNuocNgam = 0;
                        let tempSumGieng = 0;
                        let tempCountGieng = 0;
                        let tempSumXaHoiHoa = 0;
                        let tempCountXaHoiHoa = 0;

                        if (
                            sortedData[i].SiteId != null &&
                            sortedData[i].SiteId != undefined &&
                            sortedData[i].SiteId != ''
                        ) {
                            let marker = sortedData[i].SiteId[2];
                            if (marker == '0') {
                                isCangio = true;
                                countCanGio += 1;
                            } else if (marker == '1') {
                                isOutlet = true;
                                countOutlet += 1;
                            } else if (marker == '2') {
                                isTachMang = true;
                                countTachMang += 1;
                            } else if (marker == '3') {
                                isGieng = true;
                                countGieng += 1;
                            } else if (marker == '4') {
                                isNuocNgam = true;
                                countNuocNgam += 1;
                            } else if (marker == '5') {
                                isXaHoiHoa = true;
                                countXaHoiHoa += 1;
                            }
                        }

                        for (
                            let j = 0;
                            j < sortedData[i].ListQuantity.length;
                            j++
                        ) {
                            if (
                                sortedData[i].ListQuantity[j] != null &&
                                sortedData[i].ListQuantity[j] != undefined
                            ) {
                                if (
                                    sortedData[i].ListQuantity[j].Value !=
                                        null &&
                                    sortedData[i].ListQuantity[j].Value !=
                                        undefined
                                ) {
                                    sum += sortedData[i].ListQuantity[j].Value;
                                    count += 1;
                                    if (
                                        bodyTotal[j] != null &&
                                        bodyTotal[j] != undefined
                                    ) {
                                        bodyTotal[j].value +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else {
                                        let obj = {
                                            value: sortedData[i].ListQuantity[j]
                                                .Value,
                                        };
                                        bodyTotal.push(obj);
                                    }
                                    if (isCangio == true) {
                                        if (
                                            cangio[j] != null &&
                                            cangio[j] != undefined
                                        ) {
                                            cangio[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            cangio.push(obj);
                                        }
                                        sumCanGio +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempcountCanGio += 1;
                                        tempSumCanGio +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else if (isOutlet == true) {
                                        if (
                                            outlet[j] != null &&
                                            outlet[j] != undefined
                                        ) {
                                            outlet[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            outlet.push(obj);
                                        }
                                        sumOutlet +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempCountOutlet += 1;
                                        tempSumOutlet +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else if (isTachMang == true) {
                                        if (
                                            tachmang[j] != null &&
                                            tachmang[j] != undefined
                                        ) {
                                            tachmang[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            tachmang.push(obj);
                                        }
                                        sumTachMang +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempCountTachMang += 1;
                                        tempSumTachMang +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else if (isGieng == true) {
                                        if (
                                            gieng[j] != null &&
                                            gieng[j] != undefined
                                        ) {
                                            gieng[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            gieng.push(obj);
                                        }
                                        sumGieng +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempCountGieng += 1;
                                        tempSumGieng +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else if (isNuocNgam == true) {
                                        if (
                                            nuocngam[j] != null &&
                                            nuocngam[j] != undefined
                                        ) {
                                            nuocngam[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            nuocngam.push(obj);
                                        }
                                        sumNuocNgam +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempCountNuocNgam += 1;
                                        tempSumNuocNgam +=
                                            sortedData[i].ListQuantity[j].Value;
                                    } else if (isXaHoiHoa == true) {
                                        if (
                                            xahoihoa[j] != null &&
                                            xahoihoa[j] != undefined
                                        ) {
                                            xahoihoa[j].value +=
                                                sortedData[i].ListQuantity[
                                                    j
                                                ].Value;
                                        } else {
                                            let obj = {
                                                value: sortedData[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            xahoihoa.push(obj);
                                        }
                                        sumXaHoiHoa +=
                                            sortedData[i].ListQuantity[j].Value;
                                        tempCountXaHoiHoa += 1;
                                        tempSumXaHoiHoa +=
                                            sortedData[i].ListQuantity[j].Value;
                                    }
                                } else {
                                    if (
                                        bodyTotal[j] != null &&
                                        bodyTotal[j] != undefined
                                    ) {
                                        bodyTotal[j].value += 0;
                                    } else {
                                        let obj = {
                                            value: 0,
                                        };
                                        bodyTotal.push(obj);
                                    }

                                    if (isCangio == true) {
                                        if (
                                            cangio[j] != null &&
                                            cangio[j] != undefined
                                        ) {
                                            cangio[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            cangio.push(obj);
                                        }
                                    } else if (isOutlet == true) {
                                        if (
                                            outlet[j] != null &&
                                            outlet[j] != undefined
                                        ) {
                                            outlet[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            outlet.push(obj);
                                        }
                                    } else if (isTachMang == true) {
                                        if (
                                            tachmang[j] != null &&
                                            tachmang[j] != undefined
                                        ) {
                                            tachmang[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            tachmang.push(obj);
                                        }
                                    } else if (isGieng == true) {
                                        if (
                                            gieng[j] != null &&
                                            gieng[j] != undefined
                                        ) {
                                            gieng[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            gieng.push(obj);
                                        }
                                    } else if (isNuocNgam == true) {
                                        if (
                                            nuocngam[j] != null &&
                                            nuocngam[j] != undefined
                                        ) {
                                            nuocngam[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            nuocngam.push(obj);
                                        }
                                    } else if (isXaHoiHoa == true) {
                                        if (
                                            xahoihoa[j] != null &&
                                            xahoihoa[j] != undefined
                                        ) {
                                            xahoihoa[j].value += 0;
                                        } else {
                                            let obj = {
                                                value: 0,
                                            };
                                            xahoihoa.push(obj);
                                        }
                                    }
                                }
                            }
                        }

                        if (count == 0) {
                            count = 1;
                        }

                        avg = sum / count;

                        sumBodyTotal += sum;
                        avgBodyTotal += avg;

                        if (tempcountCanGio == 0) {
                            tempcountCanGio = 1;
                        }

                        avgCangio += tempSumCanGio / tempcountCanGio;

                        if (tempCountOutlet == 0) {
                            tempCountOutlet = 1;
                        }

                        avgOutlet += tempSumOutlet / tempCountOutlet;

                        if (tempCountTachMang == 0) {
                            tempCountTachMang = 1;
                        }

                        avgTachMang += tempSumTachMang / tempCountTachMang;

                        if (tempCountNuocNgam == 0) {
                            tempCountNuocNgam = 1;
                        }

                        avgNuocNgam += tempSumNuocNgam / tempCountNuocNgam;

                        if (tempCountGieng == 0) {
                            tempCountGieng = 1;
                        }

                        avgGieng += tempSumGieng / tempCountGieng;

                        if (tempCountXaHoiHoa == 0) {
                            tempCountXaHoiHoa = 1;
                        }

                        avgXaHoiHoa += tempSumXaHoiHoa / tempCountXaHoiHoa;

                        let rowValueBody = sortedData[i].ListQuantity.map(
                            (el: any, index: any) => {
                                if (el.IsEnoughData == false) {
                                    return (
                                        <td
                                            key={index}
                                            style={{
                                                backgroundColor: 'yellow',
                                            }}
                                        >
                                            {new Intl.NumberFormat(
                                                'en-EN',
                                            ).format(el.Value.toFixed(0))}
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={index}>
                                            {new Intl.NumberFormat(
                                                'en-EN',
                                            ).format(el.Value.toFixed(0))}
                                        </td>
                                    );
                                }
                            },
                        );

                        let rowBody = (
                            <tr key={sortedData[i].SiteId}>
                                <td>{i + 1}</td>
                                <td>{sortedData[i].Marks}</td>
                                <td>{sortedData[i].Size}</td>
                                <td>{sortedData[i].SiteId}</td>
                                <td>{sortedData[i].Location}</td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sum.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avg.toFixed(0),
                                    )}
                                </td>
                                {rowValueBody}
                            </tr>
                        );

                        body.push(rowBody);
                    }

                    if (cangio.length > 0) {
                        let rowBodyCanGioValue = cangio.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyCanGio = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>Cộng Cần Giờ</Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumCanGio.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgCangio.toFixed(0),
                                    )}
                                </td>
                                {rowBodyCanGioValue}
                            </tr>
                        );

                        //body.push(rowBodyCanGio);
                        body.splice(countCanGio, 0, rowBodyCanGio);
                        countCanGio += 1;
                    }
                    if (outlet.length > 0) {
                        let rowBodyOutletValue = outlet.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyOutlet = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>Cộng Outlet</Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumOutlet.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgOutlet.toFixed(0),
                                    )}
                                </td>
                                {rowBodyOutletValue}
                            </tr>
                        );

                        //body.push(rowBodyOutlet);
                        body.splice(
                            countOutlet + countCanGio,
                            0,
                            rowBodyOutlet,
                        );

                        countOutlet += 1;
                    }
                    if (tachmang.length > 0) {
                        let rowBodyTachMangValue = tachmang.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyTachMang = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>Cộng Tách Mạng</Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumTachMang.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgTachMang.toFixed(0),
                                    )}
                                </td>
                                {rowBodyTachMangValue}
                            </tr>
                        );

                        //body.push(rowBodyTachMang);
                        body.splice(
                            countTachMang + countCanGio + countOutlet,
                            0,
                            rowBodyTachMang,
                        );

                        countTachMang += 1;
                    }
                    if (gieng.length > 0) {
                        let rowBodyGiengValue = gieng.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyGieng = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>Cộng Giếng</Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumGieng.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgGieng.toFixed(0),
                                    )}
                                </td>
                                {rowBodyGiengValue}
                            </tr>
                        );

                        //body.push(rowBodyGieng);
                        body.splice(
                            countGieng +
                                countCanGio +
                                countOutlet +
                                countTachMang,
                            0,
                            rowBodyGieng,
                        );

                        countGieng += 1;
                    }
                    if (nuocngam.length > 0) {
                        let rowBodyNuocNgamValue = nuocngam.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyNuocNgam = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>Cộng Nước Ngầm</Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumNuocNgam.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgNuocNgam.toFixed(0),
                                    )}
                                </td>
                                {rowBodyNuocNgamValue}
                            </tr>
                        );

                        //body.push(rowBodyNuocNgam);
                        body.splice(
                            countNuocNgam +
                                countCanGio +
                                countOutlet +
                                countGieng +
                                countTachMang,
                            0,
                            rowBodyNuocNgam,
                        );

                        countNuocNgam += 1;
                    }
                    if (xahoihoa.length > 0) {
                        let rowBodyXaHoiHoaValue = xahoihoa.map(
                            (el: any, index: any) => (
                                <td key={index}>
                                    {new Intl.NumberFormat('en-EN').format(
                                        el.value.toFixed(0),
                                    )}
                                </td>
                            ),
                        );

                        let rowBodyXaHoiHoa = (
                            <tr>
                                <td colSpan={5}>
                                    <Center>
                                        <Text weight={500}>
                                            Cộng Xã Hội Hóa
                                        </Text>
                                    </Center>
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        sumXaHoiHoa.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        // @ts-ignore comment
                                        avgXaHoiHoa.toFixed(0),
                                    )}
                                </td>
                                {rowBodyXaHoiHoaValue}
                            </tr>
                        );

                        //body.push(rowBodyXaHoiHoa);
                        body.splice(
                            countXaHoiHoa +
                                countCanGio +
                                countOutlet +
                                countTachMang +
                                countGieng +
                                countNuocNgam,
                            0,
                            rowBodyXaHoiHoa,
                        );

                        countXaHoiHoa += 1;
                    }

                    let rowBodyTotalValue = bodyTotal.map(
                        (el: any, index: any) => (
                            <td key={index}>
                                {new Intl.NumberFormat('en-EN', {}).format(
                                    el.value.toFixed(0),
                                )}
                            </td>
                        ),
                    );

                    let rowBodyTotal = (
                        <tr>
                            <td colSpan={5}>
                                <Center>
                                    <Text weight={500}>Cộng</Text>
                                </Center>
                            </td>
                            <td>
                                {new Intl.NumberFormat('en-EN', {}).format(
                                    // @ts-ignore comment
                                    sumBodyTotal.toFixed(0),
                                )}
                            </td>
                            <td>
                                {new Intl.NumberFormat('en-EN', {}).format(
                                    // @ts-ignore comment
                                    avgBodyTotal.toFixed(0),
                                )}
                            </td>
                            {rowBodyTotalValue}
                        </tr>
                    );

                    body.push(rowBodyTotal);

                    let timestampHeader = sortedData[
                        indexMaxLengthQuantity
                    ].ListQuantity.map((el: any) => (
                        <th key={el.TimeStamp}>
                            {convertDateToStringNotTime(new Date(el.TimeStamp))}
                        </th>
                    ));

                    let th = (
                        <tr>
                            <th>STT</th>
                            <th>Hiệu</th>
                            <th>Cở</th>
                            <th>Mã vị trí</th>
                            <th>Vị trí</th>
                            <th>Tổng</th>
                            <th>Trung bình</th>
                            {timestampHeader}
                        </tr>
                    );

                    return (
                        <Table
                            striped
                            highlightOnHover
                            withBorder
                            withColumnBorders
                            id="tableQuantity"
                            verticalSpacing="xs"
                            fontSize="xs"
                            style={{ tableLayout: 'auto', width: '200%' }}
                        >
                            <caption>
                                Sản Lượng tổng từ{' '}
                                {convertDateToStringNotTimeForTitle(
                                    // @ts-ignore comment
                                    new Date(startDate),
                                )}{' '}
                                đến{' '}
                                {convertDateToStringNotTimeForTitle(
                                    // @ts-ignore comment
                                    new Date(endDate),
                                )}
                            </caption>
                            <thead>{th}</thead>
                            <tbody>{body}</tbody>
                        </Table>
                    );
                }
            }
        }
    };

    const onStartDateBlured = (e: any) => {
        if (e.target.value !== '') {
            const splitDate = e.target.value.split('/');
            console.log(splitDate);

            if (splitDate.length === 3) {
                const year = parseInt(splitDate[2]);
                const month = parseInt(splitDate[1]) - 1;
                const day = parseInt(splitDate[0]);
                //@ts-ignore
                setStartDate(new Date(year, month, day));
            } else {
                setStartDate(null);
            }
        } else {
            setStartDate(null);
        }
    };

    const onEndDateBlured = (e: any) => {
        if (e.target.value !== '') {
            const splitDate = e.target.value.split('/');

            if (splitDate.length === 3) {
                const year = parseInt(splitDate[2]);
                const month = parseInt(splitDate[1]) - 1;
                const day = parseInt(splitDate[0]);

                //@ts-ignore
                setEndDate(new Date(year, month, day));
            } else {
                setEndDate(null);
            }
        } else {
            setEndDate(null);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <>
                <Grid>
                    <Col span={12}>
                        <Center>
                            <Text weight={500} size="1.2rem">
                                Sản lượng tổng hợp
                            </Text>
                        </Center>
                        <hr />
                    </Col>
                    <Col md={4} sm={12}>
                        <DateInput
                            placeholder="Ngày bắt đầu"
                            label="Ngày bắt đầu"
                            withAsterisk
                            valueFormat="DD/MM/YYYY"
                            value={startDate}
                            onChange={onStartDateChanged}
                            onBlur={onStartDateBlured}
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <DateInput
                            placeholder="Ngày kết thúc"
                            label="Ngày kết thúc"
                            valueFormat="DD/MM/YYYY"
                            withAsterisk
                            value={endDate}
                            onChange={onEndDateChanged}
                            onBlur={onEndDateBlured}
                        />
                    </Col>
                    <Col span={12}>
                        <Center>
                            <Button
                                variant="filled"
                                color="green"
                                onClick={onViewClicked}
                                loading={loadingQuantity}
                                loaderPosition="right"
                            >
                                Sản Lượng
                            </Button>

                            {dataQuanity && (
                                <>
                                    <Space w="xl" />
                                    <ReactHTMLTableToExcel
                                        id="table-xls"
                                        className="btn-export"
                                        table="tableQuantity"
                                        filename={`Sản lượng Tổng từ ${convertDateToStringNotTimeForTitle(
                                            // @ts-ignore comment
                                            new Date(startDate),
                                        )} đến  ${convertDateToStringNotTimeForTitle(
                                            // @ts-ignore comment
                                            new Date(endDate),
                                        )}`}
                                        sheet="tableQuantity"
                                        buttonText="Xuất Excel"
                                    />
                                </>
                            )}
                        </Center>
                    </Col>
                    {dataQuanity && (
                        <Col
                            span={12}
                            style={{
                                overflow: 'scroll',
                                width: '95%',
                                height: '50rem',
                            }}
                        >
                            {renderTableQuantity(dataQuanity)}
                        </Col>
                    )}
                </Grid>
            </>
        </motion.div>
    );
};

export default QuantityTotalPage;
