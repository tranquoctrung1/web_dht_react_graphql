import {
    Grid,
    Col,
    Button,
    Select,
    Space,
    Center,
    Text,
    TextInput,
    NumberInput,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import {
    useGetAllSitesQuery,
    useGetAllMeterQuery,
    useGetAllStaffsQuery,
    useGetDataManualBySiteIdLazyQuery,
    useGetDataManualBySiteIdQuery,
    useDeleteDataManualMutation,
    useInsertIndexDataManualMutation,
    useUpdateIndexDataManualMutation,
} from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';

import { convertTimeStampToDate, checkAdminViewerRole } from '../utils/utils';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const ManualIndexPage = () => {
    const [id, setId] = useState('');
    const [siteId, setSiteId] = useState('');
    const [staffId, setStaffId] = useState('');
    const [meter, setMeter] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [timeStamp, setTimeStamp] = useState(null);
    const [index, setIndex] = useState(null || 0);
    const [output, setOutput] = useState(null || 0);

    const [column, setColumn] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const { data: sites, error: siteError } = useGetAllSitesQuery();
    const { data: meters, error: metersError } = useGetAllMeterQuery();
    const { data: staffs, error: staffsError } = useGetAllStaffsQuery();

    const [getDataManual, {}] = useGetDataManualBySiteIdLazyQuery();
    const { refetch } = useGetDataManualBySiteIdQuery();

    const [insertIndexDataManual, {}] = useInsertIndexDataManualMutation();
    const [updateIndexDataManual, {}] = useUpdateIndexDataManualMutation();
    const [deleteDataManual, {}] = useDeleteDataManualMutation();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());
    }, []);

    if (siteError || metersError || staffsError) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
    }

    //@ts-ignore
    const sitesData = [];

    if (sites != undefined && sites != null) {
        if (sites.GetAllSites != null && sites.GetAllSites != undefined) {
            if (sites.GetAllSites.length > 0) {
                for (const site of sites.GetAllSites) {
                    const obj = {
                        label: `${site?._id}`,
                        value: site?._id,
                    };

                    sitesData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const metersData = [];

    if (meters != undefined && meters != null) {
        if (meters.GetAllMeter != null && meters.GetAllMeter != undefined) {
            if (meters.GetAllMeter.length > 0) {
                for (const meter of meters.GetAllMeter) {
                    const obj = {
                        label: `${meter?.Serial} | ${meter?.Marks} | ${meter?.Size}`,
                        value: meter?.Serial,
                    };

                    metersData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const staffsData = [];

    if (staffs != undefined && staffs != null) {
        if (staffs.GetAllStaffs != null && staffs.GetAllStaffs != undefined) {
            if (staffs.GetAllStaffs.length > 0) {
                for (const staff of staffs.GetAllStaffs) {
                    const obj = {
                        label: `${staff?._id}_${staff?.FirstName} ${staff?.LastName}`,
                        value: staff?._id,
                    };

                    staffsData.push(obj);
                }
            }
        }
    }

    const setColumns = () => {
        const obj = [
            {
                name: 'Ghi chú',

                selector: (row: any) => row.Description,
                sortable: true,
            },
            {
                name: 'Ngày',
                selector: (row: any) => row.TimeStamp,
                format: (row: any) => convertTimeStampToDate(row.TimeStamp),
                sortable: true,
            },
            {
                name: 'Chỉ số',
                selector: (row: any) => row.Index,
                sortable: true,
            },
            {
                name: 'Sản lượng',
                selector: (row: any) => row.Output,
                sortable: true,
            },
        ];

        //@ts-ignore
        setColumn([...obj]);
    };

    const getDataManualAction = (siteId: any) => {
        getDataManual({ variables: { siteid: siteId } })
            .then((res) => {
                if (res.data !== null && res.data !== undefined) {
                    if (
                        res.data.GetDataManualBySiteId !== null &&
                        res.data.GetDataManualBySiteId !== undefined
                    ) {
                        //@ts-ignore
                        setDataTable([...res.data.GetDataManualBySiteId]);

                        setColumns();
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSiteIdChanged = (e: any) => {
        setSiteId(e);

        //@ts-ignore
        const find = sites?.GetAllSites.find((el) => el._id === e);

        if (find !== undefined) {
            //@ts-ignore
            setMeter(find?.Meter);
            //@ts-ignore
            setLocation(find?.Location);
            //@ts-ignore
            setStaffId(find?.StaffId);
        }

        getDataManualAction(e);
    };

    const refetchGetDataManualAction = (siteId: any) => {
        refetch({ siteid: siteId })
            .then((res) => {
                if (res.data !== null && res.data !== undefined) {
                    if (
                        res.data.GetDataManualBySiteId !== null &&
                        res.data.GetDataManualBySiteId !== undefined
                    ) {
                        //@ts-ignore
                        setDataTable([...res.data.GetDataManualBySiteId]);

                        setColumns();
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onDescriptionChanged = (e: any) => {
        setDescription(e.target.value);
    };

    const onTimeStampChanged = (e: any) => {
        setTimeStamp(e);
    };

    const onIndexChanged = (e: any) => {
        setIndex(e);
    };

    const onOutputChanged = (e: any) => {
        setOutput(e);
    };

    const createObjInsertDataManual = () => {
        const obj = {
            Stt: 0,
            SiteId: siteId,
            TimeStamp: timeStamp,
            Description: description,
            Index: index,
            Output: output,
        };

        return obj;
    };

    const createObjUpdateDataManual = () => {
        const obj = {
            _id: id,
            Stt: 0,
            SiteId: siteId,
            TimeStamp: timeStamp,
            Description: description,
            Index: index,
            Output: output,
        };

        return obj;
    };

    const createObjHandelInsertDataManual = (id: any) => {
        const obj = {
            _id: id,
            Stt: 0,
            SiteId: siteId,
            //@ts-ignore
            TimeStamp: timeStamp == null ? '' : timeStamp.toISOString(),
            Description: description,
            Index: index,
            Output: output,
        };

        return obj;
    };

    const handleUpdateDataManual = (dataManual: any) => {
        const temp = [];

        for (const item of dataTable) {
            //@ts-ignore
            if (item._id === dataManual._id) {
                temp.push(dataManual);
            } else {
                temp.push(item);
            }
        }
        //@ts-ignore
        setDataTable([...temp]);
    };

    const handelInsertDataManual = (dataManual: any) => {
        //@ts-ignore
        setDataTable((current) => [dataManual, ...current]);
    };

    const handleDeleteDataManual = (dataManual: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of dataTable) {
            //@ts-ignore
            if (item._id !== dataManual._id) {
                temp.push(item);
            }
        }
        //@ts-ignore
        setDataTable([...temp]);
    };

    const onInsertClicked = () => {
        let isAllow = true;

        if (siteId === null || siteId === undefined || siteId === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }
        if (timeStamp == null || timeStamp === undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có ngày!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = createObjInsertDataManual();

            insertIndexDataManual({
                variables: {
                    dataManual: obj,
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.InsertIndexDataManual !== null &&
                            res.data.InsertIndexDataManual !== undefined
                        ) {
                            if (res.data.InsertIndexDataManual > 0) {
                                refetchGetDataManualAction(siteId);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Thêm thành công',
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Thêm  không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm  không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const onUpdateClicked = () => {
        let isAllow = true;

        if (siteId === null || siteId === undefined || siteId === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }
        if (timeStamp == null || timeStamp === undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có ngày!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = createObjUpdateDataManual();

            updateIndexDataManual({
                variables: {
                    dataManual: obj,
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.UpdateIndexDataManual !== null &&
                            res.data.UpdateIndexDataManual !== undefined
                        ) {
                            if (res.data.UpdateIndexDataManual > 0) {
                                refetchGetDataManualAction(siteId);

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Cập nhật thành công',
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Cập nhật  không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật  không thành công',
                    });

                    console.log(err);
                });
        }
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa nhập tay?',
            text: 'Xóa nhập tay không thể nào hồi phục lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                let isAllow = true;

                if (siteId === null || siteId === undefined || siteId === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có mã vị trí!!!',
                    });

                    isAllow = false;
                }
                if (timeStamp == null || timeStamp === undefined) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có ngày!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    const obj = createObjUpdateDataManual();

                    deleteDataManual({
                        variables: {
                            dataManual: obj,
                        },
                    })
                        .then((res) => {
                            if (res.data !== null && res.data !== undefined) {
                                if (
                                    res.data.DeleteDataManual !== null &&
                                    res.data.DeleteDataManual !== undefined
                                ) {
                                    if (res.data.DeleteDataManual > 0) {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Successfull',
                                            text: 'Xóa thành công',
                                        });

                                        handleDeleteDataManual(obj);
                                        setId('');
                                        setDescription('');
                                        setTimeStamp(null);
                                        setOutput(0);
                                        setIndex(0);
                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Xóa  không thành công',
                                        });
                                    }
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa  không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    //@ts-ignore
    const handleSelectedRow = ({ selectedRows }) => {
        if (
            selectedRows !== null &&
            selectedRows !== undefined &&
            selectedRows.length > 0
        ) {
            setId(selectedRows[0]._id);
            setDescription(selectedRows[0].Description);
            setTimeStamp(
                //@ts-ignore
                selectedRows[0].TimeStamp !== null
                    ? new Date(selectedRows[0].TimeStamp)
                    : null,
            );
            setIndex(
                selectedRows[0].Index !== null ? selectedRows[0].Index : '',
            );
            setOutput(
                selectedRows[0].Output !== null ? selectedRows[0].Output : '',
            );
        }
    };

    const onDateBlured = (e: any) => {
        if (e.target.value !== '') {
            const splitDate = e.target.value.split('/');

            if (splitDate.length === 3) {
                const year = parseInt(splitDate[2]);
                const month = parseInt(splitDate[1]) - 1;
                const day = parseInt(splitDate[0]);

                //@ts-ignore
                setTimeStamp(new Date(year, month, day));
            } else {
                setTimeStamp(null);
            }
        } else {
            setTimeStamp(null);
        }
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
                            Nhập tay chỉ số đông hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col md={3}>
                    {sites !== undefined ? (
                        <Select
                            label="Mã vị trí"
                            placeholder="Mã vị trí"
                            searchable
                            nothingFound="Không tìm thấy mã vị trí"
                            //@ts-ignore
                            data={sitesData}
                            onChange={onSiteIdChanged}
                            value={siteId}
                            withAsterisk
                        />
                    ) : null}
                </Col>
                <Col md={3}>
                    {meter !== undefined ? (
                        <Select
                            label="Đồng hồ"
                            placeholder="Đồng hồ"
                            searchable
                            nothingFound="Không tìm thấy đồng hồ"
                            //@ts-ignore
                            data={metersData}
                            value={meter}
                        />
                    ) : null}
                </Col>
                <Col md={3}>
                    {staffs !== undefined ? (
                        <Select
                            label="Mã nhân viên"
                            placeholder="Mã nhân viên"
                            searchable
                            nothingFound="Không tìm thấy mã nhân viên"
                            //@ts-ignore
                            data={staffsData}
                            value={staffId}
                        />
                    ) : null}
                </Col>
                <Col md={3}>
                    <TextInput
                        placeholder="Vị trí"
                        label="Vị trí"
                        value={location}
                    />
                </Col>
                <Col md={3}>
                    <TextInput
                        placeholder="Ghi chú"
                        label="Ghi chú"
                        value={description}
                        onChange={onDescriptionChanged}
                    />
                </Col>
                <Col md={3}>
                    <DateInput
                        valueFormat="DD/MM/YYYY"
                        label="Ngày"
                        placeholder="Ngày"
                        mx="auto"
                        value={timeStamp}
                        onChange={onTimeStampChanged}
                        withAsterisk
                        onBlur={(e) => onDateBlured(e)}
                    />
                </Col>
                <Col md={3}>
                    <NumberInput
                        placeholder="Chỉ số"
                        label="Chỉ số"
                        precision={2}
                        value={index}
                        onChange={onIndexChanged}
                    />
                </Col>
                <Col md={3}>
                    <NumberInput
                        placeholder="Sản lượng"
                        label="Sản lượng"
                        precision={2}
                        value={output}
                        onChange={onOutputChanged}
                    />
                </Col>
                {isAdminViewer == false ? (
                    <Col span={12}>
                        <Center>
                            <Button
                                variant="filled"
                                color="green"
                                onClick={onInsertClicked}
                            >
                                Thêm
                            </Button>
                            <Space w="md"></Space>
                            <Button
                                variant="filled"
                                color="blue"
                                onClick={onUpdateClicked}
                            >
                                Sửa
                            </Button>
                            <Space w="md"></Space>
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

                <Col span={12}>
                    {dataTable.length > 0 ? (
                        <DataTable
                            columns={column}
                            data={dataTable}
                            pagination
                            paginationPerPage={5}
                            paginationRowsPerPageOptions={[
                                5, 10, 50, 100, 200, 500,
                            ]}
                            selectableRows
                            onSelectedRowsChange={handleSelectedRow}
                        />
                    ) : null}
                </Col>
            </Grid>
        </motion.div>
    );
};

export default ManualIndexPage;
