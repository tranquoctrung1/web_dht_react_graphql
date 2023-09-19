import { Grid, Button, Center, Col, Text } from '@mantine/core';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { useGetStatisticSiteXnManagerLazyQuery } from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

const StatisticSiteXNManager = () => {
    const [getStatisticSite, {}] = useGetStatisticSiteXnManagerLazyQuery();

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getStatisticSite()
            .then((res) => {
                if (res.data !== null && res.data !== undefined) {
                    if (
                        res.data.GetStatisticSiteXNManager !== null &&
                        res.data.GetStatisticSiteXNManager !== undefined
                    ) {
                        //@ts-ignore
                        setData([...res.data.GetStatisticSiteXNManager]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onViewClicked = () => {
        getData();
    };

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
            selector: (row: any) => row.SiteId,
            sortable: true,
            cellExport: (row: any) => row.SiteId,
            width: '150px',
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
            name: 'Vị trí',
            selector: (row: any) => row.Location,
            sortable: true,
            cellExport: (row: any) => row.Location,
            width: '300px',
        },
        {
            name: 'Cấp ĐH',
            selector: (row: any) => row.Level,
            sortable: true,
            cellExport: (row: any) => row.Level,
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
            name: 'Tình trạng',
            selector: (row: any) => row.Availability,
            sortable: true,
            cellExport: (row: any) => row.Availability,
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
            name: 'Dùng Logger',
            selector: (row: any) => row.UsingLogger,
            format: (row: any) => (row.UsingLogger == true ? 'Y' : 'N'),
            sortable: true,
            cellExport: (row: any) => row.UsingLogger,
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

    return (
        <Grid>
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
            <Col span={12} style={{ maxWidth: '99%' }}>
                <DataTableExtensions {...tableData}>
                    <DataTable
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>
                                    Thống Kê Điểm Lắp Đặt Xí Nghiệp Quản Lý
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

export default StatisticSiteXNManager;
