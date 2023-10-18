import { MultiSelect, Text, Grid, Col, Button, Center } from '@mantine/core';

import { useEffect, useState } from 'react';

import {
    useGetAllSiteLevelLazyQuery,
    useGetAllSiteGroupLazyQuery,
    useGetAllSiteGroup2SLazyQuery,
    useGetMeterModelLazyQuery,
    useGetCompaniesLazyQuery,
    useGetAllSiteStatusLazyQuery,
    useGetAllSiteAvailabilitiesLazyQuery,
    useGetLoggerModelLazyQuery,
    useGetAllMeterAccreditationTypeLazyQuery,
    useGetStatisticCustomChoiceSiteLazyQuery,
} from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { checkAdminViewerRole, convertTimeStampToDate } from '../utils/utils';

const StatisticCustomChoiceSitePage = () => {
    const [listDataYN, setListDataYN] = useState(['Y', 'N']);
    const [listDataSiteLevel, setListDataSiteLevel] = useState([]);
    const [listDataSiteGroup, setListDataSiteGroup] = useState([]);
    const [listDataSiteGroup2S, setListDataSiteGroup2S] = useState([]);
    const [listDataMeterModel, setListDataMeterModel] = useState([]);
    const [listCompanies, setListCompanies] = useState([]);
    const [listDataSiteStatus, setListDataSiteStatus] = useState([]);
    const [listDataSiteAvai, setListDataSiteAvai] = useState([]);
    const [listDataLoggerModel, setListDataLoggerModel] = useState([]);
    const [listDataMeterAcc, setListDataMeterAcc] = useState([]);

    const [valueSiteLevel, setValueSiteLevel] = useState<string[]>([]);
    const [valueSiteGroup, setValueSiteGroup] = useState<string[]>([]);
    const [valueSiteGroup2S, setValueSiteGroup2S] = useState<string[]>([]);
    const [valueMeterModel, setValueMeterModel] = useState<string[]>([]);
    const [valueCompanies, setValueCompanies] = useState<string[]>([]);
    const [valueSiteStatus, setValueSiteStatus] = useState<string[]>([]);
    const [valueSiteAvai, setValueSiteAvai] = useState<string[]>([]);
    const [valueCalcCompanies, setValueCalcCompanies] = useState<string[]>([]);
    const [valueTakeoverd, setValueTakeoverd] = useState<string[]>([]);
    const [valueProperty, setValueProperty] = useState<string[]>([]);
    const [valueUsingLogger, setValueUsingLogger] = useState<string[]>([]);
    const [valueLoggerModel, setValueLoggerModel] = useState<string[]>([]);
    const [valueDataMeterAcc, setValueDataMeterAcc] = useState<string[]>([]);
    const [valueApprovaled, setValueApprovaled] = useState<string[]>([]);

    const [statisticData, setStatisticData] = useState([]);
    const [data, setData] = useState([]);

    const [getSiteLevel, {}] = useGetAllSiteLevelLazyQuery();
    const [getSiteGroup, {}] = useGetAllSiteGroupLazyQuery();
    const [getSiteGroup2S, {}] = useGetAllSiteGroup2SLazyQuery();
    const [getMeterModel, {}] = useGetMeterModelLazyQuery();
    const [getCompanies, {}] = useGetCompaniesLazyQuery();
    const [getSiteStatus, {}] = useGetAllSiteStatusLazyQuery();
    const [getSiteAvai, {}] = useGetAllSiteAvailabilitiesLazyQuery();
    const [getLoggerModel, {}] = useGetLoggerModelLazyQuery();
    const [getMeterAcc, {}] = useGetAllMeterAccreditationTypeLazyQuery();
    const [getStatisticCustomSite, {}] =
        useGetStatisticCustomChoiceSiteLazyQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getSiteLevel()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteLevel !== null &&
                    res?.data?.GetAllSiteLevel !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteLevel) {
                        if (item?.Level !== null && item?.Level !== undefined) {
                            temp.push(item.Level);
                        }
                    }

                    //@ts-ignore
                    setListDataSiteLevel([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSiteGroup()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteGroup !== null &&
                    res?.data?.GetAllSiteGroup !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteGroup) {
                        if (item?.Group !== null && item?.Group !== undefined) {
                            temp.push(item?.Group);
                        }
                    }

                    //@ts-ignore
                    setListDataSiteGroup([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSiteGroup2S()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteGroup2S !== null &&
                    res?.data?.GetAllSiteGroup2S !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteGroup2S) {
                        if (item?.Group !== null && item?.Group !== undefined) {
                            temp.push(item?.Group);
                        }
                    }
                    //@ts-ignore
                    setListDataSiteGroup2S([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getMeterModel()
            .then((res) => {
                if (
                    res?.data?.GetMeterModel !== null &&
                    res?.data?.GetMeterModel !== undefined
                ) {
                    //@ts-ignore
                    setListDataMeterModel([...res.data?.GetMeterModel]);
                }
            })
            .catch((err) => console.log(err));

        getCompanies()
            .then((res) => {
                if (
                    res?.data?.GetCompanies !== null &&
                    res?.data?.GetCompanies !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetCompanies) {
                        temp.push(item.Company);
                    }

                    //@ts-ignore
                    setListCompanies([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSiteStatus()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteStatus !== null &&
                    res?.data?.GetAllSiteStatus !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteStatus) {
                        if (
                            item?.Status !== null &&
                            item?.Status !== undefined
                        ) {
                            temp.push(item.Status);
                        }
                    }

                    //@ts-ignore
                    setListDataSiteStatus([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSiteAvai()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteAvailabilities !== null &&
                    res?.data?.GetAllSiteAvailabilities !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteAvailabilities) {
                        if (
                            item?.Availability !== null &&
                            item?.Availability !== undefined
                        ) {
                            temp.push(item.Availability);
                        }
                    }

                    //@ts-ignore
                    setListDataSiteAvai([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getLoggerModel()
            .then((res) => {
                if (
                    res?.data?.GetLoggerModel !== null &&
                    res?.data?.GetLoggerModel !== undefined
                ) {
                    //@ts-ignore
                    setListDataLoggerModel([...res.data?.GetLoggerModel]);
                }
            })
            .catch((err) => console.log(err));

        getMeterAcc()
            .then((res) => {
                if (
                    res?.data?.GetAllMeterAccreditationType !== null &&
                    res?.data?.GetAllMeterAccreditationType !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllMeterAccreditationType) {
                        temp.push(item?.AccreditationType);
                    }

                    //@ts-ignore
                    setListDataMeterAcc([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getStatisticCustomSite()
            .then((res) => {
                if (
                    res?.data?.GetStatisticCustomChoiceSite !== null &&
                    res?.data?.GetStatisticCustomChoiceSite !== undefined
                ) {
                    //@ts-ignore
                    setStatisticData([
                        ...res.data.GetStatisticCustomChoiceSite,
                    ]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const onViewClicked = () => {
        let temp = statisticData;

        if (valueSiteLevel.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteLevel.indexOf(el.Level) !== -1,
            );
        }
        if (valueSiteGroup.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteGroup.indexOf(el.Group) !== -1,
            );
        }
        if (valueSiteGroup2S.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteGroup2S.indexOf(el.Group2S) !== -1,
            );
        }
        if (valueMeterModel.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueMeterModel.indexOf(el.Model) !== -1,
            );
        } else {
            const t = [...listDataMeterModel];
            temp = temp.filter(
                //@ts-ignore
                (el) => t.indexOf(el.Model) !== -1,
            );
        }
        if (valueCompanies.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueCompanies.indexOf(el.Company) !== -1,
            );
        } else {
            const t = [...listCompanies, ''];
            temp = temp.filter(
                //@ts-ignore
                (el) => t.indexOf(el.Company) !== -1,
            );
        }

        if (valueSiteStatus.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteStatus.indexOf(el.Status) !== -1,
            );
        }
        if (valueSiteAvai.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteAvai.indexOf(el.Availability) !== -1,
            );
        }
        if (valueCalcCompanies.length > 0) {
            temp = temp.filter(
                (el) =>
                    valueCalcCompanies.indexOf(
                        //@ts-ignore
                        el.ProductionCompany,
                    ) !== -1 ||
                    valueCalcCompanies.indexOf(
                        //@ts-ignore
                        el.IstDistributionCompany,
                    ) !== -1 ||
                    valueCalcCompanies.indexOf(
                        //@ts-ignore
                        el.QndDistributionCompany,
                    ) !== -1,
            );
        } else {
            const t = [...listCompanies, ''];
            temp = temp.filter(
                (el) =>
                    t.indexOf(
                        //@ts-ignore
                        el.ProductionCompany,
                    ) !== -1 ||
                    t.indexOf(
                        //@ts-ignore
                        el.IstDistributionCompany,
                    ) !== -1 ||
                    t.indexOf(
                        //@ts-ignore
                        el.QndDistributionCompany,
                    ) !== -1,
            );
        }
        if (valueTakeoverd.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueTakeoverd) {
                if (item === 'Y') {
                    t.push(true);
                } else {
                    t.push(false);
                }
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.Takeovered) !== -1);
        }
        if (valueProperty.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueProperty) {
                if (item === 'Y') {
                    t.push(true);
                } else {
                    t.push(false);
                }
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.Property) !== -1);
        }
        if (valueUsingLogger.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueUsingLogger) {
                if (item === 'Y') {
                    t.push(true);
                } else {
                    t.push(false);
                }
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.UsingLogger) !== -1);
        }
        if (valueLoggerModel.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueLoggerModel.indexOf(el.LoggerModel) !== -1,
            );
        }
        if (valueDataMeterAcc.length > 0) {
            temp = temp.filter(
                (el) =>
                    //@ts-ignore
                    valueDataMeterAcc.indexOf(el.AccreditationType) !== -1,
            );
        } else {
            temp = temp.filter(
                (el) =>
                    //@ts-ignore
                    listDataMeterAcc.indexOf(el.AccreditationType) !== -1,
            );
        }
        if (valueApprovaled.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueApprovaled) {
                if (item === 'Y') {
                    t.push(true);
                } else {
                    t.push(false);
                }
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.Approved) !== -1);
        }

        temp.sort((a: any, b: any) => {
            const idA = a._id.toLowerCase();
            const idB = b._id.toLowerCase();

            if (idA > idB) {
                return 1;
            }

            if (idA < idB) {
                return -1;
            }

            return 0;
        });

        const result = [];

        let count = 1;
        for (const item of temp) {
            const obj = {
                STT: count++,
                //@ts-ignore
                ...item,
            };

            result.push(obj);
        }

        const objTitle = {
            STT: '',
            _id: '',
            Location: 'Thống Kê Tùy Chọn Điểm Lắp Đặt',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        const obj = {
            STT: 'STT',
            _id: 'Mã vị trí',
            Location: 'Vị trí',
            DeviceId: 'Ma TB',
            Meter: 'Đồng hồ',
            Marks: 'Hiệu',
            Size: 'Cở',
            Model: 'Model',
            Transmitter: 'Bộ hiển thị',
            Logger: 'Logger',
            AccreditationDocument: 'Giấy KĐ',
            AccreditedDate: 'Ngày kiểm định',
            ExpiryDate: 'Ngày hết hạn',
            DateOfMeterChange: 'Ngày thay/ bàn giao',
            Level: 'Cấp ĐH',
            Group: 'Nhóm ĐH',
            Group2S: 'Nhóm ĐH 2',
            Company: 'Quản lý',
            Availability: 'Tình trạng',
            Status: 'Trạng thái',
            LoggerModel: 'Logger Model',
            Description: 'Ghi chú',
        };

        const objDSD = {
            STT: 'DSD',
            _id: 'Đang sử dụng',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: 'Ngày ...... tháng ...... năm ......',
        };

        const objHD = {
            STT: 'HD',
            _id: 'Hoạt động',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: 'ĐỘI QUẢN LÝ ĐỒNG HỒ TỔNG',
        };

        const objHH = {
            STT: 'HH',
            _id: 'Hư hỏng',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        const objXN = {
            STT: 'XN',
            _id: 'Xí nghiệp truyền dẫn nước sạch',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        const objDA = {
            STT: 'DA',
            _id: 'Ban quản lý dự án',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        const objHM = {
            STT: 'DA',
            _id: 'Công ty nước ngầm Sài Gòn',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        const objTA = {
            STT: 'TA',
            _id: 'Xí nghiệp cấp nước Trung An',
            Location: '',
            DeviceId: '',
            Meter: '',
            Marks: '',
            Size: '',
            Model: '',
            Transmitter: '',
            Logger: '',
            AccreditationDocument: '',
            AccreditedDate: '',
            ExpiryDate: '',
            DateOfMeterChange: '',
            Level: '',
            Group: '',
            Group2S: '',
            Company: '',
            Availability: '',
            Status: '',
            LoggerModel: '',
            Description: '',
        };

        setData([
            //@ts-ignore
            objTitle,
            //@ts-ignore
            obj,
            //@ts-ignore
            ...result,
            //@ts-ignore
            objDSD,
            //@ts-ignore
            objHD,
            //@ts-ignore
            objHH,
            //@ts-ignore
            objXN,
            //@ts-ignore
            objDA,
            //@ts-ignore
            objHM,
            //@ts-ignore
            objTA,
        ]);
    };

    const conditionalRowStyles = [
        {
            when: (row: any) => row.STT === 'STT',
            style: {
                color: '#2980b9',
                fontWeight: 'bold',
            },
        },
        {
            when: (row: any) => row.STT === '',
            style: {
                fontWeight: 'bolder',
            },
        },
    ];

    const columns = [
        {
            name: 'STT',
            selector: (row: any) => row.STT,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                STT
            </div>`
                    : row.STT,
            width: '80px',
        },
        {
            name: 'Mã vị trí',
            selector: (row: any) => row._id,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Mã vị trí
            </div>`
                    : `<div style="mso-number-format:'\@'">
                    ${row._id}
            </div>`,
            width: '150px',
        },
        {
            name: 'Vị trí',
            selector: (row: any) => row.Location,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Vị trí
    </div>`
                    : row.STT === ''
                    ? `<div style="color: blue; font-weight: bold; font-size: 18px">
                        ${row.Location}
                        </div>`
                    : row.Location,
            width: '500px',
        },
        {
            name: 'Ma TB',
            selector: (row: any) => row.DeviceId,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ma TB
    </div>`
                    : row.DeviceId,
            width: '150px',
        },
        {
            name: 'Đồng hồ',
            selector: (row: any) => row.Meter,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Đồng hồ
</div>`
                    : row.Meter,
            width: '150px',
        },
        {
            name: 'Hiệu',
            selector: (row: any) => row.Marks,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Hiệu
</div>`
                    : row.Marks,
            width: '100px',
        },
        {
            name: 'Cỡ',
            selector: (row: any) => row.Size,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Cỡ
</div>`
                    : row.Size,
            width: '100px',
        },
        {
            name: 'Model',
            selector: (row: any) => row.Model,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Model
</div>`
                    : row.Model,
            width: '100px',
        },
        {
            name: 'Bộ hiển thị',
            selector: (row: any) => row.Transmitter,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Bộ hiển thị
</div>`
                    : row.Transmitter,
            width: '100px',
        },
        {
            name: 'Logger',
            selector: (row: any) => row.Logger,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Logger
</div>`
                    : row.Logger,
            width: '100px',
        },
        {
            name: 'Giấy kiểm định',
            selector: (row: any) => row.AccreditationDocument,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Giấy kiểm định
</div>`
                    : row.AccreditationDocument,
            width: '100px',
        },
        {
            name: 'Ngày kiểm định',
            selector: (row: any) => row.AccreditedDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày kiểm định
</div>`
                    : convertTimeStampToDate(row.AccreditedDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày kiểm định'
                    : convertTimeStampToDate(row.AccreditedDate),
        },
        {
            name: 'Ngày hết hạn',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày hết hạn
</div>`
                    : convertTimeStampToDate(row.ExpiryDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? ' Ngày hết hạn'
                    : convertTimeStampToDate(row.ExpiryDate),
        },
        {
            name: 'Ngày thay/ bàn giao',
            selector: (row: any) => row.DateOfMeterChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Ngày thay/ bàn giao
</div>`
                    : convertTimeStampToDate(row.DateOfMeterChange),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày thay/ bàn giao'
                    : convertTimeStampToDate(row.DateOfMeterChange),
        },
        {
            name: 'Cấp DH',
            selector: (row: any) => row.Level,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Cấp DH
</div>`
                    : row.Level,
            width: '100px',
        },
        {
            name: 'Nhóm ĐH',
            selector: (row: any) => row.Group,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Nhóm ĐH
</div>`
                    : row.Group,
            width: '100px',
        },
        {
            name: 'Nhóm ĐH 2',
            selector: (row: any) => row.Group2S,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Nhóm ĐH 2
</div>`
                    : row.Group2S,
            width: '100px',
        },
        {
            name: 'Quản lý',
            selector: (row: any) => row.Company,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Quản lý
</div>`
                    : row.Company,
            width: '100px',
        },
        {
            name: 'Tình trạng',
            selector: (row: any) => row.Availability,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Tình trạng
</div>`
                    : row.Availability,
            width: '100px',
        },
        {
            name: 'Trạng thái',
            selector: (row: any) => row.Status,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Trạng thái
</div>`
                    : row.Status,
            width: '100px',
        },
        {
            name: 'Model Logger',
            selector: (row: any) => row.LoggerModel,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Model Logger
</div>`
                    : row.LoggerModel,
            width: '100px',
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.Description,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Ghi chú
    </div>`
                    : row.STT === 'DSD'
                    ? `<div style="text-align: center">
    ${row.Description}
</div>`
                    : row.STT === 'HD'
                    ? `<div style="font-weight: bold; font-size: 15px;text-align: center">
    ${row.Description}
</div>`
                    : row.Description,
        },
    ];

    const tableData = {
        columns,
        data,
        fileName: 'Thống Kê Tùy Chọn Điểm Lắp Đặt',
    };

    return (
        <Grid>
            <Col md={2}>
                {listDataSiteLevel ? (
                    <MultiSelect
                        label="Cấp đồng hồ"
                        placeholder="Pick value"
                        data={listDataSiteLevel}
                        clearable
                        searchable
                        onChange={(e) => setValueSiteLevel(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataSiteGroup ? (
                    <MultiSelect
                        label="Nhóm ĐH"
                        placeholder="Pick value"
                        data={listDataSiteGroup}
                        clearable
                        searchable
                        onChange={(e) => setValueSiteGroup(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataSiteGroup2S ? (
                    <MultiSelect
                        label="Nhóm ĐH (2)"
                        placeholder="Pick value"
                        data={listDataSiteGroup2S}
                        clearable
                        searchable
                        onChange={(e) => setValueSiteGroup2S(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataMeterModel ? (
                    <MultiSelect
                        label="Model ĐH"
                        placeholder="Pick value"
                        data={listDataMeterModel}
                        clearable
                        searchable
                        onChange={(e) => setValueMeterModel(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listCompanies ? (
                    <MultiSelect
                        label="Quản lý"
                        placeholder="Pick value"
                        data={listCompanies}
                        clearable
                        searchable
                        onChange={(e) => setValueCompanies(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataSiteStatus ? (
                    <MultiSelect
                        label="Trạng thái"
                        placeholder="Pick value"
                        data={listDataSiteStatus}
                        clearable
                        searchable
                        onChange={(e) => setValueSiteStatus(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataSiteAvai ? (
                    <MultiSelect
                        label="Tình trạng"
                        placeholder="Pick value"
                        data={listDataSiteAvai}
                        clearable
                        searchable
                        onChange={(e) => setValueSiteAvai(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listCompanies ? (
                    <MultiSelect
                        label="Tính cho"
                        placeholder="Pick value"
                        data={listCompanies}
                        clearable
                        searchable
                        onChange={(e) => setValueCalcCompanies(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataYN ? (
                    <MultiSelect
                        label="Bàn giao"
                        placeholder="Pick value"
                        data={listDataYN}
                        clearable
                        searchable
                        onChange={(e) => setValueTakeoverd(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataYN ? (
                    <MultiSelect
                        label="Tài sản"
                        placeholder="Pick value"
                        data={listDataYN}
                        clearable
                        searchable
                        onChange={(e) => setValueProperty(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataYN ? (
                    <MultiSelect
                        label="Sử dụng logger"
                        placeholder="Pick value"
                        data={listDataYN}
                        clearable
                        searchable
                        onChange={(e) => setValueUsingLogger(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataLoggerModel ? (
                    <MultiSelect
                        label="Model Logger"
                        placeholder="Pick value"
                        data={listDataLoggerModel}
                        clearable
                        searchable
                        onChange={(e) => setValueLoggerModel(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataMeterAcc ? (
                    <MultiSelect
                        label="Loại kiểm định"
                        placeholder="Pick value"
                        data={listDataMeterAcc}
                        clearable
                        searchable
                        onChange={(e) => setValueDataMeterAcc(e)}
                    />
                ) : null}
            </Col>
            <Col md={2}>
                {listDataYN ? (
                    <MultiSelect
                        label="Đã phê duyệt"
                        placeholder="Pick value"
                        data={listDataYN}
                        clearable
                        searchable
                        onChange={(e) => setValueApprovaled(e)}
                    />
                ) : null}
            </Col>
            {isAdminViewer === false ? (
                <Col span={12}>
                    <Center>
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onViewClicked}
                        >
                            Xem
                        </Button>
                    </Center>
                </Col>
            ) : null}
            <Col span={12} style={{ maxWidth: '99%' }}>
                <DataTableExtensions {...tableData}>
                    <DataTable
                        noHeader
                        noTableHead
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>
                                    Thống Kê Tùy Chọn Điểm Lắp Đặt
                                </Text>
                            </Center>
                        }
                        paginationPerPage={50}
                        sortIcon={<IconArrowBadgeUpFilled />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover={true}
                        dense={false}
                        conditionalRowStyles={conditionalRowStyles}
                    />
                </DataTableExtensions>
            </Col>
        </Grid>
    );
};

export default StatisticCustomChoiceSitePage;
