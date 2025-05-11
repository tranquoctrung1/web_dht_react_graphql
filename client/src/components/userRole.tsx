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
    useGetAllRoleQuery,
    useInsertUserRoleMutation,
    useUpdateUserRoleMutation,
    useDeleteUserRoleMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const UserRole = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);

    const { refetch: getUserRole } = useGetAllRoleQuery();
    const [insertUserRole] = useInsertUserRoleMutation();
    const [updateUserRole] = useUpdateUserRoleMutation();
    const [deleteUserRole] = useDeleteUserRoleMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Role: '',
            Description: '',
        },
    });

    useEffect(() => {
        getUserRole()
            .then((res) => {
                if (res?.data?.GetAllRole) {
                    const temp = [];
                    for (const item of res.data?.GetAllRole) {
                        const obj = {
                            value: item?.Role,
                            label: `${item?.Role} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setList([...res.data.GetAllRole]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseUserRole = (e: any) => {
        const find = list.find(
            //@ts-ignore
            (el) => el.Role === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Role', find.Role);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsert = (formValue: any) => {
        const obj = {
            Role: formValue.Role,
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
            formValue.Role === null ||
            formValue.Role === undefined ||
            formValue.Role === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có quyền sử dụng',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsert(formValue);

            insertUserRole({
                variables: {
                    role: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertUserRole) {
                        if (res.data?.InsertUserRole !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm quyền sử dụng thành công',
                            });
                            setValue('_id', res.data.InsertUserRole);

                            handleInsert(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm quyền sử dụng không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm quyền sử dụng không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm quyền sử dụng không thành công',
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
            formValue.Role === null ||
            formValue.Role === undefined ||
            formValue.Role === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có quyền sử dụng',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateUserRole({
                variables: {
                    role: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateUserRole) {
                        if (res.data.UpdateUserRole > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật quyền sử dụng thành công',
                            });

                            handleUpdate(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật quyền sử dụng không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật quyền sử dụng không thành công',
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
            (el) => el.value !== formValue.Role,
        );

        //@ts-ignore
        setData([...filterData]);
        //@ts-ignore
        setList([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa quyền sử dụng?',
            text: 'Xóa quyền sử dụng không thể nào hồi phục lại!',
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
                    formValue.Role === null ||
                    formValue.Role === undefined ||
                    formValue.Role === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có quyền sử dụng',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteUserRole({
                        variables: {
                            role: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteUserRole) {
                                if (res.data.DeleteUserRole > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa quyền sử dụng thành công',
                                    });

                                    handleDelete(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa quyền sử dụng không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa quyền sử dụng không thành công',
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
                        name="Role"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Quyền sử dụng"
                                //@ts-ignore
                                data={data}
                                placeholder="Quyền sử dụng"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo quyền sử dụng: ${query}`
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
                                onBlur={onChooseUserRole}
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

export default UserRole;
