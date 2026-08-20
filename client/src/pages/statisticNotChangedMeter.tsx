import { Select, Button, Grid, Col, Center, Text } from '@mantine/core';

import { convertTimeStampToDate } from '../utils/utils';

import { useEffect, useState } from 'react';

import {
    useGetSitesNotChangedMeterQuery,
    useGetCompaniesQuery,
} from '../__generated__/graphql';

import DataTable from 'react-data-table-component';

import { useTableTheme } from '../hooks/useTableTheme';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { motion } from 'framer-motion';

const StatisticNotChangedMeterPage = () => {
    const tableTheme = useTableTheme();

    const [companies, setCompanies] = useState([]);
    const [valueCompany, setValueCompany] = useState<string | null>(null);

    const [data, setData] = useState([]);
    const [columns, setColumn] = useState([]);
    const [title, setTitle] = useState('');

    const { refetch: getSitesNotChangedMeter } =
        useGetSitesNotChangedMeterQuery();
    const { refetch: getCompanies } = useGetCompaniesQuery();

    useEffect(() => {
        getCompanies()
            .then((res) => {
                if (
                    res?.data?.GetCompanies !== null &&
                    res?.data?.GetCompanies
                ) {
                    const temp = [];
                    for (const item of res.data.GetCompanies) {
                        const obj = {
                            value: item?.Company,
                            label: item?.Company,
                        };

                        temp.push(obj);
                    }
                    //@ts-ignore
                    setCompanies([...temp]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const onViewClicked = () => {
        getSitesNotChangedMeter({
            company: valueCompany !== null ? valueCompany : '',
        })
            .then((res) => {
                if (
                    res?.data?.GetSitesNotChangedMeter !== null &&
                    res?.data?.GetSitesNotChangedMeter !== undefined
                ) {
                    const rows = res.data.GetSitesNotChangedMeter;

                    const temp = [];

                    let count = 1;

                    for (const item of rows) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
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

                    const titleText = `Điểm Lắp Đặt Chưa Thay Đồng Hồ${
                        valueCompany !== null && valueCompany !== ''
                            ? ` - ${valueCompany}`
                            : ''
                    } (${temp.length} điểm)`;

                    setTitle(titleText);

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: titleText,
                        Address: '',
                        District: '',
                        Company: '',
                        Meter: '',
                        TakeoverDate: '',
                        Status: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        Address: 'Địa chỉ',
                        District: 'Quận/ huyện',
                        Company: 'Quản lý',
                        Meter: 'Đồng hồ',
                        TakeoverDate: 'Ngày tiếp nhận',
                        Status: 'Trạng thái',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsTemplate]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const columnsTemplate = [
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
            name: 'Địa chỉ',
            selector: (row: any) => row.Address,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
Địa chỉ
</div>`
                    : row.Address,
            width: '250px',
        },
        {
            name: 'Quận/ huyện',
            selector: (row: any) => row.District,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
Quận/ huyện
</div>`
                    : row.District,
            width: '150px',
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
            name: 'Đồng hồ',
            selector: (row: any) => row.Meter,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
Đồng hồ
</div>`
                    : `<div style="mso-number-format:'\@'">
${row.Meter !== null && row.Meter !== undefined ? row.Meter : ''}
</div>`,
            width: '150px',
        },
        {
            name: 'Ngày tiếp nhận',
            selector: (row: any) => row.TakeoverDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
Ngày tiếp nhận
</div>`
                    : convertTimeStampToDate(row.TakeoverDate),
            width: '150px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày tiếp nhận'
                    : convertTimeStampToDate(row.TakeoverDate),
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
        fileName: title,
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
                            Thống kê điểm lắp đặt chưa thay đồng hồ
                        </Text>
                    </Center>
                    <hr />
                </Col>
                <Col md={4}>
                    {companies ? (
                        <Select
                            label="Quản lý"
                            placeholder="Tất cả"
                            data={companies}
                            value={valueCompany}
                            clearable
                            searchable
                            nothingFound="Không tìm thấy đơn vị"
                            onChange={(e) => setValueCompany(e)}
                        />
                    ) : null}
                </Col>
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
                <Col span={12} style={{ maxWidth: '99%' }}>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            theme={tableTheme}
                            noHeader
                            noTableHead
                            columns={columns}
                            data={data}
                            title={
                                <Center>
                                    <Text weight={500}>{title}</Text>
                                </Center>
                            }
                            paginationPerPage={50}
                            sortIcon={<IconArrowBadgeUpFilled />}
                            defaultSortAsc={true}
                            pagination
                            highlightOnHover={true}
                            dense={false}
                            conditionalRowStyles={conditionalRowStyles}
                            noDataComponent={
                                <Center style={{ padding: '1rem' }}>
                                    <Text>Không có dữ liệu</Text>
                                </Center>
                            }
                        />
                    </DataTableExtensions>
                </Col>
            </Grid>
        </motion.div>
    );
};

export default StatisticNotChangedMeterPage;
