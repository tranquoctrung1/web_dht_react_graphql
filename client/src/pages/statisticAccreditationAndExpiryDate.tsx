import { Grid, Col, Button, Center, Text } from '@mantine/core';

import { DateInput } from '@mantine/dates';

import { useGetStatisticAccreditationAndExpiryDateLazyQuery } from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import {
    checkAdminViewerRole,
    convertTimeStampToDate,
    convertDateToString,
    calcSpace2Date,
} from '../utils/utils';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const StatisticAccreditationAndExpiryDatePage = () => {
    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [time, setTime] = useState<Date | null>(null);

    const [statisticData, setStatisticData] = useState([]);
    const [data, setData] = useState([]);

    const [getStatisticAccreditationAndExpiry, {}] =
        useGetStatisticAccreditationAndExpiryDateLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());
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
            width: '300px',
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
            name: 'Cở',
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
            name: 'Ngày thay/ kiểm ',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
    Ngày thay/ kiểm
</div>`
                    : convertTimeStampToDate(row.DateOfChange),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày thay/ kiểm'
                    : convertTimeStampToDate(row.DateOfChange),
        },
        {
            name: 'Ngày hết hiệu lực KĐ',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
    Ngày hết hiệu lực KĐ
</div>`
                    : convertTimeStampToDate(row.ExpiryDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày hết hiệu lực KĐ'
                    : convertTimeStampToDate(row.ExpiryDate),
        },
        {
            name: 'Thời gian sử dụng',
            selector: (row: any) => row.TimeUse,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Thời gian sử dụng
</div>`
                    : row.TimeUse,
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
        fileName: `Đồng Hồ Tổng Hết Hạn Kiểm Định (Đến Ngày 
            ${
                //@ts-ignore
                convertDateToString(time)
            })`,
    };

    const onViewClicked = () => {
        getStatisticAccreditationAndExpiry({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticAccreditationAndExpiryDate !==
                        null &&
                    res?.data?.GetStatisticAccreditationAndExpiryDate !==
                        undefined
                ) {
                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Đồng Hồ Tổng Hết Hạn Kiểm Định (Đến Ngày 
                            ${
                                //@ts-ignore
                                convertDateToString(time)
                            }
                        )`,
                        Marks: '',
                        Size: '',
                        AccreditationDocument: '',
                        DateOfChange: '',
                        ExpiryDate: '',
                        TimeUse: '',
                        Description: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        AccreditationDocument: 'Giấy kiểm định',
                        DateOfChange: 'Ngày thay/ kiểm ',
                        ExpiryDate: 'Ngày hết hiệu lực KĐ',
                        TimeUse: 'Thời gian sử dụng',
                        Description: 'Ghi chú',
                    };

                    const t = [
                        ...res.data.GetStatisticAccreditationAndExpiryDate,
                    ];

                    t.sort((a: any, b: any) => {
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

                    const temp = [];

                    let count = 1;

                    for (const item of t) {
                        const obj = {
                            STT: count++,
                            ...item,
                            TimeUse:
                                item?.DateOfChange !== null
                                    ? (
                                          calcSpace2Date(
                                              new Date(
                                                  item?.DateOfChange,
                                              ).getTime(),
                                              //@ts-ignore
                                              time,
                                          ) / 365.5
                                      ).toFixed(1)
                                    : '',
                        };

                        temp.push(obj);
                    }

                    setData([
                        //@ts-ignore
                        objTitle,
                        //@ts-ignore
                        obj,
                        //@ts-ignore
                        ...temp,
                    ]);
                }
            })
            .catch((err) => console.log(err));
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
                            Thống kê đồng hồ đến hạn kiểm định
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col span={12}>
                    <DateInput
                        valueFormat="DD/MM/YYYY"
                        label="Mốc thời gian"
                        placeholder="Mốc thời gian"
                        clearable
                        mx="auto"
                        value={time}
                        onChange={(e) => setTime(e)}
                    />
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
                                        Đồng Hồ Tổng Hết Hạn Kiểm Định (Đến Ngày{' '}
                                        {
                                            //@ts-ignore
                                            convertDateToString(time)
                                        }
                                        )
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

export default StatisticAccreditationAndExpiryDatePage;
