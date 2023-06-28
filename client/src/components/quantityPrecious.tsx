import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';
import { CurrentEndDatePreciousState } from '../features/currentEndDatePrecious';
import { CurrentStartDatePreciousState } from '../features/currentStartDatePrecious';

import { AddIndexState } from '../features/addIndex';
import { AddLocationState } from '../features/addLocation';
import { AddLockValveState } from '../features/addLockValve';
import { AddSubtractWaterB1State } from '../features/addSubtractWaterB1';
import { AddSubtractWaterB2State } from '../features/addSubtractWaterB2';
import { AddWaterCustomerState } from '../features/addWaterCustomer';
import { CurrentCompanyNamePreciousState } from '../features/currentCompanyNamePrecious';

import { QuantityWaterSupplyState } from '../features/quantityWaterSupply';

import { useDispatch, useSelector } from 'react-redux';

import {
    calcSpace2Date,
    convertDatePeriodToMonth,
    convertDatePeriodToYear,
    convertMilisecondToStringDate,
} from '../utils/utils';

const QuantityPrecious = () => {
    const currentCompanyPreciousState = useSelector(
        CurrentCompanyPreciousState,
    );
    const currentStartDatePreciousState = useSelector(
        CurrentStartDatePreciousState,
    );
    const currentEndDatePreciousState = useSelector(
        CurrentEndDatePreciousState,
    );
    const addLocationState = useSelector(AddLocationState);
    const addIndexState = useSelector(AddIndexState);
    const addLockValveState = useSelector(AddLockValveState);
    const addSubtractWaterB1State = useSelector(AddSubtractWaterB1State);
    const addSubtractWaterB2State = useSelector(AddSubtractWaterB2State);
    const addWaterCustomerState = useSelector(AddWaterCustomerState);
    const quantityWaterSupplyState = useSelector(QuantityWaterSupplyState);
    const currentCompanyNamePreciousState = useSelector(
        CurrentCompanyNamePreciousState,
    );

    const dispatch = useDispatch();

    const renderWaterMeter = (
        data: any,
        location: any,
        addIndex: any,
        lockValve: any,
    ) => {
        let result = [];

        let dataToRender = [];

        let tempSum = 0;

        if (data.length > 0) {
            let index = 1;

            for (let item of data) {
                let isChange = false;

                let obj = {
                    Stt: index++,
                    SiteId: item.SiteId,
                    Location: item.Location,
                    Direction: '',
                    PreviousPeriodIndex: '',
                    NextPeriodIndex: '',
                    AmountWater: '',
                    Note: '',
                };

                if (
                    item.QndDistributionCompany !== '' &&
                    item.IstDistributionCompany
                ) {
                    obj.Direction = `${item.QndDistributionCompany} > ${item.IstDistributionCompany}`;
                }

                if (location.length > 0) {
                    let findLocation = location.find(
                        // @ts-ignore
                        (el) => el.SiteId === item.SiteId,
                    );
                    if (findLocation !== undefined) {
                        obj.AmountWater = findLocation.TotalQuantity;
                        obj.Note = 'Tính TB';

                        isChange = true;

                        tempSum += findLocation.TotalQuantity;
                    }
                }
                if (addIndex.length > 0) {
                    let findIndex = addIndex.find(
                        //@ts-ignore
                        (el) => el.SiteId === item.SiteId,
                    );

                    if (findIndex !== undefined) {
                        obj.PreviousPeriodIndex = findIndex.PreviousPeriodIndex;
                        obj.NextPeriodIndex = findIndex.NextPeriodIndex;
                        obj.Note = 'Chỉ số';

                        let total = 0;

                        if (
                            findIndex.NextPeriodIndex !== null &&
                            findIndex.NextPeriodIndex !== undefined
                        ) {
                            total += parseInt(findIndex.NextPeriodIndex);
                        }

                        if (
                            findIndex.PreviousPeriodIndex !== null &&
                            findIndex.PreviousPeriodIndex !== undefined
                        ) {
                            total -= parseInt(findIndex.PreviousPeriodIndex);
                        }

                        tempSum += parseInt(total ? total.toFixed(0) : '0');

                        obj.AmountWater = total.toFixed(0);

                        isChange = true;
                    }
                }
                if (lockValve.length > 0) {
                    let findLockValve = lockValve.find(
                        //@ts-ignore
                        (el) => el.SiteId === item.SiteId,
                    );
                    if (findLockValve !== undefined) {
                        obj.AmountWater = '0';
                        obj.Note = 'Khóa Van';
                        isChange = true;

                        tempSum += 0;
                    }
                }

                if (isChange == false) {
                    if (item.ListQuantity.length > 0) {
                        let temp = 0;

                        for (let d of item.ListQuantity) {
                            if (d.Value !== null && d.Value !== undefined) {
                                temp += d.Value;
                            }
                        }

                        obj.AmountWater = temp.toFixed(0);
                        obj.Note = 'Logger';

                        tempSum += parseInt(temp ? temp.toFixed(0) : '0');
                    } else {
                        tempSum += 0;
                    }
                }

                dataToRender.push(obj);
            }
        }

        if (dataToRender.length > 0) {
            for (let item of dataToRender) {
                let content = (
                    <tr key={item.Stt}>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Stt}
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
                            {item.Direction}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.PreviousPeriodIndex
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.PreviousPeriodIndex,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.NextPeriodIndex
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.NextPeriodIndex,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.AmountWater
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.AmountWater,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Note}
                        </td>
                    </tr>
                );

                result.push(content);
            }
        }

        return [result, tempSum];
    };

    const renderSubtractWaterB1 = (waterB1: any) => {
        let result = [];

        let sum = 0;
        if (waterB1.length > 0) {
            let index = 1;

            for (let item of waterB1) {
                if (
                    item.AmountWater !== null &&
                    item.AmountWater !== undefined
                ) {
                    sum += item.AmountWater;
                }

                let content = (
                    <tr key={`kk-${index}`}>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {index++}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.NumberPrecious}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Content}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Provider}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.AmountWater
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.AmountWater,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Note}
                        </td>
                    </tr>
                );

                result.push(content);
            }
        }

        return [result, sum];
    };

    const renderSubtractWaterB2 = (waterB2: any) => {
        let result = [];

        let sum = 0;
        if (waterB2.length > 0) {
            let index = 1;

            for (let item of waterB2) {
                if (
                    item.AmountWater !== null &&
                    item.AmountWater !== undefined
                ) {
                    sum += item.AmountWater;
                }

                let content = (
                    <tr key={`kkk-${index}`}>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {index++}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.NumberPrecious}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Content}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Provider}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.AmountWater
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.AmountWater,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Note}
                        </td>
                    </tr>
                );

                result.push(content);
            }
        }

        return [result, sum];
    };

    const renderWaterCustomer = (waterCustomer: any) => {
        let result = [];

        let sum = 0;

        if (waterCustomer.length > 0) {
            for (let item of waterCustomer) {
                if (
                    item.AmountWater !== null &&
                    item.AmountWater !== undefined
                ) {
                    sum += item.AmountWater;
                }

                let content = (
                    <tr key={`kkkk-${item.NumberPrecious}`}>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.NumberPrecious}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.DatePublished}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.AmountMeter
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.AmountMeter,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.AmountWater
                                ? new Intl.NumberFormat('de-DE').format(
                                      //@ts-ignore
                                      item.AmountWater,
                                  )
                                : ''}
                        </td>
                        <td
                            style={{
                                border: '1px solid black',
                                borderCollapse: 'collapse',
                            }}
                        >
                            {item.Note}
                        </td>
                    </tr>
                );

                result.push(content);
            }
        }

        return [result, sum];
    };

    let contentWater = renderWaterMeter(
        quantityWaterSupplyState,
        addLocationState,
        addIndexState,
        addLockValveState,
    );

    let contentSubtractWaterB1 = renderSubtractWaterB1(addSubtractWaterB1State);
    let contentSubtractWaterB2 = renderSubtractWaterB2(addSubtractWaterB2State);
    let contentWaterCustomer = renderWaterCustomer(addWaterCustomerState);

    return (
        <>
            <div id="quantity-precious" style={{ padding: '5px' }}>
                <table style={{ width: '100%' }}>
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td>
                                <span
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                    }}
                                >
                                    Ủy Ban Nhân Dân
                                </span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                    }}
                                >
                                    Thành Phố Hồ Chí Minh
                                </span>
                            </td>
                            <td></td>
                            <td>
                                <span
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
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
                                    }}
                                >
                                    Tổng Công Ty Cấp Nước Sài Gòn
                                </span>
                            </td>
                            <td></td>
                            <td>
                                <span
                                    style={{
                                        fontSize: '14px',
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
                                        textTransform: 'uppercase',
                                        fontSize: '14px',
                                    }}
                                >
                                    Trách Nhiệm Hữu Hạn Một Thành Viên
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
                                    TP. Hồ Chí Minh, ngày ....... tháng .......
                                    năm .......
                                </span>{' '}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bolder',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        fontSize: '20px',
                    }}
                >
                    Biên Bản Xác Định Sản Lượng Nước Mua Bán Sỉ Của{' '}
                    {currentCompanyNamePreciousState} Kỳ {/* @ts-ignore */}
                    {convertDatePeriodToMonth(currentEndDatePreciousState)}/
                    {/* @ts-ignore */}
                    {convertDatePeriodToYear(currentEndDatePreciousState)}
                </div>
                <div style={{ marginTop: '20px' }}>
                    Hôm nay, ngày ... tháng ... năm ...... tại
                    ....................................................
                </div>
                <div>Chúng tôi gồm:</div>
                <div style={{ marginTop: '5px' }}>
                    Bên A:
                    ..............................................................................................
                </div>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                    Ông\Bà:
                    .............................................................................................
                </div>
                <div style={{ marginTop: '5px' }}>
                    Bên B:
                    ..............................................................................................
                </div>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                    Ông\Bà:
                    .............................................................................................
                </div>
                <div style={{ marginTop: '5px' }}>
                    Cùng xác nhận lượng nước mua bán sỉ của kỳ 06/2022 như sau:
                </div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>
                    Từ ngày{' '}
                    {convertMilisecondToStringDate(
                        //@ts-ignore
                        currentStartDatePreciousState,
                    )}{' '}
                    đến ngày{' '}
                    {convertMilisecondToStringDate(
                        //@ts-ignore
                        currentEndDatePreciousState,
                    )}{' '}
                    (
                    {calcSpace2Date(
                        //@ts-ignore
                        currentStartDatePreciousState,
                        currentEndDatePreciousState,
                    )}{' '}
                    ngày)
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    I. Lượng Nước Qua Đồng Hồ Tổng (A1):
                </div>
                <div>
                    <table
                        style={{
                            width: '100%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <thead
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
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
                                    Tên khu vực đồng hồ
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Chiều tách mạng
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s kỳ trước
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    C/s kỳ sau
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước qua đồng hồ (m3)
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
                            {contentWater[0]}
                        </tbody>
                        <tfoot
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                    colSpan={6}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        CỘNG
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        {contentWater[1]
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  //@ts-ignore
                                                  contentWater[1],
                                              )
                                            : ''}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        (A1)
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    II. Lượng Nước Giảm Trừ (B1):
                </div>
                <div style={{ marginTop: '5px' }}>
                    <table
                        style={{
                            width: '100%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <thead
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
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
                                    Số biên bản/Ngày phát hành
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Nội dung giảm trừ
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Đơn vị thi công
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước giảm trừ (m3)
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
                            {contentSubtractWaterB1[0]}
                        </tbody>
                        <tfoot
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                    colSpan={4}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        CỘNG
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        {contentSubtractWaterB1[1]
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  //@ts-ignore
                                                  contentSubtractWaterB1[1],
                                              )
                                            : ''}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        (B1)
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    III. Lượng Nước Giảm Trừ (B2):
                </div>
                <div style={{ marginTop: '5px' }}>
                    <table
                        style={{
                            width: '100%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <thead
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
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
                                    Số biên bản/Ngày phát hành
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Nội dung giảm trừ
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Đơn vị thi công
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước giảm trừ (m3)
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
                            {contentSubtractWaterB2[0]}
                        </tbody>
                        <tfoot
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                    colSpan={4}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        CỘNG
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        {contentSubtractWaterB2[1]
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  //@ts-ignore
                                                  contentSubtractWaterB2[1],
                                              )
                                            : ''}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        (B2)
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    IV. Lượng Nước Giảm Trừ (Chưa Thống Nhất):
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <span style={{ fontWeight: 'bold' }}>a. Bên A</span>
                </div>
                <div style={{ marginTop: '5px', marginLeft: '10px' }}>
                    <span>
                        1.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span>
                        2.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span>
                        3.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>Ý kiến đề nghị:</span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>
                        ......................................................................................................................................
                    </span>
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <span style={{ fontWeight: 'bold' }}>a. Bên B</span>
                </div>
                <div style={{ marginTop: '5px', marginLeft: '10px' }}>
                    <span>
                        1.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span>
                        2.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span>
                        3.
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>Ý kiến đề nghị:</span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>
                        ......................................................................................................................................
                    </span>
                    <br />
                    <span style={{ marginLeft: '20px' }}>
                        ......................................................................................................................................
                    </span>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    V. Lượng Nước Qua Đồng Hồ Khách Hàng Cũng Là Đồng Hồ Tổng
                    (A2)
                </div>
                <div style={{ marginTop: '5px' }}>
                    <table
                        style={{
                            width: '100%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <thead
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Số biên bản
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Ngày phát hành
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Số lượng đồng hồ
                                </th>
                                <th
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước
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
                            {contentWaterCustomer[0]}
                        </tbody>
                        <tfoot
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                    colSpan={3}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        CỘNG
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        {contentWaterCustomer[1]
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  //@ts-ignore
                                                  contentWaterCustomer[1],
                                              )
                                            : ''}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        (A2)
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}
                >
                    VI. Tổng Lượng Nước Mua Bán Sỉ
                </div>
                <div style={{ marginTop: '5px' }}>
                    <table
                        style={{
                            width: '100%',
                            border: '1px solid black',
                            borderCollapse: 'collapse',
                        }}
                    >
                        <tbody style={{ textAlign: 'center' }}>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    1
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (A1)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước qua đồng hồ tổng
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {contentWater[1]
                                        ? new Intl.NumberFormat('de-DE').format(
                                              //@ts-ignore
                                              contentWater[1],
                                          )
                                        : ''}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (m3)
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    2
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (A2)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước qua ĐHT cũng là ĐH khách hàng
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {contentWaterCustomer[1]
                                        ? new Intl.NumberFormat('de-DE').format(
                                              //@ts-ignore
                                              contentWaterCustomer[1],
                                          )
                                        : ''}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (m3)
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    3
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (B)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    Lượng nước giảm trừ: (B1) + (B2)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {/* @ts-ignore */}
                                    {contentSubtractWaterB1[1] +
                                    contentSubtractWaterB2[1]
                                        ? new Intl.NumberFormat('de-DE').format(
                                              //@ts-ignore
                                              contentSubtractWaterB1[1] +
                                                  contentSubtractWaterB2[1],
                                          )
                                        : ''}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    (m3)
                                </td>
                            </tr>
                        </tbody>
                        <tfoot
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                    colSpan={3}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        TỔNG CỘNG (A1) + (A2) - (B) =
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {/* @ts-ignore */}
                                        {contentWater[1] +
                                        contentWaterCustomer[1] -
                                        //@ts-ignore
                                        (contentSubtractWaterB1[1] +
                                            contentSubtractWaterB2[1])
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  //@ts-ignore
                                                  contentWater[1] +
                                                      contentWaterCustomer[1] -
                                                      //@ts-ignore
                                                      (contentSubtractWaterB1[1] +
                                                          contentSubtractWaterB2[1]),
                                              )
                                            : ''}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        borderCollapse: 'collapse',
                                    }}
                                >
                                    <span style={{ fontSize: '18px' }}>
                                        (m3)
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <table style={{ width: '100%', marginTop: '20px' }}>
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td style={{ textAlign: 'center' }}>
                                <span
                                    style={{
                                        fontSize: '15px',
                                    }}
                                >
                                    BÊN A
                                </span>
                                <br />
                                <br />
                                <span>
                                    CÔNG TY ....................................
                                </span>
                            </td>
                            <td colSpan={2}>
                                <span
                                    style={{
                                        fontSize: '15px',
                                    }}
                                >
                                    BÊN B
                                </span>
                                <br />
                                <br />
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '15px',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Tổng Công Ty Cấp Nước Sài Gòn
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2}>
                                <i>Xí nghiệp truyền dẫn nước sạch</i>
                            </td>
                        </tr>
                        <tr style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            <td>
                                <span>Người kiểm tra</span>
                            </td>
                            <td>
                                <span>Đội QLĐHT</span>
                            </td>
                            <td>
                                <span>Giám đốc</span>
                            </td>
                        </tr>
                        <tr style={{ height: '150px' }}></tr>
                        <tr
                            style={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            <td>
                                <span>Giám đốc</span>
                            </td>
                            <td colSpan={2}>
                                <span>KT Tổng Giám Đốc</span>
                                <br />
                                <span>Phó Tổng Giám Đốc</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default QuantityPrecious;
