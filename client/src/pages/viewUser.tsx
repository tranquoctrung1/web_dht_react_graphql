import { Grid, Col, Text, Checkbox, Center } from '@mantine/core';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { useGetAllUserAndStaffLazyQuery } from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { convertDateToTimeString } from '../utils/utils';

const ViewUserPage = () => {
    const [data, setData] = useState([]);

    const [getUser, {}] = useGetAllUserAndStaffLazyQuery();

    useEffect(() => {
        getUser()
            .then((res) => {
                if (
                    res?.data?.GetAllUserAndStaff !== null &&
                    res?.data?.GetAllUserAndStaff !== undefined
                ) {
                    //@ts-ignore
                    setData([...res.data.GetAllUserAndStaff]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const columns = [
        {
            name: 'Người dùng',
            selector: (row: any) => row.Uid,
            sortable: true,
            cellExport: (row: any) => row.Uid,
            width: '150px',
        },
        {
            name: 'Mã nhân viên',
            selector: (row: any) => row.StaffId,
            sortable: true,
            cellExport: (row: any) => row.StaffId,
            width: '150px',
        },
        {
            name: 'Quyền',
            selector: (row: any) => row.Role,
            sortable: true,
            cellExport: (row: any) => row.Role,
            width: '150px',
        },
        {
            name: 'Đang hoạt động',
            selector: (row: any) => row.Active,
            sortable: true,
            cellExport: (row: any) => row.Active,
            width: '100px',
            format: (row: any) =>
                row.Active == true ? (
                    <Checkbox checked color="indigo" disabled />
                ) : (
                    <Checkbox color="indigo" disabled />
                ),
        },
        {
            name: 'Thời gian tạo',
            selector: (row: any) => row.TimeStamp,
            sortable: true,
            cellExport: (row: any) => row.TimeStamp,
            width: '200px',
            format: (row: any) => convertDateToTimeString(row.TimeStamp),
        },
        {
            name: 'Ip',
            selector: (row: any) => row.Ip,
            sortable: true,
            cellExport: (row: any) => row.Ip,
            width: '200px',
        },
        {
            name: 'Số lần đăng nhập',
            selector: (row: any) => row.LogCount,
            sortable: true,
            cellExport: (row: any) => row.LogCount,
            width: '150px',
        },
        {
            name: 'Tên',
            selector: (row: any) => row.LastName,
            sortable: true,
            cellExport: (row: any) => row.LastName,
            width: '200px',
        },
        {
            name: 'Họ',
            selector: (row: any) => row.LastName,
            sortable: true,
            cellExport: (row: any) => row.LastName,
            width: '200px',
        },
    ];

    const tableData = {
        columns,
        data,
    };

    return (
        <Grid>
            <Col span={12} style={{ maxWidth: '99%' }}>
                <DataTableExtensions {...tableData}>
                    <DataTable
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>Danh sách người dùng</Text>
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

export default ViewUserPage;
