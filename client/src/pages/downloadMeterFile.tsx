import { Grid, Col, Button, Space, Center, Select, Text } from '@mantine/core';

import axios from 'axios';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { HostnameState } from '../features/hostname';

import { useGetAllMeterQuery } from '../__generated__/graphql';

import { checkAdminViewerRole } from '../utils/utils';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { convertTimeStampToDate } from '../utils/utils';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const DownloadMeterFilePage = () => {
    const [meterData, setMeterData] = useState([]);

    const [listFile, setListFile] = useState([]);

    const [data, setData] = useState([]);

    const [errorDownload, setErrorDownload] = useState('');

    const [selectedRowFile, setSelectedRowFile] = useState([]);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const { refetch: getMeter } = useGetAllMeterQuery();

    const hostname = useSelector(HostnameState);

    const getMeterFile = () => {
        axios
            .get(`${hostname}/meterFile/upload`)
            .then((res) => {
                if (res?.data !== null && res?.data !== undefined) {
                    if (res.status === 200) {
                        //@ts-ignore
                        setData([...res.data.message]);
                        //@ts-ignore
                        setListFile([...res.data.message]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getMeter()
            .then((res) => {
                if (
                    res?.data?.GetAllMeter !== null &&
                    res?.data?.GetAllMeter !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllMeter) {
                        if (
                            item?.Serial !== null &&
                            item?.Serial !== undefined &&
                            item?.Serial !== ''
                        ) {
                            const obj = {
                                value: item?.Serial,
                                label: item?.Serial,
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setMeterData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getMeterFile();
    }, []);

    const columns = [
        {
            name: 'Tên file',
            selector: (row: any) => row.FileName,
            sortable: true,
            cellExport: (row: any) => row.FileName,
            width: '500px',
        },
        {
            name: 'Serial',
            selector: (row: any) => row.Serial,
            sortable: true,
            cellExport: (row: any) => row.Serial,
            width: '150px',
        },
        {
            name: 'MIME Type',
            selector: (row: any) => row.MIMEType,
            sortable: true,
            cellExport: (row: any) => row.MIMEType,
            width: '150px',
        },
        {
            name: 'Cỡ (bytes)',
            selector: (row: any) => row.Size,
            sortable: true,
            cellExport: (row: any) => row.Size,
            width: '150px',
        },
        {
            name: 'Ngày Upload',
            selector: (row: any) => row.UploadDate,
            sortable: true,
            cellExport: (row: any) => row.UploadDate,
            width: '200px',
            format: (row: any) => convertTimeStampToDate(row.UploadDate),
        },
    ];

    const tableData = {
        columns,
        data,
    };

    const onSerialChanged = (e: any) => {
        if (e !== null && e !== undefined && e !== '') {
            // @ts-ignore
            const filteredData = listFile.filter((el) => el.Serial === e);

            setData([...filteredData]);
        } else {
            setData([...listFile]);
        }
    };

    const downloadFile = (url: string, fileName: string) => {
        setErrorDownload('');

        axios({
            url: url, //your url
            method: 'GET',
            responseType: 'blob', // important
        })
            .then((response) => {
                // create file link in browser's memory
                const href = URL.createObjectURL(response.data);

                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', fileName); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            })
            .catch((err) => {
                setErrorDownload(`Không tìm thấy file ${fileName}`);
                console.log(err);
            });
    };

    //@ts-ignore
    const handleSelectedRow = ({ selectedRows }) => {
        //@ts-ignore
        setSelectedRowFile([...selectedRows]);
    };

    const onDownloadClicked = () => {
        for (const file of selectedRowFile) {
            //@ts-ignore
            downloadFile(`${hostname}/${file.Path}`, file.FileName);
        }
    };

    const deleteFile = (id: any) => {
        axios
            //@ts-ignore
            .delete(`${hostname}/meterFile/upload?id=${id}`)
            .then((res) => {
                if (res?.data !== null && res?.data !== undefined) {
                    if (res.status === 200) {
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handelDeleteFile = () => {
        const temp = listFile.filter(
            //@ts-ignore
            (el) => selectedRowFile.find((e) => e._id === el._id) === undefined,
        );

        //@ts-ignore
        setListFile([...temp]);

        setData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa file đồng hồ?',
            text: 'Xóa file đồng hồ không thể nào hồi phục lại!',
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
                        //@ts-ignore
                        deleteFile(item._id);
                    }

                    handelDeleteFile();

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
                            Download file đồng hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col span={12}>
                    <Select
                        label="Serial"
                        placeholder="Serial"
                        searchable
                        nothingFound="Không tìm thấy Serial"
                        //@ts-ignore
                        data={meterData}
                        clearable
                        onChange={onSerialChanged}
                    />
                </Col>
                <Col span={12}>
                    <Center>
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onDownloadClicked}
                        >
                            Download
                        </Button>
                        {isAdminViewer == false ? (
                            <>
                                <Space w="md"></Space>
                                <Button
                                    variant="filled"
                                    color="red"
                                    onClick={onDeleteClicked}
                                >
                                    Xóa
                                </Button>
                            </>
                        ) : null}
                    </Center>
                </Col>
                {errorDownload !== '' ? (
                    <Col span={12}>
                        <Text weight={500} color="red">
                            {errorDownload}
                        </Text>
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
                                        Danh Sách File Đồng Hồ
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

export default DownloadMeterFilePage;
