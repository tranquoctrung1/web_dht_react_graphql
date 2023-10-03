import {
    Select,
    Button,
    Grid,
    Col,
    Center,
    Text,
    MultiSelect,
    NumberInput,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import {
    checkAdminViewerRole,
    convertDateToString,
    calcSpace2Date,
} from '../utils/utils';

import { useEffect, useState } from 'react';

import {
    useGetStatisticMeterChangeByYearUsingLazyQuery,
    useGetStatisticTransmitterChangeByYearUsingLazyQuery,
    useGetStatisticLoggerChangeByYearUsingLazyQuery,
    useGetStatisticBatteryChangeByYearUsingLazyQuery,
    useGetStatisticTransmitterBatteryChangeByYearUsingLazyQuery,
    useGetStatisticLoggerBatteryChangeByYearUsingLazyQuery,
    useGetCompaniesLazyQuery,
    useGetAllSiteStatusLazyQuery,
} from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled, IconTemplateOff } from '@tabler/icons-react';

const StatisticMeterWorkPage = () => {
    const [changeData, setChangeData] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [status, setStatus] = useState([]);
    const [timeUse, setTimeUse] = useState<number>(0);
    const [time, setTime] = useState<Date | null>(null);
    const [type, setType] = useState(0);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [valueCompanies, setValueCompanies] = useState<string[]>([]);
    const [valueStatus, setValueStatus] = useState<string[]>([]);

    const [data, setData] = useState([]);
    const [columns, setColumn] = useState([]);
    const [title, setTitle] = useState('');

    const [getStatisticMeterChange, {}] =
        useGetStatisticMeterChangeByYearUsingLazyQuery();
    const [getStatisticTransmitterChange, {}] =
        useGetStatisticTransmitterChangeByYearUsingLazyQuery();
    const [getStatisticLoggerChange, {}] =
        useGetStatisticLoggerChangeByYearUsingLazyQuery();
    const [getStatisticBatteryChange, {}] =
        useGetStatisticBatteryChangeByYearUsingLazyQuery();
    const [getStatisticTransmitterBatteryChange, {}] =
        useGetStatisticTransmitterBatteryChangeByYearUsingLazyQuery();
    const [getStatisticLoggerBatteryChange, {}] =
        useGetStatisticLoggerBatteryChangeByYearUsingLazyQuery();
    const [getCompanies, {}] = useGetCompaniesLazyQuery();
    const [getSiteStatus, {}] = useGetAllSiteStatusLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getCompanies()
            .then((res) => {
                if (
                    res?.data?.GetCompanies !== null &&
                    res?.data?.GetCompanies
                ) {
                    const temp = [];
                    for (const item of res.data.GetCompanies) {
                        const obj = {
                            value: item?.Company,
                            label: item.Company,
                        };

                        temp.push(obj);
                    }
                    //@ts-ignore
                    setCompanies([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSiteStatus()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteStatus !== null &&
                    res?.data?.GetAllSiteStatus !== undefined
                ) {
                    const temp = [];
                    for (const item of res.data.GetAllSiteStatus) {
                        const obj = {
                            value: item?.Status,
                            label: item?.Status,
                        };

                        temp.push(obj);
                    }
                    //@ts-ignore
                    setStatus([...temp]);
                }
            })
            .catch((err) => console.log(err));

        const temp = [];

        const obj2 = {
            label: 'Thay đồng hồ',
            value: 1,
        };

        temp.push(obj2);
        const obj3 = {
            label: 'Thay bộ hiển thị',
            value: 2,
        };

        temp.push(obj3);
        const obj4 = {
            label: 'Thay logger',
            value: 3,
        };

        temp.push(obj4);
        const obj5 = {
            label: 'Thay acquy',
            value: 4,
        };
        temp.push(obj5);

        const obj6 = {
            label: 'Thay pin bộ hiển thị',
            value: 5,
        };

        temp.push(obj6);

        const obj7 = {
            label: 'Thay pin logger',
            value: 6,
        };

        temp.push(obj7);

        //@ts-ignore
        setChangeData([...temp]);
    }, []);

    const onChangeTypeChanged = (e: any) => {
        setType(e);
    };

    const getStatisticMeterChangeAction = () => {
        getStatisticMeterChange({
            variables: {
                date: time,
                year: timeUse,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticMeterChangeByYearUsing !== null &&
                    res?.data?.GetStatisticMeterChangeByYearUsing !== undefined
                ) {
                    let t = res.data.GetStatisticMeterChangeByYearUsing;

                    const data = [];

                    for (const item of t) {
                        if (item?.TakeoverDate !== null) {
                            data.push(item);
                        } else {
                            if (valueCompanies.length > 0) {
                                const index = valueCompanies.indexOf(
                                    //@ts-ignore
                                    item.Company,
                                );

                                if (index !== -1) {
                                    if (valueStatus.length > 0) {
                                        const index2 = valueStatus.indexOf(
                                            //@ts-ignore
                                            item.Company,
                                        );

                                        if (index2 !== -1) {
                                            data.push(item);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Thay Đồng Hồ >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticTransmitterChangeAction = () => {
        getStatisticTransmitterChange({
            variables: {
                date: time,
                year: timeUse,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticTransmitterChangeByYearUsing !==
                        null &&
                    res?.data?.GetStatisticTransmitterChangeByYearUsing !==
                        undefined
                ) {
                    let data =
                        res.data.GetStatisticTransmitterChangeByYearUsing;

                    if (valueCompanies.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueCompanies.indexOf(el?.Company) !== -1,
                        );
                    }

                    if (valueStatus.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueStatus.indexOf(el?.Status) !== -1,
                        );
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Thay Bộ Hiển Thị >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticLoggerChangeAction = () => {
        getStatisticLoggerChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticLoggerChangeByYearUsing !== null &&
                    res?.data?.GetStatisticLoggerChangeByYearUsing !== undefined
                ) {
                    let data = res.data.GetStatisticLoggerChangeByYearUsing;

                    if (valueCompanies.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueCompanies.indexOf(el?.Company) !== -1,
                        );
                    }

                    if (valueStatus.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueStatus.indexOf(el?.Status) !== -1,
                        );
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Thay Logger >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticBatteryChangeAction = () => {
        getStatisticBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticBatteryChangeByYearUsing !== null &&
                    res?.data?.GetStatisticBatteryChangeByYearUsing !==
                        undefined
                ) {
                    let data = res.data.GetStatisticBatteryChangeByYearUsing;

                    if (valueCompanies.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueCompanies.indexOf(el?.Company) !== -1,
                        );
                    }

                    if (valueStatus.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueStatus.indexOf(el?.Status) !== -1,
                        );
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Ac quy >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticTransmitterBatteryChangeAction = () => {
        getStatisticTransmitterBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data
                        ?.GetStatisticTransmitterBatteryChangeByYearUsing !==
                        null &&
                    res?.data
                        ?.GetStatisticTransmitterBatteryChangeByYearUsing !==
                        undefined
                ) {
                    let data =
                        res.data
                            .GetStatisticTransmitterBatteryChangeByYearUsing;

                    if (valueCompanies.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueCompanies.indexOf(el?.Company) !== -1,
                        );
                    }

                    if (valueStatus.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueStatus.indexOf(el?.Status) !== -1,
                        );
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Thay Pin Bộ Hiển Thị >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticLoggerBatteryChangeAction = () => {
        getStatisticLoggerBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticLoggerBatteryChangeByYearUsing !==
                        null &&
                    res?.data?.GetStatisticLoggerBatteryChangeByYearUsing !==
                        undefined
                ) {
                    let data =
                        res.data.GetStatisticLoggerBatteryChangeByYearUsing;

                    if (valueCompanies.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueCompanies.indexOf(el?.Company) !== -1,
                        );
                    }

                    if (valueStatus.length > 0) {
                        data = data.filter(
                            //@ts-ignore
                            (el) => valueStatus.indexOf(el?.Status) !== -1,
                        );
                    }

                    const temp = [];

                    let count = 1;

                    for (const item of data) {
                        const obj = {
                            STT: count++,
                            ...item,
                            DateUsing:
                                item?.DateOfChange !== null
                                    ? calcSpace2Date(
                                          new Date(
                                              item?.DateOfChange,
                                          ).getTime(),
                                          Date.now(),
                                      )
                                    : '',
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);

                    setTitle(
                        `Đồng Hồ Tổng Đến Ngày  ${convertDateToString(
                            //@ts-ignore
                            time,
                        )} Có Thời Gian Thay Pin Logger >= ${timeUse} Năm`,
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onViewClicked = () => {
        let isAllow = true;

        if (type == 0 || time == null || time === undefined || timeUse === 0) {
            isAllow = false;
        }

        if (isAllow == true) {
            if (type == 1) {
                getStatisticMeterChangeAction();
            } else if (type == 2) {
                getStatisticTransmitterChangeAction();
            } else if (type == 3) {
                getStatisticLoggerChangeAction();
            } else if (type == 4) {
                getStatisticBatteryChangeAction();
            } else if (type == 5) {
                getStatisticTransmitterBatteryChangeAction();
            } else if (type == 6) {
                getStatisticLoggerBatteryChangeAction();
            }
        }
    };

    const columnsTemplate = [
        {
            name: 'STT',
            selector: (row: any) => row.STT,
            sortable: true,
            cellExport: (row: any) => row.STT,
            width: '80px',
        },
        {
            name: 'Mã vị trí',
            selector: (row: any) => row._id,
            sortable: true,
            cellExport: (row: any) => row._id,
            width: '150px',
        },
        {
            name: 'Vị trí',
            selector: (row: any) => row.Location,
            sortable: true,
            cellExport: (row: any) => row.Location,
            width: '300px',
        },
        {
            name: 'Hiệu',
            selector: (row: any) => row.Marks,
            sortable: true,
            cellExport: (row: any) => row.Marks,
            width: '100px',
        },
        {
            name: 'Cỡ',
            selector: (row: any) => row.Size,
            sortable: true,
            cellExport: (row: any) => row.Size,
            width: '100px',
        },
        {
            name: 'Quản lý',
            selector: (row: any) => row.Company,
            sortable: true,
            cellExport: (row: any) => row.Company,
            width: '100px',
        },
        {
            name: 'Trạng thái',
            selector: (row: any) => row.Status,
            sortable: true,
            cellExport: (row: any) => row.Status,
            width: '100px',
        },
        {
            name: 'Ngày thay/ kiểm',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) => row.DateOfChange,
            width: '100px',
            format: (row: any) => convertDateToString(row.DateOfChange),
        },
        {
            name: 'Thời gian sử dụng',
            selector: (row: any) => row.DateUsing,
            sortable: true,
            cellExport: (row: any) => row.DateUsing,
            width: '100px',
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.DescriptionOfChange,
            sortable: true,
            cellExport: (row: any) => row.DescriptionOfChange,
        },
    ];

    const tableData = {
        columns,
        data,
    };

    return (
        <Grid>
            <Col md={4}>
                {changeData ? (
                    <Select
                        label="Loại"
                        placeholder="Loại"
                        searchable
                        nothingFound="Không tìm thấy loại"
                        //@ts-ignore
                        data={changeData}
                        onChange={onChangeTypeChanged}
                    />
                ) : null}
            </Col>
            <Col md={4}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="mốc thời gian"
                    placeholder="mốc thời gian"
                    mx="auto"
                    value={time}
                    onChange={(e) => setTime(e)}
                />
            </Col>
            <Col md={4}>
                <NumberInput
                    label="Thời gian sử dụng"
                    value={timeUse}
                    //@ts-ignore
                    onChange={(e) => setTimeUse(e)}
                />
            </Col>
            <Col md={4}>
                {companies ? (
                    <MultiSelect
                        label="Quản lý"
                        placeholder="Pick value"
                        data={companies}
                        clearable
                        searchable
                        onChange={(e) => setValueCompanies(e)}
                    />
                ) : null}
            </Col>
            <Col md={4}>
                {status ? (
                    <MultiSelect
                        label="Trạng thái"
                        placeholder="Pick value"
                        data={status}
                        clearable
                        searchable
                        onChange={(e) => setValueStatus(e)}
                    />
                ) : null}
            </Col>
            {isAdminViewer === false ? (
                <Col span={12}>
                    <Center>
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onViewClicked}
                        >
                            Xem
                        </Button>
                    </Center>
                </Col>
            ) : null}
            <Col span={12} style={{ maxWidth: '99%' }}>
                <DataTableExtensions {...tableData}>
                    <DataTable
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>{title}</Text>
                            </Center>
                        }
                        paginationPerPage={50}
                        sortIcon={<IconArrowBadgeUpFilled />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover={true}
                        dense={false}
                    />
                </DataTableExtensions>
            </Col>
        </Grid>
    );
};

export default StatisticMeterWorkPage;
