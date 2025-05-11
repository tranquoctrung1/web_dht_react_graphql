import { Grid, Col, Select, Text, Table, Space, Center } from '@mantine/core';

import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { convertTimeStampToDate } from '../utils/utils';

import {
    useGetAllSitesQuery,
    useGetAllMeterQuery,
    useGetHistoryMeterByMeterQuery,
} from '../__generated__/graphql';

import { motion } from 'framer-motion';

const StatisticHistoryMeterPage = () => {
    const [listSite, setListSite] = useState([]);
    const [listMeter, setListMeter] = useState([]);
    const [meterData, setMeterData] = useState([]);

    const [valueMeterSerial, setValueMeterSerial] = useState('');

    const [listSiteHistory, setListSiteHistory] = useState([]);

    const { refetch: getSites } = useGetAllSitesQuery();
    const { refetch: getMeter } = useGetAllMeterQuery();
    const { refetch: getHistoryMeterByMeter } =
        useGetHistoryMeterByMeterQuery();

    const { getValues, setValue, reset, control } = useForm({
        defaultValues: {
            SiteId: '',
            Location: '',
            Meter: '',
            Transmitter: '',
            Logger: '',
            Marks: '',
            Size: 0,
            Company: '',
            Availability: '',
            Status: '',
            Takeovered: '',
            MeterDirection: '',
            CalcCompany: '',
            Description: '',
            DateMeterChanged: '',
        },
    });

    useEffect(() => {
        getSites()
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
                            label: item?.Serial,
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

    const onSerialChanged = (e: any) => {
        setValueMeterSerial(e);

        //@ts-ignore
        const findSite = listSite.find((el) => el.Meter === e);

        if (findSite !== undefined) {
            //@ts-ignore
            setValue('SiteId', findSite._id);
            //@ts-ignore
            setValue('Location', findSite.Location);
            //@ts-ignore
            setValue('Meter', findSite.Meter);
            //@ts-ignore
            setValue('Transmitter', findSite.Transmitter);
            //@ts-ignore
            setValue('Logger', findSite.Logger);
            //@ts-ignore
            setValue('Company', findSite.Company);
            //@ts-ignore
            setValue('Availability', findSite.Availability);
            //@ts-ignore
            setValue('Status', findSite.Status);
            //@ts-ignore
            setValue('Takeovered', findSite.Takeovered === true ? 'Y' : 'N');
            //@ts-ignore
            setValue('MeterDirection', findSite.MeterDirection);
            //@ts-ignore
            setValue(
                'CalcCompany',
                //@ts-ignore
                `${findSite.ProductionCompany} ${findSite.IstDistributionCompany} ${findSite.QndDistributionCompany}`,
            );
            //@ts-ignore
            setValue('Description', findSite.DescriptionOfChange);

            setValue(
                'DateMeterChanged',
                //@ts-ignore
                convertTimeStampToDate(findSite.DateOfMeterChange),
            );

            //@ts-ignore
            const findMeter = listMeter.find(
                //@ts-ignore
                (el) => el.Serial === findSite.Meter,
            );

            if (findMeter !== undefined) {
                //@ts-ignore
                setValue('Marks', findMeter.Marks);
                //@ts-ignore
                setValue('Size', findMeter.Size);
            }
        }

        getHistorySiteMeterByMeterAction(e);
    };

    const getHistorySiteMeterByMeterAction = (serial: any) => {
        getHistoryMeterByMeter({
            meterSerial: serial,
        }).then((res) => {
            if (res?.data?.GetHistoryMeterByMeter) {
                const temp = [];

                for (const item of res.data.GetHistoryMeterByMeter) {
                    //@ts-ignore
                    const find = listSite.find((el) => el._id === item?.SiteId);

                    if (find !== undefined) {
                        const obj = {
                            //@ts-ignore
                            SiteId: find._id,
                            //@ts-ignore
                            Location: find.Location,
                            DateChanged: item?.DateChanged,
                            Description: item?.Description,
                        };

                        temp.push(obj);
                    }
                }

                //@ts-ignore
                setListSiteHistory([...temp]);
            }
        });
    };

    const renderBodySite = (data: any) => {
        const result = [];

        let count = 1;

        for (const item of data) {
            const content = (
                <tr key={item.SiteId}>
                    <td>{count++}</td>
                    <td>{convertTimeStampToDate(item.DateChanged)}</td>
                    <td>{item.SiteId}</td>
                    <td>{item.Location}</td>
                    <td>{item.Description}</td>
                </tr>
            );

            result.push(content);
        }

        return result;
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
                            Thống kê lịch sử đông hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
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
                {valueMeterSerial !== null &&
                valueMeterSerial !== undefined &&
                valueMeterSerial !== '' ? (
                    <>
                        <Col md={4}>
                            <Controller
                                name="SiteId"
                                control={control}
                                render={({ field }) => (
                                    <Text size="1rem" weight={500} color="blue">
                                        {getValues('SiteId')}
                                    </Text>
                                )}
                            ></Controller>
                        </Col>
                        <Col md={8}>
                            <Controller
                                name="Location"
                                control={control}
                                render={({ field }) => (
                                    <Text size="1rem" weight={500} color="blue">
                                        {getValues('Location')}
                                    </Text>
                                )}
                            ></Controller>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Seri đồng hồ:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Meter"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Meter')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Bộ hiển thị:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Transmitter"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Transmitter')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Logger:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Logger"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Logger')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Hiệu:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Marks"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Marks')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Cở:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Size"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Size')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Quản lý:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Company"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Company')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Trạng thái:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Availability"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Availability')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Tình trạng:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Status"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Status')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Bàn giao:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Takeovered"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Takeovered')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Chiều đồng hồ:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="MeterDirection"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('MeterDirection')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Tính cho:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="CalcCompany"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('CalcCompany')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Ghi chú:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="Description"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('Description')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                        <Col md={2}>
                            <Center>
                                <Text weight={500} size=".8rem">
                                    Ngày thay:
                                </Text>
                                <Space w="md" />
                                <Controller
                                    name="DateMeterChanged"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size=".8rem" weight={500}>
                                            {getValues('DateMeterChanged')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Center>
                        </Col>
                    </>
                ) : null}
                {listSiteHistory.length > 0 ? (
                    <>
                        <Col span={12} style={{ overflowX: 'scroll' }}>
                            <Table
                                captionSide="top"
                                striped
                                highlightOnHover
                                withBorder
                                withColumnBorders
                                verticalSpacing="xs"
                                fontSize="xs"
                                style={{
                                    tableLayout: 'auto',
                                    width: '100%',
                                }}
                            >
                                <caption>Danh sách các điểm</caption>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ngày thay</th>
                                        <th>Mã vị trí</th>
                                        <th>Vị trí</th>
                                        <th style={{ width: '500px' }}>
                                            Ghi chú
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{renderBodySite(listSiteHistory)}</tbody>
                            </Table>
                        </Col>
                    </>
                ) : null}
            </Grid>
        </motion.div>
    );
};

export default StatisticHistoryMeterPage;
