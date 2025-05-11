import { Grid, Col, Select, Text, Center } from '@mantine/core';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllSitesQuery,
    useGetAllLoggerQuery,
} from '../__generated__/graphql';
import { useState, useEffect } from 'react';

import { convertTimeStampToDate } from '../utils/utils';

import { motion } from 'framer-motion';

const StatisticLoggerInfoPage = () => {
    const [loggerData, setLoggerData] = useState([]);
    const [listLogger, setListLogger] = useState([]);
    const [listSite, setListSite] = useState([]);

    const [valueSerial, setValueSerial] = useState('');

    const { refetch: getSite } = useGetAllSitesQuery();
    const { refetch: getLogger } = useGetAllLoggerQuery();

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

        getLogger()
            .then((res) => {
                if (
                    res?.data?.GetAllLogger !== null &&
                    res?.data?.GetAllLogger !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllLogger) {
                        const obj = {
                            value: item?.Serial,
                            label: `${item?.Serial} | ${item?.Marks}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setLoggerData([...temp]);

                    //@ts-ignore
                    setListLogger([...res.data.GetAllLogger]);
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
            Status: '',
            Installed: 0,
            Index: 0,
            Description: '',
            SiteID: '',
            SiteLocation: '',
        },
    });

    const onSerialChanged = (e: any) => {
        setValueSerial(e);

        //@ts-ignore
        const findLogger = listLogger.find((el) => el.Serial === e);

        if (findLogger !== undefined) {
            //@ts-ignore
            setValue('Serial', findLogger.Serial);
            //@ts-ignore
            setValue('ReceiptDate', findLogger.ReceiptDate);
            //@ts-ignore
            setValue('Provider', findLogger.Provider);
            //@ts-ignore
            setValue('Marks', findLogger.Marks);
            //@ts-ignore
            setValue('Model', findLogger.Model);
            //@ts-ignore
            setValue('Size', findLogger.Size);
            //@ts-ignore
            setValue('Status', findLogger.Status);
            //@ts-ignore
            setValue('Installed', findLogger.Installed);

            const findSite = listSite.find(
                //@ts-ignore
                (el) => el.Logger === findLogger.Serial,
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
                            Thống kê hồ sơ thiết bị logger
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col span={12}>
                    <Select
                        label="Serial"
                        //@ts-ignore
                        data={loggerData}
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
                            </Grid>
                        </Col>

                        <Col span={12}>
                            <Grid>
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

export default StatisticLoggerInfoPage;
