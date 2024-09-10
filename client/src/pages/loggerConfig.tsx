import {
    Button,
    Grid,
    Col,
    Space,
    Text,
    TextInput,
    Select,
    NumberInput,
    Center,
} from '@mantine/core';

import { TimeInput } from '@mantine/dates';

import {
    useGetAllSitesQuery,
    useGetAllDeviceSiteConfigLazyQuery,
    useGetAllDeviceChannelConifgLazyQuery,
    useInsertDeviceSiteConfigMutation,
    useUpdateDeviceChannelConfigMutation,
    useUpdateDeviceSiteConfigMutation,
    useDeleteDeviceChannelConifgMutation,
    useDeleteDeviceSiteConfigMutation,
} from '../__generated__/graphql';

import { Controller, useForm } from 'react-hook-form';

import ConfigChannel from '../components/configChannel';

import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
    ListChannelState,
    addListChannel,
    updateListChannelByIndex,
} from '../features/listChannel';

import { setCurrentDeviceSiteConfig } from '../features/currentDeviceSiteConfig';

import { getHourAndMinute, checkAdminViewerRole } from '../utils/utils';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const LoggerConfigPage = () => {
    const [listDevieSiteConfig, setListDeviceSiteConfig] = useState([]);
    const [listChannelData, setListChannelData] = useState([]);
    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const listChannel = useSelector(ListChannelState);

    const dispatch = useDispatch();

    const { data: sites, error: siteError } = useGetAllSitesQuery();
    const [getDeviceSiteConfig, {}] = useGetAllDeviceSiteConfigLazyQuery();
    const [getDeviceChannelConfig, {}] =
        useGetAllDeviceChannelConifgLazyQuery();
    const [insertDeviceSiteConfig, {}] = useInsertDeviceSiteConfigMutation();
    const [updateDeviceSiteConfig, {}] = useUpdateDeviceSiteConfigMutation();
    const [deleteDeviceSiteConfig, {}] = useDeleteDeviceSiteConfigMutation();
    const [updateDeviceChannelConfig, {}] =
        useUpdateDeviceChannelConfigMutation();
    const [deleteDeviceChannelConfig, {}] =
        useDeleteDeviceChannelConifgMutation();

    const resetListChannel = () => {
        const temp = [];

        for (let i = 0; i < 4; i++) {
            const obj = {
                _id: '',
                LoggerId: '',
                Name: '',
                Unit: '',
                LastTimeStamp: null,
                LastValue: 0,
                Description: '',
                BaseMin: 0,
                BaseMax: 0,
                BaseLine: 0,
                GroupChannel: '',
                Pressure1: false,
                Pressure2: false,
                ForwardFlow: false,
                ReverseFlow: false,
                DisplayOnGraph: false,
                IndexTimeStamp: null,
                LastIndex: 0,
                StatusViewAlarm: false,
            };

            temp.push(obj);
        }

        //@ts-ignore
        dispatch(addListChannel(temp));
    };

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getDeviceSiteConfig()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllDeviceSiteConfig !== null &&
                            res.data.GetAllDeviceSiteConfig !== undefined
                        ) {
                            //@ts-ignore
                            setListDeviceSiteConfig([
                                ...res.data.GetAllDeviceSiteConfig,
                            ]);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));

        getDeviceChannelConfig()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllDeviceChannelConifg !== null &&
                            res.data.GetAllDeviceChannelConifg !== undefined
                        ) {
                            //@ts-ignore
                            setListChannelData([
                                ...res.data.GetAllDeviceChannelConifg,
                            ]);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));

        resetListChannel();
    }, []);

    const { control, getValues, setValue, reset, register } = useForm({
        defaultValues: {
            _id: '',
            SiteId: '',
            LoggerId: '',
            Tel: '',
            Pressure: null,
            Forward: null,
            Reverse: null,
            Interval: 15,
            BeginTime: null || 0,
            ZoomInit: null,
            ZoomOn: null,
            Pressure1: null,
        },
    });

    if (siteError) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
    }

    //@ts-ignore
    const siteData = [];
    if (sites !== null && sites !== undefined) {
        if (sites.GetAllSites !== null && sites.GetAllSites !== undefined) {
            for (const site of sites.GetAllSites) {
                const obj = {
                    label: `${site?._id}`,
                    value: site?._id,
                };

                siteData.push(obj);
            }
        }
    }

    const onSiteIdBlured = (e: any) => {
        const find = listDevieSiteConfig.find(
            //@ts-ignore
            (el) => el.SiteId === e.target.value,
        );

        resetListChannel();

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('SiteId', find.SiteId);
            //@ts-ignore
            setValue('LoggerId', find.LoggerId);
            //@ts-ignore
            setValue('Interval', find.Interval ?? 15);
            //@ts-ignore
            setValue('BeginTime', getHourAndMinute(find.BeginTime));

            if (
                //@ts-ignore
                find.LoggerId !== null &&
                //@ts-ignore
                find.LoggerId !== undefined &&
                //@ts-ignore
                find.LoggerId !== ''
            ) {
                const listFindChannel = listChannelData.filter(
                    //@ts-ignore
                    (el) => el.LoggerId === find.LoggerId,
                );

                for (let i = 0; i < listFindChannel.length; i++) {
                    //@ts-ignore
                    const objTemp = { ...listFindChannel[i] };
                    if (
                        //@ts-ignore
                        listFindChannel[i]._id !== null &&
                        //@ts-ignore
                        listFindChannel[i]._id !== undefined &&
                        //@ts-ignore
                        listFindChannel[i]._id !== ''
                    ) {
                        //@ts-ignore
                        const numberChannel =
                            //@ts-ignore
                            listFindChannel[i]._id[
                                //@ts-ignore
                                listFindChannel[i]._id.length - 1
                            ];
                        if (
                            numberChannel !== null &&
                            numberChannel !== undefined &&
                            numberChannel !== ''
                        ) {
                            const temp = parseInt(numberChannel);
                            //@ts-ignore
                            if (temp == find.Pressure) {
                                //@ts-ignore
                                objTemp.Pressure1 = true;
                                //@ts-ignore
                                objTemp.Pressure2 = false;
                                //@ts-ignore
                                objTemp.ForwardFlow = false;
                                //@ts-ignore
                                objTemp.ReverseFlow = false;
                            } else if (
                                //@ts-ignore
                                temp == find.Pressure1
                            ) {
                                //@ts-ignore
                                objTemp.Pressure1 = false;
                                //@ts-ignore
                                objTemp.Pressure2 = true;
                                //@ts-ignore
                                objTemp.ForwardFlow = false;
                                //@ts-ignore
                                objTemp.ReverseFlow = false;
                            } else if (
                                //@ts-ignore
                                temp == find.Forward
                            ) {
                                //@ts-ignore
                                objTemp.Pressure1 = false;
                                //@ts-ignore
                                objTemp.Pressure2 = false;
                                //@ts-ignore
                                objTemp.ForwardFlow = true;
                                //@ts-ignore
                                objTemp.ReverseFlow = false;
                            } else if (
                                //@ts-ignore
                                temp == find.Reverse
                            ) {
                                //@ts-ignore
                                objTemp.Pressure1 = false;
                                //@ts-ignore
                                objTemp.Pressure2 = false;
                                //@ts-ignore
                                objTemp.ForwardFlow = false;
                                //@ts-ignore
                                objTemp.ReverseFlow = true;
                            }
                        } else {
                            //@ts-ignore
                            objTemp.Pressure1 = false;
                            //@ts-ignore
                            objTemp.Pressure2 = false;
                            //@ts-ignore
                            objTemp.ForwardFlow = false;
                            //@ts-ignore
                            objTemp.ReverseFlow = false;
                        }
                    } else {
                        //@ts-ignore
                        objTemp.Pressure1 = false;
                        //@ts-ignore
                        objTemp.Pressure2 = false;
                        //@ts-ignore
                        objTemp.ForwardFlow = false;
                        //@ts-ignore
                        objTemp.ReverseFlow = false;
                    }

                    const obj = {
                        index: i,
                        value: objTemp,
                    };

                    //@ts-ignore
                    dispatch(updateListChannelByIndex(obj));
                }
            }
            //@ts-ignore
            dispatch(setCurrentDeviceSiteConfig(find));
        }
    };

    const handelChannelHasValue = () => {
        //@ts-ignore
        const temp = [];

        for (const item of listChannel) {
            if (
                //@ts-ignore
                item._id !== null &&
                //@ts-ignore
                item._id !== undefined &&
                //@ts-ignore
                item._id !== ''
            ) {
                temp.push(item);
            }
        }
        //@ts-ignore
        return temp;
    };

    const createObjInsertDeviceSiteConfig = () => {
        const obj = {
            SiteId: getValues('SiteId'),
            LoggerId: getValues('LoggerId'),
            Tel: getValues('Tel'),
            Pressure: null,
            Forward: null,
            Reverse: null,
            Interval: getValues('Interval'),
            BeginTime: null || 0,
            ZoomInit: null,
            ZoomOn: null,
            Pressure1: null,
        };

        // handel type channel
        for (const channel of listChannel) {
            if (
                //@ts-ignore
                channel._id !== null &&
                //@ts-ignore
                channel._id !== undefined &&
                //@ts-ignore
                channel._id !== ''
            ) {
                //@ts-ignore
                if (channel.ForwardFlow == true) {
                    //@ts-ignore
                    obj.Forward = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.ReverseFlow == true) {
                    //@ts-ignore
                    obj.Reverse = parseInt(channel._id[channel._id.length - 1]);
                }
                //@ts-ignore
                else if (channel.Pressure1 == true) {
                    //@ts-ignore
                    obj.Pressure = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.Pressure2 == true) {
                    //@ts-ignore
                    obj.Pressure1 = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
            }
        }

        // handel begin time
        let now = new Date(Date.now());

        const beginTime = getValues('BeginTime');
        if (
            beginTime !== null &&
            beginTime !== undefined &&
            beginTime.toString() !== ''
        ) {
            const split = beginTime.toString().split(':');

            const hour = parseInt(split[0]);

            const minute = parseInt(split[1]);

            now.setHours(hour);
            now.setMinutes(minute);

            //@ts-ignore
            obj.BeginTime = now;
        }

        return obj;
    };

    const createObjUpdateDeviceSiteConfig = () => {
        const obj = {
            _id: getValues('_id'),
            SiteId: getValues('SiteId'),
            LoggerId: getValues('LoggerId'),
            Tel: getValues('Tel'),
            Pressure: null,
            Forward: null,
            Reverse: null,
            Interval: getValues('Interval'),
            BeginTime: null || 0,
            ZoomInit: null,
            ZoomOn: null,
            Pressure1: null,
        };

        // handel type channel
        for (const channel of listChannel) {
            if (
                //@ts-ignore
                channel._id !== null &&
                //@ts-ignore
                channel._id !== undefined &&
                //@ts-ignore
                channel._id !== ''
            ) {
                //@ts-ignore
                if (channel.ForwardFlow == true) {
                    //@ts-ignore
                    obj.Forward = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.ReverseFlow == true) {
                    //@ts-ignore
                    obj.Reverse = parseInt(channel._id[channel._id.length - 1]);
                }
                //@ts-ignore
                else if (channel.Pressure1 == true) {
                    //@ts-ignore
                    obj.Pressure = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.Pressure2 == true) {
                    //@ts-ignore
                    obj.Pressure1 = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
            }
        }

        // handel begin time
        let now = new Date(Date.now());

        const beginTime = getValues('BeginTime');
        if (
            beginTime !== null &&
            beginTime !== undefined &&
            beginTime.toString() !== ''
        ) {
            const split = beginTime.toString().split(':');

            const hour = parseInt(split[0]);

            const minute = parseInt(split[1]);

            now.setHours(hour);
            now.setMinutes(minute);

            //@ts-ignore
            obj.BeginTime = now;
        }

        return obj;
    };

    const createObjHandelInsertDeviceSiteConfig = () => {
        const obj = {
            _id: getValues('_id'),
            SiteId: getValues('SiteId'),
            LoggerId: getValues('LoggerId'),
            Tel: getValues('Tel'),
            Pressure: null,
            Forward: null,
            Reverse: null,
            Interval: getValues('Interval'),
            BeginTime: null || 0,
            ZoomInit: null,
            ZoomOn: null,
            Pressure1: null,
        };

        // handel type channel
        for (const channel of listChannel) {
            if (
                //@ts-ignore
                channel._id !== null &&
                //@ts-ignore
                channel._id !== undefined &&
                //@ts-ignore
                channel._id !== ''
            ) {
                //@ts-ignore
                if (channel.ForwardFlow == true) {
                    //@ts-ignore
                    obj.Forward = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.ReverseFlow == true) {
                    //@ts-ignore
                    obj.Reverse = parseInt(channel._id[channel._id.length - 1]);
                }
                //@ts-ignore
                else if (channel.Pressure1 == true) {
                    //@ts-ignore
                    obj.Pressure = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
                //@ts-ignore
                else if (channel.Pressure2 == true) {
                    //@ts-ignore
                    obj.Pressure1 = parseInt(
                        //@ts-ignore
                        channel._id[channel._id.length - 1],
                    );
                }
            }
        }

        // handel begin time
        let now = new Date(Date.now());

        const beginTime = getValues('BeginTime');
        if (
            beginTime !== null &&
            beginTime !== undefined &&
            beginTime.toString() !== ''
        ) {
            const split = beginTime.toString().split(':');

            const hour = parseInt(split[0]);

            const minute = parseInt(split[1]);

            now.setHours(hour);
            now.setMinutes(minute);

            //@ts-ignore
            obj.BeginTime = now.toISOString();
        }

        return obj;
    };

    const handelInsertDeviceSiteConfig = () => {
        const obj = createObjHandelInsertDeviceSiteConfig();

        //@ts-ignore
        setListDeviceSiteConfig((current) => [...current, obj]);
    };

    const handelUpdateDevicesiteConfig = (siteConfig: any) => {
        const temp = [];

        for (const item of listDevieSiteConfig) {
            //@ts-ignore
            if (item._id == siteConfig._id) {
                siteConfig.BeginTime = siteConfig.BeginTime.toISOString();
                temp.push(siteConfig);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListDeviceSiteConfig([...temp]);
    };

    const handelDeleteDeviceSiteConfig = (siteConfig: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listDevieSiteConfig) {
            //@ts-ignore
            if (item._id != siteConfig._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListDeviceSiteConfig([...temp]);
    };

    const handelInsertOrUpdateListChannel = (channel: any) => {
        const temp = [];

        let check = true;

        for (let i = 0; i < listChannelData.length; i++) {
            //@ts-ignore
            if (listChannelData[i]._id === channel._id) {
                temp.push(channel);
                check = false;
            } else {
                temp.push(listChannelData[i]);
            }
        }

        if (check == true) {
            temp.push(channel);
        }

        //@ts-ignore
        setListChannelData([...temp]);
    };

    const handelDeleteListChannel = (channel: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listChannelData) {
            //@ts-ignore
            if (item._id !== channel._id) {
                temp.push(item);
            }
        }
        //@ts-ignore
        setListChannelData([...temp]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.SiteId == null ||
            formValue.SiteId == undefined ||
            formValue.SiteId == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }
        if (
            formValue.LoggerId == null ||
            formValue.LoggerId == undefined ||
            formValue.LoggerId == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có logger Id!!!',
            });

            isAllow = false;
        }
        if (formValue.Interval == null || formValue.Interval == undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có interval!!!',
            });

            isAllow = false;
        }

        if (
            formValue.BeginTime == null ||
            formValue.BeginTime == undefined ||
            formValue.BeginTime == 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có thời giờ bắt đầu ngày!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            insertDeviceSiteConfig({
                variables: {
                    siteConfig: createObjInsertDeviceSiteConfig(),
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.InsertDeviceSiteConfig !== null &&
                            res.data.InsertDeviceSiteConfig !== undefined
                        ) {
                            if (res.data.InsertDeviceSiteConfig !== '') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Thêm cấu hình logger thành công',
                                });

                                setValue(
                                    '_id',
                                    res.data.InsertDeviceSiteConfig,
                                );

                                handelInsertDeviceSiteConfig();
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Thêm cấu hình logger không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm cấu hình logger không thành công',
                    });
                    console.log(err);
                });

            const listChannelUpdate = handelChannelHasValue();

            if (listChannelUpdate.length > 0) {
                for (const channel of listChannelUpdate) {
                    updateDeviceChannelConfig({
                        variables: {
                            channel: channel,
                        },
                    })
                        .then((res) => {
                            if (res.data?.UpdateDeviceChannelConfig !== '') {
                                console.log('success');

                                handelInsertOrUpdateListChannel(channel);
                            } else {
                                console.log('unsuccess');
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            }
        }
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.SiteId == null ||
            formValue.SiteId == undefined ||
            formValue.SiteId == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }
        if (
            formValue.LoggerId == null ||
            formValue.LoggerId == undefined ||
            formValue.LoggerId == ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có logger Id!!!',
            });

            isAllow = false;
        }
        if (formValue.Interval == null || formValue.Interval == undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có interval!!!',
            });

            isAllow = false;
        }

        if (
            formValue.BeginTime == null ||
            formValue.BeginTime == undefined ||
            formValue.BeginTime == 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có thời giờ bắt đầu ngày!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = createObjUpdateDeviceSiteConfig();

            console.log(obj);

            updateDeviceSiteConfig({
                variables: {
                    siteConfig: obj,
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.UpdateDeviceSiteConfig !== null &&
                            res.data.UpdateDeviceSiteConfig !== undefined
                        ) {
                            if (res.data.UpdateDeviceSiteConfig !== '') {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfull',
                                    text: 'Cập nhật cấu hình logger thành công',
                                });

                                handelUpdateDevicesiteConfig(obj);
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Cập nhật cấu hình logger không thành công',
                                });
                            }
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật cấu hình logger không thành công',
                    });
                    console.log(err);
                });

            const listChannelUpdate = handelChannelHasValue();

            if (listChannelUpdate.length > 0) {
                for (const channel of listChannelUpdate) {
                    updateDeviceChannelConfig({
                        variables: {
                            channel: channel,
                        },
                    })
                        .then((res) => {
                            if (res.data?.UpdateDeviceChannelConfig !== '') {
                                console.log('success');

                                handelInsertOrUpdateListChannel(channel);
                            } else {
                                console.log('unsuccess');
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            }
        }
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa cấu hinh logger?',
            text: 'Xóa cấu hinh logger không thể nào hồi phục lại!',
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
                    formValue.SiteId == null ||
                    formValue.SiteId == undefined ||
                    formValue.SiteId == ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có mã vị trí!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    const obj = createObjUpdateDeviceSiteConfig();

                    deleteDeviceSiteConfig({
                        variables: {
                            siteConfig: obj,
                        },
                    })
                        .then((res) => {
                            if (res.data !== null && res.data !== undefined) {
                                if (
                                    res.data.DeleteDeviceSiteConfig !== null &&
                                    res.data.DeleteDeviceSiteConfig !==
                                        undefined
                                ) {
                                    if (res.data.DeleteDeviceSiteConfig > 0) {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Successfull',
                                            text: 'Xóa cấu hình logger thành công',
                                        });

                                        handelDeleteDeviceSiteConfig(obj);

                                        reset();
                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Xóa cấu hình logger không thành công',
                                        });
                                    }
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa cấu hình logger không thành công',
                            });
                        });

                    const listChannelUpdate = handelChannelHasValue();

                    if (listChannelUpdate.length > 0) {
                        for (const channel of listChannelUpdate) {
                            deleteDeviceChannelConfig({
                                variables: {
                                    channel: channel,
                                },
                            })
                                .then((res) => {
                                    if (
                                        res.data !== null &&
                                        res.data !== undefined
                                    ) {
                                        if (
                                            res.data
                                                .DeleteDeviceChannelConifg !==
                                                null &&
                                            res.data
                                                .DeleteDeviceChannelConifg !==
                                                undefined
                                        ) {
                                            if (
                                                res.data
                                                    ?.DeleteDeviceChannelConifg >
                                                0
                                            ) {
                                                console.log('success');

                                                handelDeleteListChannel(
                                                    channel,
                                                );
                                            } else {
                                                console.log('unsuccess');
                                            }
                                        }
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }

                        resetListChannel();
                    }
                }
            }
        });
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
                            Cấu hình logger điểm lắp đặt
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col md={3}>
                    {sites !== undefined ? (
                        <Controller
                            name="SiteId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã vị trí"
                                    placeholder="Mã vị trí"
                                    searchable
                                    nothingFound="Không tìm thấy mã vị trí"
                                    //@ts-ignore
                                    data={siteData}
                                    {...field}
                                    onBlur={onSiteIdBlured}
                                    withAsterisk
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={3}>
                    <Controller
                        name="LoggerId"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Logger Id"
                                label="Logger Id"
                                {...field}
                                withAsterisk
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={3}>
                    <Controller
                        name="Interval"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Interval"
                                label="Interval"
                                withAsterisk
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={3}>
                    <Controller
                        name="BeginTime"
                        control={control}
                        render={({ field }) => (
                            <TimeInput
                                label="Giờ bắt đầu ngày"
                                withAsterisk
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col span={12}>
                    <ConfigChannel index={0} LoggerId={getValues('LoggerId')} />
                </Col>
                <Col span={12}>
                    <ConfigChannel index={1} LoggerId={getValues('LoggerId')} />
                </Col>
                <Col span={12}>
                    <ConfigChannel index={2} LoggerId={getValues('LoggerId')} />
                </Col>
                <Col span={12}>
                    <ConfigChannel index={3} LoggerId={getValues('LoggerId')} />
                </Col>
                {isAdminViewer == false ? (
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
                ) : null}
            </Grid>
        </motion.div>
    );
};

export default LoggerConfigPage;
