import { Center, Col, Grid, NumberInput, Select, Text } from '@mantine/core';
import { DateInput, DatePickerInput, DateTimePicker } from '@mantine/dates';
import { IconMapPinFilled, IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
import AddLocationInterface from '../types/addLocation.type';

import { useDispatch, useSelector } from 'react-redux';
import { deleteLocation } from '../features/addLocation';

import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';

import {
    useGetSiteByWaterSupplyQuery,
    useQuantityLoggerDayLazyQuery,
} from '../__generated__/graphql';

import { CurrentEndDatePreciousState } from '../features/currentEndDatePrecious';
import { CurrentStartDatePreciousState } from '../features/currentStartDatePrecious';

import Site from '../types/site.type';

import Swal from 'sweetalert2';

const AddLocation = ({ index }: AddLocationInterface) => {
    const [searchValue, onSearchChange] = useState('');
    const [averageDate, setAverageDate] = useState<Date[]>([]);
    const [period1, setPeriod1] = useState(null);
    const [period2, setPeriod2] = useState(null);
    const [period3, setPeriod3] = useState(null);
    const [quantityPeriod1, setQuantityPeriod1] = useState(0);
    const [quantityPeriod2, setQuantityPeriod2] = useState(0);
    const [quantityPeriod3, setQuantityPeriod3] = useState(0);
    const [siteid, setSiteId] = useState('');
    const [sitename, setSiteName] = useState('');

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

    const { data, error, loading } = useGetSiteByWaterSupplyQuery({
        variables: { company: currentCompanyPreciousState },
    });

    const [
        getQuantityLoggerDay,
        { loading: loadingQuantity, error: errorQuantity, data: dataQuanity },
    ] = useQuantityLoggerDayLazyQuery();

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
                }
            }
        }
    };

    const getQuantity = (e: any) => {
        if (e !== null) {
            let isAllow = true;

            let dayOfStartDate = 1;
            let dayOfEndDate = 1;

            if (currentStartDatePreciousState !== 0) {
                dayOfStartDate = new Date(
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
                    e.getMonth(),
                    dayOfStartDate,
                    0,
                    0,
                    0,
                );
                let endDate = new Date(
                    e.getFullYear(),
                    e.getMonth() + 1,
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
                        start: totalMiliSecondStartDate.toString(),
                        end: totalMiliSecondEndDate.toString(),
                    },
                });
            }
        }
    };

    const onPeriod1Changed = (e: any) => {
        setPeriod1(e);
        getQuantity(e);
    };

    const onPeriod2Changed = (e: any) => {};

    const onPeriod3Changed = (e: any) => {};

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
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    nothingFound="Không tìm thấy"
                    data={tempDataSite}
                    clearable
                    onChange={onSelectSiteChanged}
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
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
                    value={
                        dataQuanity === undefined || dataQuanity === null
                            ? 0
                            : dataQuanity.QuantityLoggerDay
                    }
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
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
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
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
                    value={quantityPeriod3}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    type="multiple"
                    label="Ngày trung bình"
                    placeholder="Ngày trung bình"
                    value={averageDate}
                    onChange={setAverageDate}
                    mx="auto"
                />
            </Col>
        </Grid>
    );
};

export default AddLocation;
