import {
    Grid,
    Col,
    Select,
    Button,
    Space,
    Center,
    Textarea,
} from '@mantine/core';

import { useState, useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllDeviceStatusQuery,
    useInsertDeviceStatusMutation,
    useUpdateDeviceStatusMutation,
    useDeleteDeviceStatusMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const DeviceStatus = () => {
    const [deviceStatus, setDeviceStatus] = useState([]);
    const [deviceStatusData, setDeviceStatusData] = useState([]);

    const { refetch: getDeviceStatus } = useGetAllDeviceStatusQuery();
    const [insertDeviceStatus] = useInsertDeviceStatusMutation();
    const [updateDeviceStatus] = useUpdateDeviceStatusMutation();
    const [deleteDeviceStatus] = useDeleteDeviceStatusMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Status: '',
            Description: '',
        },
    });

    useEffect(() => {
        getDeviceStatus()
            .then((res) => {
                if (res?.data?.GetAllDeviceStatus) {
                    const temp = [];
                    for (const item of res.data?.GetAllDeviceStatus) {
                        const obj = {
                            value: item?.Status,
                            label: `${item?.Status} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setDeviceStatusData([...temp]);

                    //@ts-ignore
                    setDeviceStatus([...res.data.GetAllDeviceStatus]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseDeviceStatus = (e: any) => {
        const find = deviceStatus.find(
            //@ts-ignore
            (el) => el.Status === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Status', find.Status);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertDeviceStatus = (formValue: any) => {
        const obj = {
            Status: formValue.Status,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsertDeviceStatus = (formValue: any) => {
        //@ts-ignore
        setDeviceStatus((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Status === null ||
            formValue.Status === undefined ||
            formValue.Status === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tình trạng thiết bị ',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertDeviceStatus(formValue);

            insertDeviceStatus({
                variables: {
                    status: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertDeviceStatus) {
                        if (res.data?.InsertDeviceStatus !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm tình trạng thiết bị  thành công',
                            });
                            setValue('_id', res.data.InsertDeviceStatus);

                            handleInsertDeviceStatus(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm tình trạng thiết bị  không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm tình trạng thiết bị  không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm tình trạng thiết bị  không thành công',
                    });
                });
        }
    };

    const handleUpdateDeviceStatus = (formValue: any) => {
        const temp = [];

        for (const item of deviceStatus) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setDeviceStatus([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Status === null ||
            formValue.Status === undefined ||
            formValue.Status === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tình trạng thiết bị',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateDeviceStatus({
                variables: {
                    status: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateDeviceStatus) {
                        if (res.data.UpdateDeviceStatus > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật tình trạng thiết bị thành công',
                            });

                            handleUpdateDeviceStatus(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật tình trạng thiết bị không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật tình trạng thiết bị không thành công',
                    });
                });
        }
    };

    const handleDeleteDeviceStatus = (formValue: any) => {
        const filter = deviceStatus.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterData = deviceStatusData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Status,
        );

        //@ts-ignore
        setDeviceStatusData([...filterData]);

        //@ts-ignore
        setDeviceStatus([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa tình trạng thiết bị?',
            text: 'Xóa tình trạng thiết bị không thể nào hồi phục lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                const formValue = getValues();

                let isAllow = true;

                if (
                    formValue.Status === null ||
                    formValue.Status === undefined ||
                    formValue.Status === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có tình trạng thiết bị',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteDeviceStatus({
                        variables: {
                            status: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteDeviceStatus) {
                                if (res.data.DeleteDeviceStatus > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa tình trạng thiết bị thành công',
                                    });

                                    handleDeleteDeviceStatus(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa tình trạng thiết bị không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa tình trạng thiết bị không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {deviceStatusData != undefined ? (
                    <Controller
                        name="Status"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Tình trạng thiết bị"
                                //@ts-ignore
                                data={deviceStatusData}
                                placeholder="Tình trạng thiết bị"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Tình trạng thiết bị: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setDeviceStatusData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseDeviceStatus}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={6}>
                <Controller
                    name="Description"
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            placeholder="Ghi chú"
                            label="Ghi chú"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...field}
                        />
                    )}
                ></Controller>
            </Col>
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
        </Grid>
    );
};

export default DeviceStatus;
