import {
    Grid,
    Col,
    Select,
    Button,
    Space,
    Center,
    TextInput,
} from '@mantine/core';

import { useState, useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllStaffsLazyQuery,
    useInsertUserStaffMutation,
    useUpdateUserStaffMutation,
    useDeleteUserStaffMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const UserStaff = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);

    const [getUserStaff] = useGetAllStaffsLazyQuery();
    const [insertUserStaff] = useInsertUserStaffMutation();
    const [updateUserStaff] = useUpdateUserStaffMutation();
    const [deleteUserStaff] = useDeleteUserStaffMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            FirstName: '',
            LastName: '',
        },
    });

    useEffect(() => {
        getUserStaff()
            .then((res) => {
                if (res?.data?.GetAllStaffs) {
                    const temp = [];
                    for (const item of res.data?.GetAllStaffs) {
                        const obj = {
                            value: item?._id,
                            label: `${item?._id} | ${item?.FirstName} ${item?.LastName}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setList([...res.data.GetAllStaffs]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseUserStaff = (e: any) => {
        const find = list.find(
            //@ts-ignore
            (el) => el._id === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('FirstName', find.FirstName);
            //@ts-ignore
            setValue('LastName', find.LastName);
        }
    };

    const handleInsert = (formValue: any) => {
        //@ts-ignore
        setList((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue._id === null ||
            formValue._id === undefined ||
            formValue._id === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã nhân viên',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = formValue;

            insertUserStaff({
                variables: {
                    staff: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertUserStaff) {
                        if (res.data?.InsertUserStaff !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm mã nhân viên thành công',
                            });
                            setValue('_id', res.data.InsertUserStaff);

                            handleInsert(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm mã nhân viên không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm mã nhân viên không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm mã nhân viên không thành công',
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
            formValue._id === null ||
            formValue._id === undefined ||
            formValue._id === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã nhân viên',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateUserStaff({
                variables: {
                    staff: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateUserStaff) {
                        if (res.data.UpdateUserStaff > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật mã nhân viên thành công',
                            });

                            handleUpdate(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật mã nhân viên không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật mã nhân viên không thành công',
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
            (el) => el.value !== formValue.Staff,
        );

        //@ts-ignore
        setData([...filterData]);
        //@ts-ignore
        setList([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa mã nhân viên?',
            text: 'Xóa mã nhân viên không thể nào hồi phục lại!',
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
                    formValue._id === null ||
                    formValue._id === undefined ||
                    formValue._id === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có mã nhân viên',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteUserStaff({
                        variables: {
                            staff: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteUserStaff) {
                                if (res.data.DeleteUserStaff > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa mã nhân viên thành công',
                                    });

                                    handleDelete(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa mã nhân viên không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa mã nhân viên không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={4}>
                {data != undefined ? (
                    <Controller
                        name="_id"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Mã nhân viên"
                                //@ts-ignore
                                data={data}
                                placeholder="Mã nhân viên"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo mã nhân viên: ${query}`
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
                                onBlur={onChooseUserStaff}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={4}>
                <Controller
                    name="FirstName"
                    control={control}
                    render={({ field }) => (
                        <TextInput placeholder="Họ" label="Họ" {...field} />
                    )}
                ></Controller>
            </Col>
            <Col md={4}>
                <Controller
                    name="LastName"
                    control={control}
                    render={({ field }) => (
                        <TextInput placeholder="Tên" label="Tên" {...field} />
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

export default UserStaff;
