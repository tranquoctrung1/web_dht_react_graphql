import { Grid, Col, Select, Center, Button, Space } from '@mantine/core';

import {
    useGetAllStaffsLazyQuery,
    useGetStatisticSiteByStaffIdLazyQuery,
} from '../__generated__/graphql';

import { motion } from 'framer-motion';

import { useState, useEffect, useCallback, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

import { FormToPrint } from '../components/formToPrint';

const FormPrinterPage = () => {
    const componentRef = useRef(null);

    const [staffs, setStaffs] = useState([]);

    const [selectStaff, setSelectStaff] = useState('');

    const [contentRows, setContentRows] = useState([]);

    const onBeforeGetContentResolve = useRef(null);

    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('old boring text');

    const [GetAllStaffs, {}] = useGetAllStaffsLazyQuery();
    const [GetStatisticSiteByStaffId, {}] =
        useGetStatisticSiteByStaffIdLazyQuery();

    const handleAfterPrint = useCallback(() => {
        console.log('`onAfterPrint` called');
    }, []);

    const handleBeforePrint = useCallback(() => {
        console.log('`onBeforePrint` called'); // tslint:disable-line no-console
    }, []);

    const handleOnBeforeGetContent = useCallback(() => {
        console.log('`onBeforeGetContent` called'); // tslint:disable-line no-console
        setLoading(true);
        setText('Loading new text...');

        return new Promise((resolve) => {
            //@ts-ignore
            onBeforeGetContentResolve.current = resolve;

            setTimeout(() => {
                setLoading(false);
                setText('New, Updated Text!');
                //@ts-ignore
                resolve();
            }, 1000);
        });
    }, [setLoading, setText]);

    const reactToPrintContent = useCallback(() => {
        return componentRef.current;
    }, [componentRef.current]);

    const handlePrint = useReactToPrint({
        content: reactToPrintContent,
        documentTitle: `_mau_in_doc_so_${selectStaff}`,
        onBeforeGetContent: handleOnBeforeGetContent,
        onBeforePrint: handleBeforePrint,
        onAfterPrint: handleAfterPrint,
        removeAfterPrint: true,
    });

    useEffect(() => {
        GetAllStaffs()
            .then((res) => {
                if (res?.data !== null && res?.data !== undefined) {
                    if (
                        res.data?.GetAllStaffs !== null &&
                        res.data?.GetAllStaffs !== undefined
                    ) {
                        const temp = [];

                        for (const user of res.data?.GetAllStaffs) {
                            const obj = {
                                value: user?._id,
                                label: `${user?._id} | ${user?.FirstName} ${user?.LastName}`,
                            };

                            temp.push(obj);
                        }

                        //@ts-ignore
                        setStaffs([...temp]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onStaffChanged = (e: any) => {
        //@ts-ignore
        setSelectStaff(e);

        GetStatisticSiteByStaffId({ variables: { staffid: e } })
            .then((res) => {
                if (
                    res?.data?.GetStatisticSiteByStaffId !== null &&
                    res?.data?.GetStatisticSiteByStaffId !== undefined
                ) {
                    renderTable(res.data.GetStatisticSiteByStaffId);
                }
            })
            .catch((err) => console.log(err));
    };

    const renderTable = (data: any) => {
        const content = [];

        for (const item of data) {
            const row = (
                <tr key={item.STT}>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {item.STT}
                    </td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {item.SiteId}
                    </td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {item.Location}
                    </td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {item.Marks}
                    </td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        {item.Size}
                    </td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                    <td
                        style={{
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    ></td>
                </tr>
            );

            content.push(row);
        }

        //@ts-ignore
        setContentRows([...content]);
    };

    const onExportFileClicked = () => {
        const header =
            "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><style type='text/css' orientation='landascape' >@page { size: landscape} </style><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        const footer = '</body></html>';
        const sourceHTML =
            header +
            // @ts-ignore
            document.getElementById('formPrinter').innerHTML +
            footer;

        const source =
            'data:application/vnd.ms-word;charset=utf-8,' +
            encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = `_mau_in_doc_so_${selectStaff}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    };

    const onPrintClicked = () => {
        const content = document.getElementById('contentPrint');
        //@ts-ignore
        const pri = document.getElementById('framePrint').contentWindow;
        pri.document.open();
        //@ts-ignore
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col span={12}>
                    <Select
                        label="Nhân viên"
                        placeholder="Nhân viên"
                        searchable
                        nothingFound="Không tìm nhân viên"
                        //@ts-ignore
                        data={staffs}
                        onChange={onStaffChanged}
                    />
                </Col>
                <Col span={12}>
                    <Center>
                        <Button
                            variant="filled"
                            color="green"
                            onClick={onExportFileClicked}
                        >
                            Xuât file
                        </Button>
                        <Space w="md" />
                        <Button
                            variant="filled"
                            color="blue"
                            onClick={onPrintClicked}
                        >
                            In file
                        </Button>
                    </Center>
                </Col>
                {contentRows.length > 0 ? (
                    <Col span={12}>
                        <iframe
                            id="framePrint"
                            style={{
                                height: '0px',
                                width: '0px',
                                position: 'absolute',
                            }}
                        >
                            <div id="contentPrint">
                                <FormToPrint
                                    //@ts-ignore
                                    contentRows={contentRows}
                                />
                            </div>
                        </iframe>
                        <div id="formPrinter">
                            <div className="relativeCSS">
                                <style type="text/css" media="print">
                                    {
                                        '\
                            @page { size: landscape ; }\
                        '
                                    }
                                </style>
                                <table
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <tbody style={{ textAlign: 'center' }}>
                                        <tr>
                                            <td>
                                                <span
                                                    style={{
                                                        textTransform:
                                                            'uppercase',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Xí Nghiệp Truyền Dẫn Nước
                                                    Sạch
                                                </span>
                                            </td>
                                            <td></td>
                                            <td>
                                                <span
                                                    style={{
                                                        textTransform:
                                                            'uppercase',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Cộng Hòa Xã Hội Chủ Nghĩa
                                                    Việt Nam
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span
                                                    style={{
                                                        textTransform:
                                                            'uppercase',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Đội Quản Lý Đồng Hồ Tổng
                                                </span>
                                            </td>
                                            <td></td>
                                            <td>
                                                <span
                                                    style={{
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Độc lập - Tự do - Hạnh phúc
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span
                                                    style={{
                                                        fontSize: '.6rem',
                                                    }}
                                                >
                                                    _____________________
                                                </span>
                                            </td>
                                            <td></td>
                                            <td>
                                                <span
                                                    style={{
                                                        fontSize: '.6rem',
                                                    }}
                                                >
                                                    _____________________
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3
                                    style={{
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Phiếu Theo Dõi Sản Lượng Nước Qua Đồng Hồ
                                    Tổng
                                </h3>
                                <div style={{ textAlign: 'center' }}>
                                    <span>
                                        Thứ ..... ngày ..... tháng ..... năm
                                        .....
                                    </span>
                                </div>
                                <div
                                    className="formPrinter"
                                    style={{
                                        padding: '5px',
                                        marginTop: '15px',
                                    }}
                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            fontSize: '14px',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <thead style={{ textAlign: 'center' }}>
                                            <tr>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    STT
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Mã vị trí
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Vị trí
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Hiệu
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Cở
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Giờ đọc
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    C/s Net ngày trước (1)
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    C/s Forward hôm nay (3)
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    C/s Reverse hôm nay (4)
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    C/s Net hôm nay (2) = (3) -
                                                    (4)
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Tiêu thụ (2) - (1)
                                                </th>
                                                <th
                                                    style={{
                                                        border: '1px solid black',
                                                        borderCollapse:
                                                            'collapse',
                                                    }}
                                                >
                                                    Ghi chú
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ textAlign: 'center' }}>
                                            {contentRows}
                                        </tbody>
                                    </table>
                                </div>
                                <table
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Đd.XNTDNS</th>
                                            <th>Đd.CTCPCN.............</th>
                                            <th>Đd.CTCPCN.............</th>
                                            <th>Đd.............</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </Col>
                ) : null}
            </Grid>
        </motion.div>
    );
};

export default FormPrinterPage;
