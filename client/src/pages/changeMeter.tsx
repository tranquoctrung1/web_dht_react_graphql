import {
    Select,
    NumberInput,
    Button,
    Grid,
    Col,
    Space,
    Center,
    TextInput,
    Text,
    Textarea,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import {
    useGetAllSitesQuery,
    useGetAllMeterQuery,
    useGetAllHistorySiteMeterQuery,
    useInsertHistorySiteMeterMutation,
    useUpdateHistorySiteMeterMutation,
    useDeleteHistorySiteMeterMutation,
    useUpdateSiteMeterDateChangeMutation,
    useUpdateMeterInstallMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

import { Controller, useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';

import { checkAdminViewerRole } from '../utils/utils';

import { motion } from 'framer-motion';

const ChangeMeterPage = () => {
    const [siteData, setSiteData] = useState([]);
    const [meterData, setMeterData] = useState([]);
    const [listHistorySiteMeter, setListHistorySiteMeter] = useState([]);

    const { refetch: getSite } = useGetAllSitesQuery();
    const { refetch: getMeter } = useGetAllMeterQuery();
    const { refetch: getHistorySiteMeter } = useGetAllHistorySiteMeterQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [insertHisotrySiteMeter, {}] = useInsertHistorySiteMeterMutation();
    const [updateHistorySiteMeter, {}] = useUpdateHistorySiteMeterMutation();
    const [deleteHistorySiteMeter, {}] = useDeleteHistorySiteMeterMutation();
    const [updateSiteMeterDateChange, {}] =
        useUpdateSiteMeterDateChangeMutation();
    const [updateMeterInstall, {}] = useUpdateMeterInstallMutation();

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

        getMeter().then((res) => {
            if (
                res?.data?.GetAllMeter !== null &&
                res?.data?.GetAllMeter !== undefined
            ) {
                const temp = [];

                for (const item of res.data?.GetAllMeter) {
                    const obj = {
                        value: item?.Serial,
                        label: item?.Serial,
                    };

                    temp.push(obj);
                }

                //@ts-ignore
                setMeterData([...temp]);
            }
        });

        getHistorySiteMeter().then((res) => {
            if (
                res?.data?.GetAllHistorySiteMeter !== null &&
                res?.data?.GetAllHistorySiteMeter !== undefined
            ) {
                //@ts-ignore
                setListHistorySiteMeter([...res.data.GetAllHistorySiteMeter]);
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
        const find = listHistorySiteMeter.find(
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

    const onCreateObjHistorySiteMeterInsert = () => {
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

    const onCreateObjHistorySiteMeterUpdate = () => {
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

    const createObjNewMeterIntall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.NewMeterSerial,
            Installed: true,
        };

        return obj;
    };

    const createObjOldMeterInstall = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.OldMeterSerial,
            Installed: false,
        };

        return obj;
    };

    const createObjSiteMeterDateChange = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue.SiteId,
            Meter: formValue.NewMeterSerial,
            DateOfMeterChange: formValue.DateChanged,
        };

        return obj;
    };

    const updateMeterInstallAction = () => {
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
            updateMeterInstall({
                variables: {
                    //@ts-ignore
                    meter: createObjOldMeterInstall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateMeterInstall !== null &&
                        res?.data?.UpdateMeterInstall !== undefined
                    ) {
                        if (res.data.UpdateMeterInstall > 0) {
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
            updateMeterInstall({
                variables: {
                    //@ts-ignore
                    meter: createObjNewMeterIntall(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateMeterInstall !== null &&
                        res?.data?.UpdateMeterInstall !== undefined
                    ) {
                        if (res.data.UpdateMeterInstall > 0) {
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

    const updateSiteMeterDateChangeAction = () => {
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
            updateSiteMeterDateChange({
                variables: {
                    site: createObjSiteMeterDateChange(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateSiteMeterDateChange !== null &&
                        res?.data?.UpdateSiteMeterDateChange !== undefined
                    ) {
                        if (res.data?.UpdateSiteMeterDateChange > 0) {
                            console.log('success');
                        } else {
                            console.log('failed');
                        }
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    const handelInsertHistorySiteMeter = (history: any) => {
        //@ts-ignore
        setListHistorySiteMeter((current) => [...current, history]);
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
            insertHisotrySiteMeter({
                variables: {
                    history: onCreateObjHistorySiteMeterInsert(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertHistorySiteMeter !== null &&
                        res?.data?.InsertHistorySiteMeter !== undefined
                    ) {
                        if (res.data.InsertHistorySiteMeter !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm lịch sử thay đồng hồ thành công',
                            });

                            updateMeterInstallAction();

                            updateSiteMeterDateChangeAction();

                            handelInsertHistorySiteMeter(
                                onCreateObjHistorySiteMeterUpdate(),
                            );
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm lịch sử thay đồng hồ không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm lịch sử thay đồng hồ không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleUpdateHistorySiteMeter = (history: any) => {
        const temp = [];

        for (const item of listHistorySiteMeter) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            } else {
                temp.push(history);
            }
        }

        //@ts-ignore
        setListHistorySiteMeter([...temp]);
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
            const obj = onCreateObjHistorySiteMeterUpdate();

            updateHistorySiteMeter({
                variables: {
                    history: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateHistorySiteMeter !== null &&
                        res?.data?.UpdateHistorySiteMeter !== undefined
                    ) {
                        if (res.data?.UpdateHistorySiteMeter > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật lịch sử thay đồng hồ thành công',
                            });

                            updateMeterInstallAction();

                            updateSiteMeterDateChangeAction();

                            handleUpdateHistorySiteMeter(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật lịch sử thay đồng hồ không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật lịch sử thay đồng hồ không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handleDeleteHistorySiteMeter = (history: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listHistorySiteMeter) {
            //@ts-ignore
            if (item._id !== history._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListHistorySiteMeter([...temp]);
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
                    const obj = onCreateObjHistorySiteMeterUpdate();

                    deleteHistorySiteMeter({
                        variables: {
                            history: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteHistorySiteMeter !== null &&
                                res?.data?.DeleteHistorySiteMeter !== undefined
                            ) {
                                if (res.data?.DeleteHistorySiteMeter > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa lịch sử thay đồng hồ thành công',
                                    });

                                    reset();

                                    handleDeleteHistorySiteMeter(obj);
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa lịch sử thay đồng hồ không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa lịch sử thay đồng hồ không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    const onDateBlured = (e: any, name: string) => {
        if (e.target.value !== '') {
            const splitDate = e.target.value.split('/');

            if (splitDate.length === 3) {
                const year = parseInt(splitDate[2]);
                const month = parseInt(splitDate[1]) - 1;
                const day = parseInt(splitDate[0]);
                setValue(
                    //@ts-ignore
                    name,
                    //@ts-ignore
                    new Date(year, month, day),
                );
            } else {
                //@ts-ignore
                setValue(name, '');
            }
        } else {
            //@ts-ignore
            setValue(name, '');
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
                            Thay đồng hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
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
                                onBlur={(e) => onDateBlured(e, 'DateChanged')}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {meterData !== undefined ? (
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
                                    data={meterData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {meterData !== undefined ? (
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
                                    data={meterData}
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

export default ChangeMeterPage;
