import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';
import { CurrentEndDatePreciousState } from '../features/currentEndDatePrecious';
import { CurrentStartDatePreciousState } from '../features/currentStartDatePrecious';

import { AddLocationState, updateTotalQuantity } from '../features/addLocation';

import { useDispatch, useSelector } from 'react-redux';

import {
    calcSpace2Date,
    convertDateToDayAndMonth,
    convertDateToPeriod,
} from '../utils/utils';

const AveragePrecious = () => {
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

    const dispatch = useDispatch();

    const calcStartDateOfPeriod = (startDate: number, period: number) => {
        let result = 0;
        let dayOfStartDate = 1;

        if (startDate !== 0) {
            dayOfStartDate = new Date(startDate).getDate();
        }

        let tempDate = new Date(period);

        let tempStartPeriod = new Date(
            tempDate.getFullYear(),
            tempDate.getMonth() - 1,
            dayOfStartDate,
            0,
            0,
            0,
        );

        return tempStartPeriod.getTime();
    };

    const calcEndDateOfPeriod = (endDate: number, period: number) => {
        let result = 0;
        let dayOfEndDate = 1;

        if (endDate !== 0) {
            dayOfEndDate = new Date(endDate).getDate();
        }

        let tempDate = new Date(period);

        let tempOfEndPeriod = new Date(
            tempDate.getFullYear(),
            tempDate.getMonth(),
            dayOfEndDate,
            0,
            0,
            0,
        );

        return tempOfEndPeriod.getTime();
    };

    const checkCalcAveragePeriod = (data: any) => {
        let check = false;

        for (let item of data) {
            if (item.Period !== null && item.Period !== undefined) {
                check = true;
                break;
            }
        }

        return check;
    };

    const convertStringCalcAveragePeriod = (data: any) => {
        let isFirst = true;

        let content = '';

        for (let item of data) {
            if (item.Period !== null && item.Period !== undefined) {
                if (isFirst) {
                    content += `${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : ''
                    }`;
                    isFirst = false;
                } else {
                    content += ` + ${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : ''
                    }`;
                }
            }
        }

        return content;
    };

    const calcSumPeriod = (data: any) => {
        let sum = 0;

        for (let item of data) {
            if (item.Period !== null && item.Period !== undefined) {
                if (
                    item.Quantity !== null &&
                    item.Quantity !== undefined &&
                    item.Quantity !== ''
                ) {
                    sum += item.Quantity;
                } else {
                    sum += 0;
                }
            }
        }

        return sum;
    };

    const calcAveragePeriod = (sum: number, totalDay: number) => {
        return sum / totalDay;
    };

    const renderAverageDay = (data: any, average: number) => {
        let result = [];

        if (data.length > 0) {
            for (let item of data) {
                if (item.length > 0) {
                    let sum =
                        average *
                        calcSpace2Date(item[0], item[item.length - 1]);

                    let content = (
                        <span key={`key-${item[0]}`}>
                            <br />
                            <span>
                                {' '}
                                - Sản lượng từ ngày{' '}
                                {convertDateToDayAndMonth(item[0])} đến{' '}
                                {convertDateToDayAndMonth(
                                    item[item.length - 1],
                                )}
                                :{' '}
                                {average
                                    ? new Intl.NumberFormat('de-DE').format(
                                          //@ts-ignore
                                          average.toFixed(0),
                                      )
                                    : ''}{' '}
                                x{' '}
                                {calcSpace2Date(item[0], item[item.length - 1])}{' '}
                                ={' '}
                                {sum
                                    ? new Intl.NumberFormat('de-DE').format(
                                          //@ts-ignore
                                          sum.toFixed(0),
                                      )
                                    : ''}{' '}
                                m3 (Tính TB)
                            </span>
                        </span>
                    );

                    result.push(content);
                }
            }
        }

        return result;
    };

    const calcTotalQuantityAverage = (data: any, average: number) => {
        let sum = 0;

        if (data.length > 0) {
            for (let item of data) {
                if (item.length > 0) {
                    sum +=
                        average *
                        calcSpace2Date(item[0], item[item.length - 1]);
                }
            }
        }

        return sum;
    };

    const renderQuantityLogger = (data: any) => {
        let result = [];

        if (data.length > 0) {
            for (let item of data) {
                let content = (
                    <span key={`k-${item.From}`}>
                        <br />
                        <span>
                            {' '}
                            - Sản lượng từ ngày{' '}
                            {convertDateToDayAndMonth(item.From)} đến{' '}
                            {convertDateToDayAndMonth(item.To)}:{' '}
                            {item.Quantity
                                ? new Intl.NumberFormat('de-DE').format(
                                      item.Quantity.toFixed(0),
                                  )
                                : ''}{' '}
                            m3 ({calcSpace2Date(item.From, item.To)} ngày -
                            logger)
                        </span>
                    </span>
                );

                result.push(content);
            }
        }

        return result;
    };

    const convertStringCalcAverageQuantityLogger = (data: any) => {
        let content = '';

        if (data.length > 0) {
            let isFirst = true;

            for (let item of data) {
                if (isFirst) {
                    content += `${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : '0'
                    }`;
                    isFirst = false;
                } else {
                    content += ` + ${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : '0'
                    }`;
                }
            }
        }

        return content;
    };

    const calcAmountDayOfLogger = (data: any) => {
        let totalDay = 0;

        if (data.length > 0) {
            for (let item of data) {
                if (item.DateRange != null && item.DateRange != undefined) {
                    totalDay += item.DateRange.length;
                }
            }
        }

        return totalDay;
    };

    const convertStringTotalQuantityPeriod = (
        dataAverage: any,
        dataLogger: any,
        averageNumber: number,
    ) => {
        let content = '';

        let isFirst = true;
        if (dataAverage.length > 0) {
            for (let item of dataAverage) {
                if (isFirst) {
                    content += `${new Intl.NumberFormat('de-DE').format(
                        averageNumber *
                            calcSpace2Date(item[0], item[item.length - 1]),
                    )}`;
                    isFirst = false;
                } else {
                    content += ` + ${new Intl.NumberFormat('de-DE').format(
                        averageNumber *
                            calcSpace2Date(item[0], item[item.length - 1]),
                    )}`;
                }
            }
        }
        if (dataLogger.length > 0) {
            for (let item of dataLogger) {
                if (isFirst) {
                    content += `${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : ''
                    }`;
                    isFirst = false;
                } else {
                    content += ` + ${
                        item.Quantity
                            ? new Intl.NumberFormat('de-DE').format(
                                  item.Quantity.toFixed(0),
                              )
                            : ''
                    }`;
                }
            }
        }

        return content;
    };

    const calcTotalQuantityPeriod = (
        dataAverage: any,
        dataLogger: any,
        averageNumber: number,
    ) => {
        let sum = 0;
        if (dataAverage.length > 0) {
            for (let item of dataAverage) {
                let number =
                    averageNumber *
                    calcSpace2Date(item[0], item[item.length - 1]);
                number = parseInt(number ? number.toFixed(2) : '0');

                sum += number;
            }
        }
        if (dataLogger.length > 0) {
            for (let item of dataLogger) {
                let number = parseInt(
                    item.Quantity ? item.Quantity.toFixed(0) : '0',
                );

                sum += number;
            }
        }

        return sum;
    };

    const calcAverageDayQuantityLogger = (data: any) => {
        let average = 0;

        if (data.length > 0) {
            for (let item of data) {
                if (item.DateRange.length > 0) {
                    let number = parseInt(
                        item.Quantity ? item.Quantity.toFixed(0) : '0',
                    );

                    average += number / item.DateRange.length;
                }
            }
        }

        return average;
    };

    const renderDataPrecious = (data: any) => {
        let result = [];

        let index = 0;

        for (let item of data) {
            let totalDayPeriod1 = calcSpace2Date(
                calcStartDateOfPeriod(
                    //@ts-ignore
                    currentStartDatePreciousState,
                    item.Periods[0].Period,
                ),
                calcEndDateOfPeriod(
                    //@ts-ignore
                    currentEndDatePreciousState,
                    item.Periods[0].Period,
                ),
            );

            let totalDayPeriod2 = calcSpace2Date(
                calcStartDateOfPeriod(
                    //@ts-ignore
                    currentStartDatePreciousState,
                    item.Periods[1].Period,
                ),
                calcEndDateOfPeriod(
                    //@ts-ignore
                    currentEndDatePreciousState,
                    item.Periods[1].Period,
                ),
            );

            let totalDayPeriod3 = calcSpace2Date(
                calcStartDateOfPeriod(
                    //@ts-ignore
                    currentStartDatePreciousState,
                    item.Periods[2].Period,
                ),
                calcEndDateOfPeriod(
                    //@ts-ignore
                    currentEndDatePreciousState,
                    item.Periods[2].Period,
                ),
            );

            let sumPeriod = calcSumPeriod(item.Periods);
            let averagePeriod = calcAveragePeriod(
                sumPeriod,
                totalDayPeriod1 + totalDayPeriod2 + totalDayPeriod3,
            );

            averagePeriod = parseInt(
                averagePeriod ? averagePeriod.toFixed(0) : '0',
            );

            let averageDayLogger = calcAverageDayQuantityLogger(
                item.DateCalclogger,
            );

            averageDayLogger = parseInt(
                averageDayLogger ? averageDayLogger.toFixed(0) : '0',
            );

            let sumQuantityPeriod = calcTotalQuantityPeriod(
                item.AverageDate,
                item.DateCalclogger,
                averagePeriod,
            );

            sumQuantityPeriod = parseInt(
                sumQuantityPeriod ? sumQuantityPeriod.toFixed(0) : '0',
            );

            let obj = {
                index: index,
                TotalQuantity: sumQuantityPeriod,
            };

            //@ts-ignore
            dispatch(updateTotalQuantity(obj));

            let content = (
                <div
                    style={{ marginLeft: '100px', marginTop: '20px' }}
                    key={index + 1}
                >
                    <span style={{ fontWeight: 'bold' }}>
                        {index + 1}. {item.Location} ({item.SiteId})
                    </span>

                    {checkCalcAveragePeriod(item.Periods) ? (
                        <>
                            {/* by period  */}
                            {item.Periods[0].Period != null &&
                            item.Periods[0].Period != undefined ? (
                                <>
                                    {' '}
                                    <br />
                                    <span>
                                        {' '}
                                        - Sản lượng kỳ{' '}
                                        {convertDateToPeriod(
                                            item.Periods[0].Period,
                                        )}
                                        :{' '}
                                        {item.Periods[0].Quantity
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  item.Periods[0].Quantity.toFixed(
                                                      0,
                                                  ),
                                              )
                                            : ''}{' '}
                                        ({totalDayPeriod1} ngày - logger)
                                    </span>
                                </>
                            ) : null}
                            {item.Periods[1].Period != null &&
                            item.Periods[1].Period != undefined ? (
                                <>
                                    {' '}
                                    <br />
                                    <span>
                                        {' '}
                                        - Sản lượng kỳ{' '}
                                        {convertDateToPeriod(
                                            item.Periods[1].Period,
                                        )}
                                        :{' '}
                                        {item.Periods[1].Quantity
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  item.Periods[1].Quantity.toFixed(
                                                      0,
                                                  ),
                                              )
                                            : ''}{' '}
                                        ({totalDayPeriod2} ngày - logger)
                                    </span>
                                </>
                            ) : null}
                            {item.Periods[2].Period != null &&
                            item.Periods[2].Period != undefined ? (
                                <>
                                    {' '}
                                    <br />
                                    <span>
                                        {' '}
                                        - Sản lượng kỳ{' '}
                                        {convertDateToPeriod(
                                            item.Periods[2].Period,
                                        )}
                                        :{' '}
                                        {item.Periods[2].Quantity
                                            ? new Intl.NumberFormat(
                                                  'de-DE',
                                              ).format(
                                                  item.Periods[2].Quantity.toFixed(
                                                      0,
                                                  ),
                                              )
                                            : ''}{' '}
                                        ({totalDayPeriod3} ngày - logger)
                                    </span>
                                </>
                            ) : null}
                            <br />
                            <span>
                                {' '}
                                =={'>'} TB 1 ngày = (
                                {convertStringCalcAveragePeriod(item.Periods)})
                                /{' '}
                                {totalDayPeriod1 +
                                    totalDayPeriod2 +
                                    totalDayPeriod3}{' '}
                                ={' '}
                                {averagePeriod
                                    ? new Intl.NumberFormat('de-DE').format(
                                          //@ts-ignore
                                          averagePeriod.toFixed(0),
                                      )
                                    : ''}{' '}
                                m3
                            </span>
                            {renderAverageDay(item.AverageDate, averagePeriod)}
                            {renderQuantityLogger(item.DateCalclogger)}
                            <br />
                            <span>
                                {' '}
                                =={'>'} Sản lượng Kỳ{' '}
                                {convertDateToPeriod(
                                    //@ts-ignore
                                    currentEndDatePreciousState,
                                )}
                                :{' '}
                                {convertStringTotalQuantityPeriod(
                                    item.AverageDate,
                                    item.DateCalclogger,
                                    averagePeriod,
                                )}{' '}
                                ={'  '}
                                {new Intl.NumberFormat('de-DE').format(
                                    sumQuantityPeriod,
                                )}
                                {} m3
                            </span>
                        </>
                    ) : (
                        <>
                            {/* by logger */}
                            {renderQuantityLogger(item.DateCalclogger)}
                            <br />
                            <span>
                                {' '}
                                =={'>'} TB 1 ngày = (
                                {convertStringCalcAverageQuantityLogger(
                                    item.DateCalclogger,
                                )}
                                ) / {calcAmountDayOfLogger(item.DateCalclogger)}{' '}
                                ={' '}
                                {new Intl.NumberFormat('de-DE').format(
                                    averageDayLogger,
                                )}{' '}
                                m3
                            </span>
                            {renderAverageDay(
                                item.AverageDate,
                                averageDayLogger,
                            )}
                            <br />
                            <span>
                                {' '}
                                =={'>'} Sản lượng Kỳ{'  '}
                                {convertDateToPeriod(
                                    // @ts-ignore
                                    currentEndDatePreciousState,
                                )}
                                :{' '}
                                {convertStringTotalQuantityPeriod(
                                    item.AverageDate,
                                    item.DateCalclogger,
                                    averageDayLogger,
                                )}{' '}
                                ={' '}
                                {new Intl.NumberFormat('de-DE').format(
                                    sumQuantityPeriod,
                                )}{' '}
                                m3
                            </span>
                        </>
                    )}
                </div>
            );

            result.push(content);

            index += 1;
        }

        return result;
    };

    return (
        <div id="average-precious" style={{ padding: '5px' }}>
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
                                ---o0o---
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
                                ---o0o---
                            </span>
                        </td>
                        <td></td>
                        <td></td>
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
                Biên Bản
            </div>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '15px',
                }}
            >
                <i>
                    V/v: Thống nhất tính toán sản lượng các đồng hồ tổng tính
                    trung bình trong kỳ {/* @ts-ignore */}
                    {convertDateToPeriod(currentEndDatePreciousState)}
                </i>
            </div>
            <div style={{ marginTop: '20px' }}>
                Hôm nay lúc ... giờ ... ngày ... tháng ... năm ...... tại Xí
                Nghiệp Truyền Dẫn Nước Sạch
            </div>
            <div>Chúng tôi gồm:</div>
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                - Đại Diện Xí Nghiệp Truyền Dẫn Nước Sạch:
            </div>
            <div style={{ marginLeft: '40px', marginTop: '5px' }}>
                Đội QLĐHT: Ông ............................................
            </div>
            <div style={{ marginLeft: '40px', marginTop: '5px' }}>
                Ban Kỹ Thuật: Ông ............................................
            </div>
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                - Đại Diện Phòng Giám Thất Thoát Nước Ông:
                .........................
            </div>
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                - Đại Diện Công Ty .................. Ông:
                .........................
            </div>
            <div style={{ marginTop: '5px' }}>
                Sau khi xem xét tình hình sản lượng nước mua bán sỉ khu vực Công
                Ty ........................................ các bên cùng thống
                nhất ghi nhận như sau:
            </div>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                I. Nội dung:
            </div>
            {addLocationState.length > 0 ? (
                <>{renderDataPrecious(addLocationState)}</>
            ) : null}

            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                II. Kết luận:
            </div>
            <div style={{ marginTop: '5px' }}>
                Các bên cùng thống nhất ý kiến trên. Biên bản kết thúc lúc ...
                giờ ... phút cùng ngày.
            </div>
            <table style={{ width: '100%', marginTop: '10px' }}>
                <tbody style={{ textAlign: 'center' }}>
                    <tr>
                        <td>
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }}
                            >
                                Ban Kỹ Thuật
                            </span>
                        </td>
                        <td>
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }}
                            >
                                Đd.XNTDNS
                            </span>
                            <br />
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }}
                            >
                                Trung tâm DCC
                            </span>
                        </td>
                        <td>
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }}
                            >
                                Đội QL ĐHT
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AveragePrecious;
