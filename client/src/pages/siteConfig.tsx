import { motion } from 'framer-motion';

import {
    Button,
    Checkbox,
    Col,
    FileInput,
    Grid,
    Select,
    NumberInput,
    TextInput,
    Text,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { IconMapPin, IconUpload } from '@tabler/icons-react';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllViewGroupsQuery,
    useGetAllStaffsQuery,
    useGetAllSitesQuery,
    useGetAllOldSiteIdQuery,
    useGetAllDistrictQuery,
    useQueGetAllMeterNotInstallryQuery,
    useGetAllTransmitterNotInstallQuery,
    useGetAllLoggerNotInstallQuery,
    useGetAllMeterAccreditationTypeQuery,
    useGetAllSiteLevelQuery,
    useGetAllSiteStatusQuery,
    useGetAllSiteMeterDirectionQuery,
    useGetAllSiteGroupQuery,
    useGetAllSiteGroup2SQuery,
    useGetAllSiteGroup3SQuery,
    useGetAllSiteGroup4SQuery,
    useGetAllSiteGroup5SQuery,
    useGetAllSiteAvailabilitiesQuery,
    useGetCompaniesQuery,
    useGetAllSiteCoverQuery,
} from '../__generated__/graphql';

const SiteConfigPage = () => {
    const { data: sites, error: siteError } = useGetAllSitesQuery();
    const { data: oldIds, error: oldIdError } = useGetAllOldSiteIdQuery();
    const { data: viewGroups, error: viewGroupError } =
        useGetAllViewGroupsQuery();
    const { data: staffs, error: staffError } = useGetAllStaffsQuery();
    const { data: districts, error: districtError } = useGetAllDistrictQuery();
    const { data: meters, error: metersError } =
        useQueGetAllMeterNotInstallryQuery();
    const { data: transmitters, error: transmitterError } =
        useGetAllTransmitterNotInstallQuery();
    const { data: loggers, error: loggerError } =
        useGetAllLoggerNotInstallQuery();
    const { data: metersAccrediationType, error: meterAccrediationTypeError } =
        useGetAllMeterAccreditationTypeQuery();
    const { data: siteLevels, error: siteLevelsError } =
        useGetAllSiteLevelQuery();
    const { data: siteStatus, error: siteStatusError } =
        useGetAllSiteStatusQuery();
    const { data: siteMeterDirection, error: siteDirectionError } =
        useGetAllSiteMeterDirectionQuery();
    const { data: siteGroup, error: siteGroupError } =
        useGetAllSiteGroupQuery();
    const { data: siteGroup2S, error: siteGroup2SError } =
        useGetAllSiteGroup2SQuery();
    const { data: siteGroup3S, error: siteGroup3SError } =
        useGetAllSiteGroup3SQuery();
    const { data: siteGroup4S, error: siteGroup4SError } =
        useGetAllSiteGroup4SQuery();
    const { data: siteGroup5S, error: siteGroup5SError } =
        useGetAllSiteGroup5SQuery();
    const { data: siteAvailabilities, error: siteAvailabilitiesError } =
        useGetAllSiteAvailabilitiesQuery();
    const { data: companies, error: companiesError } = useGetCompaniesQuery();
    const { data: siteCover, error: siteCoverError } =
        useGetAllSiteCoverQuery();

    if (
        viewGroupError ||
        staffError ||
        siteError ||
        oldIdError ||
        districtError ||
        metersError ||
        transmitterError ||
        loggerError ||
        meterAccrediationTypeError ||
        siteLevelsError ||
        siteStatusError ||
        siteDirectionError ||
        siteGroupError ||
        siteGroup2SError ||
        siteGroup3SError ||
        siteGroup4SError ||
        siteGroup5SError ||
        siteAvailabilitiesError ||
        companiesError ||
        siteCoverError
    ) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
    }

    //@ts-ignore
    const sitesData = [];

    if (sites != null && sites != undefined) {
        if (sites.GetAllSites != null && sites.GetAllSites != undefined) {
            if (sites.GetAllSites.length > 0) {
                for (const site of sites.GetAllSites) {
                    const obj = {
                        label: `${site?._id} | ${site?.Location}`,
                        value: site?._id,
                    };

                    sitesData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const staffsData = [];

    if (staffs != undefined && staffs != null) {
        if (staffs.GetAllStaffs != null && staffs.GetAllStaffs != undefined) {
            if (staffs.GetAllStaffs.length > 0) {
                for (const staff of staffs.GetAllStaffs) {
                    const obj = {
                        label: `${staff?._id}_${staff?.FirstName} ${staff?.LastName}`,
                        value: staff?._id,
                    };

                    staffsData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const metersData = [];

    if (meters != undefined && meters != null) {
        if (
            meters.GetAllMeterNotInstall != null &&
            meters.GetAllMeterNotInstall != undefined
        ) {
            if (meters.GetAllMeterNotInstall.length > 0) {
                for (const meter of meters.GetAllMeterNotInstall) {
                    const obj = {
                        label: `${meter?.Serial} | ${meter?.Marks} | ${meter?.Size}`,
                        value: meter?.Serial,
                    };

                    metersData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const transmittersData = [];

    if (transmitters != undefined && transmitters != null) {
        if (
            transmitters.GetAllTransmitterNotInstall != null &&
            transmitters.GetAllTransmitterNotInstall != undefined
        ) {
            if (transmitters.GetAllTransmitterNotInstall.length > 0) {
                for (const transmitter of transmitters.GetAllTransmitterNotInstall) {
                    const obj = {
                        label: `${transmitter?.Serial} | ${transmitter?.Marks} | ${transmitter?.Size}`,
                        value: transmitter?.Serial,
                    };

                    transmittersData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const loggersData = [];

    if (loggers != undefined && loggers != null) {
        if (
            loggers.GetAllLoggerNotInstall != null &&
            loggers.GetAllLoggerNotInstall != undefined
        ) {
            if (loggers.GetAllLoggerNotInstall.length > 0) {
                for (const logger of loggers.GetAllLoggerNotInstall) {
                    const obj = {
                        label: `${logger?.Serial} | ${logger?.Marks} | ${logger?.Model}`,
                        value: logger?.Serial,
                    };

                    loggersData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const metersAccreditationTypeData = [];

    if (metersAccrediationType != undefined && metersAccrediationType != null) {
        if (
            metersAccrediationType.GetAllMeterAccreditationType != null &&
            metersAccrediationType.GetAllMeterAccreditationType != undefined
        ) {
            if (
                metersAccrediationType.GetAllMeterAccreditationType.length > 0
            ) {
                for (const meterAccrediationType of metersAccrediationType?.GetAllMeterAccreditationType) {
                    const obj = {
                        label: `${meterAccrediationType?.AccreditationType} | ${meterAccrediationType?.Description}`,
                        value: meterAccrediationType?.AccreditationType,
                    };

                    metersAccreditationTypeData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteLevelsData = [];

    if (siteLevels != undefined && siteLevels != null) {
        if (
            siteLevels.GetAllSiteLevel != null &&
            siteLevels.GetAllSiteLevel != undefined
        ) {
            if (siteLevels.GetAllSiteLevel.length > 0) {
                for (const siteLevel of siteLevels?.GetAllSiteLevel) {
                    const obj = {
                        label: `${siteLevel?.Level} | ${siteLevel?.Description}`,
                        value: siteLevel?.Level,
                    };

                    siteLevelsData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteStatusData = [];

    if (siteStatus != undefined && siteStatus != null) {
        if (
            siteStatus.GetAllSiteStatus != null &&
            siteStatus.GetAllSiteStatus != undefined
        ) {
            if (siteStatus.GetAllSiteStatus.length > 0) {
                for (const siteStat of siteStatus?.GetAllSiteStatus) {
                    const obj = {
                        label: `${siteStat?.Status} | ${siteStat?.Description}`,
                        value: siteStat?.Status,
                    };

                    siteStatusData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteMeterDirectionsData = [];

    if (siteMeterDirection != undefined && siteMeterDirection != null) {
        if (
            siteMeterDirection.GetAllSiteMeterDirection != null &&
            siteMeterDirection.GetAllSiteMeterDirection != undefined
        ) {
            if (siteMeterDirection.GetAllSiteMeterDirection.length > 0) {
                for (const siteDirec of siteMeterDirection?.GetAllSiteMeterDirection) {
                    const obj = {
                        label: `${siteDirec?.Direction} | ${siteDirec?.Description}`,
                        value: siteDirec?.Direction,
                    };

                    siteMeterDirectionsData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteGroupsData = [];

    if (siteGroup != undefined && siteGroup != null) {
        if (
            siteGroup.GetAllSiteGroup != null &&
            siteGroup.GetAllSiteGroup != undefined
        ) {
            if (siteGroup.GetAllSiteGroup.length > 0) {
                for (const site of siteGroup?.GetAllSiteGroup) {
                    const obj = {
                        label: `${site?.Group} | ${site?.Description}`,
                        value: site?.Group,
                    };

                    siteGroupsData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteGroups2SData = [];

    if (siteGroup2S != undefined && siteGroup2S != null) {
        if (
            siteGroup2S.GetAllSiteGroup2S != null &&
            siteGroup2S.GetAllSiteGroup2S != undefined
        ) {
            if (siteGroup2S.GetAllSiteGroup2S.length > 0) {
                for (const site of siteGroup2S?.GetAllSiteGroup2S) {
                    const obj = {
                        label: `${site?.Group} | ${site?.Description}`,
                        value: site?.Group,
                    };

                    siteGroups2SData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteGroups3SData = [];

    if (siteGroup3S != undefined && siteGroup3S != null) {
        if (
            siteGroup3S.GetAllSiteGroup3S != null &&
            siteGroup3S.GetAllSiteGroup3S != undefined
        ) {
            if (siteGroup3S.GetAllSiteGroup3S.length > 0) {
                for (const site of siteGroup3S?.GetAllSiteGroup3S) {
                    const obj = {
                        label: `${site?.Group} | ${site?.Description}`,
                        value: site?.Group,
                    };

                    siteGroups3SData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteGroups4SData = [];

    if (siteGroup4S != undefined && siteGroup4S != null) {
        if (
            siteGroup4S.GetAllSiteGroup4S != null &&
            siteGroup4S.GetAllSiteGroup4S != undefined
        ) {
            if (siteGroup4S.GetAllSiteGroup4S.length > 0) {
                for (const site of siteGroup4S?.GetAllSiteGroup4S) {
                    const obj = {
                        label: `${site?.Group} | ${site?.Description}`,
                        value: site?.Group,
                    };

                    siteGroups4SData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteGroups5SData = [];

    if (siteGroup5S != undefined && siteGroup5S != null) {
        if (
            siteGroup5S.GetAllSiteGroup5S != null &&
            siteGroup5S.GetAllSiteGroup5S != undefined
        ) {
            if (siteGroup5S.GetAllSiteGroup5S.length > 0) {
                for (const site of siteGroup5S?.GetAllSiteGroup5S) {
                    const obj = {
                        label: `${site?.Group} | ${site?.Description}`,
                        value: site?.Group,
                    };

                    siteGroups5SData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteAvailabilitiesData = [];

    if (siteAvailabilities != undefined && siteAvailabilities != null) {
        if (
            siteAvailabilities.GetAllSiteAvailabilities != null &&
            siteAvailabilities.GetAllSiteAvailabilities != undefined
        ) {
            if (siteAvailabilities.GetAllSiteAvailabilities.length > 0) {
                for (const site of siteAvailabilities?.GetAllSiteAvailabilities) {
                    const obj = {
                        label: `${site?.Availability} | ${site?.Description}`,
                        value: site?.Availability,
                    };

                    siteAvailabilitiesData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const companiesData = [];

    if (companies != undefined && companies != null) {
        if (
            companies.GetCompanies != null &&
            companies.GetCompanies != undefined
        ) {
            if (companies.GetCompanies.length > 0) {
                for (const company of companies?.GetCompanies) {
                    const obj = {
                        label: `${company?.Company} | ${company?.Description}`,
                        value: company?.Company,
                    };

                    companiesData.push(obj);
                }
            }
        }
    }

    //@ts-ignore
    const siteCoversData = [];

    if (siteCover != undefined && siteCover != null) {
        if (
            siteCover.GetAllSiteCover != null &&
            siteCover.GetAllSiteCover != undefined
        ) {
            if (siteCover.GetAllSiteCover.length > 0) {
                for (const site of siteCover?.GetAllSiteCover) {
                    const obj = {
                        label: `${site?.CoverID} `,
                        value: site?.CoverID,
                    };

                    siteCoversData.push(obj);
                }
            }
        }
    }

    const { control, getValues, setValue, reset, register } = useForm({
        defaultValues: {
            _id: '',
            OldId: '',
            Location: '',
            Latitude: null || 0,
            Longitude: null || 0,
            ViewGroup: '',
            StaffId: '',
            Meter: '',
            Transmitter: '',
            Logger: '',
            DateOfMeterChange: null,
            DateOfLoggerChange: null,
            DateOfTransmitterChange: null,
            DateOfBatteryChange: null,
            DateOfTransmitterBatteryChange: null,
            DateOfLoggerBatteryChange: null,
            DescriptionOfChange: '',
            ChangeIndex: null || 0,
            Level: '',
            Group: '',
            Company: '',
            TakeoverDate: null,
            Takeovered: 0,
            Status: '',
            Availability: '',
            Display: 0,
            Property: 0,
            UsingLogger: 0,
            MeterDirection: '',
            ProductionCompany: '',
            IstDistributionCompany: '',
            QndDistributionCompany: '',
            IstDoNotCalculateReverse: 0,
            QndDoNotCalculateReverse: 0,
            Description: '',
            ChangeIndex1: null || 0,
            Group2: '',
            Address: '',
            CoverID: '',
            Group3: '',
            Group4: '',
            Group5: '',
            District: '',
            AccreditationDocument: '',
            AccreditationType: '',
            AccreditationDate: null,
            AccreditationExpireDate: null,
            CoverMaterial: '',
            CoverNL: 0,
            CoverL: 0,
            CoverW: 0,
            CoverH: 0,
        },
    });

    const onChooseSiteBlured = (e: any) => {
        console.log(e.target.value);
    };

    const takeovered = () => {
        console.log('this is console.log for takeovered line');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col md={4}>
                    {sites != undefined ? (
                        <Controller
                            name="_id"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã vị trí"
                                    //@ts-ignore
                                    data={sitesData}
                                    placeholder="Chọn điểm"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo điểm: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setSiteData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                    onBlur={onChooseSiteBlured}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="Latitude"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Vĩ độ"
                                label="Vĩ độ"
                                icon={<IconMapPin size="1.125rem" />}
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
                    />
                </Col>
                <Col md={4}>
                    {oldIds !== undefined ? (
                        <Controller
                            name="OldId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã vị trí cũ"
                                    //@ts-ignore
                                    data={oldIds.GetAllOldSiteId}
                                    placeholder="Chọn mã vị trí cũ"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo mã vị trí cũ: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setSiteData((current) => [
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
                        name="Longitude"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Kinh độ"
                                label="Kinh độ"
                                icon={<IconMapPin size="1.125rem" />}
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Button
                        variant="filled"
                        color="blue"
                        style={{ marginRight: '5px' }}
                    >
                        Upload
                    </Button>
                    <Button variant="filled" color="green">
                        Download
                    </Button>
                </Col>
                <Col md={4}>
                    <Controller
                        name="Location"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Vị trí"
                                label="Vị trí"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {viewGroups != undefined ? (
                        <Controller
                            name="ViewGroup"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm hiển thị"
                                    placeholder="Nhóm hiển thị"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm hiển thị"
                                    //@ts-ignore
                                    data={viewGroups.GetAllViewGroups}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {staffs !== undefined ? (
                        <Controller
                            name="StaffId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã nhân viên"
                                    placeholder="Mã nhân viên"
                                    searchable
                                    nothingFound="Không tìm thấy mã nhân viên"
                                    //@ts-ignore
                                    data={staffsData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="Address"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Địa chỉ"
                                label="Địa chỉ"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    {districts !== undefined ? (
                        <Controller
                            name="District"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Quận"
                                    placeholder="Quận"
                                    searchable
                                    nothingFound="Không tìm thấy quận"
                                    //@ts-ignore
                                    data={districts.GetAllDistrict}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}></Col>
                <Col md={4}>
                    {meters !== undefined ? (
                        <Controller
                            name="Meter"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Dồng hồ"
                                    placeholder="Đồng hồ"
                                    searchable
                                    nothingFound="Không tìm thấy đồng hồ"
                                    //@ts-ignore
                                    data={metersData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {transmitters !== undefined ? (
                        <Controller
                            name="Transmitter"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Bộ hiển thị"
                                    placeholder="Bộ hiển thị"
                                    searchable
                                    nothingFound="Không tìm thấy bộ hiển thị"
                                    //@ts-ignore
                                    data={transmittersData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {loggers !== undefined ? (
                        <Controller
                            name="Logger"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Logger"
                                    placeholder="Logger"
                                    searchable
                                    nothingFound="Không tìm thấy Logger"
                                    //@ts-ignore
                                    data={loggersData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={3}>
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
                <Col md={3}>
                    {metersAccrediationType !== undefined ? (
                        <Controller
                            name="AccreditationType"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Loại kiểm định"
                                    placeholder="Loại kiểm định"
                                    searchable
                                    nothingFound="Không tìm thấy loại kiểm định"
                                    //@ts-ignore
                                    data={metersAccreditationTypeData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={3}>
                    <Controller
                        name="AccreditationDate"
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
                <Col md={3}>
                    <Controller
                        name="AccreditationExpireDate"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày hết hạn kiểm định"
                                placeholder="Ngày hết hạn kiểm định"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateOfMeterChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay đồng hồ"
                                placeholder="Ngày thay đồng hồ"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateOfBatteryChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay ac quy"
                                placeholder="Ngày thay ac quy"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="ChangeIndex"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Chỉ số đồng hồ cũ"
                                label="Chỉ số đồng hồ cũ"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateOfTransmitterChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay bộ hiển thị"
                                placeholder="Ngày thay bộ hiển thị"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateOfTransmitterBatteryChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay pin bộ hiển thị"
                                placeholder="Ngày thay pin bộ hiển thị"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="ChangeIndex1"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Chỉ số đồng hồ mới"
                                label="Chỉ số đồng hồ mới"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>

                <Col md={4}>
                    <Controller
                        name="DateOfLoggerChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay logger"
                                placeholder="Ngày thay logger"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DateOfLoggerBatteryChange"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày thay pin logger"
                                placeholder="Ngày thay pin logger"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="DescriptionOfChange"
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
                    {siteLevels !== undefined ? (
                        <Controller
                            name="Level"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Cấp đồng hồ"
                                    placeholder="Cấp đồng hồ"
                                    searchable
                                    nothingFound="Không tìm thấy cấp đồng hồ"
                                    //@ts-ignore
                                    data={siteLevelsData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {siteStatus != undefined ? (
                        <Controller
                            name="Status"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Trạng thái"
                                    placeholder="Trạng thái"
                                    searchable
                                    nothingFound="Không tìm thấy trạng thái"
                                    //@ts-ignore
                                    data={siteStatusData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {siteMeterDirection !== undefined ? (
                        <Controller
                            name="MeterDirection"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Chiều đồng hồ"
                                    placeholder="Chiều đồng hồ"
                                    searchable
                                    nothingFound="Không tìm thấy chiều đồng hồ"
                                    //@ts-ignore
                                    data={siteMeterDirectionsData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>

                <Col md={4}>
                    {siteGroup !== undefined ? (
                        <Controller
                            name="Group"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm đồng hồ 1"
                                    placeholder="Nhóm đồng hồ 1"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm đồng hồ 1"
                                    //@ts-ignore
                                    data={siteGroupsData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {siteAvailabilities !== undefined ? (
                        <Controller
                            name="Availability"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Tình trạng"
                                    placeholder="Tình trạng"
                                    searchable
                                    nothingFound="Không tìm thấy tình trạng"
                                    //@ts-ignore
                                    data={siteAvailabilitiesData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {companies !== undefined ? (
                        <Controller
                            name="ProductionCompany"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Công ty sản xuất"
                                    placeholder="Công ty sản xuất"
                                    searchable
                                    nothingFound="Không tìm thấy công ty sản xuất"
                                    //@ts-ignore
                                    data={companiesData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {siteGroup2S !== undefined ? (
                        <Controller
                            name="Group2"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm đồng hồ 2"
                                    placeholder="Nhóm đồng hồ 2"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm đồng hồ 2"
                                    // @ts-ignore
                                    data={siteGroups2SData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col
                    md={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                    }}
                >
                    <Controller
                        name="Display"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                labelPosition="left"
                                label="Hiển thị"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col
                    md={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {companies !== undefined ? (
                        <>
                            <Controller
                                name="IstDistributionCompany"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        label="Công ty cung cấp 1"
                                        placeholder="Công ty cung cấp 1"
                                        searchable
                                        nothingFound="Không tìm thấy công ty cung cấp 1"
                                        //@ts-ignore
                                        data={companiesData}
                                        {...field}
                                        style={{ flex: 1 }}
                                    />
                                )}
                            ></Controller>
                            <Controller
                                name="IstDoNotCalculateReverse"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        style={{ marginTop: '1.5rem' }}
                                        {...field}
                                    />
                                )}
                            ></Controller>
                        </>
                    ) : null}
                </Col>

                <Col md={4}>
                    {siteGroup3S !== undefined ? (
                        <Controller
                            name="Group3"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm đồng hồ 3"
                                    placeholder="Nhóm đồng hồ 3"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm đồng hồ 3"
                                    //@ts-ignore
                                    data={siteGroups3SData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col
                    md={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                    }}
                >
                    <Controller
                        name="Property"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                labelPosition="left"
                                label="Tài sản"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col
                    md={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {companies !== undefined ? (
                        <>
                            <Controller
                                name="QndDistributionCompany"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        label="Công ty cung cấp 2"
                                        placeholder="Công ty cung cấp 2"
                                        searchable
                                        nothingFound="Không tìm thấy công ty cung cấp 2"
                                        //@ts-ignore
                                        data={companiesData}
                                        {...field}
                                        style={{ flex: 1 }}
                                    />
                                )}
                            ></Controller>
                            <Controller
                                name="QndDoNotCalculateReverse"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        style={{ marginTop: '1.5rem' }}
                                        {...field}
                                    />
                                )}
                            ></Controller>
                        </>
                    ) : null}
                </Col>

                <Col md={4}>
                    {siteGroup4S !== undefined ? (
                        <Controller
                            name="Group4"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm đồng hồ 4"
                                    placeholder="Nhóm đồng hồ 4"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm đồng hồ 4"
                                    //@ts-ignore
                                    data={siteGroups4SData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col
                    md={4}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                    }}
                >
                    <Controller
                        name="UsingLogger"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                labelPosition="left"
                                label="Sử dụng logger"
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

                <Col md={3}>
                    {siteGroup5S !== undefined ? (
                        <Controller
                            name="Group5"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Nhóm đồng hồ 5"
                                    placeholder="Nhóm đồng hồ 5"
                                    searchable
                                    nothingFound="Không tìm thấy nhóm đồng hồ 5"
                                    //@ts-ignore
                                    data={siteGroups5SData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col
                    md={3}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                    }}
                >
                    <Controller
                        name="Takeovered"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                labelPosition="left"
                                label="Bàn giao"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={3}>
                    {companies !== undefined ? (
                        <Controller
                            name="Company"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Quản lý"
                                    placeholder="Quản lý"
                                    searchable
                                    nothingFound="Không tìm thấy quản lý"
                                    //@ts-ignore
                                    data={companiesData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={3}>
                    <Controller
                        name="TakeoverDate"
                        control={control}
                        render={({ field }) => (
                            <DateInput
                                valueFormat="DD/MM/YYYY"
                                label="Ngày bàn giao"
                                placeholder="Ngày bàn giao"
                                mx="auto"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>

                <Col md={4}>
                    {siteCover !== undefined ? (
                        <Controller
                            name="CoverID"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã nấp hầm"
                                    placeholder="Mã nấp hầm"
                                    searchable
                                    nothingFound="Không tìm thấy Mã nấp hầm"
                                    //@ts-ignore
                                    data={siteCoversData}
                                    {...field}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    <Controller
                        name="CoverMaterial"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Vật liệu"
                                label="Vật liệu"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="CoverNL"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Số tấm"
                                label="Số tấm"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="CoverL"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Dài"
                                label="Dài"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="CoverW"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Rộng"
                                label="Rộng"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>
                    <Controller
                        name="CoverH"
                        control={control}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Cao"
                                label="Cao"
                                {...field}
                            />
                        )}
                    ></Controller>
                </Col>
            </Grid>
        </motion.div>
    );
};

export default SiteConfigPage;
