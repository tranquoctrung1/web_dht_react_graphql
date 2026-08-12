import { Grid, Col, Text, Checkbox, Center, Button } from '@mantine/core';

import DataTable from 'react-data-table-component';

import { useTableTheme } from '../hooks/useTableTheme';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import {
    useGetAllUserAndStaffQuery,
    useResetAllLoginCountMutation,
    useResetLoginCountMutation,
} from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { checkAdminRole, convertDateToTimeString } from '../utils/utils';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const ViewUserPage = () => {
    const tableTheme = useTableTheme();
    const [data, setData] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const { refetch: getUser } = useGetAllUserAndStaffQuery();
    const [resetAllLoginCount, {}] = useResetAllLoginCountMutation();
    const [resetLoginCount, {}] = useResetLoginCountMutation();

    const getUserData = () => {
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
    };

    useEffect(() => {
        setIsAdmin(checkAdminRole());

        getUserData();
    }, []);

    const onResetLoginCountClicked = () => {
        Swal.fire({
            title: 'Reset số lần đăng nhập?',
            text: 'Đặt lại Số lần đăng nhập về 0 cho TẤT CẢ tài khoản. Thao tác này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Reset',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                resetAllLoginCount()
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successfull',
                            text: 'Đã reset số lần đăng nhập',
                        });

                        getUserData();
                    })
                    .catch((err) => console.log(err));
            }
        });
    };

    const onResetLoginCountForUserClicked = (uid: string) => {
        Swal.fire({
            title: 'Reset số lần đăng nhập?',
            text: `Đặt lại Số lần đăng nhập về 0 cho tài khoản ${uid}. Thao tác này không thể hoàn tác!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Reset',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                resetLoginCount({
                    variables: {
                        Uid: uid,
                    },
                })
                    .then((res) => {
                        if (
                            res?.data?.ResetLoginCount !== null &&
                            res?.data?.ResetLoginCount !== undefined &&
                            res.data.ResetLoginCount > 0
                        ) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: `Đã reset số lần đăng nhập cho ${uid}`,
                            });

                            getUserData();
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Reset số lần đăng nhập không thành công',
                            });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Reset số lần đăng nhập không thành công',
                        });
                    });
            }
        });
    };

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
                    <Checkbox checked color="indigo" readOnly />
                ) : (
                    <Checkbox color="indigo" readOnly />
                ),
        },
        {
            name: 'TimeStamp',
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
        ...(isAdmin
            ? [
                  {
                      name: 'Reset',
                      sortable: false,
                      width: '100px',
                      cell: (row: any) => (
                          <Button
                              size="xs"
                              variant="filled"
                              color="orange"
                              onClick={() =>
                                  onResetLoginCountForUserClicked(row.Uid)
                              }
                          >
                              Reset
                          </Button>
                      ),
                  },
              ]
            : []),
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col span={12}>
                    <Center>
                        <Text weight={500} size="1.2rem">
                            Xem người dùng
                        </Text>
                    </Center>
                    <hr />
                </Col>
                {isAdmin ? (
                    <Col span={12}>
                        <Center>
                            <Button
                                variant="filled"
                                color="red"
                                onClick={onResetLoginCountClicked}
                            >
                                Reset số lần đăng nhập (tất cả tài khoản)
                            </Button>
                        </Center>
                    </Col>
                ) : null}
                <Col span={12} style={{ maxWidth: '99%' }}>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            theme={tableTheme}
                            columns={columns}
                            data={data}
                            title={
                                <Center>
                                    <Text weight={500}>
                                        Danh sách người dùng
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
        </motion.div>
    );
};

export default ViewUserPage;
