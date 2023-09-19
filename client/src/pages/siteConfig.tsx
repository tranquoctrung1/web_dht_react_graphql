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
    Center,
    Space,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { IconMapPin, IconUpload } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllViewGroupsQuery,
    useGetAllStaffsQuery,
    useGetAllSitesLazyQuery,
    useGetAllOldSiteIdLazyQuery,
    useGetAllDistrictQuery,
    useGetAllMeterQuery,
    useGetAllMeterLazyQuery,
    useGetAllTransmitterQuery,
    useGetAllLoggerQuery,
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
    useGetAllSiteCoverLazyQuery,
    useInsertSiteMutation,
    useUpdateSiteMutation,
    useDeleteSiteMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const SiteConfigPage = () => {
    const [listSite, setListSite] = useState([]);
    const [siteDataState, setSiteDataState] = useState([]);
    const [listOldId, setListOldId] = useState([]);
    const [oldIdData, setOldIdData] = useState([]);
    const [listMeter, setListMeter] = useState([]);
    const [siteCover, setSiteCover] = useState([]);
    const [listSiteCover, setListSiteCover] = useState([]);

    const [getSites, {}] = useGetAllSitesLazyQuery();
    const [getOldId, {}] = useGetAllOldSiteIdLazyQuery();
    const [getMeter, {}] = useGetAllMeterLazyQuery();
    const [getSiteCover, {}] = useGetAllSiteCoverLazyQuery();

    const { data: viewGroups, error: viewGroupError } =
        useGetAllViewGroupsQuery();
    const { data: staffs, error: staffError } = useGetAllStaffsQuery();
    const { data: districts, error: districtError } = useGetAllDistrictQuery();
    const { data: meters, error: metersError } = useGetAllMeterQuery();
    const { data: transmitters, error: transmitterError } =
        useGetAllTransmitterQuery();
    const { data: loggers, error: loggerError } = useGetAllLoggerQuery();
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

    const [insertSite, {}] = useInsertSiteMutation();
    const [updateSite, {}] = useUpdateSiteMutation();
    const [deleteSite, {}] = useDeleteSiteMutation();

    useEffect(() => {
        getSites()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllSites !== null &&
                            res.data.GetAllSites !== undefined
                        ) {
                            const temp = [];

                            for (const site of res.data.GetAllSites) {
                                const obj = {
                                    value: site?._id,
                                    label: site?._id,
                                };

                                temp.push(obj);
                            }

                            //@ts-ignore
                            setSiteDataState([...temp]);

                            //@ts-ignore
                            setListSite([...res.data.GetAllSites]);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));

        getOldId()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllOldSiteId !== null &&
                            res.data.GetAllOldSiteId !== undefined
                        ) {
                            const temp = [];

                            for (const id of res.data.GetAllOldSiteId) {
                                const obj = {
                                    value: id,
                                    label: id,
                                };

                                temp.push(obj);
                            }

                            //@ts-ignore
                            setOldIdData([...temp]);

                            //@ts-ignore
                            setListOldId([...res.data.GetAllOldSiteId]);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));

        getMeter()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllMeter !== null &&
                            res.data.GetAllMeter !== undefined
                        ) {
                            //@ts-ignore
                            setListMeter([...res.data.GetAllMeter]);
                        }
                    }
                }
            })
            .catch((err) => console.log(err));

        getSiteCover()
            .then((res) => {
                if (res !== null && res !== undefined) {
                    if (res.data !== null && res.data !== undefined) {
                        if (
                            res.data.GetAllSiteCover !== null &&
                            res.data.GetAllSiteCover !== undefined
                        ) {
                            const temp = [];

                            for (const cover of res.data.GetAllSiteCover) {
                                const obj = {
                                    value: cover?.CoverID,
                                    label: cover?.CoverID,
                                };

                                temp.push(obj);
                            }

                            //@ts-ignore
                            setSiteCover([...temp]);

                            //@ts-ignore
                            setListSiteCover([...res.data.GetAllSiteCover]);
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (
        viewGroupError ||
        staffError ||
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
        companiesError
    ) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
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
        if (meters.GetAllMeter != null && meters.GetAllMeter != undefined) {
            if (meters.GetAllMeter.length > 0) {
                for (const meter of meters.GetAllMeter) {
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
            transmitters.GetAllTransmitter != null &&
            transmitters.GetAllTransmitter != undefined
        ) {
            if (transmitters.GetAllTransmitter.length > 0) {
                for (const transmitter of transmitters.GetAllTransmitter) {
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
        if (loggers.GetAllLogger != null && loggers.GetAllLogger != undefined) {
            if (loggers.GetAllLogger.length > 0) {
                for (const logger of loggers.GetAllLogger) {
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
        //@ts-ignore
        const find = listSite.find((el) => el._id === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('OldId', find.OldId);
            //@ts-ignore
            setValue('Address', find.Address);
            //@ts-ignore
            setValue('Availability', find.Availability);
            //@ts-ignore
            setValue(
                'ChangeIndex',
                //@ts-ignore
                find.ChangeIndex == null ? '' : find.ChangeIndex,
            );
            //@ts-ignore
            setValue(
                'ChangeIndex1',
                //@ts-ignore
                find.ChangeIndex1 == null ? '' : find.ChangeIndex1,
            );
            //@ts-ignore
            setValue('Company', find.Company);
            //@ts-ignore
            setValue('CoverID', find.CoverID);
            //@ts-ignore
            setValue(
                'DateOfBatteryChange',
                //@ts-ignore
                find.DateOfBatteryChange !== null &&
                    //@ts-ignore
                    find.DateOfBatteryChange != ''
                    ? //@ts-ignore
                      new Date(find.DateOfBatteryChange)
                    : '',
            );
            //@ts-ignore
            setValue(
                'DateOfLoggerBatteryChange',
                //@ts-ignore
                find.DateOfLoggerBatteryChange !== null &&
                    //@ts-ignore
                    find.DateOfLoggerBatteryChange !== ''
                    ? //@ts-ignore
                      new Date(find.DateOfLoggerBatteryChange)
                    : '',
            );
            //@ts-ignore
            setValue(
                'DateOfLoggerChange',
                //@ts-ignore
                find.DateOfLoggerChange !== null &&
                    //@ts-ignore
                    find.DateOfLoggerChange !== ''
                    ? //@ts-ignore
                      new Date(find.DateOfLoggerChange)
                    : '',
            );
            //@ts-ignore
            setValue(
                'DateOfMeterChange',
                //@ts-ignore
                find.DateOfMeterChange !== null && find.DateOfMeterChange !== ''
                    ? //@ts-ignore
                      new Date(find.DateOfMeterChange)
                    : '',
            );
            //@ts-ignore
            setValue(
                'DateOfTransmitterBatteryChange',
                //@ts-ignore
                find.DateOfTransmitterBatteryChange !== null &&
                    //@ts-ignore
                    find.DateOfTransmitterBatteryChange !== ''
                    ? //@ts-ignore
                      new Date(find.DateOfTransmitterBatteryChange)
                    : '',
            );
            //@ts-ignore
            setValue(
                'DateOfTransmitterChange',
                //@ts-ignore
                find.DateOfTransmitterChange !== null &&
                    //@ts-ignore
                    find.DateOfTransmitterChange !== ''
                    ? //@ts-ignore
                      new Date(find.DateOfTransmitterChange)
                    : '',
            );
            //@ts-ignore
            setValue('Description', find.Description);
            //@ts-ignore
            setValue('DescriptionOfChange', find.DescriptionOfChange);
            //@ts-ignore
            setValue('Display', find.Display);
            //@ts-ignore
            setValue('District', find.District);
            //@ts-ignore
            setValue('Group', find.Group);
            //@ts-ignore
            setValue('Group2', find.Group2);
            //@ts-ignore
            setValue('Group3', find.Group3);
            //@ts-ignore
            setValue('Group4', find.Group4);
            //@ts-ignore
            setValue('Group5', find.Group5);
            //@ts-ignore
            setValue('IstDistributionCompany', find.IstDistributionCompany);
            //@ts-ignore
            setValue('IstDoNotCalculateReverse', find.IstDoNotCalculateReverse);
            //@ts-ignore
            setValue('Latitude', find.Latitude == null ? '' : find.Latitude);
            //@ts-ignore
            setValue('Longitude', find.Longitude == null ? '' : find.Longitude);
            //@ts-ignore
            setValue('Level', find.Level);
            //@ts-ignore
            setValue('Location', find.Location);
            //@ts-ignore
            setValue('Logger', find.Logger);
            //@ts-ignore
            setValue('Meter', find.Meter);
            //@ts-ignore
            setValue('MeterDirection', find.MeterDirection);
            //@ts-ignore
            setValue('ProductionCompany', find.ProductionCompany);
            //@ts-ignore
            setValue('Property', find.Property);
            //@ts-ignore
            setValue('QndDistributionCompany', find.QndDistributionCompany);
            //@ts-ignore
            setValue('QndDoNotCalculateReverse', find.QndDoNotCalculateReverse);
            //@ts-ignore
            setValue('StaffId', find.StaffId);
            //@ts-ignore
            setValue(
                'TakeoverDate',
                //@ts-ignore
                find.TakeoverDate !== null && find.TakeoverDate !== ''
                    ? //@ts-ignore
                      new Date(find.TakeoverDate)
                    : '',
            );
            //@ts-ignore
            setValue('Takeovered', find.Takeovered);
            //@ts-ignore
            setValue('Transmitter', find.Transmitter);
            //@ts-ignore
            setValue('UsingLogger', find.UsingLogger);
            //@ts-ignore
            setValue('ViewGroup', find.ViewGroup);
            //@ts-ignore
            setValue('Status', find.Status);

            //@ts-ignore
            if (
                //@ts-ignore
                find.Meter !== null &&
                //@ts-ignore
                find.Meter !== undefined &&
                //@ts-ignore
                find.Meter !== ''
            ) {
                //@ts-ignore
                const findMeter = listMeter.find(
                    //@ts-ignore
                    (el) => el.Serial === find.Meter,
                );

                if (findMeter !== undefined) {
                    //@ts-ignore
                    setValue(
                        'AccreditationDocument',
                        //@ts-ignore
                        findMeter.AccreditationDocument,
                    );
                    //@ts-ignore
                    setValue('AccreditationType', findMeter.AccreditationType);
                    //@ts-ignore
                    setValue(
                        'AccreditationExpireDate',
                        //@ts-ignore
                        findMeter.ExpiryDate === null
                            ? ''
                            : //@ts-ignore
                              new Date(findMeter.ExpiryDate),
                    );
                    //@ts-ignore
                    setValue(
                        'AccreditationDate',
                        //@ts-ignore
                        findMeter.AccreditatedDate === null
                            ? ''
                            : //@ts-ignore
                              new Date(findMeter.AccreditationDate),
                    );
                }
            }

            if (
                //@ts-ignore
                find.CoverID !== null &&
                //@ts-ignore
                find.CoverID !== undefined &&
                //@ts-ignore
                find.CoverID !== ''
            ) {
                //@ts-ignore
                const findCover = listSiteCover.find((el) => el.CoverID === e);

                if (findCover !== undefined) {
                    setSiteCoverValue(findCover);
                }
            }
        }
    };

    const setSiteCoverValue = (cover: any) => {
        setValue('CoverID', cover.CoverID);
        setValue('CoverH', cover.CoverH);
        setValue('CoverL', cover.CoverL);
        setValue('CoverMaterial', cover.CoverMaterial);
        setValue('CoverNL', cover.CoverNL);
        setValue('CoverW', cover.CoverW);
    };

    const onCoverIDChanged = (e: any) => {
        //@ts-ignore
        const find = listSiteCover.find((el) => el.CoverID === e);

        if (find !== undefined) {
            setSiteCoverValue(find);
        }
    };

    const createSiteObj = () => {
        const obj = {
            _id: getValues('_id'),
            OldId: getValues('OldId'),
            Location: getValues('Location'),
            Latitude:
                //@ts-ignore
                getValues('Latitude') == '' ? null : getValues('Latitude'),
            Longitude:
                //@ts-ignore
                getValues('Longitude') == '' ? null : getValues('Longitude'),
            ViewGroup: getValues('ViewGroup'),
            StaffId: getValues('StaffId'),
            Meter: getValues('Meter'),
            Transmitter: getValues('Transmitter'),
            Logger: getValues('Logger'),
            DateOfMeterChange: getValues('DateOfMeterChange'),
            DateOfLoggerChange: getValues('DateOfLoggerChange'),
            DateOfTransmitterChange: getValues('DateOfTransmitterChange'),
            DateOfBatteryChange: getValues('DateOfBatteryChange'),
            DateOfTransmitterBatteryChange: getValues(
                'DateOfTransmitterBatteryChange',
            ),
            DateOfLoggerBatteryChange: getValues('DateOfLoggerBatteryChange'),
            DescriptionOfChange: getValues('Description'),
            ChangeIndex:
                //@ts-ignore
                getValues('ChangeIndex') == ''
                    ? null
                    : getValues('ChangeIndex'),
            Level: getValues('Level'),
            Group: getValues('Group'),
            Company: getValues('Company'),
            TakeoverDate: getValues('TakeoverDate'),
            Takeovered: getValues('Takeovered'),
            Status: getValues('Status'),
            Availability: getValues('Availability'),
            Display: getValues('Display'),
            Property: getValues('Property'),
            UsingLogger: getValues('UsingLogger'),
            MeterDirection: getValues('MeterDirection'),
            ProductionCompany: getValues('ProductionCompany'),
            IstDistributionCompany: getValues('IstDistributionCompany'),
            QndDistributionCompany: getValues('QndDistributionCompany'),
            IstDoNotCalculateReverse: getValues('IstDoNotCalculateReverse'),
            QndDoNotCalculateReverse: getValues('QndDoNotCalculateReverse'),
            Description: getValues('Description'),
            ChangeIndex1:
                //@ts-ignore
                getValues('ChangeIndex1') == ''
                    ? null
                    : getValues('ChangeIndex1'),
            Group2: getValues('Group2'),
            Address: getValues('Address'),
            CoverID: getValues('CoverID'),
            Group3: getValues('Group3'),
            Group4: getValues('Group4'),
            Group5: getValues('Group5'),
            District: getValues('District'),
        };

        return obj;
    };

    const onInsertClicked = () => {
        const formValues = getValues();

        let isAllow = true;

        if (
            formValues._id === null ||
            formValues._id === undefined ||
            formValues._id === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            insertSite({
                variables: {
                    //@ts-ignore
                    site: createSiteObj(),
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (res.data.InsertSite !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm điểm lắp đặt thành công',
                            });
                            //@ts-ignore
                            setListSite((current) => [...current, formValues]);
                            // //@ts-ignore
                            // setSiteDataState((current) => [
                            //     ...current,
                            //     formValues._id,
                            // ]);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm điểm lắp đặt không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateSite = () => {
        const temp = [];

        for (const site of listSite) {
            //@ts-ignore
            if (site._id === getValues('_id')) {
                temp.push(getValues());
            } else {
                temp.push(site);
            }
        }

        return temp;
    };

    const onUpdateClicked = () => {
        const formValues = getValues();

        let isAllow = true;

        if (
            formValues._id === null ||
            formValues._id === undefined ||
            formValues._id === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã vị trí!!!',
            });

            isAllow = false;
        }

        if (isAllow == true) {
            updateSite({
                variables: {
                    //@ts-ignore
                    site: createSiteObj(),
                },
            })
                .then((res) => {
                    if (res.data !== null && res.data !== undefined) {
                        if (res.data.UpdateSite !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật điểm lắp đặt thành công',
                            });
                            //@ts-ignore
                            setListSite([...handelUpdateSite()]);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật điểm lắp đặt không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteSite = () => {
        //@ts-ignore
        const temp = [];

        for (const site of listSite) {
            //@ts-ignore
            if (site._id !== getValues('_id')) {
                temp.push(site);
            }
        }

        //@ts-ignore
        return temp;
    };

    const handelDeleteSiteDataState = () => {
        //@ts-ignore
        const temp = [];

        for (const site of listSite) {
            //@ts-ignore
            if (site._id !== getValues('_id')) {
                //@ts-ignore
                temp.push(site._id);
            }
        }

        //@ts-ignore
        return temp;
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
                const formValues = getValues();

                let isAllow = true;

                if (
                    formValues._id === null ||
                    formValues._id === undefined ||
                    formValues._id === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có mã vị trí!!!',
                    });

                    isAllow = false;
                }

                if (isAllow == true) {
                    deleteSite({
                        variables: {
                            //@ts-ignore
                            site: createSiteObj(),
                        },
                    })
                        .then((res) => {
                            if (res.data !== null && res.data !== undefined) {
                                if (
                                    res.data.DeleteSite !== null &&
                                    res.data.DeleteSite !== undefined
                                ) {
                                    if (res.data.DeleteSite > 0) {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Successfull',
                                            text: 'Xóa điểm lắp đặt thành công',
                                        });

                                        //@ts-ignore
                                        setListSite([...handelDeleteSite()]);

                                        //@ts-ignore
                                        setSiteDataState([
                                            ...handelDeleteSiteDataState(),
                                        ]);

                                        reset();
                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Xóa điểm lắp đặt không thành công',
                                        });
                                    }
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa điểm lắp đặt không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    const onDocumentUploadClicked = () => {
        Swal.fire({
            icon: 'success',
            title: 'Successfull',
            text: 'Upload tài liệu điểm lắp đặt thành công',
        });
    };

    const onDocumentDownloadClicked = () => {};

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col md={4}>
                    {siteDataState != undefined ? (
                        <Controller
                            name="_id"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã vị trí"
                                    //@ts-ignore
                                    data={siteDataState}
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
                                        setSiteDataState((current) => [
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
                                precision={8}
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
                    {oldIdData !== undefined ? (
                        <Controller
                            name="OldId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã vị trí cũ"
                                    //@ts-ignore
                                    data={oldIdData}
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
                                        setOldIdData((current) => [
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
                                precision={8}
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
                        onClick={onDocumentUploadClicked}
                    >
                        Upload
                    </Button>
                    <Button
                        variant="filled"
                        color="green"
                        onClick={onDocumentDownloadClicked}
                    >
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
                                //@ts-ignore
                                checked={getValues('Display')}
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
                                        //@ts-ignore
                                        checked={getValues(
                                            'IstDoNotCalculateReverse',
                                        )}
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
                                //@ts-ignore
                                checked={getValues('Property')}
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
                                        //@ts-ignore
                                        checked={getValues(
                                            'QndDoNotCalculateReverse',
                                        )}
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
                                //@ts-ignore
                                checked={getValues('UsingLogger')}
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
                                //@ts-ignore
                                checked={getValues('Takeovered')}
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
                                    data={siteCover}
                                    {...field}
                                    onChange={onCoverIDChanged}
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
            </Grid>
        </motion.div>
    );
};

export default SiteConfigPage;
