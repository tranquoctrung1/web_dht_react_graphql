import { Grid, Col, Button, Center, Text } from '@mantine/core';

import { DateInput } from '@mantine/dates';

import { useGetStatisticAccreditationAndExpiryDateLazyQuery } from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import {
    checkAdminViewerRole,
    convertTimeStampToDate,
    convertDateToString,
} from '../utils/utils';

import { useEffect, useState } from 'react';

const StatisticAccreditationAndExpiryDatePage = () => {
    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [time, setTime] = useState<Date | null>(null);

    const [statisticData, setStatisticData] = useState([]);
    const [data, setData] = useState([]);

    const [getStatisticAccreditationAndExpiry, {}] =
        useGetStatisticAccreditationAndExpiryDateLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());
    }, []);

    const columns = [
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
            name: 'Cở',
            selector: (row: any) => row.Size,
            sortable: true,
            cellExport: (row: any) => row.Size,
            width: '100px',
        },
        {
            name: 'Giấy kiểm định',
            selector: (row: any) => row.AccreditationDocument,
            sortable: true,
            cellExport: (row: any) => row.AccreditationDocument,
            width: '100px',
        },
        {
            name: 'Ngày thay/ kiểm ',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) => row.DateOfChange,
            width: '100px',
            format: (row: any) => convertTimeStampToDate(row.DateOfChange),
        },
        {
            name: 'Ngày hết hiệu lực KĐ',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) => row.ExpiryDate,
            width: '100px',
            format: (row: any) => convertTimeStampToDate(row.ExpiryDate),
        },
        {
            name: 'Thời gian sử dụng',
            selector: (row: any) => '',
            sortable: true,
            cellExport: (row: any) => '',
            width: '100px',
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.Description,
            sortable: true,
            cellExport: (row: any) => row.Description,
        },
    ];

    const tableData = {
        columns,
        data,
    };

    const onViewClicked = () => {
        getStatisticAccreditationAndExpiry({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticAccreditationAndExpiryDate !==
                        null &&
                    res?.data?.GetStatisticAccreditationAndExpiryDate !==
                        undefined
                ) {
                    //@ts-ignore
                    setData([
                        ...res.data.GetStatisticAccreditationAndExpiryDate,
                    ]);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Grid>
            <Col span={12}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="Mốc thời gian"
                    placeholder="Mốc thời gian"
                    clearable
                    mx="auto"
                    value={time}
                    onChange={(e) => setTime(e)}
                />
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
                                <Text weight={500}>
                                    Đồng Hồ Tổng Hết Hạn Kiểm Định (Đến Ngày{' '}
                                    {
                                        //@ts-ignore
                                        convertDateToString(time)
                                    }
                                    )
                                </Text>
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

export default StatisticAccreditationAndExpiryDatePage;
