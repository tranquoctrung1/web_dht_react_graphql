import {
    Grid,
    Col,
    Select,
    Textarea,
    Button,
    Center,
    Space,
} from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import { useState, useEffect } from 'react';

import {
    useGetAllSiteLevelQuery,
    useInsertSiteLevelMutation,
    useUpdateSiteLevelMutation,
    useDeleteSiteLevelMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const InstallLevel = () => {
    const [siteLevelData, setSiteLevelData] = useState([]);
    const [siteLevel, setSiteLevel] = useState([]);

    const { refetch: getAllSiteLevel } = useGetAllSiteLevelQuery();
    const [insertSiteLevel] = useInsertSiteLevelMutation();
    const [updateSiteLevel] = useUpdateSiteLevelMutation();
    const [deleteSiteLevel] = useDeleteSiteLevelMutation();

    const { reset, getValues, setValue, control } = useForm({
        defaultValues: {
            _id: '',
            Level: '',
            Description: '',
        },
    });

    useEffect(() => {
        getAllSiteLevel()
            .then((res) => {
                if (res?.data?.GetAllSiteLevel) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteLevel) {
                        const obj = {
                            value: item?.Level,
                            label: `${item?.Level} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteLevelData([...temp]);
                    //@ts-ignore
                    setSiteLevel([...res.data.GetAllSiteLevel]);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const onChooseSiteLevel = (e: any) => {
        const find = siteLevel.find(
            //@ts-ignore
            (el) => el.Level === e.currentTarget.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Level', find.Level);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertSisteLevel = (formValue: any) => {
        const obj = {
            Level: formValue.Level,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsertSiteLevel = (formValue: any) => {
        //@ts-ignore
        setSiteLevel((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Level === null ||
            formValue.Level === undefined ||
            formValue.Level === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có cấp điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertSisteLevel(formValue);

            insertSiteLevel({
                variables: {
                    siteLevel: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertSiteLevel) {
                        if (res.data.InsertSiteLevel !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm cấp điểm lắp đặt thành công',
                            });
                            setValue('_id', res.data.InsertSiteLevel);

                            handleInsertSiteLevel(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm cấp điểm lắp đặt không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm cấp điểm lắp đặt không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm cấp điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleUpdateSiteLevel = (formValue: any) => {
        const temp = [];

        for (const item of siteLevel) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setSiteLevel([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Level === null ||
            formValue.Level === undefined ||
            formValue.Level === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có cấp điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateSiteLevel({
                variables: {
                    siteLevel: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateSiteLevel) {
                        if (res.data.UpdateSiteLevel > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật cấp điểm lắp đặt thành công',
                            });

                            handleUpdateSiteLevel(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật cấp điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật cấp điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleDeleteSiteLevel = (formValue: any) => {
        const filterSiteLevel = siteLevel.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterSiteLevelData = siteLevelData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Level,
        );

        //@ts-ignore
        setSiteLevelData([...filterSiteLevelData]);
        //@ts-ignore
        setSiteLevel([...filterSiteLevel]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa cấp điểm lắp đặt?',
            text: 'Xóa cấp điểm lắp đặt không thể nào hồi phục lại!',
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
                    formValue.Level === null ||
                    formValue.Level === undefined ||
                    formValue.Level === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có cấp điểm lắp đặt',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteSiteLevel({
                        variables: {
                            siteLevel: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteSiteLevel) {
                                if (res.data.DeleteSiteLevel > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa cấp điểm lắp đặt thành công',
                                    });

                                    handleDeleteSiteLevel(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa cấp điểm lắp đặt không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa cấp điểm lắp đặt không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {siteLevelData != undefined ? (
                    <Controller
                        name="Level"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Cấp điểm lắp đặt"
                                //@ts-ignore
                                data={siteLevelData}
                                placeholder="Cấp điểm lắp đặt"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo cấp điểm lắp đặt: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setSiteLevelData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteLevel}
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

export default InstallLevel;
