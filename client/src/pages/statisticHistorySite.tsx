import { Grid, Col, Select, Text, Table } from '@mantine/core';

import {
    useGetAllSitesLazyQuery,
    useGetAllMeterLazyQuery,
    useGetStatisticHistoryMeterAndMeterBySiteIdLazyQuery,
    useGetStatisticHistoryLoggerAndLoggerBySiteIdLazyQuery,
    useGetStatisticHistoryTransmitterAndTransmitterBySiteIdLazyQuery,
} from '../__generated__/graphql';

import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { convertTimeStampToDate } from '../utils/utils';

const StatisticHistorySitePage = () => {
    const [siteData, setSiteData] = useState([]);
    const [listSite, setListSite] = useState([]);
    const [listMeter, setListMeter] = useState([]);

    const [valueSiteId, setValueSiteId] = useState('');

    const [dataHistoryMeter, setDataHistoryMeter] = useState([]);
    const [dataHistoryTransmitter, setDataHistoryTransmitter] = useState([]);
    const [dataHistoryLogger, setDataHistoryLogger] = useState([]);

    const [getSites, {}] = useGetAllSitesLazyQuery();
    const [getMeter, {}] = useGetAllMeterLazyQuery();
    const [getHistoryMeter, {}] =
        useGetStatisticHistoryMeterAndMeterBySiteIdLazyQuery();
    const [getHistoryLogger, {}] =
        useGetStatisticHistoryLoggerAndLoggerBySiteIdLazyQuery();
    const [getHistoryTransmitter, {}] =
        useGetStatisticHistoryTransmitterAndTransmitterBySiteIdLazyQuery();

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
        },
    });

    useEffect(() => {
        getSites()
            .then((res) => {
                if (
                    res?.data?.GetAllSites !== null &&
                    res?.data?.GetAllSites !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSites) {
                        const obj = {
                            label: `${item?._id} | ${item?.Location}`,
                            value: item?._id,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteData([...temp]);
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
                    //@ts-ignore
                    setListMeter([...res.data.GetAllMeter]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const getHistoryMeterAction = (siteid: any) => {
        if (siteid !== null && siteid !== undefined && siteid !== '') {
            getHistoryMeter({
                variables: {
                    siteid: siteid,
                },
            }).then((res) => {
                if (
                    res?.data?.GetStatisticHistoryMeterAndMeterBySiteId !==
                        null &&
                    res?.data?.GetStatisticHistoryMeterAndMeterBySiteId !==
                        undefined
                ) {
                    //@ts-ignore
                    setDataHistoryMeter([
                        ...res.data.GetStatisticHistoryMeterAndMeterBySiteId,
                    ]);
                }
            });
        }
    };

    const getHistoryTransmitterAction = (siteid: any) => {
        if (siteid !== null && siteid !== undefined && siteid !== '') {
            getHistoryTransmitter({
                variables: {
                    siteid: siteid,
                },
            }).then((res) => {
                if (
                    res?.data
                        ?.GetStatisticHistoryTransmitterAndTransmitterBySiteId !==
                        null &&
                    res?.data
                        ?.GetStatisticHistoryTransmitterAndTransmitterBySiteId !==
                        undefined
                ) {
                    //@ts-ignore
                    setDataHistoryTransmitter([
                        ...res.data
                            .GetStatisticHistoryTransmitterAndTransmitterBySiteId,
                    ]);
                }
            });
        }
    };

    const getHistoryLoggerAction = (siteid: any) => {
        if (siteid !== null && siteid !== undefined && siteid !== '') {
            getHistoryLogger({
                variables: {
                    siteid: siteid,
                },
            }).then((res) => {
                if (
                    res?.data?.GetStatisticHistoryLoggerAndLoggerBySiteId !==
                        null &&
                    res?.data?.GetStatisticHistoryLoggerAndLoggerBySiteId !==
                        undefined
                ) {
                    //@ts-ignore
                    setDataHistoryLogger([
                        ...res.data.GetStatisticHistoryLoggerAndLoggerBySiteId,
                    ]);
                }
            });
        }
    };

    const onSiteIdChanged = (e: any) => {
        setValueSiteId(e);

        //@ts-ignore
        const findSite = listSite.find((el) => el._id === e);

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
            setValue('Description', findSite.Description);

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

        getHistoryLoggerAction(e);
        getHistoryTransmitterAction(e);
        getHistoryMeterAction(e);
    };

    const renderBodyMeter = (data: any) => {
        const result = [];

        for (const item of data) {
            const content = (
                <tr key={item.OldSerial + item.STT}>
                    <td>{item.STT}</td>
                    <td>{convertTimeStampToDate(item.DateChanged)}</td>
                    <td>{item.OldSerial}</td>
                    <td>{item.OldProvider}</td>
                    <td>{item.OldMarks}</td>
                    <td>{item.OldSize}</td>
                    <td>{item.OldModel}</td>
                    <td>{item.OldIndex}</td>
                    <td>{item.NewSerial}</td>
                    <td>{item.NewProvider}</td>
                    <td>{item.NewMarks}</td>
                    <td>{item.NewSize}</td>
                    <td>{item.NewModel}</td>
                    <td>{item.NewIndex}</td>
                    <td>{item.AccreditationDocument}</td>
                    <td>{item.Description}</td>
                </tr>
            );

            result.push(content);
        }

        return result;
    };

    const renderBodyTransmitter = (data: any) => {
        const result = [];

        for (const item of data) {
            const content = (
                <tr key={item.OldSerial + item.STT}>
                    <td>{item.STT}</td>
                    <td>{convertTimeStampToDate(item.DateChanged)}</td>
                    <td>{item.OldSerial}</td>
                    <td>{item.OldProvider}</td>
                    <td>{item.OldMarks}</td>
                    <td>{item.OldSize}</td>
                    <td>{item.OldModel}</td>
                    <td>{item.OldIndex}</td>
                    <td>{item.NewSerial}</td>
                    <td>{item.NewProvider}</td>
                    <td>{item.NewMarks}</td>
                    <td>{item.NewSize}</td>
                    <td>{item.NewModel}</td>
                    <td>{item.NewIndex}</td>
                    <td>{item.Description}</td>
                </tr>
            );

            result.push(content);
        }

        return result;
    };

    const renderBodyLogger = (data: any) => {
        const result = [];

        for (const item of data) {
            const content = (
                <tr key={item.OldSerial + item.STT}>
                    <td>{item.STT}</td>
                    <td>{convertTimeStampToDate(item.DateChanged)}</td>
                    <td>{item.OldSerial}</td>
                    <td>{item.OldProvider}</td>
                    <td>{item.OldMarks}</td>
                    <td>{item.OldModel}</td>
                    <td>{item.OldIndex}</td>
                    <td>{item.NewSerial}</td>
                    <td>{item.NewProvider}</td>
                    <td>{item.NewMarks}</td>
                    <td>{item.NewModel}</td>
                    <td>{item.NewIndex}</td>
                    <td>{item.Description}</td>
                </tr>
            );

            result.push(content);
        }

        return result;
    };

    return (
        <Grid>
            <Col span={12}>
                <Select
                    label="Mã vị trí"
                    //@ts-ignore
                    data={siteData}
                    placeholder="Chọn mã vị trí"
                    nothingFound="Không tìm thấy"
                    searchable
                    clearable
                    onChange={onSiteIdChanged}
                />
            </Col>
            {valueSiteId !== '' &&
            valueSiteId !== null &&
            valueSiteId !== undefined ? (
                <>
                    <Col span={12}>
                        <Grid>
                            <Col md={4}>
                                <Controller
                                    name="SiteId"
                                    control={control}
                                    render={({ field }) => (
                                        <Text
                                            size="1.3rem"
                                            weight={500}
                                            color="blue"
                                        >
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
                                        <Text
                                            size="1.3rem"
                                            weight={500}
                                            color="blue"
                                        >
                                            {getValues('Location')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Seri đồng hồ:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Meter"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Meter')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Bộ hiển thị:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Transmitter"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Transmitter')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Logger:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Logger"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Logger')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Hiệu:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Marks"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
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
                                <Text weight={500} size="1rem">
                                    Cở:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Size"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Size')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Quản lý:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Company"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Company')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Trạng thái:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Availability"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Availability')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Tình trạng:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Status"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
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
                                <Text weight={500} size="1rem">
                                    Bàn giao:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Takeovered"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Takeovered')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Chiều đồng hồ:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="MeterDirection"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('MeterDirection')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Tính cho:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="CalcCompany"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('CalcCompany')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    <Col span={12}>
                        <Grid>
                            <Col md={3}>
                                <Text weight={500} size="1rem">
                                    Ghi chú:
                                </Text>
                            </Col>
                            <Col md={3}>
                                <Controller
                                    name="Description"
                                    control={control}
                                    render={({ field }) => (
                                        <Text size="1rem" weight={500}>
                                            {getValues('Description')}
                                        </Text>
                                    )}
                                ></Controller>
                            </Col>
                        </Grid>
                    </Col>
                    {dataHistoryMeter ? (
                        <>
                            <Col span={12} style={{ overflowX: 'scroll' }}>
                                <Table
                                    captionSide="top"
                                    striped
                                    highlightOnHover
                                    withBorder
                                    withColumnBorders
                                >
                                    <caption>Thay đồng hồ</caption>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Ngày thay</th>
                                            <th>Seri cũ</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Cở</th>
                                            <th>Model</th>
                                            <th>Chỉ cố cũ</th>
                                            <th>Seri mới</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Cở</th>
                                            <th>Model</th>
                                            <th>Chỉ cố mới</th>
                                            <th>Giấy kiểm định</th>
                                            <th>Ghi chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderBodyMeter(dataHistoryMeter)}
                                    </tbody>
                                </Table>
                            </Col>
                        </>
                    ) : null}

                    {dataHistoryTransmitter ? (
                        <>
                            <Col span={12} style={{ overflowX: 'scroll' }}>
                                <Table
                                    captionSide="top"
                                    striped
                                    highlightOnHover
                                    withBorder
                                    withColumnBorders
                                >
                                    <caption>Thay bộ hiển thị</caption>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Ngày thay</th>
                                            <th>Seri cũ</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Cở</th>
                                            <th>Model</th>
                                            <th>Chỉ cố cũ</th>
                                            <th>Seri mới</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Cở</th>
                                            <th>Model</th>
                                            <th>Chỉ cố mới</th>
                                            <th>Ghi chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderBodyTransmitter(
                                            dataHistoryTransmitter,
                                        )}
                                    </tbody>
                                </Table>
                            </Col>
                        </>
                    ) : null}

                    {dataHistoryLogger ? (
                        <>
                            <Col span={12} style={{ overflowX: 'scroll' }}>
                                <Table
                                    captionSide="top"
                                    striped
                                    highlightOnHover
                                    withBorder
                                    withColumnBorders
                                >
                                    <caption>Thay logger</caption>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Ngày thay</th>
                                            <th>Seri cũ</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Model</th>
                                            <th>Chỉ cố cũ</th>
                                            <th>Seri mới</th>
                                            <th>Nhà SX</th>
                                            <th>Hiệu</th>
                                            <th>Model</th>
                                            <th>Chỉ cố mới</th>
                                            <th>Ghi chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderBodyLogger(dataHistoryLogger)}
                                    </tbody>
                                </Table>
                            </Col>
                        </>
                    ) : null}
                </>
            ) : null}
        </Grid>
    );
};

export default StatisticHistorySitePage;
