import {
    Select,
    Grid,
    Col,
    Button,
    Space,
    Center,
    Text,
    PasswordInput,
} from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllUserLazyQuery,
    useGetAllStaffsQuery,
    useGetCompaniesQuery,
    useGetAllRoleQuery,
    useInsertUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

const CreateUserPage = () => {
    const [listUser, setListUser] = useState([]);
    const [userData, setUserData] = useState([]);

    const [getUser, {}] = useGetAllUserLazyQuery();
    const { data: staffs, error: staffErrror } = useGetAllStaffsQuery();
    const { data: company, error: companyError } = useGetCompaniesQuery();
    const { data: role, error: roleError } = useGetAllRoleQuery();

    const [insertUser, {}] = useInsertUserMutation();
    const [updateUser, {}] = useUpdateUserMutation();
    const [deleteUser, {}] = useDeleteUserMutation();

    if (staffErrror || companyError || roleError) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
    }

    useEffect(() => {
        getUser().then((res) => {
            if (res.data !== null && res.data !== undefined) {
                if (
                    res.data.GetAllUser !== undefined &&
                    res.data.GetAllUser !== null
                ) {
                    //@ts-ignore
                    setListUser([...res.data.GetAllUser]);

                    const temp = [];

                    for (const user of res.data.GetAllUser) {
                        const obj = {
                            value: user?.Uid,
                            label: user?.Uid,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setUserData([...temp]);
                }
            }
        });
    }, []);

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

    //@ts-ignore
    const companyData = [];

    if (company != undefined && company != null) {
        if (company.GetCompanies != null && company.GetCompanies != undefined) {
            if (company.GetCompanies.length > 0) {
                for (const com of company.GetCompanies) {
                    const obj = {
                        label: `${com?.Company} | ${com?.Description}`,
                        value: com?.Company,
                    };

                    companyData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const roleData = [];

    if (role != undefined && role != null) {
        if (role.GetAllRole != null && role.GetAllRole != undefined) {
            if (role.GetAllRole.length > 0) {
                for (const ro of role.GetAllRole) {
                    const obj = {
                        label: `${ro?.Role} | ${ro?.Description}`,
                        value: ro?.Role,
                    };

                    roleData.push(obj);
                }
            }
        }
    }

    const { control, getValues, setValue, reset, register } = useForm({
        defaultValues: {
            _id: '',
            Uid: '',
            StaffId: '',
            Pwd: '',
            Salt: '',
            Role: '',
            Active: true,
            TimeStamp: new Date(),
            Ip: '',
            LogCount: 0,
            Zoom: 0,
            Company: '',
            Language: '',
        },
    });

    const onUidBlured = (e: any) => {
        //@ts-ignore
        const find = listUser.find((el) => el.Uid === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Uid', find.Uid);
            //@ts-ignore
            setValue('Pwd', find.Pwd);
            //@ts-ignore
            setValue('Company', find.Company);
            //@ts-ignore
            setValue('StaffId', find.StaffId);
            //@ts-ignore
            setValue('Role', find.Role);
        }
    };

    const createObjInsertUser = () => {
        const obj = {
            Uid: getValues('Uid'),
            StaffId: getValues('StaffId'),
            Pwd: getValues('Pwd'),
            Salt: getValues('Salt'),
            Role: getValues('Role'),
            Active: true,
            TimeStamp: new Date(),
            Ip: '',
            LogCount: 0,
            Zoom: 0,
            Company: getValues('Company'),
            Language: '',
        };

        return obj;
    };

    const createObjHandleInsertUser = (id: any) => {
        const obj = {
            _id: id,
            Uid: getValues('Uid'),
            StaffId: getValues('StaffId'),
            Pwd: getValues('Pwd'),
            Salt: getValues('Salt'),
            Role: getValues('Role'),
            Active: true,
            TimeStamp: new Date(),
            Ip: '',
            LogCount: 0,
            Zoom: 0,
            Company: getValues('Company'),
            Language: '',
        };

        return obj;
    };

    const handleInsertListUser = (user: any) => {
        //@ts-ignore
        setListUser((current) => [...current, user]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Uid === null ||
            formValue.Uid === undefined ||
            formValue.Uid === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tên người dùng!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = createObjInsertUser();

            console.log(obj);

            insertUser({ variables: { user: obj } })
                .then((res) => {
                    if (res.data !== null && res.data != undefined) {
                        if (
                            res.data.InsertUser !== null &&
                            res.data.InsertUser !== undefined
                        ) {
                            if (res.data.InsertUser !== '') {
                                setValue('_id', res.data.InsertUser);

                                const newUser = createObjHandleInsertUser(
                                    res.data.InsertUser,
                                );

                                handleInsertListUser(newUser);

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Thêm người dùng thành công',
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Thêm người dùng không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm người dùng không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateListUser = (user: any) => {
        const temp = [];

        for (const item of listUser) {
            //@ts-ignore
            if (item._id === user._id) {
                temp.push(user);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListUser([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Uid === null ||
            formValue.Uid === undefined ||
            formValue.Uid === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tên người dùng!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            console.log(formValue);

            updateUser({
                variables: {
                    user: formValue,
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data != undefined) {
                        if (
                            res.data.UpdateUser !== null &&
                            res.data.UpdateUser !== undefined
                        ) {
                            if (res.data.UpdateUser > 0) {
                                handelUpdateListUser(formValue);

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Cập nhật người dùng thành công',
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Cập nhật  người dùng không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật  người dùng không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteListUser = (user: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listUser) {
            //@ts-ignore
            if (item._id !== user._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListUser([...temp]);
    };

    const handleDeletUserData = (user: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of userData) {
            //@ts-ignore
            if (item.value !== user.Uid) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setUserData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa người dùng?',
            text: 'Xóa người dùng không thể nào hồi phục lại!',
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
                    formValue.Uid === null ||
                    formValue.Uid === undefined ||
                    formValue.Uid === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có tên người dùng!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    deleteUser({
                        variables: {
                            user: formValue,
                        },
                    })
                        .then((res) => {
                            if (res.data !== null && res.data != undefined) {
                                if (
                                    res.data.DeleteUser !== null &&
                                    res.data.DeleteUser !== undefined
                                ) {
                                    if (res.data.DeleteUser > 0) {
                                        handelDeleteListUser(formValue);
                                        handleDeletUserData(formValue);
                                        reset();

                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Successfull',
                                            text: 'Xóa người dùng thành công',
                                        });
                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Xóa  người dùng không thành công',
                                        });
                                    }
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa  người dùng không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={4}>
                {userData !== undefined ? (
                    <Controller
                        name="Uid"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Người dùng"
                                placeholder="Người dùng"
                                searchable
                                nothingFound="Không tìm thấy người dùng"
                                //@ts-ignore
                                data={userData}
                                creatable
                                getCreateLabel={(query) =>
                                    `+ Tạo điểm: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setUserData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                {...field}
                                onBlur={onUidBlured}
                                withAsterisk
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={4}>
                <Controller
                    name="Pwd"
                    control={control}
                    render={({ field }) => (
                        <PasswordInput
                            placeholder="Mật khẩu"
                            label="Mật khẩu"
                            {...field}
                        />
                    )}
                ></Controller>
            </Col>
            <Col md={4}>
                {company !== undefined ? (
                    <Controller
                        name="Company"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Công ty"
                                placeholder="Công ty"
                                searchable
                                nothingFound="Không tìm thấy công ty"
                                //@ts-ignore
                                data={companyData}
                                {...field}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={4}>
                {role !== undefined ? (
                    <Controller
                        name="Role"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Quyền"
                                placeholder="Quyền"
                                searchable
                                nothingFound="Không tìm thấy quyền"
                                //@ts-ignore
                                data={roleData}
                                {...field}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={4}>
                {staffs !== undefined ? (
                    <Controller
                        name="StaffId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Mã nhân viên"
                                placeholder="Mã nhân viên"
                                searchable
                                nothingFound="Không tìm thấy mã nhân viên"
                                //@ts-ignore
                                data={staffsData}
                                {...field}
                            />
                        )}
                    ></Controller>
                ) : null}
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

export default CreateUserPage;
