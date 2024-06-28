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
    useGetAllSiteStatusLazyQuery,
    useInsertSiteStatusMutation,
    useUpdateSiteStatusMutation,
    useDeleteSiteStatusMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const SiteStatus = () => {
    const [siteStatus, setSiteStatus] = useState([]);
    const [siteStatusData, setSiteStatusData] = useState([]);

    const [getSiteStatus] = useGetAllSiteStatusLazyQuery();
    const [insertSiteStatus] = useInsertSiteStatusMutation();
    const [updateSiteStatus] = useUpdateSiteStatusMutation();
    const [deleteSiteStatus] = useDeleteSiteStatusMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Status: '',
            Description: '',
        },
    });

    useEffect(() => {
        getSiteStatus()
            .then((res) => {
                if (res?.data?.GetAllSiteStatus) {
                    const temp = [];
                    for (const item of res.data?.GetAllSiteStatus) {
                        const obj = {
                            value: item?.Status,
                            label: item?.Status,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteStatusData([...temp]);

                    //@ts-ignore
                    setSiteStatus([...res.data.GetAllSiteStatus]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseSiteStatus = (e: any) => {
        //@ts-ignore
        const find = siteStatus.find((el) => el.Status === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Status', find.Status);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertSisteStatus = (formValue: any) => {
        const obj = {
            Status: formValue.Status,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsertSiteStatus = (formValue: any) => {
        //@ts-ignore
        setSiteStatus((current) => [...current, formValue]);
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
                text: 'Chưa có trạng thái điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertSisteStatus(formValue);

            insertSiteStatus({
                variables: {
                    status: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertSiteStatus) {
                        if (res.data?.InsertSiteStatus !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm trạng thái điểm lắp đặt thành công',
                            });
                            setValue('_id', res.data.InsertSiteStatus);

                            handleInsertSiteStatus(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm trạng thái điểm lắp đặt không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm trạng thái điểm lắp đặt không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm trạng thái điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleUpdateSiteStatus = (formValue: any) => {
        const temp = [];

        for (const item of siteStatus) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setSiteStatus([...temp]);
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
                text: 'Chưa có trạng thái điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateSiteStatus({
                variables: {
                    status: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateSiteStatus) {
                        if (res.data.UpdateSiteStatus > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật trạng thái điểm lắp đặt thành công',
                            });

                            handleUpdateSiteStatus(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật trạng thái điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật trạng thái điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleDeleteSiteStatus = (formValue: any) => {
        const filter = siteStatus.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterData = siteStatusData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Status,
        );

        //@ts-ignore
        setSiteStatusData([...filterData]);
        //@ts-ignore
        setSiteStatus([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa trạng thái điểm lắp đặt?',
            text: 'Xóa trạng thái điểm lắp đặt không thể nào hồi phục lại!',
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
                        text: 'Chưa có trạng thái điểm lắp đặt',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteSiteStatus({
                        variables: {
                            status: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteSiteStatus) {
                                if (res.data.DeleteSiteStatus > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa trạng thái điểm lắp đặt thành công',
                                    });

                                    handleDeleteSiteStatus(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa trạng thái điểm lắp đặt không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa trạng thái điểm lắp đặt không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {siteStatusData != undefined ? (
                    <Controller
                        name="Status"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Trạng thái điểm lắp đặt"
                                //@ts-ignore
                                data={siteStatusData}
                                placeholder="Trạng thái điểm lắp đặt"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Trạng thái điểm lắp đặt: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setSiteStatusData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteStatus}
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

export default SiteStatus;
