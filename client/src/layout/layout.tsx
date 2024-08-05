import {
    ActionIcon,
    AppShell,
    Burger,
    ColorSchemeProvider,
    Header,
    Image,
    MantineProvider,
    MediaQuery,
    Navbar,
    Space,
    Text,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import Logo from '../assets/logo.png';

import { NavbarNested } from './navbar';

import { IconPower } from '@tabler/icons-react';

import { useDispatch, useSelector } from 'react-redux';

import IconChangeTheme from '../components/iconChangeTheme';

import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { OpenState, toggle } from '../features/openSidebar';

import {
    useUpdateActiveUserMutation,
    useVerifyTokenLazyQuery,
    useVerifyTokenQuery,
} from '../__generated__/graphql';

const Layout = () => {
    const [updateActiveUser, {}] = useUpdateActiveUserMutation();
    const [verifyToken, {}] = useVerifyTokenLazyQuery();
    const { refetch: verifyTokenRefetch } = useVerifyTokenQuery();

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== null && token !== undefined && token !== '') {
            verifyTokenRefetch({ token: token })
                .then(async (res) => {
                    if (
                        res?.data?.VerifyToken !== null &&
                        res?.data?.VerifyToken !== undefined
                    ) {
                        if (res.data.VerifyToken === 'error') {
                            const obj = {
                                Uid: localStorage.getItem('Uid'),
                                Active: false,
                            };

                            await updateActiveUser({
                                variables: {
                                    user: obj,
                                },
                            });

                            localStorage.removeItem('Uid');
                            localStorage.removeItem('Role');
                            localStorage.removeItem('token');
                            localStorage.removeItem('Company');

                            navigate('/login');
                        } else {
                            const obj = {
                                Uid: localStorage.getItem('Uid'),
                                Active: true,
                            };

                            await updateActiveUser({
                                variables: {
                                    user: obj,
                                },
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        // handle close tab or browser
        const handleBeforeUnload = async (event: any) => {
            const obj = {
                Uid: localStorage.getItem('Uid'),
                Active: false,
            };

            await updateActiveUser({
                variables: {
                    user: obj,
                },
            });
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [location]);

    const [colorScheme, setColorScheme] = useLocalStorage({
        key: 'mantine-color-scheme-xntd',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value: string) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const open = useSelector(OpenState);

    const dispatch = useDispatch();

    //const [opened, setOpened] = useState(open);

    const onOpenSidebarClicked = () => {
        dispatch(toggle());
    };

    const onLogoutClick = async () => {
        const obj = {
            Uid: localStorage.getItem('Uid'),
            Active: false,
        };

        await updateActiveUser({
            variables: {
                user: obj,
            },
        });

        localStorage.removeItem('Uid');
        localStorage.removeItem('Role');
        localStorage.removeItem('token');
        localStorage.removeItem('Company');

        navigate('/login');
    };

    return (
        <ColorSchemeProvider
            // @ts-ignore comment
            colorScheme={colorScheme}
            // @ts-ignore comment
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                // @ts-ignore comment
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <div className="main" style={{ background: '#ecf0f12b' }}>
                    <AppShell
                        padding="md"
                        navbarOffsetBreakpoint="sm"
                        navbar={
                            <Navbar
                                hiddenBreakpoint="sm"
                                hidden={!open}
                                width={{ sm: 300 }}
                                p="xs"
                                style={{
                                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, .1)',
                                }}
                            >
                                <NavbarNested />
                            </Navbar>
                        }
                        header={
                            <Header
                                height={60}
                                p="xs"
                                style={{
                                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, .1)',
                                    borderBottom: '0',
                                    padding: '0 15px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <MediaQuery
                                        largerThan="sm"
                                        styles={{ display: 'none' }}
                                    >
                                        <Burger
                                            opened={open}
                                            onClick={onOpenSidebarClicked}
                                            size="sm"
                                            mr="xl"
                                        />
                                    </MediaQuery>
                                    <Image
                                        width={50}
                                        radius="md"
                                        src={Logo}
                                        alt="Random unsplash image"
                                    />
                                    <Text
                                        size="lg"
                                        weight={500}
                                        variant="gradient"
                                        gradient={{
                                            from: 'blue',
                                            to: 'aqua',
                                            deg: 45,
                                        }}
                                        transform="uppercase"
                                    >
                                        Tổng Công Ty Câp Nước Sài Gòn - Xí
                                        Nghiệp Truyền Dẫn Nước Sạch
                                    </Text>

                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text size="sm" weight={500}>
                                            {localStorage.getItem('Uid')}
                                        </Text>
                                        <Space w="md" />
                                        <ActionIcon
                                            color="teal"
                                            variant="filled"
                                            onClick={onLogoutClick}
                                        >
                                            <IconPower size="1.125rem" />
                                        </ActionIcon>
                                        <Space w="md" />
                                        <IconChangeTheme />
                                    </div>
                                </div>
                            </Header>
                        }
                    >
                        <AnimatePresence>
                            <div id="detail">
                                {localStorage.getItem('Uid') ? (
                                    <Outlet />
                                ) : (
                                    <Navigate to="/login" />
                                )}
                            </div>
                        </AnimatePresence>
                    </AppShell>
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Layout;
