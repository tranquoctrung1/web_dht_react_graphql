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
    useQuantityDayCompanyLazyQuery,
} from '../__generated__/graphql';

import { useState } from 'react';

import Swal from 'sweetalert2';

import {
    convertDateToStringNotTime,
    convertDateToStringNotTimeForTitle,
} from '../utils/utils';
// @ts-ignore comment
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

interface Companies {
    value: string;
    label: string;
}

const QuantityCompanyPage = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { data, error, loading } = useGetCompaniesQuery();
    const [
        getQuantityCompany,
        { loading: loadingQuantity, error: errorQuantity, data: dataQuanity },
    ] = useQuantityDayCompanyLazyQuery();

    if (loading) {
        return (
            <Text color="blue" weight={500}>
                Đang tải danh sách đơn vị quản lý
            </Text>
        );
    }
    if (error) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dánh sách đơn vị quản lý
            </Text>
        );
    }

    let tempData = [];

    if (data != null && data != undefined) {
        if (data.GetCompanies != null && data.GetCompanies != undefined) {
            if (data.GetCompanies.length > 0) {
                for (let company of data.GetCompanies) {
                    let obj: Companies = {
                        // @ts-ignore comment
                        value: company.Company,
                        // @ts-ignore comment
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
                text: 'Chưa chọn đơn vị quản lý!',
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
                    // @ts-ignore comment
                    start: startDate.toString(),
                    // @ts-ignore comment
                    end: endDate.toString(),
                },
            });
        }
    };

    const renderTableQuantity = (data: any) => {
        if (data != null && data != undefined) {
            if (
                data.QuantityDayCompany != null &&
                data.QuantityDayCompany != undefined
            ) {
                if (data.QuantityDayCompany.length > 0) {
                    let maxLengthQuantity =
                        data.QuantityDayCompany[0].ListQuantity.length;
                    let indexMaxLengthQuantity = 0;

                    let body = [];
                    let bodyTotal = [];
                    let sumBodyTotal = 0;
                    let avgBodyTotal = 0;

                    let cangio = [];
                    let isCangio = false;
                    let sumCanGio = 0;
                    let avgCangio = 0;

                    let outlet = [];
                    let isOutlet = false;
                    let sumOutlet = 0;
                    let avgOutlet = 0;

                    let tachmang = [];
                    let isTachMang = false;
                    let sumTachMang = 0;
                    let avgTachMang = 0;

                    let gieng = [];
                    let isGieng = false;
                    let sumGieng = 0;
                    let avgGieng = 0;

                    let nuocngam = [];
                    let isNuocNgam = false;
                    let sumNuocNgam = 0;
                    let avgNuocNgam = 0;

                    let xahoihoa = [];
                    let isXaHoiHoa = false;
                    let sumXaHoiHoa = 0;
                    let avgXaHoiHoa = 0;

                    for (let i = 0; i < data.QuantityDayCompany.length; i++) {
                        isCangio = false;
                        isOutlet = false;
                        isTachMang = false;
                        isGieng = false;
                        isNuocNgam = false;
                        isXaHoiHoa = false;

                        if (
                            data.QuantityDayCompany[i].ListQuantity.length >
                            maxLengthQuantity
                        ) {
                            maxLengthQuantity =
                                data.QuantityDayCompany[i].ListQuantity.length;
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
                            data.QuantityDayCompany[i].SiteId != null &&
                            data.QuantityDayCompany[i].SiteId != undefined &&
                            data.QuantityDayCompany[i].SiteId != ''
                        ) {
                            let marker = data.QuantityDayCompany[i].SiteId[2];
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
                            j < data.QuantityDayCompany[i].ListQuantity.length;
                            j++
                        ) {
                            if (
                                data.QuantityDayCompany[i].ListQuantity[j] !=
                                    null &&
                                data.QuantityDayCompany[i].ListQuantity[j] !=
                                    undefined
                            ) {
                                if (
                                    data.QuantityDayCompany[i].ListQuantity[j]
                                        .Value != null &&
                                    data.QuantityDayCompany[i].ListQuantity[j]
                                        .Value != undefined &&
                                    data.QuantityDayCompany[i].ListQuantity[j]
                                        .Value != 0
                                ) {
                                    sum +=
                                        data.QuantityDayCompany[i].ListQuantity[
                                            j
                                        ].Value;
                                    count += 1;

                                    if (
                                        bodyTotal[j] != null &&
                                        bodyTotal[j] != undefined
                                    ) {
                                        bodyTotal[j].value +=
                                            data.QuantityDayCompany[
                                                i
                                            ].ListQuantity[j].Value;
                                    } else {
                                        let obj = {
                                            value: data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value,
                                        };
                                        bodyTotal.push(obj);
                                    }
                                    if (isCangio == true) {
                                        if (
                                            cangio[j] != null &&
                                            cangio[j] != undefined
                                        ) {
                                            cangio[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            cangio.push(obj);
                                        }
                                        sumCanGio +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempcountCanGio += 1;
                                        tempSumCanGio +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                    } else if (isOutlet == true) {
                                        if (
                                            outlet[j] != null &&
                                            outlet[j] != undefined
                                        ) {
                                            outlet[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            outlet.push(obj);
                                        }
                                        sumOutlet +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempCountOutlet += 1;
                                        tempSumOutlet +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                    } else if (isTachMang == true) {
                                        if (
                                            tachmang[j] != null &&
                                            tachmang[j] != undefined
                                        ) {
                                            tachmang[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            tachmang.push(obj);
                                        }
                                        sumTachMang +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempCountTachMang += 1;
                                        tempSumTachMang +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                    } else if (isGieng == true) {
                                        if (
                                            gieng[j] != null &&
                                            gieng[j] != undefined
                                        ) {
                                            gieng[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            gieng.push(obj);
                                        }
                                        sumGieng +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempCountGieng += 1;
                                        tempSumGieng +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                    } else if (isNuocNgam == true) {
                                        if (
                                            nuocngam[j] != null &&
                                            nuocngam[j] != undefined
                                        ) {
                                            nuocngam[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            nuocngam.push(obj);
                                        }
                                        sumNuocNgam +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempCountNuocNgam += 1;
                                        tempSumNuocNgam +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                    } else if (isXaHoiHoa == true) {
                                        if (
                                            xahoihoa[j] != null &&
                                            xahoihoa[j] != undefined
                                        ) {
                                            xahoihoa[j].value +=
                                                data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value;
                                        } else {
                                            let obj = {
                                                value: data.QuantityDayCompany[
                                                    i
                                                ].ListQuantity[j].Value,
                                            };
                                            xahoihoa.push(obj);
                                        }
                                        sumXaHoiHoa +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
                                        tempCountXaHoiHoa += 1;
                                        tempSumXaHoiHoa +=
                                            data.QuantityDayCompany[i]
                                                .ListQuantity[j].Value;
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

                        let rowValueBody = data.QuantityDayCompany[
                            i
                        ].ListQuantity.map((el: any, index: any) => {
                            if (el.IsEnoughData == false) {
                                return (
                                    <td
                                        key={index}
                                        //style={{ backgroundColor: 'yellow' }}
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
                            <tr key={data.QuantityDayCompany[i].SiteId}>
                                <td>{i + 1}</td>
                                <td>{data.QuantityDayCompany[i].Marks}</td>
                                <td>{data.QuantityDayCompany[i].Size}</td>
                                <td>{data.QuantityDayCompany[i].SiteId}</td>
                                <td>{data.QuantityDayCompany[i].Location}</td>
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

                        body.push(rowBodyCanGio);
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

                        body.push(rowBodyOutlet);
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

                        body.push(rowBodyTachMang);
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

                        body.push(rowBodyGieng);
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

                        body.push(rowBodyNuocNgam);
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

                        body.push(rowBodyXaHoiHoa);
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

                    let timestampHeader = data.QuantityDayCompany[
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
                            label="Đơn vị quản lý"
                            placeholder="Chọn đơn vị quản lý"
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

export default QuantityCompanyPage;
