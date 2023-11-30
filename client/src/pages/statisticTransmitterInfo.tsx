import { Grid, Col, Select, Text, Center } from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllSitesLazyQuery,
    useGetAllTransmitterLazyQuery,
} from '../__generated__/graphql';
import { useState, useEffect } from 'react';

import { convertTimeStampToDate } from '../utils/utils';

import { motion } from 'framer-motion';

const StatisticTransmiiterInfoPage = () => {
    const [transmitterData, setTransmitterData] = useState([]);
    const [listTransmitter, setListTransmitter] = useState([]);
    const [listSite, setListSite] = useState([]);

    const [valueSerial, setValueSerial] = useState('');

    const [getSite, {}] = useGetAllSitesLazyQuery();
    const [getTransmitter, {}] = useGetAllTransmitterLazyQuery();

    useEffect(() => {
        getSite()
            .then((res) => {
                if (
                    res?.data?.GetAllSites !== null &&
                    res?.data?.GetAllSites !== undefined
                ) {
                    //@ts-ignore
                    setListSite([...res.data.GetAllSites]);
                }
            })
            .catch((err) => console.log(err));

        getTransmitter()
            .then((res) => {
                if (
                    res?.data?.GetAllTransmitter !== null &&
                    res?.data?.GetAllTransmitter !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllTransmitter) {
                        const obj = {
                            value: item?.Serial,
                            label: `${item?.Serial} | ${item?.Marks}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setTransmitterData([...temp]);

                    //@ts-ignore
                    setListTransmitter([...res.data.GetAllTransmitter]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const { getValues, setValue, reset, control } = useForm({
        defaultValues: {
            Serial: '',
            ReceiptDate: null,
            Provider: '',
            Marks: '',
            Model: '',
            Size: 0,
            Status: '',
            Installed: 0,
            Index: 0,
            Description: '',
            ApprovalDate: null,
            ApprovalDecision: '',
            Approval: 0,
            AccreditedDate: null,
            ExpiryDate: null,
            AccreditationType: '',
            AccreditationDocument: '',
            TransmitterSerial: '',
            SiteID: '',
            SiteLocation: '',
        },
    });

    const onSerialChanged = (e: any) => {
        setValueSerial(e);

        //@ts-ignore
        const findTransmitter = listTransmitter.find((el) => el.Serial === e);

        if (findTransmitter !== undefined) {
            //@ts-ignore
            setValue('Serial', findTransmitter.Serial);
            //@ts-ignore
            setValue('ReceiptDate', findTransmitter.ReceiptDate);
            //@ts-ignore
            setValue('Provider', findTransmitter.Provider);
            //@ts-ignore
            setValue('Marks', findTransmitter.Marks);
            //@ts-ignore
            setValue('Model', findTransmitter.Model);
            //@ts-ignore
            setValue('Size', findTransmitter.Size);
            //@ts-ignore
            setValue('Status', findTransmitter.Status);
            //@ts-ignore
            setValue('Installed', findTransmitter.Installed);
            //@ts-ignore
            setValue('Index', findTransmitter.InstallIndex);
            //@ts-ignore
            setValue('Description', findTransmitter.Description);
            //@ts-ignore
            setValue('ApprovalDate', findTransmitter.ApprovalDate);
            //@ts-ignore
            setValue('ApprovalDecision', findTransmitter.ApprovalDecision);
            //@ts-ignore
            setValue('Approval', findTransmitter.Approval);
            //@ts-ignore
            setValue('AccreditedDate', findTransmitter.AccreditedDate);
            //@ts-ignore
            setValue('ExpiryDate', findTransmitter.ExpiryDate);
            //@ts-ignore
            setValue('AccreditationType', findTransmitter.AccreditationType);
            setValue(
                'AccreditationDocument',
                //@ts-ignore
                findTransmitter.AccreditationDocument,
            );

            const findSite = listSite.find(
                //@ts-ignore
                (el) => el.Transmitter === findTransmitter.Serial,
            );
            if (findSite !== undefined) {
                //@ts-ignore
                setValue('SiteID', findSite._id);
                //@ts-ignore
                setValue('SiteLocation', findSite.Location);
            }
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
                            Thống kê hồ sơ thiết bị bộ hiển thị
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col span={12}>
                    <Select
                        label="Serial"
                        //@ts-ignore
                        data={transmitterData}
                        placeholder="Chọn Serial"
                        nothingFound="Không tìm thấy"
                        searchable
                        clearable
                        onChange={onSerialChanged}
                    />
                </Col>
                {valueSerial !== null &&
                valueSerial !== undefined &&
                valueSerial !== '' ? (
                    <>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Serial"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Serial: {getValues('Serial')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="SiteID"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Mã vị trí: {''}
                                                {getValues('SiteID')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="ReceiptDate"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Ngày nhập kho: {''}
                                                {convertTimeStampToDate(
                                                    //@ts-ignore
                                                    getValues('ReceiptDate'),
                                                )}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="SiteLocation"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Vị trí: {''}
                                                {getValues('SiteLocation')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Provider"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Nhà sản xuất: {''}
                                                {getValues('Provider')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="ApprovalDate"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Ngày phê duyệt: {''}
                                                {convertTimeStampToDate(
                                                    //@ts-ignore
                                                    getValues('ApprovalDate'),
                                                )}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="Marks"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Hiệu: {''}
                                                {getValues('Marks')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Size"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Cở: {''}
                                                {getValues('Size')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="Model"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Model: {''}
                                                {getValues('Model')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Status"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Tình trạng: {''}
                                                {getValues('Status')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="ApprovalDecision"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Giấy phê duyệt: {''}
                                                {getValues('ApprovalDecision')}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Installed"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Lắp đặt: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues('Installed') ==
                                                    false
                                                        ? 'No'
                                                        : 'Yes'
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="Approval"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Đã phê duyệt: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues('Approval') ==
                                                    false
                                                        ? 'No'
                                                        : 'Yes'
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="Index"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Chỉ số ban đầu: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues('Index')
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="AccreditedDate"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Ngày kiểm định: {''}
                                                {convertTimeStampToDate(
                                                    //@ts-ignore
                                                    getValues('AccreditedDate'),
                                                )}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="AccreditationType"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Loại kiểm định: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues(
                                                        'AccreditationType',
                                                    )
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={3}>
                                    <Controller
                                        name="ExpiryDate"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Ngày hết hiệu lực: {''}
                                                {convertTimeStampToDate(
                                                    //@ts-ignore
                                                    getValues('ExpiryDate'),
                                                )}
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                        <Col span={12}>
                            <Grid>
                                <Col md={3}>
                                    <Controller
                                        name="AccreditationDocument"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Giấy kiểm định: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues(
                                                        'AccreditationDocument',
                                                    )
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                                <Col md={4}>
                                    <Controller
                                        name="Description"
                                        control={control}
                                        render={({ field }) => (
                                            <Text size="1rem" weight={500}>
                                                Ghi chú: {''}
                                                {
                                                    //@ts-ignore
                                                    getValues('Description')
                                                }
                                            </Text>
                                        )}
                                    ></Controller>
                                </Col>
                            </Grid>
                        </Col>
                    </>
                ) : null}
            </Grid>
        </motion.div>
    );
};

export default StatisticTransmiiterInfoPage;
