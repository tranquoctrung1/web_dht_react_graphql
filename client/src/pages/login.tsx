import {
    BackgroundImage,
    Box,
    Button,
    Center,
    Col,
    Container,
    Grid,
    Group,
    Image,
    Text,
    TextInput,
} from '@mantine/core';

import { motion } from 'framer-motion';
import BackgroundWater from '../assets/background.png';

import { IconKey, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Logo from '../assets/logo.png';

import { useLoginActionQuery } from '../__generated__/graphql';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [errorUserName, setErrorUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    const { refetch: refetchLogin } = useLoginActionQuery();

    const { control, getValues, register } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSigninClicked = () => {
        const formValue = getValues();

        let isAllowSignIn = true;
        if (formValue.username === '') {
            setErrorUserName('Tài khoản không được trống!!');
            isAllowSignIn = false;
        } else {
            setErrorUserName('');
        }

        if (formValue.password === '') {
            setErrorPassword('Mật khẩu không được trống!!');
            isAllowSignIn = false;
        } else {
            setErrorPassword('');
        }

        if (isAllowSignIn) {
            // if (
            //     formValue.username === 'admin' &&
            //     formValue.password === 'Admin@1234#'
            // ) {
            //     localStorage.setItem(
            //         'Uid',
            //         //@ts-ignore
            //         'admin',
            //     );
            //     localStorage.setItem(
            //         'token',
            //         //@ts-ignore
            //         '',
            //     );
            //     localStorage.setItem(
            //         'Company',
            //         //@ts-ignore
            //         '',
            //     );
            //     localStorage.setItem(
            //         'Role',
            //         //@ts-ignore
            //         'admin',
            //     );

            //     navigate('/quantityCompanyWaterSupply');
            // } else
            {
                refetchLogin({
                    username: formValue.username,
                    password: formValue.password,
                })
                    .then((res) => {
                        if (res.data !== null && res.data !== undefined) {
                            if (
                                res.data.LoginAction !== null &&
                                res.data.LoginAction !== undefined
                            ) {
                                if (
                                    res.data.LoginAction.token !== '' &&
                                    res.data.LoginAction.Uid !== ''
                                ) {
                                    localStorage.setItem(
                                        'Uid',
                                        //@ts-ignore
                                        res.data.LoginAction.Uid,
                                    );
                                    localStorage.setItem(
                                        'token',
                                        //@ts-ignore
                                        res.data.LoginAction.token,
                                    );
                                    localStorage.setItem(
                                        'Company',
                                        //@ts-ignore
                                        res.data.LoginAction.Company,
                                    );
                                    localStorage.setItem(
                                        'Role',
                                        //@ts-ignore
                                        res.data.LoginAction.Role,
                                    );

                                    navigate('/quantityCompanyWaterSupply');
                                } else {
                                    setErrorLogin(
                                        'Tài khoản hoặc mật khẩu bị sai!!',
                                    );
                                }
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    };

    const onUserNameBlur = (e: any) => {
        if (
            e.target.value != null &&
            e.target.value !== undefined &&
            e.target.value !== ''
        ) {
            setErrorUserName('');
        }
    };

    const onPasswordBlur = (e: any) => {
        if (
            e.target.value != null &&
            e.target.value !== undefined &&
            e.target.value !== ''
        ) {
            setErrorPassword('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div style={{ height: '100vh' }}>
                <BackgroundImage
                    src={BackgroundWater}
                    style={{ height: '100%' }}
                >
                    <Container
                        fluid={true}
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box style={{ width: '70%' }}>
                            <Grid
                                style={{
                                    padding: '20px',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 5px 0 rgba(0,0,0,.1)',
                                    backgroundColor: 'white',
                                }}
                            >
                                <Col
                                    span={12}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <Col span={12}>
                                            <div
                                                style={{
                                                    width: '250px',
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                }}
                                            >
                                                <Image
                                                    radius="md"
                                                    src={Logo}
                                                    alt="Random unsplash image"
                                                />
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <Center>
                                                <Text
                                                    weight={500}
                                                    size="xl"
                                                    transform="uppercase"
                                                >
                                                    Đăng nhập
                                                </Text>
                                            </Center>
                                        </Col>
                                        <Col span={12}>
                                            <Controller
                                                name="username"
                                                control={control}
                                                render={({ field }) => (
                                                    <TextInput
                                                        type="text"
                                                        placeholder="Tài khoản"
                                                        label="Tài khoản"
                                                        {...field}
                                                        error={errorUserName}
                                                        {...register(
                                                            'username',
                                                            {
                                                                onBlur: onUserNameBlur,
                                                            },
                                                        )}
                                                        icon={<IconUser />}
                                                    />
                                                )}
                                            ></Controller>
                                        </Col>
                                        <Col span={12}>
                                            <Controller
                                                name="password"
                                                control={control}
                                                render={({ field }) => (
                                                    <TextInput
                                                        type="password"
                                                        placeholder="Mật khẩu"
                                                        label="Mật khẩu"
                                                        {...field}
                                                        error={errorPassword}
                                                        {...register(
                                                            'password',
                                                            {
                                                                onBlur: onPasswordBlur,
                                                            },
                                                        )}
                                                        icon={<IconKey />}
                                                    />
                                                )}
                                            ></Controller>
                                        </Col>
                                        {errorLogin !== '' ? (
                                            <Col span={12}>
                                                <Text color="red" size="sm">
                                                    {errorLogin}
                                                </Text>
                                            </Col>
                                        ) : null}
                                        <Col span={12}>
                                            <Button
                                                color="blue"
                                                variant="filled"
                                                fullWidth
                                                onClick={onSigninClicked}
                                            >
                                                Đăng nhập
                                            </Button>
                                        </Col>
                                        <Col span={12}>
                                            <Text
                                                size="md"
                                                weight={500}
                                                color="blue"
                                            >
                                                Copyright 2022 By{' '}
                                                <a
                                                    href="https://bavitech.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    Bavitech Corporation &#169;
                                                </a>
                                            </Text>
                                            <Group spacing="xs">
                                                <Text weight={500} size="xs">
                                                    Địa chỉ:{' '}
                                                </Text>
                                                <Text size="xs">
                                                    23 Phạm Thái Bường, Phường
                                                    Tân Phong, Quận 7, TP HCM
                                                </Text>
                                            </Group>
                                            <Group spacing="xs">
                                                <Text weight={500} size="xs">
                                                    Email:{' '}
                                                </Text>
                                                <Text size="xs">
                                                    <a
                                                        href="mailto:sales@bavitech.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        sales@bavitech.com
                                                    </a>
                                                </Text>
                                            </Group>
                                            <Group spacing="xs">
                                                <Text weight={500} size="xs">
                                                    Điện thoại:{' '}
                                                </Text>
                                                <Text size="xs">
                                                    028 54130704
                                                </Text>
                                            </Group>
                                            <Group spacing="xs">
                                                <Text weight={500} size="xs">
                                                    Fax:{' '}
                                                </Text>
                                                <Text size="xs">
                                                    028 54130705
                                                </Text>
                                            </Group>
                                            <Group spacing="xs">
                                                <Text weight={500} size="xs">
                                                    Website:{' '}
                                                </Text>
                                                <Text size="xs">
                                                    <a
                                                        href="https://bavitech.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                    >
                                                        bavitech.com
                                                    </a>
                                                </Text>
                                            </Group>
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </Box>
                    </Container>
                </BackgroundImage>
            </div>
        </motion.div>
    );
};

export default LoginPage;
