import {
    Grid,
    Col,
    Select,
    Checkbox,
    Center,
    Button,
    Space,
    Text,
    TextInput,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import Swal from 'sweetalert2';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllLoggerLazyQuery,
    useInsertLoggerMutation,
    useUpdateLoggerMutation,
    useDeleteLoggerMutation,
    useGetLoggerMarksLazyQuery,
    useGetLoggerModelLazyQuery,
    useGetLoggerProviderLazyQuery,
    useGetAllDeviceStatusLazyQuery,
} from '../__generated__/graphql';

import { useEffect, useState } from 'react';

import { checkAdminViewerRole } from '../utils/utils';

const LoggerPage = () => {
    const [listLogger, setListLogger] = useState([]);
    const [loggerData, setLoggerData] = useState([]);
    const [isAdminViewer, setIsAdminViewer] = useState(false);
    const [marksData, setMarksData] = useState([]);
    const [modelData, setModelData] = useState([]);
    const [providerData, setProviderData] = useState([]);
    const [statusData, setStatusData] = useState([]);

    const [getLoggers, {}] = useGetAllLoggerLazyQuery();
    const [insertLogger, {}] = useInsertLoggerMutation();
    const [updateLogger, {}] = useUpdateLoggerMutation();
    const [deleteLogger, {}] = useDeleteLoggerMutation();

    const [getMarks, {}] = useGetLoggerMarksLazyQuery();
    const [getModel, {}] = useGetLoggerModelLazyQuery();
    const [getProvider, {}] = useGetLoggerProviderLazyQuery();
    const [getDeviceStatus, {}] = useGetAllDeviceStatusLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getLoggers()
            .then((res) => {
                if (
                    res?.data?.GetAllLogger !== null &&
                    res?.data?.GetAllLogger !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllLogger) {
                        const obj = {
                            value: item?.Serial,
                            label: item?.Serial,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setListLogger([...res.data.GetAllLogger]);
                    //@ts-ignore
                    setLoggerData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getModel()
            .then((res) => {
                if (
                    res?.data?.GetLoggerModel !== null &&
                    res?.data?.GetLoggerModel !== undefined
                ) {
                    //@ts-ignore
                    setModelData([...res.data.GetLoggerModel]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getMarks()
            .then((res) => {
                if (
                    res?.data?.GetLoggerMarks !== null &&
                    res?.data?.GetLoggerMarks !== undefined
                ) {
                    //@ts-ignore
                    setMarksData([...res.data?.GetLoggerMarks]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getProvider()
            .then((res) => {
                if (
                    res?.data?.GetLoggerProvider !== null &&
                    res?.data?.GetLoggerProvider !== undefined
                ) {
                    //@ts-ignore
                    setProviderData([...res.data?.GetLoggerProvider]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getDeviceStatus()
            .then((res) => {
                if (
                    res?.data?.GetAllDeviceStatus !== null &&
                    res?.data?.GetAllDeviceStatus !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllDeviceStatus) {
                        const obj = {
                            value: item?.Status,
                            label: `${item?.Status} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }
                    //@ts-ignore
                    setStatusData([...temp]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const { control, reset, register, getValues, setValue } = useForm({
        defaultValues: {
            _id: '',
            Serial: '',
            ReceiptDate: null,
            Provider: '',
            Marks: '',
            Model: '',
            Status: '',
            Installed: 0,
            Description: '',
        },
    });

    const onSerialBlured = (e: any) => {
        //@ts-ignore
        const find = listLogger.find((el) => el.Serial === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Serial', find.Serial);
            //@ts-ignore
            setValue(
                'ReceiptDate',
                //@ts-ignore
                find.ReceiptDate !== null && find.ReceiptDate !== ''
                    ? //@ts-ignore
                      new Date(find.ReceiptDate)
                    : '',
            );
            //@ts-ignore
            setValue('Model', find.Model);
            //@ts-ignore
            setValue('Marks', find.Marks);
            //@ts-ignore
            setValue('Provider', find.Provider);
            //@ts-ignore
            setValue('Status', find.Status);
            //@ts-ignore
            setValue('Description', find.Description);
            //@ts-ignore
            setValue('Installed', find.Installed);
        }
    };

    const createObjInsertLogger = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.Serial,
            Model: formValue.Model,
            Marks: formValue.Marks,
            ReceiptDate: formValue.ReceiptDate,
            Provider: formValue.Provider,
            Status: formValue.Status,
            Installed: formValue.Installed,
            Description: formValue.Description,
        };

        return obj;
    };

    const handelInsertLogger = (logger: any) => {
        //@ts-ignore
        setListLogger((current) => [...current, logger]);
    };

    const createObjUpdateLogger = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue._id,
            Serial: formValue.Serial,
            Model: formValue.Model,
            Marks: formValue.Marks,
            ReceiptDate: formValue.ReceiptDate,
            Provider: formValue.Provider,
            Status: formValue.Status,
            Installed: formValue.Installed,
            Description: formValue.Description,
        };

        return obj;
    };

    const onInsertClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.Serial === null ||
            formValue.Serial === undefined ||
            formValue.Serial === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có Serial!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            insertLogger({
                variables: {
                    //@ts-ignore
                    logger: createObjInsertLogger(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertLogger !== null &&
                        res?.data?.InsertLogger !== undefined
                    ) {
                        if (res.data.InsertLogger !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm logger thành công',
                            });

                            setValue('_id', res.data.InsertLogger);

                            handelInsertLogger(createObjUpdateLogger());
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm logger không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm logger không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateListLogger = (logger: any) => {
        const temp = [];

        for (const item of listLogger) {
            //@ts-ignore
            if (item._id !== logger._id) {
                temp.push(item);
            } else {
                temp.push(logger);
            }
        }

        //@ts-ignore
        setListLogger([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.Serial === null ||
            formValue.Serial === undefined ||
            formValue.Serial === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có Serial!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            const obj = createObjUpdateLogger();

            console.log(obj);

            updateLogger({
                variables: {
                    //@ts-ignore
                    logger: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateLogger !== null &&
                        res?.data?.UpdateLogger !== undefined
                    ) {
                        console.log(res.data.UpdateLogger);

                        if (res.data.UpdateLogger > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật logger thành công',
                            });

                            handelUpdateListLogger(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật logger không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật logger không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteListLogger = (logger: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listLogger) {
            //@ts-ignore
            if (item._id !== logger._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListLogger([...temp]);
    };

    const handelDeleteLoggerData = (serial: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of loggerData) {
            //@ts-ignore
            if (item.value !== serial) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setLoggerData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa điểm lắp đặt?',
            text: 'Xóa điểm lắp đặt không thể nào hồi phục lại!',
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
                    formValue.Serial === null ||
                    formValue.Serial === undefined ||
                    formValue.Serial === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có Serial!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    const obj = createObjUpdateLogger();

                    deleteLogger({
                        variables: {
                            //@ts-ignore
                            logger: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteLogger !== null &&
                                res?.data?.DeleteLogger !== undefined
                            ) {
                                if (res.data?.DeleteLogger > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa logger thành công',
                                    });

                                    handelDeleteListLogger(obj);

                                    handelDeleteLoggerData(obj.Serial);

                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa logger không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa logger không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={3}>
                {listLogger !== undefined ? (
                    <Controller
                        name="Serial"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Serial"
                                //@ts-ignore
                                data={loggerData}
                                placeholder="Chọn Serial"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                onBlur={onSerialBlured}
                                getCreateLabel={(query) =>
                                    `+ Tạo Serial: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setLoggerData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={3}>
                <Controller
                    name="ReceiptDate"
                    control={control}
                    render={({ field }) => (
                        <DateInput
                            valueFormat="DD/MM/YYYY"
                            label="Ngày nhập kho"
                            placeholder="Ngày nhập kho"
                            mx="auto"
                            {...field}
                        />
                    )}
                ></Controller>
            </Col>
            <Col md={3}>
                {providerData != undefined ? (
                    <Controller
                        name="Provider"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Nhà sản xuất"
                                placeholder="Nhà sản xuất"
                                searchable
                                creatable
                                nothingFound="Không tìm thấy nhà sản xuất"
                                //@ts-ignore
                                data={providerData}
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo nhà sản xuất: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setProviderData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={3}>
                {marksData != undefined ? (
                    <Controller
                        name="Marks"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Hiệu"
                                placeholder="Hiệu"
                                searchable
                                creatable
                                nothingFound="Không tìm thấy hiệu"
                                //@ts-ignore
                                data={marksData}
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo hiệu: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setMarksData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={3}>
                {modelData != undefined ? (
                    <Controller
                        name="Model"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Model"
                                placeholder="Model"
                                searchable
                                creatable
                                nothingFound="Không tìm thấy model"
                                //@ts-ignore
                                data={modelData}
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo model: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setModelData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={3}>
                {status != undefined ? (
                    <Controller
                        name="Status"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Tình trạng"
                                placeholder="Tình trạng"
                                searchable
                                nothingFound="Không tìm thấy tình trạng"
                                //@ts-ignore
                                data={statusData}
                                {...field}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col
                md={3}
                style={{
                    marginTop: '1.5rem',
                }}
            >
                <Controller
                    name="Installed"
                    control={control}
                    render={({ field }) => (
                        <Checkbox
                            labelPosition="left"
                            label="Lắp đặt"
                            //@ts-ignore
                            checked={getValues('Installed')}
                            {...field}
                        />
                    )}
                ></Controller>
            </Col>
            <Col md={3}>
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

export default LoggerPage;
