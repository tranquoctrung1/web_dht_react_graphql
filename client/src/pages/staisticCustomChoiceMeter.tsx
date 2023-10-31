import { MultiSelect, Text, Grid, Col, Button, Center } from '@mantine/core';

import { useEffect, useState } from 'react';

import {
    useGetMeterProviderLazyQuery,
    useGetMeterNationalitiesLazyQuery,
    useGetMeterMarksLazyQuery,
    useGetMeterSizeLazyQuery,
    useGetMeterModelLazyQuery,
    useGetCompaniesLazyQuery,
    useGetAllSiteStatusLazyQuery,
    useGetAllDeviceStatusLazyQuery,
    useGetStatisticCustomChoiceMeterLazyQuery,
} from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { checkAdminViewerRole, convertTimeStampToDate } from '../utils/utils';

import { motion } from 'framer-motion';

const StatisticCustomChoiceMeterPage = () => {
    const [listDataYN, setListDataYN] = useState(['Y', 'N']);
    const [listProvider, setListProvider] = useState([]);
    const [listNation, setListNation] = useState([]);
    const [listMarks, setListMarks] = useState([]);
    const [listModel, setListModel] = useState([]);
    const [listCompanies, setListCompanies] = useState([]);
    const [listDataSiteStatus, setListDataSiteStatus] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [listDeviceStatus, setListDeviceStatus] = useState([]);

    const [valueProvider, setValueProvider] = useState<string[]>([]);
    const [valueNation, setValueNation] = useState<string[]>([]);
    const [valueMarks, setValueMarks] = useState<string[]>([]);
    const [valueModel, setValueModel] = useState<string[]>([]);
    const [valueCompanies, setValueCompanies] = useState<string[]>([]);
    const [valueSiteStatus, setValueSiteStatus] = useState<string[]>([]);
    const [valueSize, setValueSize] = useState<string[]>([]);
    const [valueDeviceStatus, setValueDeviceStatus] = useState<string[]>([]);
    const [valueInstalled, setValueInstalled] = useState<string[]>([]);

    const [statisticData, setStatisticData] = useState([]);
    const [data, setData] = useState([]);

    const [getProvider, {}] = useGetMeterProviderLazyQuery();
    const [getNation, {}] = useGetMeterNationalitiesLazyQuery();
    const [getMarks, {}] = useGetMeterMarksLazyQuery();
    const [getModel, {}] = useGetMeterModelLazyQuery();
    const [getCompanies, {}] = useGetCompaniesLazyQuery();
    const [getSiteStatus, {}] = useGetAllSiteStatusLazyQuery();
    const [getSize, {}] = useGetMeterSizeLazyQuery();
    const [getDeviceStatus, {}] = useGetAllDeviceStatusLazyQuery();
    const [getStatisticCustomMeter, {}] =
        useGetStatisticCustomChoiceMeterLazyQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getProvider()
            .then((res) => {
                if (
                    res?.data?.GetMeterProvider !== null &&
                    res?.data?.GetMeterProvider !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetMeterProvider) {
                        if (item !== null && item !== undefined) {
                            temp.push(item);
                        }
                    }

                    //@ts-ignore
                    setListProvider([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getNation()
            .then((res) => {
                if (
                    res?.data?.GetMeterNationalities !== null &&
                    res?.data?.GetMeterNationalities !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetMeterNationalities) {
                        if (item !== null && item !== undefined) {
                            temp.push(item);
                        }
                    }

                    //@ts-ignore
                    setListNation([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getMarks()
            .then((res) => {
                if (
                    res?.data?.GetMeterMarks !== null &&
                    res?.data?.GetMeterMarks !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetMeterMarks) {
                        if (item !== null && item !== undefined) {
                            temp.push(item);
                        }
                    }

                    //@ts-ignore
                    setListMarks([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getSize()
            .then((res) => {
                if (
                    res?.data?.GetMeterSize !== null &&
                    res?.data?.GetMeterSize !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetMeterSize) {
                        if (item !== null && item !== undefined) {
                            temp.push(item.toString());
                        }
                    }

                    //@ts-ignore
                    setListSize([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getModel()
            .then((res) => {
                if (
                    res?.data?.GetMeterModel !== null &&
                    res?.data?.GetMeterModel !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetMeterModel) {
                        if (item !== null && item !== undefined) {
                            temp.push(item);
                        }
                    }

                    //@ts-ignore
                    setListModel([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getDeviceStatus()
            .then((res) => {
                if (
                    res?.data?.GetAllDeviceStatus !== null &&
                    res?.data?.GetAllDeviceStatus !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetAllDeviceStatus) {
                        if (
                            item?.Status !== null &&
                            item?.Status !== undefined
                        ) {
                            temp.push(item.Status);
                        }
                    }

                    //@ts-ignore
                    setListDeviceStatus([...temp]);
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

                    for (const item of res.data?.GetAllSiteStatus) {
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

        getCompanies()
            .then((res) => {
                if (
                    res?.data?.GetCompanies !== null &&
                    res?.data?.GetCompanies !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data?.GetCompanies) {
                        if (
                            item?.Company !== null &&
                            item?.Company !== undefined
                        ) {
                            temp.push(item.Company);
                        }
                    }

                    //@ts-ignore
                    setListCompanies([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getStatisticCustomMeter()
            .then((res) => {
                if (
                    res?.data?.GetStatisticCustomChoiceMeter !== null &&
                    res?.data?.GetStatisticCustomChoiceMeter !== undefined
                ) {
                    //@ts-ignore
                    setStatisticData([
                        ...res.data.GetStatisticCustomChoiceMeter,
                    ]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

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
            name: 'Số Seri',
            selector: (row: any) => row.Serial,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Số Seri
</div>`
                    : `<div style="mso-number-format:'\@'">
                    ${row.Serial}
            </div>`,
        },
        {
            name: 'Nhà SX',
            selector: (row: any) => row.Provider,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Nhà SX
</div>`
                    : row.Provider,
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
            name: 'Lắp đặt',
            selector: (row: any) => row.Installed,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Lắp đặt
</div>`
                    : row.Installed === true
                    ? 'Y'
                    : row.Installed === false
                    ? 'N'
                    : row.Installed,
            width: '100px',
            format: (row: any) =>
                row.Installed === true
                    ? 'Y'
                    : row.Installed === false
                    ? 'N'
                    : row.Installed,
        },
        {
            name: 'Mã vị trí',
            selector: (row: any) => row.SiteId,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Mã vị trí
    </div>`
                    : `<div style="mso-number-format:'\@'">
            ${row.SiteId}
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
            width: '300px',
        },
        {
            name: 'Ngày nhập kho',
            selector: (row: any) => row.ReceiptDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày nhập kho
</div>`
                    : convertTimeStampToDate(row.ReceiptDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày nhập kho'
                    : convertTimeStampToDate(row.ReceiptDate),
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
                    ? 'Ngày hết hạn'
                    : convertTimeStampToDate(row.ExpiryDate),
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
            name: 'Tình trạng',
            selector: (row: any) => row.SiteStatus,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Tình trạng
</div>`
                    : row.SiteStatus,
            width: '100px',
        },
        {
            name: 'Quản lý',
            selector: (row: any) => row.SiteCompany,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Quản lý
</div>`
                    : row.SiteCompany,
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
                    : row.Description,
        },
    ];

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

    const tableData = {
        columns,
        data,
        fileName: 'Thống Kê Tùy Chọn Đồng Hồ',
    };

    const onViewClicked = () => {
        let temp = statisticData;

        if (valueProvider.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueProvider.indexOf(el.Provider) !== -1,
            );
        }
        if (valueNation.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueNation.indexOf(el.Nationality) !== -1,
            );
        }
        if (valueMarks.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueMarks.indexOf(el.Marks) !== -1,
            );
        }
        if (valueSize.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueSize) {
                t.push(parseInt(item));
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.Size) !== -1);
        }
        if (valueModel.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueModel.indexOf(el.Model) !== -1,
            );
        }
        if (valueDeviceStatus.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueDeviceStatus.indexOf(el.Status) !== -1,
            );
        }
        if (valueInstalled.length > 0) {
            //@ts-ignore
            const t = [];

            for (const item of valueInstalled) {
                if (item === 'Y') {
                    t.push(true);
                } else {
                    t.push(false);
                }
            }
            //@ts-ignore
            temp = temp.filter((el) => t.indexOf(el.Installed) !== -1);
        }
        if (valueSiteStatus.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueSiteStatus.indexOf(el.SiteStatus) !== -1,
            );
        }
        if (valueCompanies.length > 0) {
            temp = temp.filter(
                //@ts-ignore
                (el) => valueCompanies.indexOf(el.SiteCompany) !== -1,
            );
        } else {
            const t = [...listCompanies, ''];
            temp = temp.filter(
                //@ts-ignore
                (el) => t.indexOf(el.SiteCompany) !== -1,
            );
        }

        temp.sort((a: any, b: any) => {
            const idA = a.Serial.toLowerCase();
            const idB = b.Serial.toLowerCase();

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
            Serial: '',
            Provider: '',
            Marks: '',
            Size: '',
            Model: '',
            Installed: '',
            SiteId: '',
            Location: 'Thống Kê Tùy Chọn Đồng Hồ',
            ReceiptDate: '',
            AccreditedDate: '',
            ExpiryDate: '',
            Status: '',
            SiteStatus: '',
            SiteCompany: '',
            Description: '',
        };

        const obj = {
            STT: 'STT',
            Serial: 'Serial',
            Provider: 'Nhà sản xuất',
            Marks: 'Hiệu',
            Size: 'Cỡ',
            Model: 'Model',
            Installed: 'Lắp đặt',
            SiteId: 'Mã vị trí',
            Location: 'Vị trí',
            ReceiptDate: 'Ngày nhập kho',
            AccreditedDate: 'Ngày kiểm định',
            ExpiryDate: 'Ngày hết hạn',
            Status: 'Trạng thái',
            SiteStatus: 'Tình trạng',
            SiteCompany: 'Quản lý',
            Description: 'Ghi chú',
        };

        //@ts-ignore
        setData([objTitle, obj, ...result]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col md={2}>
                    {listProvider ? (
                        <MultiSelect
                            label="Nhà sản xuất"
                            placeholder="Pick value"
                            data={listProvider}
                            clearable
                            searchable
                            onChange={(e) => setValueProvider(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listNation ? (
                        <MultiSelect
                            label="Nước sản xuất"
                            placeholder="Pick value"
                            data={listNation}
                            clearable
                            searchable
                            onChange={(e) => setValueNation(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listMarks ? (
                        <MultiSelect
                            label="Hiệu"
                            placeholder="Pick value"
                            data={listMarks}
                            clearable
                            searchable
                            onChange={(e) => setValueMarks(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listSize ? (
                        <MultiSelect
                            label="Cở"
                            placeholder="Pick value"
                            data={listSize}
                            clearable
                            searchable
                            onChange={(e) => setValueSize(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listModel ? (
                        <MultiSelect
                            label="Model"
                            placeholder="Pick value"
                            data={listModel}
                            clearable
                            searchable
                            onChange={(e) => setValueModel(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listDeviceStatus ? (
                        <MultiSelect
                            label="Tình trạng"
                            placeholder="Pick value"
                            data={listDeviceStatus}
                            clearable
                            searchable
                            onChange={(e) => setValueDeviceStatus(e)}
                        />
                    ) : null}
                </Col>
                <Col md={2}>
                    {listDataYN ? (
                        <MultiSelect
                            label="Lắp đặt"
                            placeholder="Pick value"
                            data={listDataYN}
                            clearable
                            searchable
                            onChange={(e) => setValueInstalled(e)}
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
                                        Thống Kê Tùy Chọn Đồng Hồ
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
        </motion.div>
    );
};

export default StatisticCustomChoiceMeterPage;
