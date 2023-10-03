import { Grid, Col, Button, Text, Center, Table } from '@mantine/core';

import { useEffect, useState } from 'react';

// @ts-ignore comment
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { useGetStatisticMarkSizeXnManagerLazyQuery } from '../__generated__/graphql';

import { checkAdminViewerRole } from '../utils/utils';

const onViewClicked = () => {};

const StatisticMarkSizePage = () => {
    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [data, setData] = useState([]);

    const [getStatisticMarkSize, {}] =
        useGetStatisticMarkSizeXnManagerLazyQuery();

    const getData = () => {
        getStatisticMarkSize()
            .then((res) => {
                if (
                    res?.data?.GetStatisticMarkSizeXNManager !== null &&
                    res?.data?.GetStatisticMarkSizeXNManager !== undefined
                ) {
                    //@ts-ignore
                    setData([...res.data.GetStatisticMarkSizeXNManager]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getData();
    }, []);

    const renderTable = (data: any) => {
        const tempRowHeader = [];

        for (const item of data[0].Marks[0].Models[0].Sizes[0].Companies) {
            if (item.Company !== 'Total') {
                tempRowHeader.push(<th key={item.Company}>{item.Company}</th>);
            } else {
                tempRowHeader.push(<th key={item.Company}>Tổng</th>);
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
                                    key={`${model.Model}_${size.Size}_${size.Companies[i].Company}`}
                                >
                                    {size.Companies[i].Amount}
                                </td>,
                            );
                        }

                        const content = (
                            <tr key={`${model.Model}_${size.Size}`}>
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
                    <td key={`total_${provider.Provider}`}>{t.value}</td>,
                );
            }

            const totalContent = (
                <tr key={provider.Provider}>
                    <td colSpan={4}>Tổng {provider.Provider}</td>
                    {rowTotalProvider}
                </tr>
            );

            tBody.push(totalContent);
        }

        const rowTotal = [];
        for (const t of total) {
            rowTotal.push(<td key={`total`}>{t.value}</td>);
        }

        const totalContent = (
            <tr>
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
                id="tableStatistic"
                verticalSpacing="xs"
                fontSize="xs"
                style={{ tableLayout: 'auto', width: '100%' }}
            >
                <caption>Thống Kê Hiệu Cở Xí Nghiệp Quản Lý</caption>
                <thead>{th}</thead>
                <tbody>{tBody}</tbody>
            </Table>
        );
    };

    return (
        <Grid>
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
            {data.length > 0 && (
                <>
                    <Col span={12}>
                        <Center>
                            <ReactHTMLTableToExcel
                                id="table-xls"
                                className="btn-export"
                                table="tableStatistic"
                                filename={`Thống kê theo hiệu cở`}
                                sheet="tableStatistic"
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
                        {renderTable(data)}
                    </Col>
                </>
            )}
        </Grid>
    );
};

export default StatisticMarkSizePage;
