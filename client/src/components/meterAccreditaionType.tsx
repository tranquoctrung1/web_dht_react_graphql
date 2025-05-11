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
    useGetAllMeterAccreditationTypeQuery,
    useInsertMeterAccreditationMutation,
    useUpdateMeterAccreditationMutation,
    useDeleteMeterAccreditationMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const MeterAccreditationType = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);

    const { refetch: getMeterAccreditationType } =
        useGetAllMeterAccreditationTypeQuery();
    const [insertMeterAccreditationType] =
        useInsertMeterAccreditationMutation();
    const [updateMeterAccreditationType] =
        useUpdateMeterAccreditationMutation();
    const [deleteMeterAccreditationType] =
        useDeleteMeterAccreditationMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            AccreditationType: '',
            Description: '',
        },
    });

    useEffect(() => {
        getMeterAccreditationType()
            .then((res) => {
                if (res?.data?.GetAllMeterAccreditationType) {
                    const temp = [];
                    for (const item of res.data?.GetAllMeterAccreditationType) {
                        const obj = {
                            value: item?.AccreditationType,
                            label: `${item?.AccreditationType} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setList([...res.data.GetAllMeterAccreditationType]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseMeterAccreditationType = (e: any) => {
        const find = list.find(
            (el) =>
                //@ts-ignore
                el.AccreditationType === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('AccreditationType', find.AccreditationType);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsert = (formValue: any) => {
        const obj = {
            AccreditationType: formValue.AccreditationType,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsert = (formValue: any) => {
        //@ts-ignore
        setList((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.AccreditationType === null ||
            formValue.AccreditationType === undefined ||
            formValue.AccreditationType === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có loại kiểm định',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsert(formValue);

            insertMeterAccreditationType({
                variables: {
                    type: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertMeterAccreditation) {
                        if (res.data?.InsertMeterAccreditation !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm loại kiểm định thành công',
                            });
                            setValue('_id', res.data.InsertMeterAccreditation);

                            handleInsert(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm loại kiểm định không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm loại kiểm định không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm loại kiểm định không thành công',
                    });
                });
        }
    };

    const handleUpdate = (formValue: any) => {
        const temp = [];

        for (const item of list) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setList([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.AccreditationType === null ||
            formValue.AccreditationType === undefined ||
            formValue.AccreditationType === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có loại kiểm định',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateMeterAccreditationType({
                variables: {
                    type: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateMeterAccreditation) {
                        if (res.data.UpdateMeterAccreditation > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật loại kiểm định thành công',
                            });

                            handleUpdate(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật loại kiểm định không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật loại kiểm định không thành công',
                    });
                });
        }
    };

    const handleDelete = (formValue: any) => {
        const filter = list.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterData = data.filter(
            //@ts-ignore
            (el) => el.value !== formValue.AccreditationType,
        );

        //@ts-ignore
        setData([...filterData]);
        //@ts-ignore
        setList([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa loại kiểm định?',
            text: 'Xóa loại kiểm định không thể nào hồi phục lại!',
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
                    formValue.AccreditationType === null ||
                    formValue.AccreditationType === undefined ||
                    formValue.AccreditationType === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có loại kiểm định',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteMeterAccreditationType({
                        variables: {
                            type: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteMeterAccreditation) {
                                if (res.data.DeleteMeterAccreditation > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa loại kiểm định thành công',
                                    });

                                    handleDelete(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa loại kiểm định không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa loại kiểm định không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {data != undefined ? (
                    <Controller
                        name="AccreditationType"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Loại kiểm định"
                                //@ts-ignore
                                data={data}
                                placeholder="Loại kiểm định"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Loại kiểm định: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setData((current) => [...current, item]);
                                    return item;
                                }}
                                onBlur={onChooseMeterAccreditationType}
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

export default MeterAccreditationType;
