import { Grid, Col, Center, Text, Select, Button, Loader } from '@mantine/core';

import DataTable from 'react-data-table-component';

import { useTableTheme } from '../hooks/useTableTheme';

// @ts-ignore
import ExcelJS from 'exceljs/dist/exceljs.min.js';

import {
    useGetCompaniesQuery,
    useGetStatisticKCoefficientByAreaLazyQuery,
} from '../__generated__/graphql';
import { useEffect, useMemo, useState } from 'react';

import { IconArrowBadgeUpFilled, IconFileExport } from '@tabler/icons-react';

import { motion } from 'framer-motion';

import { checkCustomerRole } from '../utils/utils';

import Companies from '../types/companies.type';

type KLegendNames = [string, string, string, string];

const K_LEGEND_RULES: Array<{
    marks: RegExp;
    model: RegExp;
    names: KLegendNames;
}> = [
    { marks: /aichi/i, model: /.*/, names: ['', '', '', ''] },
    { marks: /krohne/i, model: /.*/, names: ['GK 070L', '', '', ''] },
    {
        marks: /^sie$/i,
        model: /.*/,
        names: ['Cal factor', 'Factor', '', ''],
    },
    {
        marks: /aqm/i,
        model: /aqm3|few2\b/i,
        names: ['K', 'Flow span trim', '', ''],
    },
    {
        marks: /aqm/i,
        model: /aqm4|few4|few432/i,
        names: ['Sensor span', 'User span', '', ''],
    },
    {
        marks: /^iso$/i,
        model: /.*/,
        names: ['Ka', 'Kz', 'Kt', ''],
    },
    {
        marks: /endress|hauser/i,
        model: /.*/,
        names: ['Calibration factor', 'Zero point', '', ''],
    },
    {
        marks: /^bad$/i,
        model: /.*/,
        names: ['Detector factor', 'Scale factor', 'Detector zero', ''],
    },
];

const resolveNote = (marks: string) => {
    if (/aichi/i.test(marks ?? '')) {
        return 'Đồng hồ Aichi';
    }

    return '';
};

const resolveKLegend = (marks: string, model: string): KLegendNames => {
    const rule = K_LEGEND_RULES.find(
        (item) => item.marks.test(marks) && item.model.test(model),
    );

    return rule?.names ?? ['', '', '', ''];
};

const formatDate = (value: any) => {
    if (value === null || value === undefined || value === '') {
        return '';
    }

    const d = new Date(value);

    if (isNaN(d.getTime())) {
        return '';
    }

    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${d.getFullYear()}`;
};

const StatisticKCoefficientByAreaPage = () => {
    const tableTheme = useTableTheme();
    const [company, setCompany] = useState<string | null>(null);
    const [isDisableSelectCompany, setIsDisableSelectCompany] =
        useState(false);
    const [data, setData] = useState<any[]>([]);
    const [exporting, setExporting] = useState(false);

    const {
        data: companiesData,
        error: errorCompanies,
        loading: loadingCompanies,
    } = useGetCompaniesQuery();

    const [getStatisticKCoefficient, { loading }] =
        useGetStatisticKCoefficientByAreaLazyQuery();

    useEffect(() => {
        const savedCompany = localStorage.getItem('Company');

        setIsDisableSelectCompany(checkCustomerRole());

        if (
            savedCompany !== null &&
            savedCompany !== undefined &&
            savedCompany !== ''
        ) {
            onCompanyChanged(savedCompany);
        }
    }, []);

    const listCompanies = useMemo(() => {
        const temp: Companies[] = [];

        for (const item of companiesData?.GetCompanies ?? []) {
            if (item?.Company !== null && item?.Company !== undefined) {
                //@ts-ignore
                temp.push({
                    value: item.Company,
                    label: `${item.Company} - ${item.Description}`,
                });
            }
        }

        return temp;
    }, [companiesData]);

    const onCompanyChanged = (value: string | null) => {
        if (value === null || value === undefined || value === '') {
            return;
        }

        setCompany(value);
        setData([]);

        getStatisticKCoefficient({ variables: { company: value } }).then(
            (res) => {
                if (
                    res?.data?.GetStatisticKCoefficientByArea !== null &&
                    res?.data?.GetStatisticKCoefficientByArea !== undefined
                ) {
                    //@ts-ignore
                    setData([...res.data.GetStatisticKCoefficientByArea]);
                }
            },
        );
    };

    const columns = [
        {
            name: 'Vị trí',
            selector: (row: any) => row.Location,
            sortable: true,
            width: '300px',
        },
        {
            name: 'Mã vị trí',
            selector: (row: any) => row._id,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Serial',
            selector: (row: any) => row.Serial,
            sortable: true,
            width: '160px',
        },
        {
            name: 'Hiệu',
            selector: (row: any) => row.Marks,
            sortable: true,
            width: '100px',
        },
        {
            name: 'Model',
            selector: (row: any) => row.Model,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Cỡ',
            selector: (row: any) => row.Size,
            sortable: true,
            width: '80px',
        },
        {
            name: 'K1',
            selector: (row: any) => row.K1,
            sortable: true,
            width: '100px',
        },
        {
            name: 'K2',
            selector: (row: any) => row.K2,
            sortable: true,
            width: '100px',
        },
        {
            name: 'K3',
            selector: (row: any) => row.K3,
            sortable: true,
            width: '100px',
        },
        {
            name: 'K4',
            selector: (row: any) => row.K4,
            sortable: true,
            width: '100px',
        },
        {
            name: 'Số giấy kiểm định',
            selector: (row: any) => row.AccreditationDocument,
            sortable: true,
            width: '160px',
        },
        {
            name: 'Ngày kiểm định',
            selector: (row: any) => formatDate(row.AccreditatedDate),
            sortable: true,
            width: '130px',
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => resolveNote(row.Marks),
            sortable: true,
            width: '160px',
        },
    ];

    const onExportClicked = async () => {
        if (company === null || company === '' || data.length === 0) {
            return;
        }

        setExporting(true);

        try {
            const now = new Date();
            const quarter = Math.floor(now.getMonth() / 3) + 1;
            const year = now.getFullYear();

            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('Bien ban');

            sheet.columns = [
                { width: 5 },
                { width: 10 },
                { width: 16 },
                { width: 8 },
                { width: 18 },
                { width: 12 },
                { width: 20 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 11 },
                { width: 14 },
                { width: 20 },
            ];

            const FONT = 'Times New Roman';

            const setCell = (
                addr: string,
                value: any,
                opts?: {
                    size?: number;
                    bold?: boolean;
                    italic?: boolean;
                    align?: 'left' | 'center' | 'right';
                    border?: boolean;
                    wrap?: boolean;
                },
            ) => {
                const cell = sheet.getCell(addr);
                cell.value = value;
                cell.font = {
                    name: FONT,
                    size: opts?.size ?? 13,
                    bold: opts?.bold ?? false,
                    italic: opts?.italic ?? false,
                };
                cell.alignment = {
                    horizontal: opts?.align ?? 'left',
                    vertical: 'middle',
                    wrapText: opts?.wrap ?? false,
                };

                if (opts?.border) {
                    cell.border = {
                        top: { style: 'thin' },
                        left: { style: 'thin' },
                        bottom: { style: 'thin' },
                        right: { style: 'thin' },
                    };
                }

                return cell;
            };

            let r = 1;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, 'ỦY BAN NHÂN DÂN', { size: 12, align: 'center' });
            sheet.mergeCells(`K${r}:P${r}`);
            setCell(`K${r}`, 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM', {
                size: 13,
                bold: true,
                align: 'center',
            });
            r++;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, 'THÀNH PHỐ HỒ CHÍ MINH', {
                size: 12,
                align: 'center',
            });
            sheet.mergeCells(`K${r}:P${r}`);
            setCell(`K${r}`, 'Độc lập - Tự do - Hạnh phúc', {
                size: 13,
                bold: true,
                align: 'center',
            });
            r++;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, 'TỔNG CÔNG TY CẤP NƯỚC SÀI GÒN', {
                size: 13,
                bold: true,
                align: 'center',
            });
            r++;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, 'TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN', {
                size: 13,
                bold: true,
                align: 'center',
            });
            sheet.mergeCells(`K${r}:P${r}`);
            setCell(
                `K${r}`,
                `Tp.Hồ Chí Minh, ngày … tháng … năm ${year}`,
                { size: 13, italic: true, align: 'center' },
            );
            r += 2;

            sheet.mergeCells(`B${r}:P${r}`);
            setCell(`B${r}`, 'BIÊN BẢN KIỂM TRA ĐỒNG HỒ TỔNG', {
                size: 14,
                bold: true,
                align: 'center',
            });
            r++;

            sheet.mergeCells(`B${r}:P${r}`);
            setCell(
                `B${r}`,
                `CỦA ${company.toUpperCase()} (QUÝ ${quarter}/${year})`,
                { size: 14, bold: true, align: 'center' },
            );
            r++;

            sheet.mergeCells(`B${r}:P${r}`);
            setCell(
                `B${r}`,
                '(Theo văn bản số 734/TCT-PGTTN ngày 01 tháng 02 năm 2024 của Tổng Công ty Cấp nước Sài Gòn)',
                { size: 14, bold: true, align: 'center' },
            );
            r += 2;

            setCell(
                `B${r}`,
                `Hôm nay, ngày … tháng … năm ${year}, tại …, các bên gồm:`,
                { size: 13 },
            );
            r++;
            setCell(`B${r}`, '1/Xí nghiệp Truyền dẫn nước sạch:', {
                size: 13,
                bold: true,
            });
            r++;
            setCell(`B${r}`, 'Đại diện Đội Quản lý Đồng hồ tổng', {
                size: 13,
            });
            r++;
            setCell(`B${r}`, '- Ông/Bà: …', { size: 13 });
            r++;
            setCell(`B${r}`, '- Ông/Bà: …', { size: 13 });
            r++;
            setCell(`B${r}`, `2/${company}:`, { size: 13, bold: true });
            r++;
            setCell(`B${r}`, 'Đại diện Phòng/ban/đội:', { size: 13 });
            r++;
            setCell(`B${r}`, '- Ông/Bà: …', { size: 13 });
            r++;
            setCell(`B${r}`, '- Ông/Bà: …', { size: 13 });
            r += 2;

            sheet.mergeCells(`B${r}:P${r}`);
            setCell(
                `B${r}`,
                'Đại diện các bên tiến hành kiểm tra so sánh thông số cài đặt hiện hữu với thông số cài đặt gốc của giấy chứng nhận kiểm định còn hiệu lực',
                { size: 13 },
            );
            r++;
            sheet.mergeCells(`B${r}:P${r}`);
            setCell(
                `B${r}`,
                'của cơ quan chức năng (theo văn bản số 734/TCT-PGTTN ngày 01 tháng 02 năm 2024 của Tổng Công ty Cấp nước Sài Gòn):',
                { size: 13 },
            );
            r += 2;

            const headerRow1 = r;
            const headerRow2 = r + 1;
            const headerRow3 = r + 2;

            sheet.mergeCells(`B${headerRow1}:B${headerRow3}`);
            sheet.getCell(`B${headerRow1}`).value = 'STT';

            sheet.mergeCells(`C${headerRow1}:G${headerRow1}`);
            sheet.getCell(`C${headerRow1}`).value = 'Đồng hồ tổng';

            sheet.mergeCells(`H${headerRow1}:H${headerRow3}`);
            sheet.getCell(`H${headerRow1}`).value =
                'Số giấy kiểm định/Ngày kiểm định';

            sheet.mergeCells(`I${headerRow1}:P${headerRow1}`);
            sheet.getCell(`I${headerRow1}`).value = 'Kết quả';

            sheet.mergeCells(`Q${headerRow1}:Q${headerRow3}`);
            sheet.getCell(`Q${headerRow1}`).value = 'Ngày kiểm tra';

            sheet.mergeCells(`R${headerRow1}:R${headerRow3}`);
            sheet.getCell(`R${headerRow1}`).value = 'Ghi chú';

            sheet.mergeCells(`C${headerRow2}:C${headerRow3}`);
            sheet.getCell(`C${headerRow2}`).value = 'Hiệu';
            sheet.mergeCells(`D${headerRow2}:D${headerRow3}`);
            sheet.getCell(`D${headerRow2}`).value = 'Model';
            sheet.mergeCells(`E${headerRow2}:E${headerRow3}`);
            sheet.getCell(`E${headerRow2}`).value = 'Cỡ';
            sheet.mergeCells(`F${headerRow2}:F${headerRow3}`);
            sheet.getCell(`F${headerRow2}`).value = 'Serial number';
            sheet.mergeCells(`G${headerRow2}:G${headerRow3}`);
            sheet.getCell(`G${headerRow2}`).value = 'Mã vị trí';

            sheet.mergeCells(`I${headerRow2}:L${headerRow2}`);
            sheet.getCell(`I${headerRow2}`).value =
                'Hệ số theo giấy kiểm định';
            sheet.mergeCells(`M${headerRow2}:P${headerRow2}`);
            sheet.getCell(`M${headerRow2}`).value =
                'Hệ số theo thực tế kiểm tra';

            sheet.getCell(`I${headerRow3}`).value = 'K1';
            sheet.getCell(`J${headerRow3}`).value = 'K2';
            sheet.getCell(`K${headerRow3}`).value = 'K3';
            sheet.getCell(`L${headerRow3}`).value = 'K4';
            sheet.getCell(`M${headerRow3}`).value = 'K1';
            sheet.getCell(`N${headerRow3}`).value = 'K2';
            sheet.getCell(`O${headerRow3}`).value = 'K3';
            sheet.getCell(`P${headerRow3}`).value = 'K4';

            for (let row = headerRow1; row <= headerRow3; row++) {
                sheet
                    .getRow(row)
                    .eachCell({ includeEmpty: true }, (cell: any) => {
                        cell.alignment = {
                            horizontal: 'center',
                            vertical: 'middle',
                            wrapText: true,
                        };
                        cell.font = { name: FONT, size: 11, bold: true };
                        cell.border = {
                            top: { style: 'thin' },
                            left: { style: 'thin' },
                            bottom: { style: 'thin' },
                            right: { style: 'thin' },
                        };
                    });
            }

            r = headerRow3 + 1;

            const inspectionMonthLabel = `Tháng ${now.getMonth() + 1}.${year}`;

            let stt = 1;

            for (const item of data) {
                const cells = [
                    stt,
                    item.Marks ?? '',
                    item.Model ?? '',
                    item.Size ?? '',
                    item.Serial ?? '',
                    item._id ?? '',
                    `${item.AccreditationDocument ?? ''}${
                        item.AccreditatedDate
                            ? '\n' + formatDate(item.AccreditatedDate)
                            : ''
                    }`,
                    item.K1 ?? '',
                    item.K2 ?? '',
                    item.K3 ?? '',
                    item.K4 ?? '',
                    item.K1 ?? '',
                    item.K2 ?? '',
                    item.K3 ?? '',
                    item.K4 ?? '',
                    inspectionMonthLabel,
                    resolveNote(item.Marks),
                ];

                const cols = [
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'R',
                ];

                cols.forEach((col, idx) => {
                    setCell(`${col}${r}`, cells[idx], {
                        size: 8,
                        align: 'center',
                        wrap: true,
                        border: true,
                    });
                });

                stt++;
                r++;
            }

            r++;
            sheet.mergeCells(`B${r}:P${r}`);
            setCell(
                `B${r}`,
                `* Tổng số đồng hồ tổng đã kiểm tra trong Quý:  ${data.length} cái`,
                { size: 13, bold: true },
            );
            r += 2;

            sheet.mergeCells(`G${r}:L${r}`);
            setCell(`G${r}`, 'Ghi chú', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            for (const col of ['H', 'I', 'J', 'K', 'L']) {
                sheet.getCell(`${col}${r}`).border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' },
                };
            }
            r++;

            const noteHeaderRow = r;
            setCell(`G${noteHeaderRow}`, 'Hiệu', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            setCell(`H${noteHeaderRow}`, 'Model', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            setCell(`I${noteHeaderRow}`, 'K1', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            setCell(`J${noteHeaderRow}`, 'K2', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            setCell(`K${noteHeaderRow}`, 'K3', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            setCell(`L${noteHeaderRow}`, 'K4', {
                size: 12,
                bold: true,
                align: 'center',
                border: true,
            });
            r++;

            const seenModelKey = new Set<string>();
            const kLegend: Array<{
                marks: string;
                rows: Array<[string, string, string, string, string]>;
            }> = [];

            for (const item of data) {
                const marks = (item.Marks ?? '').trim();
                const model = (item.Model ?? '').trim();

                if (marks === '') {
                    continue;
                }

                const key = `${marks} ${model}`;

                if (seenModelKey.has(key)) {
                    continue;
                }

                seenModelKey.add(key);

                const [k1Name, k2Name, k3Name, k4Name] = resolveKLegend(
                    marks,
                    model,
                );

                let group = kLegend.find((g) => g.marks === marks);

                if (group === undefined) {
                    group = { marks, rows: [] };
                    kLegend.push(group);
                }

                group.rows.push([model, k1Name, k2Name, k3Name, k4Name]);
            }

            for (const group of kLegend) {
                const groupStartRow = r;

                for (const [
                    model,
                    k1Name,
                    k2Name,
                    k3Name,
                    k4Name,
                ] of group.rows) {
                    setCell(`H${r}`, model, {
                        size: 12,
                        align: 'center',
                        border: true,
                        wrap: true,
                    });
                    setCell(`I${r}`, k1Name, {
                        size: 12,
                        align: 'center',
                        border: true,
                    });
                    setCell(`J${r}`, k2Name, {
                        size: 12,
                        align: 'center',
                        border: true,
                    });
                    setCell(`K${r}`, k3Name, { size: 12, border: true });
                    setCell(`L${r}`, k4Name, { size: 12, border: true });
                    r++;
                }

                const groupEndRow = r - 1;

                setCell(`G${groupStartRow}`, group.marks, {
                    size: 12,
                    align: 'center',
                    border: true,
                });

                if (groupEndRow > groupStartRow) {
                    sheet.mergeCells(
                        `G${groupStartRow}:G${groupEndRow}`,
                    );

                    for (let row = groupStartRow; row <= groupEndRow; row++) {
                        sheet.getCell(`G${row}`).border = {
                            top: { style: 'thin' },
                            left: { style: 'thin' },
                            bottom: { style: 'thin' },
                            right: { style: 'thin' },
                        };
                    }
                }
            }

            if (kLegend.length === 0) {
                setCell(`G${r}`, '', { border: true });
                setCell(`H${r}`, '', { border: true });
                setCell(`I${r}`, '', { border: true });
                setCell(`J${r}`, '', { border: true });
                setCell(`K${r}`, '', { border: true });
                setCell(`L${r}`, '', { border: true });
                r++;
            }

            r++;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, company.toUpperCase(), {
                size: 13,
                bold: true,
                align: 'center',
            });
            sheet.mergeCells(`K${r}:P${r}`);
            setCell(`K${r}`, 'XÍ NGHIỆP TRUYỀN DẪN NƯỚC SẠCH', {
                size: 13,
                bold: true,
                align: 'center',
            });
            r++;

            sheet.mergeCells(`B${r}:F${r}`);
            setCell(`B${r}`, 'TỔNG GIÁM ĐỐC', {
                size: 13,
                bold: true,
                align: 'center',
            });
            sheet.mergeCells(`K${r}:P${r}`);
            setCell(`K${r}`, 'KT.GIÁM ĐỐC', {
                size: 13,
                bold: true,
                align: 'center',
            });

            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], {
                type: 'application/octet-stream',
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Bieu mau kiem tra cac DHT-${company} Quy ${quarter}.${year}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } finally {
            setExporting(false);
        }
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
                            Báo cáo hệ số K theo địa bàn
                        </Text>
                    </Center>
                    <hr />
                </Col>

                <Col md={4}>
                    <Select
                        label="Địa bàn (Quản lý)"
                        placeholder="Chọn địa bàn"
                        withAsterisk
                        data={listCompanies}
                        clearable
                        searchable
                        disabled={isDisableSelectCompany}
                        nothingFound="Không tìm thấy!!"
                        onChange={onCompanyChanged}
                        value={company}
                    />
                </Col>

                <Col
                    md={2}
                    style={{
                        marginTop: '1.5rem',
                    }}
                >
                    <Button
                        leftIcon={<IconFileExport size={18} />}
                        disabled={
                            company === null ||
                            company === '' ||
                            data.length === 0 ||
                            exporting
                        }
                        loading={exporting}
                        onClick={onExportClicked}
                        fullWidth
                    >
                        Xuất file biểu mẫu
                    </Button>
                </Col>

                <Col span={12} style={{ maxWidth: '99%' }}>
                    {loading ? (
                        <Center style={{ padding: '2rem' }}>
                            <Loader />
                        </Center>
                    ) : (
                        <DataTable
                            theme={tableTheme}
                            columns={columns}
                            data={data}
                            title={
                                <Center>
                                    <Text weight={500}>
                                        Danh Sách Hệ Số K Theo Địa Bàn
                                    </Text>
                                </Center>
                            }
                            paginationPerPage={50}
                            sortIcon={<IconArrowBadgeUpFilled />}
                            defaultSortFieldId="_id"
                            defaultSortAsc={true}
                            pagination
                            highlightOnHover={true}
                            dense={false}
                            noDataComponent={
                                <Center style={{ padding: '2rem' }}>
                                    <Text color="dimmed">
                                        {company
                                            ? 'Không có dữ liệu'
                                            : 'Chọn địa bàn để xem dữ liệu'}
                                    </Text>
                                </Center>
                            }
                        />
                    )}
                </Col>
            </Grid>
        </motion.div>
    );
};

export default StatisticKCoefficientByAreaPage;
