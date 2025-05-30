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
    Textarea,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import { IconUpload } from '@tabler/icons-react';

import Swal from 'sweetalert2';

import axios from 'axios';

import { useEffect, useState } from 'react';

import {
    useGetAllMeterQuery,
    useGetMeterMarksQuery,
    useGetMeterProviderQuery,
    useGetMeterModelQuery,
    useGetMeterSizeQuery,
    useGetMeterNationalitiesQuery,
    useGetAllMeterAccreditationTypeQuery,
    useGetAllTransmitterQuery,
    useGetAllDeviceStatusQuery,
    useInsertMeterMutation,
    useUpdateMeterMutation,
    useDeleteMeterMutation,
} from '../__generated__/graphql';

import { useForm, Controller } from 'react-hook-form';

import { checkAdminViewerRole } from '../utils/utils';

import { HostnameState } from '../features/hostname';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

const MeterPage = () => {
    const navigate = useNavigate();

    const [listMeter, setListMeter] = useState([]);
    const [meterData, setMeterData] = useState([]);
    const [marksData, setMarksData] = useState([]);
    const [modelData, setModelData] = useState([]);
    const [providerData, setProviderData] = useState([]);
    const [sizeData, setSizeData] = useState([]);
    const [nationData, setNationData] = useState([]);
    const [meterAccData, setMeterAccData] = useState([]);
    const [transmitterData, setTransmitterData] = useState([]);
    const [deviceStatusData, setDeviceStatusData] = useState([]);

    const [listFile, setListFile] = useState<File[]>([]);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const { refetch: getMeter } = useGetAllMeterQuery();
    const { refetch: getProvider } = useGetMeterProviderQuery();
    const { refetch: getMarks } = useGetMeterMarksQuery();
    const { refetch: getModel } = useGetMeterModelQuery();
    const { refetch: getNation } = useGetMeterNationalitiesQuery();
    const { refetch: getSize } = useGetMeterSizeQuery();
    const { refetch: getMeterAcc } = useGetAllMeterAccreditationTypeQuery();
    const { refetch: getTransmitter } = useGetAllTransmitterQuery();
    const { refetch: getDeviceStatus } = useGetAllDeviceStatusQuery();

    const [insertMeter, {}] = useInsertMeterMutation();
    const [updateMeter, {}] = useUpdateMeterMutation();
    const [deleteMeter, {}] = useDeleteMeterMutation();

    const hostname = useSelector(HostnameState);

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
                    setListMeter([...res.data.GetAllMeter]);
                    //@ts-ignore
                    setMeterData([...tempMeter]);
                }
            })
            .catch((err) => console.log(err));

        getMarks()
            .then((res) => {
                if (
                    res?.data?.GetMeterMarks !== null &&
                    res?.data?.GetMeterMarks !== undefined
                ) {
                    const tempMeterMark = [];

                    for (const item of res.data?.GetMeterMarks) {
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
                    res?.data?.GetMeterModel !== null &&
                    res?.data?.GetMeterModel !== undefined
                ) {
                    const tempMeterModel = [];

                    for (const item of res.data?.GetMeterModel) {
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
                    res?.data?.GetMeterProvider !== null &&
                    res?.data?.GetMeterProvider !== undefined
                ) {
                    const tempMeterProvider = [];

                    for (const item of res.data?.GetMeterProvider) {
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
                    res?.data?.GetMeterSize !== null &&
                    res?.data?.GetMeterSize !== undefined
                ) {
                    const tempMeterSize = [];

                    for (const item of res.data?.GetMeterSize) {
                        const obj = {
                            label: item?.toString(),
                            value: item?.toString(),
                        };

                        tempMeterSize.push(obj);
                    }

                    //@ts-ignore
                    setSizeData([...tempMeterSize]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        getNation()
            .then((res) => {
                if (
                    res?.data?.GetMeterNationalities !== null &&
                    res?.data?.GetMeterNationalities !== undefined
                ) {
                    const tempMeterNation = [];

                    for (const item of res.data?.GetMeterNationalities) {
                        const obj = {
                            label: item,
                            value: item,
                        };

                        tempMeterNation.push(obj);
                    }

                    //@ts-ignore
                    setNationData([...tempMeterNation]);
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
            Installed: false,
            InstallIndex: 0,
            Description: '',
            AppovalDate: null,
            Approvaled: false,
            AppovalDecision: '',
            SerialTransmitter: '',
            Nationality: '',
        },
    });

    const onSerialBlured = (e: any) => {
        //@ts-ignore
        const find = listMeter.find((el) => el.Serial === e.target.value);

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
            setValue(
                'AppovalDecision',
                //@ts-ignore
                find.AppovalDecision ? find.AppovalDecision : '',
            );
            //@ts-ignore
            setValue('SerialTransmitter', find.SerialTransmitter);
            //@ts-ignore
            setValue('Nationality', find.Nationality);
        }
    };

    const createObjInsertMeter = () => {
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
            Installed:
                //@ts-ignore
                formValue.Installed === 0 || formValue.Installed === false
                    ? false
                    : true,
            InstallIndex: formValue.InstallIndex,
            Description: formValue.Description,
            AppovalDate: formValue.AppovalDate,
            Approvaled: formValue.Approvaled,
            AppovalDecision: formValue.AppovalDecision,
            SerialTransmitter: formValue.SerialTransmitter,
            Nationality: formValue.Nationality,
        };

        return obj;
    };

    const createObjUpdateMeter = () => {
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
            Installed:
                //@ts-ignore
                formValue.Installed === 0 || formValue.Installed === false
                    ? false
                    : true,
            InstallIndex: formValue.InstallIndex,
            Description: formValue.Description,
            AppovalDate: formValue.AppovalDate,
            Approvaled: formValue.Approvaled,
            AppovalDecision: formValue.AppovalDecision,
            SerialTransmitter: formValue.SerialTransmitter,
            Nationality: formValue.Nationality,
        };

        return obj;
    };

    const handleInsertMeter = (meter: any) => {
        //@ts-ignore
        setListMeter((current) => [...current, meter]);
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
            insertMeter({
                variables: {
                    //@ts-ignore
                    meter: createObjInsertMeter(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertMeter !== null &&
                        res?.data?.InsertMeter !== undefined
                    ) {
                        if (res.data.InsertMeter !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm đồng hồ thành công',
                            });

                            setValue('_id', res.data.InsertMeter);

                            handleInsertMeter(createObjUpdateMeter());
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm đồng hồ không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm đồng hồ không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateMeter = (meter: any) => {
        const temp = [];

        for (const item of listMeter) {
            //@ts-ignore
            if (item._id !== meter._id) {
                temp.push(item);
            } else {
                temp.push(meter);
            }
        }
        //@ts-ignore
        setListMeter([...temp]);
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
            const obj = createObjUpdateMeter();

            updateMeter({
                variables: {
                    //@ts-ignore
                    meter: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateMeter !== null &&
                        res?.data?.UpdateMeter !== undefined
                    ) {
                        if (res.data?.UpdateMeter > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật đồng hồ thành công',
                            });

                            handelUpdateMeter(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật đồng hồ không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật đồng hồ không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteListMeter = (meter: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listMeter) {
            //@ts-ignore
            if (item._id !== meter._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListMeter([...temp]);
    };

    const handelDeleteMeterData = (serial: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of meterData) {
            //@ts-ignore
            if (item.value !== serial) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setMeterData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa đồng hồ?',
            text: 'Xóa đồng hồ không thể nào hồi phục lại!',
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
                    const obj = createObjUpdateMeter();

                    deleteMeter({
                        variables: {
                            //@ts-ignore
                            meter: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteMeter !== null &&
                                res?.data?.DeleteMeter !== undefined
                            ) {
                                if (res.data?.DeleteMeter > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa đồng hồ thành công',
                                    });

                                    handelDeleteListMeter(obj);

                                    handelDeleteMeterData(obj.Serial);

                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa đồng hồ không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa đồng hồ không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    const onUploadFileClicked = () => {
        const serial = getValues('Serial');

        let isAllow = true;

        if (serial === null || serial === undefined || serial === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có serial',
            });

            isAllow = false;
        }
        if (isAllow == true) {
            if (listFile.length > 0) {
                let check = true;

                for (const file of listFile) {
                    const formData = new FormData();

                    formData.append('serial', serial);
                    formData.append('file', file);

                    axios
                        .post(`${hostname}/meterFile/upload`, formData)
                        .then((res) => {
                            if (res?.status === 200) {
                                check = true;
                            } else {
                                check = false;
                            }
                        })
                        .catch((err) => console.log(err));
                }

                if (check == true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfull',
                        text: 'Upload tài liệu đồng hồ thành công',
                    });
                }
            }
        }
    };

    const onDownloadFileClicked = () => {
        navigate('/downloadMeterFile');
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
                            Đồng hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col md={4}>
                    {listMeter !== undefined ? (
                        <Controller
                            name="Serial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial"
                                    //@ts-ignore
                                    data={meterData}
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
                                        setMeterData((current) => [
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
                                onBlur={(e) => onDateBlured(e, 'AppovalDate')}
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
                                onBlur={(e) => onDateBlured(e, 'ReceiptDate')}
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
                            // @ts-ignore
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
                    {nationData !== undefined ? (
                        <Controller
                            name="Nationality"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Quốc gia sản xuất"
                                    //@ts-ignore
                                    data={nationData}
                                    placeholder="Chọn quốc gia sản xuất"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo quốc gia sản xuất: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setNationData((current) => [
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
                            // @ts-ignore
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
                <Col md={4}>
                    <FileInput
                        label="Upload tài liệu"
                        placeholder="Upload files"
                        multiple
                        icon={<IconUpload size="1.125rem" />}
                        value={listFile}
                        onChange={(e) => setListFile(e)}
                    />
                    {isAdminViewer == false ? (
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onUploadFileClicked}
                        >
                            Upload
                        </Button>
                    ) : null}
                    <Button
                        variant="filled"
                        color="blue"
                        onClick={onDownloadFileClicked}
                    >
                        Download
                    </Button>
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
                                onBlur={(e) =>
                                    onDateBlured(e, 'AccreditatedDate')
                                }
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
                                onBlur={(e) => onDateBlured(e, 'ExpiryDate')}
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
                    {transmitterData !== undefined ? (
                        <Controller
                            name="SerialTransmitter"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Serial bộ hiển thị"
                                    placeholder="serial bộ hiển thị"
                                    searchable
                                    nothingFound="Không tìm thấy serial bộ hiển thị"
                                    //@ts-ignore
                                    data={transmitterData}
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

export default MeterPage;
