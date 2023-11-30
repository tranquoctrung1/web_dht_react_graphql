import {
    TextInput,
    Button,
    Grid,
    Col,
    Center,
    PasswordInput,
    Text,
} from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';

import {
    useUpdatePasswordMutation,
    useVerifyPasswordLazyQuery,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const ChangePasswordPage = () => {
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRepeatNewPassword, setErrorRepeatNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');

    const [updatePassword, {}] = useUpdatePasswordMutation();
    const [verifyPassword, {}] = useVerifyPasswordLazyQuery();

    const { control, reset, getValues, setValue, register } = useForm({
        defaultValues: {
            Uid: '',
            Pwd: '',
            NewPwd: '',
            RepeatNewPwd: '',
        },
    });

    useEffect(() => {
        const Uid = localStorage.getItem('Uid');

        if (Uid !== null && Uid !== undefined && Uid !== '') {
            //@ts-ignore
            setValue('Uid', Uid);
        }
    }, []);

    const onPasswordBlured = (e: any) => {
        const password = getValues('Pwd');
        const Uid = getValues('Uid');

        verifyPassword({
            variables: {
                uid: Uid,
                pwd: password,
            },
        })
            .then((res) => {
                if (res.data !== null && res.data !== undefined) {
                    if (
                        res.data.VerifyPassword !== null &&
                        res.data.VerifyPassword !== undefined
                    ) {
                        if (res.data.VerifyPassword === 0) {
                            setErrorPassword('Mật khẩu củ không đúng');
                        } else if (res.data.VerifyPassword === 1) {
                            setErrorPassword('');
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onNewPasswordBlured = (e: any) => {
        const newPassword = getValues('NewPwd');
        const repeatNewPasswarod = getValues('RepeatNewPwd');

        if (newPassword !== repeatNewPasswarod) {
            setErrorRepeatNewPassword('Không trùng với mật khẩu mới');
        } else {
            setErrorRepeatNewPassword('');
        }
    };

    const onRepeatNewPasswordBlured = (e: any) => {
        const newPassword = getValues('NewPwd');
        const repeatNewPasswarod = getValues('RepeatNewPwd');
        if (newPassword !== repeatNewPasswarod) {
            setErrorRepeatNewPassword('Không trùng với mật khẩu mới');
        } else {
            setErrorRepeatNewPassword('');
        }
    };

    const onUpdatePasswordClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Uid === null ||
            formValue.Uid === undefined ||
            formValue.Uid == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Không có tên người dùng',
            });

            isAllow = false;
        } else if (
            formValue.Pwd === '' ||
            formValue.Pwd === null ||
            formValue.Pwd === undefined
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mật khẩu không được trống',
            });

            isAllow = false;
        } else if (
            formValue.NewPwd === '' ||
            formValue.NewPwd === null ||
            formValue.NewPwd === undefined
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mật khẩu mới không được trống',
            });

            isAllow = false;
        } else if (
            formValue.RepeatNewPwd === '' ||
            formValue.RepeatNewPwd === null ||
            formValue.RepeatNewPwd === undefined
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nhập lại mật khẩu mới không được trống',
            });

            isAllow = false;
        } else if (errorPassword !== '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mật khẩu củ không đúng',
            });

            isAllow = false;
        } else if (errorRepeatNewPassword !== '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mật khẩu mới và nhập lại mật khẩu không trùng',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            updatePassword({
                variables: {
                    user: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdatePassword) {
                        if (res.data.UpdatePassword > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật mật khẩu thành công',
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật mật khẩu không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật mật khẩu không thành công',
                    });
                    console.log(err);
                });
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
                            Thay đổi mật khẩu
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col md={4}>
                    <Controller
                        name="Pwd"
                        control={control}
                        render={({ field }) => (
                            <PasswordInput
                                placeholder="Mật khẩu củ"
                                label="Mật khẩu củ"
                                {...field}
                                error={errorPassword}
                                onBlur={onPasswordBlured}
                                withAsterisk
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="NewPwd"
                        control={control}
                        render={({ field }) => (
                            <PasswordInput
                                placeholder="Mật khẩu mới"
                                label="Mật khẩu mới"
                                {...field}
                                onBlur={onNewPasswordBlured}
                                withAsterisk
                                error={errorNewPassword}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="RepeatNewPwd"
                        control={control}
                        render={({ field }) => (
                            <PasswordInput
                                placeholder="Nhập lại mật khẩu mới"
                                label="Nhập lại mật khẩu mới"
                                {...field}
                                onBlur={onRepeatNewPasswordBlured}
                                withAsterisk
                                error={errorRepeatNewPassword}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col span={12}>
                    <Center>
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onUpdatePasswordClicked}
                        >
                            Cập nhật mật khẩu
                        </Button>
                    </Center>
                </Col>
            </Grid>
        </motion.div>
    );
};

export default ChangePasswordPage;
