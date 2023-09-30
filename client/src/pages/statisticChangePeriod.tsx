import { Select, Button, Grid, Col, Center, Text } from '@mantine/core';

import { DateInput } from '@mantine/dates';

import { checkAdminViewerRole, convertDateToString } from '../utils/utils';

import { useEffect, useState } from 'react';

import { useGetStatisticAccreditedLazyQuery } from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

const StatisticChangePeriodPage = () => {
    const [changeData, setChangeData] = useState([]);
    const [time, setTime] = useState<Date | null>(null);
    const [type, setType] = useState(0);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [data, setData] = useState([]);
    const [columns, setColumn] = useState([]);
    const [title, setTitle] = useState('');

    const [getStatisticAccreditation, {}] =
        useGetStatisticAccreditedLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        const temp = [];

        const obj = {
            label: 'Kiểm định đồng hồ',
            value: 1,
        };

        temp.push(obj);

        const obj2 = {
            label: 'Thay đồng hồ',
            value: 2,
        };

        temp.push(obj2);
        const obj3 = {
            label: 'Thay bộ hiển thị',
            value: 3,
        };

        temp.push(obj3);
        const obj4 = {
            label: 'Thay logger',
            value: 4,
        };

        temp.push(obj4);
        const obj5 = {
            label: 'Thay acquy',
            value: 5,
        };
        temp.push(obj5);

        const obj6 = {
            label: 'Thay pin bộ hiển thị',
            value: 6,
        };

        temp.push(obj6);

        const obj7 = {
            label: 'Thay pin logger',
            value: 7,
        };

        temp.push(obj7);

        //@ts-ignore
        setChangeData([...temp]);
    }, []);

    const onChangeTypeChanged = (e: any) => {
        setType(e);
    };

    const columnsForAccrediation = [
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
            name: 'Ngày kiểm định',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) => row.DateOfChange,
            width: '100px',
            format: (row: any) => convertDateToString(row.DateOfChange),
        },
        {
            name: 'Ngày hết hạn',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) => row.ExpiryDate,
            width: '100px',
            format: (row: any) => convertDateToString(row.ExpiryDate),
        },
        {
            name: 'Giấy kiểm định',
            selector: (row: any) => row.AccreditationDocument,
            sortable: true,
            cellExport: (row: any) => row.AccreditationDocument,
            width: '100px',
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.Description,
            sortable: true,
            cellExport: (row: any) => row.Description,
        },
    ];

    const onViewClicked = () => {
        if (type !== 0 && time !== null && time !== undefined) {
            if (type == 1) {
                getStatisticAccreditation({
                    variables: {
                        date: time,
                    },
                })
                    .then((res) => {
                        if (
                            res?.data?.GetStatisticAccredited !== null &&
                            res?.data?.GetStatisticAccredited !== undefined
                        ) {
                            const temp = [];

                            let count = 1;

                            for (const item of res.data
                                .GetStatisticAccredited) {
                                const obj = {
                                    STT: count++,
                                    ...item,
                                };

                                temp.push(obj);
                            }   

                            //@ts-ignore
                            setData([...temp]);

                            //@ts-ignore
                            setColumn([...columnsForAccrediation]);

                            setTitle(
                                `Điểm Lắp Đặt Kiểm Định Đồng Hồ Sau Ngày ${convertDateToString(
                                    time,
                                )}`,
                            );
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    };

    const tableData = {
        columns,
        data,
    };

    return (
        <Grid>
            <Col md={6}>
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
            <Col md={6}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="mốc thời gian"
                    placeholder="mốc thời gian"
                    mx="auto"
                    value={time}
                    onChange={(e) => setTime(e)}
                />
            </Col>

            {isAdminViewer == false ? (
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

export default StatisticChangePeriodPage;
