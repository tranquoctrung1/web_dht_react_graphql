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
    useGetAllLoggerLazyQuery,
    useGetAllHistorySiteLoggerLazyQuery,
    useInsertHistorySiteLoggerMutation,
    useUpdateHistorySiteLoggerMutation,
    useDeleteHistorySiteLoggerMutation,
    useUpdateSiteLoggerDateChangeMutation,
    useUpdateLoggerInstallMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

import { Controller, useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';

import { checkAdminViewerRole } from '../utils/utils';

const ChangeLoggerPage = () => {
    const [siteData, setSiteData] = useState([]);
    const [LoggerData, setLoggerData] = useState([]);
    const [listHistoryLogger, setListHistoryLogger] = useState([]);

    const [getSite, {}] = useGetAllSitesLazyQuery();
    const [getLogger, {}] = useGetAllLoggerLazyQuery();
    const [getHistorySiteLogger, {}] = useGetAllHistorySiteLoggerLazyQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [insertHisotrySiteLogger, {}] = useInsertHistorySiteLoggerMutation();
    const [updateHistorySiteLogger, {}] = useUpdateHistorySiteLoggerMutation();
    const [deleteHistorySiteLogger, {}] = useDeleteHistorySiteLoggerMutation();
    const [updateSiteLoggerDateChange, {}] =
        useUpdateSiteLoggerDateChangeMutation();
    const [updateLoggerInstall, {}] = useUpdateLoggerInstallMutation();

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

        getLogger().then((res) => {
            if (
                res?.data?.GetAllLogger !== null &&
                res?.data?.GetAllLogger !== undefined
            ) {
                const temp = [];

                for (const item of res.data?.GetAllLogger) {
                    const obj = {
                        value: item?.Serial,
                        label: item?.Serial,
                    };

                    temp.push(obj);
                }

                //@ts-ignore
                setLoggerData([...temp]);
            }
        });

        getHistorySiteLogger().then((res) => {
            if (
                res?.data?.GetAllHistorySiteLogger !== null &&
                res?.data?.GetAllHistorySiteLogger !== undefined
            ) {
                //@ts-ignore
                setListHistoryLogger([...res.data.GetAllHistorySiteLogger]);
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
        const find = listHistoryLogger.find(
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

    const onCreateObjHistorySiteLoggerInsert = () => {
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

    const onCreateObjHistorySiteLoggerUpdate = () => {
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

    const createObjNewLoggerIntall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.NewMeterSerial,
            Installed: true,
        };

        return obj;
    };

    const createObjOldLoggerInstall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.OldMeterSerial,
            Installed: false,
        };

        return obj;
    };

    const createObjSiteLoggerDateChange = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue.SiteId,
            Logger: formValue.NewMeterSerial,
            DateOfLoggerChange: formValue.DateChanged,
        };

        return obj;
    };

    const updateLoggerInstallAction = () => {
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
            updateLoggerInstall({
                variables: {
                    //@ts-ignore
                    logger: createObjOldLoggerInstall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateLoggerInstall !== null &&
                        res?.data?.UpdateLoggerInstall !== undefined
                    ) {
                        if (res.data?.UpdateLoggerInstall > 0) {
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
            updateLoggerInstall({
                variables: {
                    //@ts-ignore
                    logger: createObjNewLoggerIntall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateLoggerInstall !== null &&
                        res?.data?.UpdateLoggerInstall !== undefined
                    ) {
                        if (res.data?.UpdateLoggerInstall > 0) {
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

    const updateSiteLoggerDateChangeAction = () => {
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
            updateSiteLoggerDateChange({
                variables: {
                    site: createObjSiteLoggerDateChange(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateSiteLoggerDateChange !== null &&
                        res?.data?.UpdateSiteLoggerDateChange !== undefined
                    ) {
                        if (res.data?.UpdateSiteLoggerDateChange > 0) {
                            console.log('success');
                        } else {
                            console.log('failed');
                        }
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    const handelInsertHistorySiteLogger = (history: any) => {
        //@ts-ignore
        setListHistoryLogger((current) => [...current, history]);
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
            insertHisotrySiteLogger({
                variables: {
                    history: onCreateObjHistorySiteLoggerInsert(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertHistorySiteLogger !== null &&
                        res?.data?.InsertHistorySiteLogger !== undefined
                    ) {
                        if (res.data?.InsertHistorySiteLogger !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm lịch sử thay logger thành công',
                            });

                            updateLoggerInstallAction();

                            updateSiteLoggerDateChangeAction();

                            handelInsertHistorySiteLogger(
                                onCreateObjHistorySiteLoggerUpdate(),
                            );
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm lịch sử thay logger không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm lịch sử thay logger không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleUpdateHistorySiteLogger = (history: any) => {
        const temp = [];

        for (const item of listHistoryLogger) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            } else {
                temp.push(history);
            }
        }

        //@ts-ignore
        setListHistoryLogger([...temp]);
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
            const obj = onCreateObjHistorySiteLoggerUpdate();

            updateHistorySiteLogger({
                variables: {
                    history: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateHistorySiteLogger !== null &&
                        res?.data?.UpdateHistorySiteLogger !== undefined
                    ) {
                        if (res.data?.UpdateHistorySiteLogger > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật lịch sử thay logger thành công',
                            });

                            updateLoggerInstallAction();

                            updateSiteLoggerDateChangeAction();

                            handleUpdateHistorySiteLogger(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật lịch sử thay logger không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật lịch sử thay logger không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleDeleteHistorySiteLogger = (history: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listHistoryLogger) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListHistoryLogger([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa logger?',
            text: 'Xóa logger không thể nào hồi phục lại!',
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
                    const obj = onCreateObjHistorySiteLoggerUpdate();

                    deleteHistorySiteLogger({
                        variables: {
                            history: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteHistorySiteLogger !== null &&
                                res?.data?.DeleteHistorySiteLogger !== undefined
                            ) {
                                if (res.data?.DeleteHistorySiteLogger > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa lịch sử thay logger thành công',
                                    });

                                    reset();

                                    handleDeleteHistorySiteLogger(obj);
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa lịch sử thay logger không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa lịch sử thay logger không thành công',
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
                {LoggerData !== undefined ? (
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
                                data={LoggerData}
                                {...field}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={4}>
                {LoggerData !== undefined ? (
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
                                data={LoggerData}
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
    );
};

export default ChangeLoggerPage;
