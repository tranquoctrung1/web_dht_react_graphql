import {
    MultiSelect,
    Text,
    Grid,
    Col,
    Button,
    Center,
    Space,
    Table,
} from '@mantine/core';

import { useEffect, useState } from 'react';

import {
    useGetAllSiteLevelLazyQuery,
    useGetAllSiteGroupLazyQuery,
    useGetAllSiteGroup2SLazyQuery,
    useGetCompaniesLazyQuery,
    useGetMeterModelLazyQuery,
    useGetAllSiteStatusLazyQuery,
    useGetAllSiteAvailabilitiesLazyQuery,
    useGetLoggerModelLazyQuery,
    useGetAllMeterAccreditationTypeLazyQuery,
    useGetStatisticCustomChoiceMarkSizeLazyQuery,
} from '../__generated__/graphql';

// @ts-ignore comment
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import uuid from 'react-uuid';

import {
    checkAdminViewerRole,
    convertTimeStampToDate,
    createListCompanyForStatisticMarkSize,
    updateAmoutSizeForMark,
    updateAmoutSizeForSize,
    updateAmountMarkSize,
} from '../utils/utils';

import { motion } from 'framer-motion';

const StatisticCustomChoiceMarkSizePage = () => {
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

    const [dataForMark, setDataForMark] = useState([]);
    const [dataForSize, setDataForSize] = useState([]);
    const [dataForMarkSize, setDataForMarkSize] = useState([]);

    const [isMark, setIsMark] = useState(false);
    const [isSize, setIsSize] = useState(false);
    const [isMarkSize, setIsMarkSize] = useState(false);

    const [getSiteLevel, {}] = useGetAllSiteLevelLazyQuery();
    const [getSiteGroup, {}] = useGetAllSiteGroupLazyQuery();
    const [getSiteGroup2S, {}] = useGetAllSiteGroup2SLazyQuery();
    const [getMeterModel, {}] = useGetMeterModelLazyQuery();
    const [getCompanies, {}] = useGetCompaniesLazyQuery();
    const [getSiteStatus, {}] = useGetAllSiteStatusLazyQuery();
    const [getSiteAvai, {}] = useGetAllSiteAvailabilitiesLazyQuery();
    const [getLoggerModel, {}] = useGetLoggerModelLazyQuery();
    const [getMeterAcc, {}] = useGetAllMeterAccreditationTypeLazyQuery();
    const [getStatisticCustomMarkSize, {}] =
        useGetStatisticCustomChoiceMarkSizeLazyQuery();

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

        getStatisticCustomMarkSize()
            .then((res) => {
                if (
                    res?.data?.GetStatisticCustomChoiceMarkSize !== null &&
                    res?.data?.GetStatisticCustomChoiceMarkSize !== undefined
                ) {
                    //@ts-ignore
                    setStatisticData([
                        ...res.data.GetStatisticCustomChoiceMarkSize,
                    ]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const filterStatisticData = () => {
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
            temp = temp.filter(
                //@ts-ignore
                (el) => listDataMeterModel.indexOf(el.Model) !== -1,
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
                        el.PrProductionCompanyoduct,
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

        return temp;
    };

    const createDataMark = (data: any) => {
        let result = [];

        for (const site of data) {
            if (result.length <= 0) {
                const obj = {
                    Provider: site.Provider,
                    Marks: [
                        {
                            Mark: site.Marks,
                            Companies: [
                                {
                                    Company: 'Total',
                                    Amount: 0,
                                },
                                ...createListCompanyForStatisticMarkSize(data),
                            ],
                        },
                    ],
                };

                result.push(obj);

                result = updateAmoutSizeForMark(result, site);
            } else {
                const findProvider = result.find(
                    //@ts-ignore
                    (el) => el.Provider === site.Provider,
                );

                if (findProvider !== undefined) {
                    //@ts-ignore
                    const findMark = findProvider.Marks.find(
                        //@ts-ignore
                        (el) => el.Mark === site.Marks,
                    );

                    if (findMark !== undefined) {
                        const t = site._id[0] + site._id[1];
                        //@ts-ignore
                        const findCompany = findMark.Companies.find(
                            //@ts-ignore
                            (el) => el.Company === t,
                        );

                        if (findCompany !== undefined) {
                            result = updateAmoutSizeForMark(result, site);
                        }
                    } else {
                        const obj = {
                            Mark: site.Marks,
                            Companies: [
                                {
                                    Company: 'Total',
                                    Amount: 0,
                                },
                                ...createListCompanyForStatisticMarkSize(data),
                            ],
                        };

                        findProvider.Marks.push(obj);

                        result = updateAmoutSizeForMark(result, site);
                    }
                } else {
                    const obj = {
                        Provider: site.Provider,
                        Marks: [
                            {
                                Mark: site.Marks,
                                Companies: [
                                    {
                                        Company: 'Total',
                                        Amount: 0,
                                    },
                                    ...createListCompanyForStatisticMarkSize(
                                        data,
                                    ),
                                ],
                            },
                        ],
                    };

                    result.push(obj);

                    result = updateAmoutSizeForMark(result, site);
                }
            }
        }

        //@ts-ignore
        setDataForMark([...result]);

        return result;
    };

    const renderTableMark = (data: any) => {
        const tempRowHeader = [];

        for (const item of data[0].Marks[0].Companies) {
            if (item.Company !== 'Total') {
                tempRowHeader.push(
                    <th key={item.Company + uuid()}>{item.Company}</th>,
                );
            } else {
                tempRowHeader.push(<th key={item.Company + uuid()}>Tổng</th>);
            }
        }

        const th = (
            <tr>
                <th>Nhà sản xuất</th>
                <th>Hiệu</th>
                {tempRowHeader}
            </tr>
        );

        const tBody = [];

        const total = [];

        for (const provider of data) {
            const totalProvider = [];
            if (provider?.Marks !== undefined) {
                for (const mark of provider.Marks) {
                    const rowCompany = [];
                    for (let i = 0; i < mark.Companies.length; i++) {
                        if (
                            //@ts-ignore
                            totalProvider[i] === undefined ||
                            //@ts-ignore
                            totalProvider[i] === null
                        ) {
                            const obj = {
                                value: mark.Companies[i].Amount,
                            };
                            totalProvider.push(obj);
                        } else {
                            totalProvider[i].value += mark.Companies[i].Amount;
                        }

                        if (
                            //@ts-ignore
                            total[i] === undefined ||
                            //@ts-ignore
                            total[i] === null
                        ) {
                            const obj = {
                                value: mark.Companies[i].Amount,
                            };
                            total.push(obj);
                        } else {
                            total[i].value += mark.Companies[i].Amount;
                        }

                        rowCompany.push(
                            <td
                                key={`${mark.Mark}_${
                                    mark.Companies[i].Company
                                } ${uuid()}`}
                            >
                                {mark.Companies[i].Amount}
                            </td>,
                        );
                    }

                    const content = (
                        <tr key={`${mark.mark} ${uuid()}`}>
                            <td>{provider.Provider}</td>
                            <td>{mark.Mark}</td>
                            {rowCompany}
                        </tr>
                    );

                    tBody.push(content);
                }

                const rowTotalProvider = [];
                for (const t of totalProvider) {
                    rowTotalProvider.push(
                        <td key={`total_${provider.Provider} ${uuid()}`}>
                            {t.value}
                        </td>,
                    );
                }

                const totalContent = (
                    <tr key={provider.Provider + uuid()}>
                        <td colSpan={2}>Tổng {provider.Provider}</td>
                        {rowTotalProvider}
                    </tr>
                );

                tBody.push(totalContent);
            }
        }

        const rowTotal = [];
        for (const t of total) {
            rowTotal.push(<td key={`total ${uuid()}`}>{t.value}</td>);
        }

        const totalContent = (
            <tr key={uuid()}>
                <td colSpan={2}>Tổng Cộng</td>
                {rowTotal}
            </tr>
        );

        tBody.push(totalContent);

        return (
            <Table
                striped
                highlightOnHover
                withBorder
                withColumnBorders
                id="tableStatisticMark"
                verticalSpacing="xs"
                fontSize="xs"
                style={{ tableLayout: 'auto', width: '100%' }}
            >
                <caption>Số Lượng Đồng Hồ Theo Hiệu</caption>
                <thead>{th}</thead>
                <tbody>{tBody}</tbody>
            </Table>
        );
    };

    const onViewMarkClicked = () => {
        setIsMark(true);
        setIsSize(false);
        setIsMarkSize(false);

        const filterData = filterStatisticData();

        createDataMark(filterData);
    };

    const createDataSize = (data: any) => {
        let result = [];

        for (const site of data) {
            if (result.length <= 0) {
                const obj = {
                    Size: site.Size,
                    Companies: [
                        {
                            Company: 'Total',
                            Amount: 0,
                        },
                        ...createListCompanyForStatisticMarkSize(data),
                    ],
                };

                result.push(obj);

                result = updateAmoutSizeForSize(result, site);
            } else {
                //@ts-ignore
                const findSize = result.find((el) => el.Size === site.Size);

                if (findSize !== undefined) {
                    const t = site._id[0] + site._id[1];
                    //@ts-ignore
                    const findCompany = findSize.Companies.find(
                        //@ts-ignore
                        (el) => el.Company === t,
                    );

                    if (findCompany !== undefined) {
                        result = updateAmoutSizeForSize(result, site);
                    }
                } else {
                    const obj = {
                        Size: site.Size,
                        Companies: [
                            {
                                Company: 'Total',
                                Amount: 0,
                            },
                            ...createListCompanyForStatisticMarkSize(data),
                        ],
                    };

                    result.push(obj);

                    result = updateAmoutSizeForSize(result, site);
                }
            }
        }

        //@ts-ignore
        setDataForSize([...result]);

        return result;
    };

    const renderTableSize = (data: any) => {
        const tempRowHeader = [];

        for (const item of data[0].Companies) {
            if (item.Company !== 'Total') {
                tempRowHeader.push(
                    <th key={item.Company + uuid()}>{item.Company}</th>,
                );
            } else {
                tempRowHeader.push(<th key={item.Company + uuid()}>Tổng</th>);
            }
        }

        const th = (
            <tr>
                <th>Cở</th>
                {tempRowHeader}
            </tr>
        );

        const tBody = [];

        const total = [];

        for (const size of data) {
            for (let i = 0; i < size.Companies.length; i++) {
                const totalSize = size.Companies[0];

                if (
                    //@ts-ignore
                    total[i] === undefined ||
                    //@ts-ignore
                    total[i] === null
                ) {
                    const obj = {
                        value: totalSize.Amount,
                    };
                    total.push(obj);
                } else {
                    total[i].value += totalSize.Amount;
                }
            }

            const rowSize = [];
            for (let i = 0; i < size.Companies.length; i++) {
                rowSize.push(
                    <td key={`${size.Companies[i].Company} ${uuid()}`}>
                        {size.Companies[i].Amount}
                    </td>,
                );
            }

            const content = (
                <tr key={`${size.Size} ${uuid()}`}>
                    <td>{size.Size}</td>
                    {rowSize}
                </tr>
            );

            tBody.push(content);
        }

        const rowTotal = [];
        for (const t of total) {
            rowTotal.push(<td key={`total ${uuid()}`}>{t.value}</td>);
        }

        const totalContent = (
            <tr key={uuid()}>
                <td colSpan={1}>Tổng Cộng</td>
                {rowTotal}
            </tr>
        );

        tBody.push(totalContent);

        return (
            <Table
                striped
                highlightOnHover
                withBorder
                withColumnBorders
                id="tableStatisticSize"
                verticalSpacing="xs"
                fontSize="xs"
                style={{ tableLayout: 'auto', width: '100%' }}
            >
                <caption>Số Lượng Đồng Hồ Theo Cở</caption>
                <thead>{th}</thead>
                <tbody>{tBody}</tbody>
            </Table>
        );
    };

    const onViewSizeClicked = () => {
        setIsMark(false);
        setIsSize(true);
        setIsMarkSize(false);

        const filterData = filterStatisticData();

        createDataSize(filterData);
    };

    const createDataMarkSize = (data: any) => {
        let result = [];

        for (const site of data) {
            if (result.length <= 0) {
                const obj = {
                    Provider: site.Provider,
                    Marks: [
                        {
                            Mark: site.Marks,
                            Models: [
                                {
                                    Model: site.Model,
                                    Sizes: [
                                        {
                                            Size: site.Size,
                                            Companies: [
                                                {
                                                    Company: 'Total',
                                                    Amount: 0,
                                                },
                                                ...createListCompanyForStatisticMarkSize(
                                                    data,
                                                ),
                                            ],
                                        },
                                        {
                                            Size: 'Tổng ' + site.Model,
                                            Companies: [
                                                {
                                                    Company: 'Total',
                                                    Amount: 0,
                                                },
                                                ...createListCompanyForStatisticMarkSize(
                                                    data,
                                                ),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                };

                result.push(obj);

                result = updateAmountMarkSize(result, site);
            } else {
                const findProvider = result.find(
                    //@ts-ignore
                    (el) => el.Provider === site.Provider,
                );

                if (findProvider !== undefined) {
                    const findMark = findProvider.Marks.find(
                        //@ts-ignore
                        (el) => el.Mark === site.Marks,
                    );

                    if (findMark !== undefined) {
                        const findModel = findMark.Models.find(
                            //@ts-ignore
                            (el) => el.Model === site.Model,
                        );

                        if (findModel !== undefined) {
                            const findSize = findModel.Sizes.find(
                                //@ts-ignore
                                (el) => el.Size === site.Size,
                            );

                            if (findSize !== undefined) {
                                const t = site._id[0] + site._id[1];

                                const findCompany = findSize.Companies.find(
                                    //@ts-ignore
                                    (el) => el.Company === t,
                                );

                                if (findCompany !== undefined) {
                                    result = updateAmountMarkSize(result, site);
                                }
                            } else {
                                const obj = {
                                    Size: site.Size,
                                    Companies: [
                                        {
                                            Company: 'Tổng ',
                                            Amount: 0,
                                        },
                                        ...createListCompanyForStatisticMarkSize(
                                            data,
                                        ),
                                    ],
                                };

                                findModel.Sizes.unshift(obj);

                                result = updateAmountMarkSize(result, site);
                            }
                        } else {
                            const obj = {
                                Model: site.Model,
                                Sizes: [
                                    {
                                        Size: site.Size,
                                        Companies: [
                                            {
                                                Company: 'Total',
                                                Amount: 0,
                                            },
                                            ...createListCompanyForStatisticMarkSize(
                                                data,
                                            ),
                                        ],
                                    },
                                    {
                                        Size: 'Tổng ' + site.Model,
                                        Companies: [
                                            {
                                                Company: 'Total',
                                                Amount: 0,
                                            },
                                            ...createListCompanyForStatisticMarkSize(
                                                data,
                                            ),
                                        ],
                                    },
                                ],
                            };

                            findMark.Models.push(obj);

                            result = updateAmountMarkSize(result, site);
                        }
                    } else {
                        const obj = {
                            Mark: site.Marks,
                            Models: [
                                {
                                    Model: site.Model,
                                    Sizes: [
                                        {
                                            Size: site.Size,
                                            Companies: [
                                                {
                                                    Company: 'Total',
                                                    Amount: 0,
                                                },
                                                ...createListCompanyForStatisticMarkSize(
                                                    data,
                                                ),
                                            ],
                                        },
                                        {
                                            Size: 'Tổng ' + site.Model,
                                            Companies: [
                                                {
                                                    Company: 'Total',
                                                    Amount: 0,
                                                },
                                                ...createListCompanyForStatisticMarkSize(
                                                    data,
                                                ),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        };

                        findProvider.Marks.push(obj);

                        result = updateAmountMarkSize(result, site);
                    }
                } else {
                    const obj = {
                        Provider: site.Provider,
                        Marks: [
                            {
                                Mark: site.Marks,
                                Models: [
                                    {
                                        Model: site.Model,
                                        Sizes: [
                                            {
                                                Size: site.Size,
                                                Companies: [
                                                    {
                                                        Company: 'Total',
                                                        Amount: 0,
                                                    },
                                                    ...createListCompanyForStatisticMarkSize(
                                                        data,
                                                    ),
                                                ],
                                            },
                                            {
                                                Size: 'Tổng ' + site.Model,
                                                Companies: [
                                                    {
                                                        Company: 'Total',
                                                        Amount: 0,
                                                    },
                                                    ...createListCompanyForStatisticMarkSize(
                                                        data,
                                                    ),
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    };

                    result.push(obj);

                    result = updateAmountMarkSize(result, site);
                }
            }
        }

        //@ts-ignore
        setDataForMarkSize([...result]);

        return result;
    };

    const renderTableMarkSize = (data: any) => {
        const tempRowHeader = [];

        for (const item of data[0].Marks[0].Models[0].Sizes[0].Companies) {
            if (item.Company !== 'Total') {
                tempRowHeader.push(
                    <th key={item.Company + uuid()}>{item.Company}</th>,
                );
            } else {
                tempRowHeader.push(<th key={item.Company + uuid()}>Tổng</th>);
            }
        }

        const th = (
            <tr>
                <th>Nhà sản xuất</th>
                <th>Hiệu</th>
                <th>Model</th>
                <th>Cở</th>
                {tempRowHeader}
            </tr>
        );

        const tBody = [];

        const total = [];

        for (const provider of data) {
            const totalProvider = [];

            for (const mark of provider.Marks) {
                for (const model of mark.Models) {
                    for (
                        let i = 0;
                        i <
                        model.Sizes[model.Sizes.length - 1].Companies.length;
                        i++
                    ) {
                        const size = model.Sizes[model.Sizes.length - 1];

                        if (
                            //@ts-ignore
                            totalProvider[i] === undefined ||
                            //@ts-ignore
                            totalProvider[i] === null
                        ) {
                            const obj = {
                                value: size.Companies[i].Amount,
                            };
                            totalProvider.push(obj);
                        } else {
                            totalProvider[i].value += size.Companies[i].Amount;
                        }

                        if (
                            //@ts-ignore
                            total[i] === undefined ||
                            //@ts-ignore
                            total[i] === null
                        ) {
                            const obj = {
                                value: size.Companies[i].Amount,
                            };
                            total.push(obj);
                        } else {
                            total[i].value += size.Companies[i].Amount;
                        }
                    }
                    for (const size of model.Sizes) {
                        const rowCompany = [];
                        for (let i = 0; i < size.Companies.length; i++) {
                            rowCompany.push(
                                <td
                                    key={`${model.Model}_${size.Size}_${
                                        size.Companies[i].Company + uuid()
                                    }`}
                                >
                                    {size.Companies[i].Amount}
                                </td>,
                            );
                        }

                        const content = (
                            <tr key={`${model.Model}_${size.Size + uuid()}`}>
                                <td>{provider.Provider}</td>
                                <td>{mark.Mark}</td>
                                <td>{model.Model}</td>
                                <td>{size.Size}</td>
                                {rowCompany}
                            </tr>
                        );

                        tBody.push(content);
                    }
                }
            }

            const rowTotalProvider = [];
            for (const t of totalProvider) {
                rowTotalProvider.push(
                    <td key={`total_${provider.Provider + uuid()}`}>
                        {t.value}
                    </td>,
                );
            }

            const totalContent = (
                <tr key={provider.Provider + uuid()}>
                    <td colSpan={4}>Tổng {provider.Provider}</td>
                    {rowTotalProvider}
                </tr>
            );

            tBody.push(totalContent);
        }

        const rowTotal = [];
        for (const t of total) {
            rowTotal.push(<td key={`total ${uuid()}`}>{t.value}</td>);
        }

        const totalContent = (
            <tr key={uuid()}>
                <td colSpan={4}>Tổng Cộng</td>
                {rowTotal}
            </tr>
        );

        tBody.push(totalContent);

        return (
            <Table
                striped
                highlightOnHover
                withBorder
                withColumnBorders
                id="tableStatisticMarkSize"
                verticalSpacing="xs"
                fontSize="xs"
                style={{ tableLayout: 'auto', width: '100%' }}
            >
                <caption>Thống Kê Hiệu Cở</caption>
                <thead>{th}</thead>
                <tbody>{tBody}</tbody>
            </Table>
        );
    };

    const onViewMarkSizeClicked = () => {
        setIsMark(false);
        setIsSize(false);
        setIsMarkSize(true);

        const filterData = filterStatisticData();

        createDataMarkSize(filterData);
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
                            Thống kê tùy chọn hiệu cỡ
                        </Text>
                    </Center>
                    <hr />
                </Col>
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
                                onClick={onViewMarkClicked}
                            >
                                Hiệu
                            </Button>
                            <Space w="md" />
                            <Button
                                variant="filled"
                                color="blue"
                                onClick={onViewSizeClicked}
                            >
                                Cở
                            </Button>
                            <Space w="md" />
                            <Button
                                variant="filled"
                                color="violet"
                                onClick={onViewMarkSizeClicked}
                            >
                                Hiệu Cở
                            </Button>
                        </Center>
                    </Col>
                ) : null}
                {isMark
                    ? dataForMark.length > 0 && (
                          <>
                              <Col span={12}>
                                  <Center>
                                      <ReactHTMLTableToExcel
                                          id="table-xls"
                                          className="btn-export"
                                          table="tableStatisticMark"
                                          filename={`Thống kê tùy chọn theo hiệu`}
                                          sheet="tableStatisticMark"
                                          buttonText="Xuất Excel"
                                      />
                                  </Center>
                              </Col>
                              <Col
                                  span={12}
                                  style={{
                                      overflow: 'scroll',
                                      width: '95%',
                                      height: '50rem',
                                  }}
                              >
                                  {renderTableMark(dataForMark)}
                              </Col>
                          </>
                      )
                    : null}

                {isSize
                    ? dataForSize.length > 0 && (
                          <>
                              <Col span={12}>
                                  <Center>
                                      <ReactHTMLTableToExcel
                                          id="table-xls"
                                          className="btn-export"
                                          table="tableStatisticSize"
                                          filename={`Thống kê tùy chọn theo cở`}
                                          sheet="tableStatisticSize"
                                          buttonText="Xuất Excel"
                                      />
                                  </Center>
                              </Col>
                              <Col
                                  span={12}
                                  style={{
                                      overflow: 'scroll',
                                      width: '95%',
                                      height: '50rem',
                                  }}
                              >
                                  {renderTableSize(dataForSize)}
                              </Col>
                          </>
                      )
                    : null}

                {isMarkSize
                    ? dataForMarkSize.length > 0 && (
                          <>
                              <Col span={12}>
                                  <Center>
                                      <ReactHTMLTableToExcel
                                          id="table-xls"
                                          className="btn-export"
                                          table="tableStatisticMarkSize"
                                          filename={`Thống kê tùy chọn theo hiệu cở`}
                                          sheet="tableStatisticMarkSize"
                                          buttonText="Xuất Excel"
                                      />
                                  </Center>
                              </Col>
                              <Col
                                  span={12}
                                  style={{
                                      overflow: 'scroll',
                                      width: '95%',
                                      height: '50rem',
                                  }}
                              >
                                  {renderTableMarkSize(dataForMarkSize)}
                              </Col>
                          </>
                      )
                    : null}
            </Grid>
        </motion.div>
    );
};

export default StatisticCustomChoiceMarkSizePage;
