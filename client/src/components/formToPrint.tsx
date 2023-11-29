import * as React from 'react';

export class ComponentToPrint extends React.PureComponent {
    constructor(props: any) {
        super(props);

        this.state = { checked: false };
    }

    render() {
        return (
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
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Xí Nghiệp Truyền Dẫn Nước Sạch
                                </span>
                            </td>
                            <td></td>
                            <td>
                                <span
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span
                                    style={{
                                        textTransform: 'uppercase',
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
                    Phiếu Theo Dõi Sản Lượng Nước Qua Đồng Hồ Tổng
                </h3>
                <div style={{ textAlign: 'center' }}>
                    <span>Thứ ..... ngày ..... tháng ..... năm .....</span>
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
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    STT
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Mã vị trí
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Vị trí
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Hiệu
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Cở
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Giờ đọc
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s Net ngày trước (1)
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s Forward hôm nay (3)
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s Reverse hôm nay (4)
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s Net hôm nay (2) = (3) - (4)
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Tiêu thụ (2) - (1)
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Ghi chú
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {
                                //@ts-ignore
                                this.props.contentRows
                            }
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
        );
    }
}

export const FormToPrint = React.forwardRef((props, ref) => {
    //@ts-ignore
    return <ComponentToPrint {...props} ref={ref} />;
});
