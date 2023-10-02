import { Grid, Col, Select, Text } from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllSitesLazyQuery,
    useGetAllMeterLazyQuery,
} from '../__generated__/graphql';
import { useState, useEffect } from 'react';

import { convertTimeStampToDate } from '../utils/utils';

const StatisticMeterInfoPage = () => {
    const [meterData, setMeterData] = useState([]);
    const [listMeter, setListMeter] = useState([]);
    const [listSite, setListSite] = useState([]);

    const [valueSerial, setValueSerial] = useState('');

    const [getSite, {}] = useGetAllSitesLazyQuery();
    const [getMeter, {}] = useGetAllMeterLazyQuery();

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

        getMeter()
            .then((res) => {
                if (
                    res?.data?.GetAllMeter !== null &&
                    res?.data?.GetAllMeter !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllMeter) {
                        const obj = {
                            value: item?.Serial,
                            label: `${item?.Serial} | ${item?.Marks}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setMeterData([...temp]);

                    //@ts-ignore
                    setListMeter([...res.data.GetAllMeter]);
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
            Nation: '',
        },
    });

    const onSerialChanged = (e: any) => {
        setValueSerial(e);

        //@ts-ignore
        const findMeter = listMeter.find((el) => el.Serial === e);

        if (findMeter !== undefined) {
            //@ts-ignore
            setValue('Serial', findMeter.Serial);
            //@ts-ignore
            setValue('ReceiptDate', findMeter.ReceiptDate);
            //@ts-ignore
            setValue('Provider', findMeter.Provider);
            //@ts-ignore
            setValue('Marks', findMeter.Marks);
            //@ts-ignore
            setValue('Model', findMeter.Model);
            //@ts-ignore
            setValue('Size', findMeter.Size);
            //@ts-ignore
            setValue('Status', findMeter.Status);
            //@ts-ignore
            setValue('Installed', findMeter.Installed);
            //@ts-ignore
            setValue('Index', findMeter.InstallIndex);
            //@ts-ignore
            setValue('Description', findMeter.Description);
            //@ts-ignore
            setValue('ApprovalDate', findMeter.ApprovalDate);
            //@ts-ignore
            setValue('ApprovalDecision', findMeter.ApprovalDecision);
            //@ts-ignore
            setValue('Approval', findMeter.Approval);
            //@ts-ignore
            setValue('AccreditedDate', findMeter.AccreditedDate);
            //@ts-ignore
            setValue('ExpiryDate', findMeter.ExpiryDate);
            //@ts-ignore
            setValue('AccreditationType', findMeter.AccreditationType);
            //@ts-ignore
            setValue('AccreditationDocument', findMeter.AccreditationDocument);
            //@ts-ignore
            setValue('TransmitterSerial', findMeter.SerialTransmitter);
            //@ts-ignore
            setValue('Nation', findMeter.Nationality);

            const findSite = listSite.find(
                //@ts-ignore
                (el) => el.Meter === findMeter.Serial,
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
        <Grid>
            <Col span={12}>
                <Select
                    label="Serial"
                    //@ts-ignore
                    data={meterData}
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
                            <Col md={3}>
                                <Controller
                                    name="Nation"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            Quốc gia: {''}
                                            {getValues('Nation')}
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
                                    name="AccreditationDocument"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            Giấy phê duyệt: {''}
                                            {getValues('AccreditationDocument')}
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
                                                getValues('Installed') == true
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
                                                getValues('Approval') == true
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
                                                getValues('AccreditationType')
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
                            <Col md={3}>
                                <Controller
                                    name="TransmitterSerial"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            Seri bộ hiển thị: {''}
                                            {getValues('TransmitterSerial')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={8}>
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
    );
};

export default StatisticMeterInfoPage;
