import { Grid, Button, Center, Col, Text } from '@mantine/core';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { useGetStatisticSiteXnManagerLazyQuery } from '../__generated__/graphql';
import { useEffect, useState } from 'react';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { checkAdminViewerRole } from '../utils/utils';

import { motion } from 'framer-motion';

const StatisticSiteXNManager = () => {
    const [getStatisticSite, {}] = useGetStatisticSiteXnManagerLazyQuery();

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getData();
    }, []);

    const getData = () => {
        getStatisticSite()
            .then((res) => {
                if (res.data !== null && res.data !== undefined) {
                    if (
                        res.data.GetStatisticSiteXNManager !== null &&
                        res.data.GetStatisticSiteXNManager !== undefined
                    ) {
                        const objTitle = {
                            STT: '',
                            SiteId: '',
                            Marks: '',
                            Size: '',
                            Location: 'Thống Kê Điểm Lắp Đặt Xí Nghiệp Quản Lý',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };

                        const obj = {
                            STT: 'STT',
                            SiteId: 'Mã vị trí',
                            Marks: 'Hiệu',
                            Size: 'Cở',
                            Location: 'Vị trí',
                            Level: 'Cấp ĐH',
                            Company: 'Quản lý',
                            Availability: 'Tình trạng',
                            Status: 'Trạng thái',
                            UsingLogger: 'Dùng Logger',
                            Description: 'Ghi chú',
                        };

                        const objDSD = {
                            STT: 'DSD',
                            SiteId: 'Đang sử dụng',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: 'Ngày ...... tháng ...... năm ......',
                        };

                        const objHD = {
                            STT: 'HD',
                            SiteId: 'Hoạt động',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: 'ĐỘI QUẢN LÝ ĐỒNG HỒ TỔNG',
                        };

                        const objHH = {
                            STT: 'HH',
                            SiteId: 'Hư hỏng',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };

                        const objXN = {
                            STT: 'XN',
                            SiteId: 'Xí nghiệp truyền dẫn nước sạch',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };

                        const objDA = {
                            STT: 'DA',
                            SiteId: 'Ban quản lý dự án',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };
                        const objHM = {
                            STT: 'HM',
                            SiteId: 'Công ty nước ngầm Sài Gòn',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };
                        const objTA = {
                            STT: 'HM',
                            SiteId: 'Xí nghiệp cấp nước Trung An',
                            Marks: '',
                            Size: '',
                            Location: '',
                            Level: '',
                            Company: '',
                            Availability: '',
                            Status: '',
                            UsingLogger: '',
                            Description: '',
                        };

                        setData([
                            //@ts-ignore
                            objTitle,
                            //@ts-ignore
                            obj,
                            //@ts-ignore
                            ...res.data.GetStatisticSiteXNManager,
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
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onViewClicked = () => {
        getData();
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
            name: 'Cấp ĐH',
            selector: (row: any) => row.Level,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                        Cấp ĐH
                        </div>`
                    : row.Level,
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
            name: 'Dùng Logger',
            selector: (row: any) => row.UsingLogger,
            format: (row: any) =>
                row.UsingLogger === true
                    ? 'Y'
                    : row.UsingLogger === false
                    ? 'N'
                    : row.UsingLogger,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Dùng Logger
</div>`
                    : row.UsingLogger === true
                    ? 'Y'
                    : row.UsingLogger === false
                    ? 'N'
                    : row.UsingLogger,
            sortable: true,
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
        fileName: 'Thống Kê Điểm Lắp Đặt Xí Nghiệp Quản Lý',
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
                            Thống kê điểm lắp đặt (XNQL)
                        </Text>
                    </Center>
                    <hr />
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
                            columns={columns}
                            noTableHead
                            noHeader
                            data={data}
                            title={
                                <Center>
                                    <Text weight={500}>
                                        Thống Kê Điểm Lắp Đặt Xí Nghiệp Quản Lý
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

export default StatisticSiteXNManager;
