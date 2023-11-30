import { Grid, Col, Button, Center, Text } from '@mantine/core';

import { checkAdminViewerRole } from '../utils/utils';

import { useEffect, useState } from 'react';

import {
    useGetAllTransmitterLazyQuery,
    useDeleteTransmitterMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { motion } from 'framer-motion';

const DeleteUselessTransmitterPage = () => {
    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [data, setData] = useState([]);
    const [listTransmitter, setListTransmitter] = useState([]);

    const [getTransmitter, {}] = useGetAllTransmitterLazyQuery();
    const [deleteTransmitter, {}] = useDeleteTransmitterMutation();

    const [selectedRowFile, setSelectedRowFile] = useState([]);

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getTransmitter().then((res) => {
            if (
                res?.data?.GetAllTransmitter !== null &&
                res?.data?.GetAllTransmitter !== undefined
            ) {
                //@ts-ignore
                setListTransmitter([...res.data.GetAllTransmitter]);
                //@ts-ignore
                setData([...res.data.GetAllTransmitter]);
            }
        });
    }, []);

    const columns = [
        {
            name: 'Serial',
            selector: (row: any) => row.Serial,
            sortable: true,
            cellExport: (row: any) => row.Serial,
            width: '200px',
        },
        {
            name: 'Nhà sản xuất',
            selector: (row: any) => row.Provider,
            sortable: true,
            cellExport: (row: any) => row.Provider,
            width: '250px',
        },
        {
            name: 'Hiệu',
            selector: (row: any) => row.Marks,
            sortable: true,
            cellExport: (row: any) => row.Marks,
            width: '200px',
        },
        {
            name: 'Cở',
            selector: (row: any) => row.Size,
            sortable: true,
            cellExport: (row: any) => row.Size,
            width: '150px',
        },
        {
            name: 'Model',
            selector: (row: any) => row.Model,
            sortable: true,
            cellExport: (row: any) => row.Model,
            width: '150px',
        },
        {
            name: 'Tình trạng',
            selector: (row: any) => row.Status,
            sortable: true,
            cellExport: (row: any) => row.Status,
            width: '150px',
        },
    ];

    const tableData = {
        columns,
        data,
    };

    //@ts-ignore
    const handleSelectedRow = ({ selectedRows }) => {
        //@ts-ignore
        setSelectedRowFile([...selectedRows]);
    };

    const handleDeleteTransmitter = () => {
        const temp = listTransmitter.filter(
            //@ts-ignore
            (el) => selectedRowFile.find((e) => e._id === el._id) === undefined,
        );

        //@ts-ignore
        setListTransmitter([...temp]);

        setData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa bộ hiển thị?',
            text: 'Xóa bộ hiển thị không thể nào hồi phục lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                if (selectedRowFile.length > 0) {
                    for (const item of selectedRowFile) {
                        deleteTransmitter({
                            variables: {
                                transmitter: item,
                            },
                        })
                            .then((res) => {
                                if (
                                    res?.data?.DeleteTransmitter !== null &&
                                    res?.data?.DeleteTransmitter !== undefined
                                ) {
                                    console.log(res.data.DeleteTransmitter);
                                }
                            })
                            .catch((err) => console.log(err));
                    }

                    handleDeleteTransmitter();

                    Swal.fire({
                        icon: 'success',
                        title: 'Successfull',
                        text: 'Xóa thành công',
                    });
                }
            }
        });
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
                            Xóa bộ hiển thị không sử dụng
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col span={12}>
                    {isAdminViewer == false ? (
                        <Col span={12}>
                            <Center>
                                <Button
                                    variant="filled"
                                    color="red"
                                    onClick={onDeleteClicked}
                                >
                                    Xóa
                                </Button>
                            </Center>
                        </Col>
                    ) : null}
                </Col>

                <Col span={12} style={{ maxWidth: '99%' }}>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            title={
                                <Center>
                                    <Text weight={500}>
                                        Danh Sách Bộ Hiển Thị
                                    </Text>
                                </Center>
                            }
                            paginationPerPage={50}
                            sortIcon={<IconArrowBadgeUpFilled />}
                            defaultSortAsc={true}
                            pagination
                            highlightOnHover={true}
                            dense={false}
                            selectableRows
                            onSelectedRowsChange={handleSelectedRow}
                        />
                    </DataTableExtensions>
                </Col>
            </Grid>
        </motion.div>
    );
};

export default DeleteUselessTransmitterPage;
