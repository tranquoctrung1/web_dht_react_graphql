import { Button, Center, Col, Grid, Select, Space, Text } from '@mantine/core';
import { DateInput, DateTimePicker } from '@mantine/dates';

import {
    IconDeviceFloppy,
    IconFileX,
    IconMapPinFilled,
    IconPlus,
} from '@tabler/icons-react';

import { useState } from 'react';

import { useGetCompaniesQuery } from '../__generated__/graphql';

import Companies from '../types/companies.type';

import AddIndex from './addIndex';
import AddLocation from './addLocation';
import AddLockValve from './addLockValve';
import AddSubtractWaterB1 from './addSubtractWaterB1';
import AddSubtractWaterB2 from './addSubtractWaterB2';
import AddWaterCustomer from './addWaterCustomer';

import { useDispatch, useSelector } from 'react-redux';

import { AddIndexState, addIndex } from '../features/addIndex';
import { AddLocationState, addLocation } from '../features/addLocation';
import { AddLockValveState } from '../features/addLockValve';
import { AddSubtractWaterB1State } from '../features/addSubtractWaterB1';
import { AddSubtractWaterB2State } from '../features/addSubtractWaterB2';
import { AddWaterCustomerState } from '../features/addWaterCustomer';
import {
    CurrentCompanyPreciousState,
    setCurrentCompanyPrecious,
} from '../features/currentCompanyPercious';
import {
    CurrentEndDatePreciousState,
    setCurrentEndDatePrecious,
} from '../features/currentEndDatePrecious';
import {
    CurrentStartDatePreciousState,
    setCurrentStartDatePrecious,
} from '../features/currentStartDatePrecious';

const ReportAveragePrecious = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [tetHolidayPre, setTetHolidayPre] = useState(null);
    const [tetHoliday, setTetHoliday] = useState(null);

    const addLocationState = useSelector(AddLocationState);
    const addIndexState = useSelector(AddIndexState);
    const addLockValveState = useSelector(AddLockValveState);
    const addSubtractWaterB1State = useSelector(AddSubtractWaterB1State);
    const addSubtractWaterB2State = useSelector(AddSubtractWaterB2State);
    const addWaterCustomerState = useSelector(AddWaterCustomerState);

    const dispatch = useDispatch();

    const { data, error, loading } = useGetCompaniesQuery();

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

    const onStartDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setStartDate(e.getTime());
            dispatch(setCurrentStartDatePrecious(e.getTime()));
        }
    };

    const onEndDateChanged = (e: any) => {
        if (e != null && e != undefined && e != '') {
            setEndDate(e.getTime());
            dispatch(setCurrentEndDatePrecious(e.getTime()));
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
    };

    const onAddLocationClicked = () => {
        let obj = {
            SiteId: '',
            Location: '',
            Periods: [{}, {}, {}],
            AverageDate: [],
            DateCalclogger: [],
            QuantityLogger: 0,
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
        console.log(33333);
    };

    const onAddSubtractB1Clicked = () => {
        console.log(4444);
    };

    const onAddSubtractB2Clicked = () => {
        console.log(55555);
    };

    const onAddWaterCustomerClicked = () => {
        console.log(666666);
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
                        onChange={onStartDateChanged}
                    />
                </Col>
                <Col md={4} sm={12}>
                    <DateTimePicker
                        clearable
                        placeholder="Ngày kết thúc"
                        label="Ngày kết thúc"
                        valueFormat="DD/MM/YYYY"
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
                    Biên bản đã lưu
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
                        {<AddLockValve index={1} />}
                    </div>
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
                                    <Text weight={500}>Nội dung giảm trừ</Text>
                                </Center>
                            </Col>
                            <Col span={2}>
                                <Center>
                                    <Text weight={500}>Đơn vị thi công</Text>
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
                        {<AddSubtractWaterB1 index={1} />}
                    </div>
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
                                    <Text weight={500}>Nội dung giảm trừ</Text>
                                </Center>
                            </Col>
                            <Col span={2}>
                                <Center>
                                    <Text weight={500}>Đơn vị thi công</Text>
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
                        {<AddSubtractWaterB2 index={1} />}
                    </div>
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
                                    <Text weight={500}>Số biên bản</Text>
                                </Center>
                            </Col>
                            <Col span={2}>
                                <Center>
                                    <Text weight={500}>Ngày phát hành</Text>
                                </Center>
                            </Col>
                            <Col span={2}>
                                <Center>
                                    <Text weight={500}>Số lượng đồng hồ</Text>
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
                        {<AddWaterCustomer index={1} />}
                    </div>
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
                        >
                            Lưu biên bản
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconFileX />}
                            variant="filled"
                            color="orange"
                        >
                            Biên bản TB
                        </Button>
                        <Space w="md" />
                        <Button
                            leftIcon={<IconFileX />}
                            variant="filled"
                            color="orange"
                        >
                            Biên bản sản lượng
                        </Button>
                    </Center>
                </Col>
            </Grid>
        </>
    );
};

export default ReportAveragePrecious;
