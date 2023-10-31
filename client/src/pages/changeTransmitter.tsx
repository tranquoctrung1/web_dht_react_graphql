import {
    Select,
    NumberInput,
    Button,
    Grid,
    Col,
    Space,
    Center,
    TextInput,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import {
    useGetAllSitesLazyQuery,
    useGetAllTransmitterLazyQuery,
    useGetAllHistorySiteTransmitterLazyQuery,
    useInsertHistorySiteTransmitterMutation,
    useUpdateHistorySiteTransmitterMutation,
    useDeleteHistorySiteTransmitterMutation,
    useUpdateSiteTransmitterDateChangeMutation,
    useUpdateTransmitterInstallMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

import { Controller, useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';

import { checkAdminViewerRole } from '../utils/utils';

import { motion } from 'framer-motion';

const ChangeTransmitterPage = () => {
    const [siteData, setSiteData] = useState([]);
    const [transmitterData, setTransmitterData] = useState([]);
    const [listHistoryTransmitter, setListHistoryTransmitter] = useState([]);

    const [getSite, {}] = useGetAllSitesLazyQuery();
    const [getTransmitter, {}] = useGetAllTransmitterLazyQuery();
    const [getHistorySiteTransmitter, {}] =
        useGetAllHistorySiteTransmitterLazyQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [insertHisotrySiteTransmitter, {}] =
        useInsertHistorySiteTransmitterMutation();
    const [updateHistorySiteTransmitter, {}] =
        useUpdateHistorySiteTransmitterMutation();
    const [deleteHistorySiteTransmitter, {}] =
        useDeleteHistorySiteTransmitterMutation();
    const [updateSiteTransmitterDateChange, {}] =
        useUpdateSiteTransmitterDateChangeMutation();
    const [updateTransmitterInstall, {}] =
        useUpdateTransmitterInstallMutation();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getSite().then((res) => {
            if (
                res?.data?.GetAllSites !== null &&
                res?.data?.GetAllSites !== undefined
            ) {
                const temp = [];

                for (const item of res.data.GetAllSites) {
                    const obj = {
                        value: item?._id,
                        label: `${item?._id} | ${item?.Location}`,
                    };

                    temp.push(obj);
                }

                //@ts-ignore
                setSiteData([...temp]);
            }
        });

        getTransmitter().then((res) => {
            if (
                res?.data?.GetAllTransmitter !== null &&
                res?.data?.GetAllTransmitter !== undefined
            ) {
                const temp = [];

                for (const item of res.data?.GetAllTransmitter) {
                    const obj = {
                        value: item?.Serial,
                        label: item?.Serial,
                    };

                    temp.push(obj);
                }

                //@ts-ignore
                setTransmitterData([...temp]);
            }
        });

        getHistorySiteTransmitter().then((res) => {
            if (
                res?.data?.GetAllHistorySiteTransmitter !== null &&
                res?.data?.GetAllHistorySiteTransmitter !== undefined
            ) {
                //@ts-ignore
                setListHistoryTransmitter([
                    ...res.data.GetAllHistorySiteTransmitter,
                ]);
            }
        });
    }, []);

    const { reset, register, control, getValues, setValue } = useForm({
        defaultValues: {
            _id: '',
            DateChanged: null,
            SiteId: '',
            OldMeterSerial: '',
            NewMeterSerial: '',
            OldMeterIndex: 0,
            NewMeterIndex: 0,
            Description: '',
        },
    });

    const onSiteChanged = (e: any) => {
        //@ts-ignore
        const find = listHistoryTransmitter.find(
            //@ts-ignore
            (el) => el.SiteId === e,
        );

        //@ts-ignore
        setValue('SiteId', e);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue(
                'DateChanged',
                //@ts-ignore
                find.DateChanged !== null && find.DateChanged !== ''
                    ? //@ts-ignore
                      new Date(find.DateChanged)
                    : null,
            );

            //@ts-ignore
            setValue('OldMeterSerial', find.OldMeterSerial);
            //@ts-ignore
            setValue('NewMeterSerial', find.NewMeterSerial);
            //@ts-ignore
            setValue('OldMeterIndex', find.OldMeterIndex);
            //@ts-ignore
            setValue('NewMeterIndex', find.NewMeterIndex);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const onCreateObjHistorySiteTransmitterInsert = () => {
        const formValue = getValues();

        const obj = {
            DateChanged: formValue.DateChanged,
            SiteId: formValue.SiteId,
            OldMeterSerial: formValue.OldMeterSerial,
            NewMeterSerial: formValue.NewMeterSerial,
            OldMeterIndex: formValue.OldMeterIndex,
            NewMeterIndex: formValue.NewMeterIndex,
            Description: formValue.Description,
        };

        return obj;
    };

    const onCreateObjHistorySiteTransmitterUpdate = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue._id,
            DateChanged: formValue.DateChanged,
            SiteId: formValue.SiteId,
            OldMeterSerial: formValue.OldMeterSerial,
            NewMeterSerial: formValue.NewMeterSerial,
            OldMeterIndex: formValue.OldMeterIndex,
            NewMeterIndex: formValue.NewMeterIndex,
            Description: formValue.Description,
        };

        return obj;
    };

    const createObjNewTransmitterIntall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.NewMeterSerial,
            Installed: true,
        };

        return obj;
    };

    const createObjOldTransmitterInstall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.OldMeterSerial,
            Installed: false,
        };

        return obj;
    };

    const createObjSiteTransmitterDateChange = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue.SiteId,
            Transmitter: formValue.NewMeterSerial,
            DateOfTransmitterChange: formValue.DateChanged,
        };

        return obj;
    };

    const updateTransmitterInstallAction = () => {
        const formValue = getValues();
        let isAllow = true;
        let isAllow2 = true;

        if (
            formValue.OldMeterSerial === null ||
            formValue.OldMeterSerial === undefined ||
            formValue.OldMeterSerial === ''
        ) {
            isAllow = false;
        }

        if (isAllow == true) {
            updateTransmitterInstall({
                variables: {
                    //@ts-ignore
                    transmitter: createObjOldTransmitterInstall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateTransmitterInstall !== null &&
                        res?.data?.UpdateTransmitterInstall !== undefined
                    ) {
                        if (res.data?.UpdateTransmitterInstall > 0) {
                            console.log('success');
                        } else {
                            console.log('failed');
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        if (
            formValue.NewMeterSerial === null ||
            formValue.NewMeterSerial === undefined ||
            formValue.NewMeterSerial === ''
        ) {
            isAllow2 = false;
        }

        if (isAllow2 == true) {
            updateTransmitterInstall({
                variables: {
                    //@ts-ignore
                    transmitter: createObjNewTransmitterIntall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateTransmitterInstall !== null &&
                        res?.data?.UpdateTransmitterInstall !== undefined
                    ) {
                        if (res.data?.UpdateTransmitterInstall > 0) {
                            console.log('success');
                        } else {
                            console.log('failed');
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const updateSiteTransmitterDateChangeAction = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.NewMeterSerial === null ||
            formValue.NewMeterSerial === undefined ||
            formValue.NewMeterSerial === ''
        ) {
            isAllow = false;
        }
        if (isAllow == true) {
            updateSiteTransmitterDateChange({
                variables: {
                    site: createObjSiteTransmitterDateChange(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateSiteTransmitterDateChange !== null &&
                        res?.data?.UpdateSiteTransmitterDateChange !== undefined
                    ) {
                        if (res.data?.UpdateSiteTransmitterDateChange > 0) {
                            console.log('success');
                        } else {
                            console.log('failed');
                        }
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    const handelInsertHistorySiteTransmitter = (history: any) => {
        //@ts-ignore
        setListHistoryTransmitter((current) => [...current, history]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.SiteId === null ||
            formValue.SiteId === undefined ||
            formValue.SiteId === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có điểm lắp đặt!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            insertHisotrySiteTransmitter({
                variables: {
                    history: onCreateObjHistorySiteTransmitterInsert(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertHistorySiteTransmitter !== null &&
                        res?.data?.InsertHistorySiteTransmitter !== undefined
                    ) {
                        if (res.data?.InsertHistorySiteTransmitter !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm lịch sử thay bộ hiển thị thành công',
                            });

                            updateTransmitterInstallAction();

                            updateSiteTransmitterDateChangeAction();

                            handelInsertHistorySiteTransmitter(
                                onCreateObjHistorySiteTransmitterUpdate(),
                            );
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm lịch sử thay bộ hiển thị không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm lịch sử thay bộ hiển thị không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleUpdateHistorySiteTransmitter = (history: any) => {
        const temp = [];

        for (const item of listHistoryTransmitter) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            } else {
                temp.push(history);
            }
        }

        //@ts-ignore
        setListHistoryTransmitter([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.SiteId === null ||
            formValue.SiteId === undefined ||
            formValue.SiteId === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có điểm lắp đặt!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = onCreateObjHistorySiteTransmitterUpdate();

            updateHistorySiteTransmitter({
                variables: {
                    history: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateHistorySiteTransmitter !== null &&
                        res?.data?.UpdateHistorySiteTransmitter !== undefined
                    ) {
                        if (res.data?.UpdateHistorySiteTransmitter > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật lịch sử thay bộ hiển thị thành công',
                            });

                            updateTransmitterInstallAction();

                            updateSiteTransmitterDateChangeAction();

                            handleUpdateHistorySiteTransmitter(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật lịch sử thay bộ hiển thị không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật lịch sử thay bộ hiển thị không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleDeleteHistorySiteTransmitter = (history: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listHistoryTransmitter) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListHistoryTransmitter([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa bộ hiển thị?',
            text: 'Xóa bộ hiển thị không thể nào hồi phục lại!',
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
                    formValue.SiteId === null ||
                    formValue.SiteId === undefined ||
                    formValue.SiteId === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có điểm lắp đặt!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    const obj = onCreateObjHistorySiteTransmitterUpdate();

                    deleteHistorySiteTransmitter({
                        variables: {
                            history: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteHistorySiteTransmitter !==
                                    null &&
                                res?.data?.DeleteHistorySiteTransmitter !==
                                    undefined
                            ) {
                                if (
                                    res.data?.DeleteHistorySiteTransmitter > 0
                                ) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa lịch sử thay bộ hiển thị thành công',
                                    });

                                    reset();

                                    handleDeleteHistorySiteTransmitter(obj);
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa lịch sử thay bộ hiển thị không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa lịch sử thay bộ hiển thị không thành công',
                            });
                            console.log(err);
                        });
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
                <Col md={4}>
                    {siteData !== undefined ? (
                        <Controller
                            name="SiteId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Điểm lắp đặt"
                                    placeholder="Điểm lắp đặt"
                                    searchable
                                    nothingFound="Không tìm thấy điểm lắp đặt"
                                    //@ts-ignore
                                    data={siteData}
                                    {...field}
                                    onChange={onSiteChanged}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateChanged"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay"
                                placeholder="Ngày thay"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {transmitterData !== undefined ? (
                        <Controller
                            name="OldMeterSerial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial củ"
                                    placeholder="Serial củ"
                                    searchable
                                    nothingFound="Không tìm thấy serial củ"
                                    //@ts-ignore
                                    data={transmitterData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {transmitterData !== undefined ? (
                        <Controller
                            name="NewMeterSerial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial mới"
                                    placeholder="Serial mới"
                                    searchable
                                    nothingFound="Không tìm thấy serial mới"
                                    //@ts-ignore
                                    data={transmitterData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="OldMeterIndex"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Chỉ số củ"
                                label="Chỉ số củ"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="NewMeterIndex"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Chỉ số mới"
                                label="Chỉ số mới"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="Description"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Ghi chú"
                                label="Ghi chú"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col span={12}>
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
                </Col>
            </Grid>
        </motion.div>
    );
};

export default ChangeTransmitterPage;
