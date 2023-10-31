import {
    Grid,
    Col,
    Text,
    TextInput,
    Select,
    Button,
    Space,
    Center,
    Checkbox,
    NumberInput,
    FileInput,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import Swal from 'sweetalert2';

import { useEffect, useState } from 'react';

import {
    useGetAllMeterLazyQuery,
    useGetTransmitterMarksLazyQuery,
    useGetTransmitterModelLazyQuery,
    useGetTransmitterSizeLazyQuery,
    useGetTransmitterProviderLazyQuery,
    useGetAllMeterAccreditationTypeLazyQuery,
    useGetAllTransmitterLazyQuery,
    useGetAllDeviceStatusLazyQuery,
    useInsertTransmitterMutation,
    useUpdateTransmitterMutation,
    useDeleteTransmitterMutation,
} from '../__generated__/graphql';

import { useForm, Controller } from 'react-hook-form';

import { checkAdminViewerRole } from '../utils/utils';

import { motion } from 'framer-motion';

const TransmitterPage = () => {
    const [listTransmitter, setListTransmitter] = useState([]);
    const [transmitterData, setTransmitterData] = useState([]);
    const [marksData, setMarksData] = useState([]);
    const [modelData, setModelData] = useState([]);
    const [providerData, setProviderData] = useState([]);
    const [sizeData, setSizeData] = useState([]);
    const [meterAccData, setMeterAccData] = useState([]);
    const [meterData, setMeterData] = useState([]);
    const [deviceStatusData, setDeviceStatusData] = useState([]);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [getMeter, {}] = useGetAllMeterLazyQuery();
    const [getProvider, {}] = useGetTransmitterProviderLazyQuery();
    const [getMarks, {}] = useGetTransmitterMarksLazyQuery();
    const [getModel, {}] = useGetTransmitterModelLazyQuery();
    const [getSize, {}] = useGetTransmitterSizeLazyQuery();
    const [getMeterAcc, {}] = useGetAllMeterAccreditationTypeLazyQuery();
    const [getTransmitter, {}] = useGetAllTransmitterLazyQuery();
    const [getDeviceStatus, {}] = useGetAllDeviceStatusLazyQuery();

    const [insertTransmitter, {}] = useInsertTransmitterMutation();
    const [updateTransmitter, {}] = useUpdateTransmitterMutation();
    const [deleteTransmitter, {}] = useDeleteTransmitterMutation();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getMeter()
            .then((res) => {
                if (
                    res?.data?.GetAllMeter !== null &&
                    res?.data?.GetAllMeter !== undefined
                ) {
                    const tempMeter = [];

                    for (const item of res.data.GetAllMeter) {
                        const obj = {
                            label: item?.Serial,
                            value: item?.Serial,
                        };

                        tempMeter.push(obj);
                    }

                    //@ts-ignore
                    setMeterData([...tempMeter]);
                }
            })
            .catch((err) => console.log(err));

        getMarks()
            .then((res) => {
                if (
                    res?.data?.GetTransmitterMarks !== null &&
                    res?.data?.GetTransmitterMarks !== undefined
                ) {
                    const tempMeterMark = [];

                    for (const item of res.data?.GetTransmitterMarks) {
                        const obj = {
                            label: item,
                            value: item,
                        };

                        tempMeterMark.push(obj);
                    }

                    //@ts-ignore
                    setMarksData([...tempMeterMark]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getModel()
            .then((res) => {
                if (
                    res?.data?.GetTransmitterModel !== null &&
                    res?.data?.GetTransmitterModel !== undefined
                ) {
                    const tempMeterModel = [];

                    for (const item of res.data?.GetTransmitterModel) {
                        const obj = {
                            label: item,
                            value: item,
                        };

                        tempMeterModel.push(obj);
                    }

                    //@ts-ignore
                    setModelData([...tempMeterModel]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getProvider()
            .then((res) => {
                if (
                    res?.data?.GetTransmitterProvider !== null &&
                    res?.data?.GetTransmitterProvider !== undefined
                ) {
                    const tempMeterProvider = [];

                    for (const item of res.data?.GetTransmitterProvider) {
                        const obj = {
                            label: item,
                            value: item,
                        };

                        tempMeterProvider.push(obj);
                    }

                    //@ts-ignore
                    setProviderData([...tempMeterProvider]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getSize()
            .then((res) => {
                if (
                    res?.data?.GetTransmitterSize !== null &&
                    res?.data?.GetTransmitterSize !== undefined
                ) {
                    const tempMeterSize = [];

                    for (const item of res.data?.GetTransmitterSize) {
                        if (item !== null) {
                            const obj = {
                                label: item?.toString(),
                                value: item?.toString(),
                            };

                            tempMeterSize.push(obj);
                        }
                    }

                    //@ts-ignore
                    setSizeData([...tempMeterSize]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getMeterAcc()
            .then((res) => {
                if (
                    res?.data?.GetAllMeterAccreditationType !== null &&
                    res?.data?.GetAllMeterAccreditationType !== undefined
                ) {
                    const tempMeterAcc = [];

                    for (const item of res.data?.GetAllMeterAccreditationType) {
                        const obj = {
                            label: `${item?.AccreditationType} | ${item?.Description}`,
                            value: `${item?.AccreditationType}`,
                        };

                        tempMeterAcc.push(obj);
                    }

                    //@ts-ignore
                    setMeterAccData([...tempMeterAcc]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getTransmitter()
            .then((res) => {
                if (
                    res?.data?.GetAllTransmitter !== null &&
                    res?.data?.GetAllTransmitter !== undefined
                ) {
                    const tempTransmitter = [];

                    for (const item of res.data?.GetAllTransmitter) {
                        const obj = {
                            label: item?.Serial,
                            value: item?.Serial,
                        };

                        tempTransmitter.push(obj);
                    }

                    //@ts-ignore
                    setListTransmitter([...res.data.GetAllTransmitter]);
                    //@ts-ignore
                    setTransmitterData([...tempTransmitter]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getDeviceStatus().then((res) => {
            if (
                res?.data?.GetAllDeviceStatus !== null &&
                res?.data?.GetAllDeviceStatus !== undefined
            ) {
                const tempDeviceStatus = [];

                for (const item of res.data.GetAllDeviceStatus) {
                    const obj = {
                        value: item?.Status,
                        label: `${item?.Status} | ${item?.Description}`,
                    };

                    tempDeviceStatus.push(obj);
                }
                //@ts-ignore
                setDeviceStatusData([...tempDeviceStatus]);
            }
        });
    }, []);

    const { control, reset, register, getValues, setValue } = useForm({
        defaultValues: {
            _id: '',
            Serial: '',
            ReceiptDate: null,
            AccreditatedDate: null,
            ExpiryDate: null,
            AccreditationDocument: '',
            AccreditationType: '',
            Provider: '',
            Marks: '',
            Size: 0,
            Model: '',
            Status: '',
            Installed: 0,
            InstallIndex: 0,
            Description: '',
            AppovalDate: null,
            Approvaled: 0,
            AppovalDecision: '',
            MeterSerial: '',
        },
    });

    const onSerialBlured = (e: any) => {
        //@ts-ignore
        const find = listTransmitter.find((el) => el.Serial === e.target.value);

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
                    : null,
            );
            //@ts-ignore
            setValue(
                'AccreditatedDate',
                //@ts-ignore
                find.AccreditatedDate !== null && find.AccreditatedDate !== ''
                    ? //@ts-ignore
                      new Date(find.AccreditatedDate)
                    : null,
            );
            //@ts-ignore
            setValue(
                'ExpiryDate',
                //@ts-ignore
                find.ExpiryDate !== null && find.ExpiryDate !== ''
                    ? //@ts-ignore
                      new Date(find.ExpiryDate)
                    : null,
            );
            //@ts-ignore
            setValue('AccreditationDocument', find.AccreditationDocument);
            //@ts-ignore
            setValue('AccreditationType', find.AccreditationType);
            //@ts-ignore
            setValue('Provider', find.Provider);
            //@ts-ignore
            setValue('Model', find.Model);
            //@ts-ignore
            setValue('Marks', find.Marks);
            //@ts-ignore
            setValue(
                'Size',
                //@ts-ignore
                find.Size !== null && find.Size !== ''
                    ? //@ts-ignore
                      find.Size.toString()
                    : '0',
            );
            //@ts-ignore
            setValue('Status', find.Status);
            //@ts-ignore
            setValue('Installed', find.Installed);
            //@ts-ignore
            setValue(
                'InstallIndex',
                //@ts-ignore
                find.InstallIndex !== null && find.InstallIndex !== ''
                    ? //@ts-ignore
                      find.InstallIndex
                    : 0,
            );
            //@ts-ignore
            setValue('Description', find.Description);
            //@ts-ignore
            setValue(
                'AppovalDate',
                //@ts-ignore
                find.AppovalDate !== null && find.AppovalDate !== ''
                    ? //@ts-ignore
                      new Date(find.AppovalDate)
                    : null,
            );
            //@ts-ignore
            setValue('Approvaled', find.Approvaled);
            //@ts-ignore
            setValue('AppovalDecision', find.AppovalDecision);
            //@ts-ignore
            setValue('MeterSerial', find.MeterSerial);
        }
    };

    const createObjInsertTransmitter = () => {
        const formValue = getValues();

        const obj = {
            Serial: formValue.Serial,
            ReceiptDate: formValue.ReceiptDate,
            AccreditatedDate: formValue.AccreditatedDate,
            ExpiryDate: formValue.ExpiryDate,
            AccreditationDocument: formValue.AccreditationDocument,
            AccreditationType: formValue.AccreditationType,
            Provider: formValue.Provider,
            Marks: formValue.Marks,
            Size:
                //@ts-ignore
                formValue.Size !== null && formValue.Size !== ''
                    ? //@ts-ignore
                      parseInt(formValue.Size)
                    : null,
            Model: formValue.Model,
            Status: formValue.Status,
            Installed: formValue.Installed,
            InstallIndex: formValue.InstallIndex,
            Description: formValue.Description,
            AppovalDate: formValue.AppovalDate,
            Approvaled: formValue.Approvaled,
            AppovalDecision: formValue.AppovalDecision,
            MeterSerial: formValue.MeterSerial,
        };

        return obj;
    };

    const createObjUpdateTransmitter = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue._id,
            Serial: formValue.Serial,
            ReceiptDate: formValue.ReceiptDate,
            AccreditatedDate: formValue.AccreditatedDate,
            ExpiryDate: formValue.ExpiryDate,
            AccreditationDocument: formValue.AccreditationDocument,
            AccreditationType: formValue.AccreditationType,
            Provider: formValue.Provider,
            Marks: formValue.Marks,
            Size:
                //@ts-ignore
                formValue.Size !== null && formValue.Size !== ''
                    ? //@ts-ignore
                      parseInt(formValue.Size)
                    : null,
            Model: formValue.Model,
            Status: formValue.Status,
            Installed: formValue.Installed,
            InstallIndex: formValue.InstallIndex,
            Description: formValue.Description,
            AppovalDate: formValue.AppovalDate,
            Approvaled: formValue.Approvaled,
            AppovalDecision: formValue.AppovalDecision,
            MeterSerial: formValue.MeterSerial,
        };

        return obj;
    };

    const handleInsertTransmitter = (tramsmitter: any) => {
        //@ts-ignore
        setListTransmitter((current) => [...current, tramsmitter]);
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
        if (isAllow === true) {
            insertTransmitter({
                variables: {
                    //@ts-ignore
                    transmitter: createObjInsertTransmitter(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertTransmitter !== null &&
                        res?.data?.InsertTransmitter !== undefined
                    ) {
                        if (res.data?.InsertTransmitter !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm bộ hiển thị thành công',
                            });

                            setValue('_id', res.data.InsertTransmitter);

                            handleInsertTransmitter(
                                createObjUpdateTransmitter(),
                            );
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm bộ hiển thị không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm bộ hiển thị không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateTransmitter = (transmitter: any) => {
        const temp = [];

        for (const item of listTransmitter) {
            //@ts-ignore
            if (item._id !== transmitter._id) {
                temp.push(item);
            } else {
                temp.push(transmitter);
            }
        }
        //@ts-ignore
        setListTransmitter([...temp]);
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
        if (isAllow === true) {
            const obj = createObjUpdateTransmitter();

            updateTransmitter({
                variables: {
                    //@ts-ignore
                    transmitter: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateTransmitter !== null &&
                        res?.data?.UpdateTransmitter !== undefined
                    ) {
                        if (res.data?.UpdateTransmitter > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật bộ hiển thị thành công',
                            });

                            handelUpdateTransmitter(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật bộ hiển thị không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật bộ hiển thị không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteListTransmitter = (transmitter: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listTransmitter) {
            //@ts-ignore
            if (item._id !== transmitter._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListTransmitter([...temp]);
    };

    const handelDeleteTransmitterData = (serial: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of transmitterData) {
            //@ts-ignore
            if (item.value !== serial) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setTransmitterData([...temp]);
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
                    const obj = createObjUpdateTransmitter();

                    deleteTransmitter({
                        variables: {
                            //@ts-ignore
                            transmitter: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteTransmitter !== null &&
                                res?.data?.DeleteTransmitter !== undefined
                            ) {
                                if (res.data?.DeleteTransmitter > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa bộ hiển thị thành công',
                                    });

                                    handelDeleteListTransmitter(obj);

                                    handelDeleteTransmitterData(obj.Serial);

                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa bộ hiển thị không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa bộ hiển thị không thành công',
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
                    {listTransmitter !== undefined ? (
                        <Controller
                            name="Serial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial"
                                    //@ts-ignore
                                    data={transmitterData}
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
                                        setTransmitterData((current) => [
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
                <Col md={4}>
                    <Controller
                        name="AppovalDate"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày phê duyệt"
                                placeholder="Ngày phê duyệt"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="AppovalDecision"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Mã đông hồ "
                                label="Mã đông hồ "
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
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
                <Col md={4}>
                    {providerData !== undefined ? (
                        <Controller
                            name="Provider"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhà sản xuất"
                                    //@ts-ignore
                                    data={providerData}
                                    placeholder="Chọn nhà sản xuất"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
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
                <Col
                    md={4}
                    style={{
                        marginTop: '1.5rem',
                    }}
                >
                    <Controller
                        name="Approvaled"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                labelPosition="left"
                                label="Đã phê duyệt"
                                //@ts-ignore
                                checked={getValues('Approvaled')}
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {marksData !== undefined ? (
                        <Controller
                            name="Marks"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Hiệu"
                                    //@ts-ignore
                                    data={marksData}
                                    placeholder="Chọn hiệu"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
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
                <Col md={4}>
                    {sizeData !== undefined ? (
                        <Controller
                            name="Size"
                            control={control}
                            render={({ field }) => (
                                //@ts-ignore
                                <Select
                                    label="Cở"
                                    //@ts-ignore
                                    data={sizeData}
                                    placeholder="Chọn cở"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo cở: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setSizeData((current) => [
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
                <Col md={4}>
                    {modelData !== undefined ? (
                        <Controller
                            name="Model"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Model"
                                    //@ts-ignore
                                    data={modelData}
                                    placeholder="Chọn model"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
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
                <Col md={4}>
                    {deviceStatusData !== undefined ? (
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
                                    data={deviceStatusData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col
                    md={4}
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
                <Col md={4}>
                    <Controller
                        name="InstallIndex"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Chỉ số khách hàng"
                                label="Chỉ số khách hàng"
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
                <Col md={4}>
                    <Controller
                        name="AccreditatedDate"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày kiểm định"
                                placeholder="Ngày kiểm định"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="ExpiryDate"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày hết hiệu lực kiểm định"
                                placeholder="Ngày hết hiệu lực kiểm định"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {meterAccData !== undefined ? (
                        <Controller
                            name="AccreditationType"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Loại kiểm định"
                                    placeholder="loại kiểm định"
                                    searchable
                                    nothingFound="Không tìm thấy loại kiểm định"
                                    //@ts-ignore
                                    data={meterAccData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="AccreditationDocument"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Giấy kiểm định"
                                label="Giấy kiểm định"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {meterData !== undefined ? (
                        <Controller
                            name="MeterSerial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial đồng hồ"
                                    placeholder="serial đồng hồ"
                                    searchable
                                    nothingFound="Không tìm thấy serial đồng hồ"
                                    //@ts-ignore
                                    data={meterData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
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

export default TransmitterPage;
