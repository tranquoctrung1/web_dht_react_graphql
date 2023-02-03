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
import { DatePicker } from '@mantine/dates';
import { motion } from 'framer-motion';

import {
    useGetCompaniesQuery,
    useQuantityDayWaterSupplyLazyQuery,
} from '../__generated__/graphql';

import { useState } from 'react';

import Swal from 'sweetalert2';

import {
    convertDateToStringNotTime,
    convertDateToStringNotTimeForTitle,
} from '../utils/utils';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

interface Companies {
    value: string;
    label: string;
}

const QuantityWaterSupply = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { data, error, loading } = useGetCompaniesQuery();
    const [
        getQuantityCompany,
        { loading: loadingQuantity, error: errorQuantity, data: dataQuanity },
    ] = useQuantityDayWaterSupplyLazyQuery();

    if (loading) {
        return (
            <Text color="blue" weight={500}>
                Đang tải danh sách công ty
            </Text>
        );
    }
    if (error) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dánh sách công ty
            </Text>
        );
    }

    let tempData = [];

    if (data != null && data != undefined) {
        if (data.GetCompanies != null && data.GetCompanies != undefined) {
            if (data.GetCompanies.length > 0) {
                for (let company of data.GetCompanies) {
                    let obj: Companies = {
                        value: company.Company,
                        label: company.Description,
                    };

                    tempData.push(obj);
                }
            }
        }
    }

    const onCompaniesChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setSelectedCompany(e);
        }
    };

    const onStartDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setStartDate(e.getTime());
        }
    };

    const onEndDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setEndDate(e.getTime());
        }
    };

    const onViewClicked = (e: any) => {
        if (
            selectedCompany == null ||
            selectedCompany == undefined ||
            selectedCompany == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa chọn công ty!',
            });
        } else if (
            startDate == null ||
            startDate == undefined ||
            startDate == ''
        ) {
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
                    company: selectedCompany,
                    start: startDate.toString(),
                    end: endDate.toString(),
                },
            });
        }
    };

    const renderTableQuantity = (data: any) => {
        if (data != null && data != undefined) {
            if (
                data.QuantityDayWaterSupply != null &&
                data.QuantityDayWaterSupply != undefined
            ) {
                if (data.QuantityDayWaterSupply.length > 0) {
                    let maxLengthQuantity =
                        data.QuantityDayWaterSupply[0].ListQuantity.length;
                    let indexMaxLengthQuantity = 0;

                    let body = [];
                    let bodyTotal = [];
                    let sumBodyTotal = 0;
                    let avgBodyTotal = 0;

                    let cangio = [];
                    let isCangio = false;
                    let sumCanGio = 0;
                    let countCanGio = 0;
                    let avgCangio = 0;

                    let outlet = [];
                    let isOutlet = false;
                    let sumOutlet = 0;
                    let countOutlet = 0;
                    let avgOutlet = 0;

                    let tachmang = [];
                    let isTachMang = false;
                    let sumTachMang = 0;
                    let countTachMang = 0;
                    let avgTachMang = 0;

                    let gieng = [];
                    let isGieng = false;
                    let sumGieng = 0;
                    let countGieng = 0;
                    let avgGieng = 0;

                    let nuocngam = [];
                    let isNuocNgam = false;
                    let sumNuocNgam = 0;
                    let countNuocNgam = 0;
                    let avgNuocNgam = 0;

                    let xahoihoa = [];
                    let isXaHoiHoa = false;
                    let sumXaHoiHoa = 0;
                    let countXaHoiHoa = 0;
                    let avgXaHoiHoa = 0;

                    for (
                        let i = 0;
                        i < data.QuantityDayWaterSupply.length;
                        i++
                    ) {
                        isCangio = false;
                        isOutlet = false;
                        isTachMang = false;
                        isGieng = false;
                        isNuocNgam = false;
                        isXaHoiHoa = false;

                        if (
                            data.QuantityDayWaterSupply[i].ListQuantity.length >
                            maxLengthQuantity
                        ) {
                            maxLengthQuantity =
                                data.QuantityDayWaterSupply[i].ListQuantity
                                    .length;
                            indexMaxLengthQuantity = i;
                        }

                        let sum = 0;
                        let count = 0;
                        let avg = 0;

                        if (
                            data.QuantityDayWaterSupply[i].SiteId != null &&
                            data.QuantityDayWaterSupply[i].SiteId !=
                                undefined &&
                            data.QuantityDayWaterSupply[i].SiteId != ''
                        ) {
                            let marker =
                                data.QuantityDayWaterSupply[i].SiteId[2];
                            if (marker == '0') {
                                isCangio = true;
                            } else if (marker == '1') {
                                isOutlet = true;
                            } else if (marker == '2') {
                                isTachMang = true;
                            } else if (marker == '3') {
                                isGieng = true;
                            } else if (marker == '4') {
                                isNuocNgam = true;
                            } else if (marker == '5') {
                                isXaHoiHoa = true;
                            }
                        }

                        for (
                            let j = 0;
                            j <
                            data.QuantityDayWaterSupply[i].ListQuantity.length;
                            j++
                        ) {
                            if (
                                data.QuantityDayWaterSupply[i].ListQuantity[
                                    j
                                ] != null &&
                                data.QuantityDayWaterSupply[i].ListQuantity[
                                    j
                                ] != undefined
                            ) {
                                if (
                                    data.QuantityDayWaterSupply[i].ListQuantity[
                                        j
                                    ].Value != null &&
                                    data.QuantityDayWaterSupply[i].ListQuantity[
                                        j
                                    ].Value != undefined &&
                                    data.QuantityDayWaterSupply[i].ListQuantity[
                                        j
                                    ].Value != 0
                                ) {
                                    sum +=
                                        data.QuantityDayWaterSupply[i]
                                            .ListQuantity[j].Value;
                                    count += 1;

                                    if (
                                        bodyTotal[j] != null &&
                                        bodyTotal[j] != undefined
                                    ) {
                                        bodyTotal[j].value +=
                                            data.QuantityDayWaterSupply[
                                                i
                                            ].ListQuantity[j].Value;
                                    } else {
                                        let obj = {
                                            value: data.QuantityDayWaterSupply[
                                                i
                                            ].ListQuantity[j].Value,
                                        };
                                        bodyTotal.push(obj);
                                    }
                                    if (isCangio == true) {
                                        if (
                                            cangio[j] != null &&
                                            cangio[j] != undefined
                                        ) {
                                            cangio[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            cangio.push(obj);
                                        }
                                        sumCanGio +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countCanGio += 1;
                                    } else if (isOutlet == true) {
                                        if (
                                            outlet[j] != null &&
                                            outlet[j] != undefined
                                        ) {
                                            outlet[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            outlet.push(obj);
                                        }
                                        sumOutlet +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countOutlet += 1;
                                    } else if (isTachMang == true) {
                                        if (
                                            tachmang[j] != null &&
                                            tachmang[j] != undefined
                                        ) {
                                            tachmang[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            tachmang.push(obj);
                                        }
                                        sumTachMang +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countTachMang += 1;
                                    } else if (isGieng == true) {
                                        if (
                                            gieng[j] != null &&
                                            gieng[j] != undefined
                                        ) {
                                            gieng[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            gieng.push(obj);
                                        }
                                        sumGieng +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countGieng += 1;
                                    } else if (isNuocNgam == true) {
                                        if (
                                            nuocngam[j] != null &&
                                            nuocngam[j] != undefined
                                        ) {
                                            nuocngam[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            nuocngam.push(obj);
                                        }
                                        countNuocNgam +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countNuocNgam += 1;
                                    } else if (isXaHoiHoa == true) {
                                        if (
                                            xahoihoa[j] != null &&
                                            xahoihoa[j] != undefined
                                        ) {
                                            xahoihoa[j].value +=
                                                data.QuantityDayWaterSupply[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data
                                                    .QuantityDayWaterSupply[i]
                                                    .ListQuantity[j].Value,
                                            };
                                            xahoihoa.push(obj);
                                        }
                                        sumXaHoiHoa +=
                                            data.QuantityDayWaterSupply[i]
                                                .ListQuantity[j].Value;
                                        countXaHoiHoa += 1;
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

                        let rowValueBody = data.QuantityDayWaterSupply[
                            i
                        ].ListQuantity.map((el: any, index: any) => {
                            if (el.IsEnoughData == false) {
                                return (
                                    <td
                                        key={index}
                                        style={{ backgroundColor: 'yellow' }}
                                    >
                                        {new Intl.NumberFormat('en-EN').format(
                                            el.Value.toFixed(0),
                                        )}
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={index}>
                                        {new Intl.NumberFormat('en-EN').format(
                                            el.Value.toFixed(0),
                                        )}
                                    </td>
                                );
                            }
                        });

                        let rowBody = (
                            <tr key={data.QuantityDayWaterSupply[i].SiteId}>
                                <td>{i + 1}</td>
                                <td>{data.QuantityDayWaterSupply[i].Marks}</td>
                                <td>{data.QuantityDayWaterSupply[i].Size}</td>
                                <td>{data.QuantityDayWaterSupply[i].SiteId}</td>
                                <td>
                                    {data.QuantityDayWaterSupply[i].Location}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        sum.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avg.toFixed(0),
                                    )}
                                </td>
                                {rowValueBody}
                            </tr>
                        );

                        body.push(rowBody);
                    }

                    if (cangio.length > 0) {
                        if (countCanGio == 0) {
                            countCanGio = 1;
                        }

                        avgCangio = sumCanGio / countCanGio;

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
                                        sumCanGio.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgCangio.toFixed(0),
                                    )}
                                </td>
                                {rowBodyCanGioValue}
                            </tr>
                        );

                        body.push(rowBodyCanGio);
                    }
                    if (outlet.length > 0) {
                        if (countOutlet == 0) {
                            countOutlet = 1;
                        }

                        avgOutlet = sumOutlet / countOutlet;

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
                                        sumOutlet.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgOutlet.toFixed(0),
                                    )}
                                </td>
                                {rowBodyOutletValue}
                            </tr>
                        );

                        body.push(rowBodyOutlet);
                    }
                    if (tachmang.length > 0) {
                        if (countTachMang == 0) {
                            countTachMang = 1;
                        }

                        avgTachMang = sumTachMang / countTachMang;

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
                                        sumTachMang.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgTachMang.toFixed(0),
                                    )}
                                </td>
                                {rowBodyTachMangValue}
                            </tr>
                        );

                        body.push(rowBodyTachMang);
                    }
                    if (gieng.length > 0) {
                        if (countGieng == 0) {
                            countGieng = 1;
                        }

                        avgGieng = sumGieng / countGieng;

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
                                        sumGieng.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgGieng.toFixed(0),
                                    )}
                                </td>
                                {rowBodyGiengValue}
                            </tr>
                        );

                        body.push(rowBodyGieng);
                    }
                    if (nuocngam.length > 0) {
                        if (countNuocNgam == 0) {
                            countNuocNgam = 1;
                        }

                        avgNuocNgam = sumNuocNgam / countNuocNgam;

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
                                        sumNuocNgam.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgNuocNgam.toFixed(0),
                                    )}
                                </td>
                                {rowBodyNuocNgamValue}
                            </tr>
                        );

                        body.push(rowBodyNuocNgam);
                    }
                    if (xahoihoa.length > 0) {
                        if (countXaHoiHoa == 0) {
                            countXaHoiHoa = 1;
                        }

                        avgXaHoiHoa = sumXaHoiHoa / countXaHoiHoa;

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
                                        sumXaHoiHoa.toFixed(0),
                                    )}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('en-EN').format(
                                        avgXaHoiHoa.toFixed(0),
                                    )}
                                </td>
                                {rowBodyXaHoiHoaValue}
                            </tr>
                        );

                        body.push(rowBodyXaHoiHoa);
                    }

                    let rowBodyTotalValue = bodyTotal.map(
                        (el: any, index: any) => (
                            <td key={index}>
                                {new Intl.NumberFormat('en-EN', {
                                    maximumSignificantDigits: 3,
                                }).format(el.value.toFixed(0))}
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
                                {new Intl.NumberFormat('en-EN', {
                                    maximumSignificantDigits: 3,
                                }).format(sumBodyTotal.toFixed(0))}
                            </td>
                            <td>
                                {new Intl.NumberFormat('en-EN', {
                                    maximumSignificantDigits: 3,
                                }).format(avgBodyTotal.toFixed(0))}
                            </td>
                            {rowBodyTotalValue}
                        </tr>
                    );

                    body.push(rowBodyTotal);

                    let timestampHeader = data.QuantityDayWaterSupply[
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
                        >
                            <caption>
                                Sản Lượng {selectedCompany} từ{' '}
                                {convertDateToStringNotTimeForTitle(
                                    new Date(startDate),
                                )}{' '}
                                đến{' '}
                                {convertDateToStringNotTimeForTitle(
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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <>
                <Grid>
                    <Col md={4} sm={12}>
                        <Select
                            label="Công ty"
                            placeholder="Chọn công ty"
                            withAsterisk
                            data={tempData}
                            onChange={onCompaniesChanged}
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <DatePicker
                            placeholder="Ngày bắt đầu"
                            label="Ngày bắt đầu"
                            withAsterisk
                            onChange={onStartDateChanged}
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <DatePicker
                            placeholder="Ngày kết thúc"
                            label="Ngày kết thúc"
                            withAsterisk
                            onChange={onEndDateChanged}
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
                                        className="mantine-UnstyledButton-root mantine-Button-root mantine-1a6zj3b"
                                        table="tableQuantity"
                                        filename={`Sản lượng ${selectedCompany} từ ${convertDateToStringNotTimeForTitle(
                                            new Date(startDate),
                                        )} đến  ${convertDateToStringNotTimeForTitle(
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

export default QuantityWaterSupply;
