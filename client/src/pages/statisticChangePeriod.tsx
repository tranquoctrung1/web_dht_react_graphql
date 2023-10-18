import { Select, Button, Grid, Col, Center, Text } from '@mantine/core';

import { DateInput } from '@mantine/dates';

import {
    checkAdminViewerRole,
    convertDateToString,
    convertTimeStampToDate,
} from '../utils/utils';

import { useEffect, useState } from 'react';

import {
    useGetStatisticAccreditedLazyQuery,
    useGetStatisticMeterChangeLazyQuery,
    useGetStatisticTransmitterChangeLazyQuery,
    useGetStatisticLoggerChangeLazyQuery,
    useGetStatisticBatteryChangeLazyQuery,
    useGetStatisticTransmitterBatteryChangeLazyQuery,
    useGetStatisticLoggerBatteryChangeLazyQuery,
} from '../__generated__/graphql';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

const StatisticChangePeriodPage = () => {
    const [changeData, setChangeData] = useState([]);
    const [time, setTime] = useState<Date | null>(null);
    const [type, setType] = useState(0);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [data, setData] = useState([]);
    const [columns, setColumn] = useState([]);
    const [title, setTitle] = useState('');

    const [getStatisticAccreditation, {}] =
        useGetStatisticAccreditedLazyQuery();
    const [getStatisticMeterChange, {}] = useGetStatisticMeterChangeLazyQuery();
    const [getStatisticTransmitterChange, {}] =
        useGetStatisticTransmitterChangeLazyQuery();
    const [getStatisticLoggerChange, {}] =
        useGetStatisticLoggerChangeLazyQuery();
    const [getStatisticBatteryChange, {}] =
        useGetStatisticBatteryChangeLazyQuery();
    const [getStatisticTransmitterBatteryChange, {}] =
        useGetStatisticTransmitterBatteryChangeLazyQuery();
    const [getStatisticLoggerBatteryChange, {}] =
        useGetStatisticLoggerBatteryChangeLazyQuery();

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        const temp = [];

        const obj = {
            label: 'Kiểm định đồng hồ',
            value: 1,
        };

        temp.push(obj);

        const obj2 = {
            label: 'Thay đồng hồ',
            value: 2,
        };

        temp.push(obj2);
        const obj3 = {
            label: 'Thay bộ hiển thị',
            value: 3,
        };

        temp.push(obj3);
        const obj4 = {
            label: 'Thay logger',
            value: 4,
        };

        temp.push(obj4);
        const obj5 = {
            label: 'Thay acquy',
            value: 5,
        };
        temp.push(obj5);

        const obj6 = {
            label: 'Thay pin bộ hiển thị',
            value: 6,
        };

        temp.push(obj6);

        const obj7 = {
            label: 'Thay pin logger',
            value: 7,
        };

        temp.push(obj7);

        //@ts-ignore
        setChangeData([...temp]);
    }, []);

    const onChangeTypeChanged = (e: any) => {
        setType(e);
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

    const columnsForAccrediation = [
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
            name: 'Ngày kiểm định',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày kiểm định
</div>`
                    : convertTimeStampToDate(row.DateOfChange),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày kiểm định'
                    : convertTimeStampToDate(row.DateOfChange),
        },
        {
            name: 'Ngày hết hạn',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày hết hạn
</div>`
                    : convertTimeStampToDate(row.ExpiryDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày hết hạn'
                    : convertTimeStampToDate(row.ExpiryDate),
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
            name: 'Ghi chú',
            selector: (row: any) => row.DescriptionOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ghi chú
</div>`
                    : row.DescriptionOfChange,
        },
    ];

    const columnsForLogger = [
        {
            name: 'STT',
            selector: (row: any) => row.STT,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
            Ghi chú
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
                    : row.Location,
            width: '300px',
        },
        {
            name: 'Logger cũ',
            selector: (row: any) => row.OldLooger,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Logger cũ
</div>`
                    : row.OldLooger,
            width: '100px',
        },
        {
            name: 'Logger mới',
            selector: (row: any) => row.NewLogger,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Logger mới
</div>`
                    : row.NewLogger,
        },
        {
            name: 'Ngày thay',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày thay
</div>`
                    : convertTimeStampToDate(row.DateOfChange),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày thay'
                    : convertTimeStampToDate(row.DateOfChange),
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.DescriptionOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ghi chú
</div>`
                    : row.DescriptionOfChange,
        },
    ];

    const columnsForAnother = [
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
            name: 'Đồng hồ cũ',
            selector: (row: any) => row.OldMeter,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Đồng hồ cũ
</div>`
                    : row.OldMeter,
            width: '100px',
        },
        {
            name: 'Bộ hiển thị cũ',
            selector: (row: any) => row.OldTran,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Bộ hiển thị cũ
</div>`
                    : row.OldTran,
            width: '100px',
        },
        {
            name: 'Mã ĐH',
            selector: (row: any) => row.MeterId,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Mã ĐH
</div>`
                    : row.MeterId,
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
                    : row.Meter,
            width: '100px',
        },
        {
            name: 'Mã BHT',
            selector: (row: any) => row.TransmitterId,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Mã BHT
</div>`
                    : row.TransmitterId,
            width: '100px',
        },
        {
            name: 'Bộ hiển thị',
            selector: (row: any) => row.Transmitter,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Bộ hiển thị
</div>`
                    : row.Transmitter,
            width: '100px',
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
            name: 'Ngày thay',
            selector: (row: any) => row.DateOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày thay
</div>`
                    : convertTimeStampToDate(row.DateOfChange),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày thay'
                    : convertTimeStampToDate(row.DateOfChange),
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
            name: 'Ngày hết hạn KĐ',
            selector: (row: any) => row.ExpiryDate,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ngày hết hạn KĐ
</div>`
                    : convertTimeStampToDate(row.ExpiryDate),
            width: '100px',
            format: (row: any) =>
                row.STT === 'STT'
                    ? 'Ngày hết hạn KĐ'
                    : convertTimeStampToDate(row.ExpiryDate),
        },
        {
            name: 'Ghi chú',
            selector: (row: any) => row.DescriptionOfChange,
            sortable: true,
            cellExport: (row: any) =>
                row.STT === 'STT'
                    ? `<div style="color: blue; font-weight: bold;">
                    Ghi chú
</div>`
                    : row.DescriptionOfChange,
        },
    ];

    const getStatisticAcccreditationAction = () => {
        getStatisticAccreditation({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticAccredited !== null &&
                    res?.data?.GetStatisticAccredited !== undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data.GetStatisticAccredited) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Kiểm Định Đồng Hồ Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Kiểm Định Đồng Hồ Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        ExpiryDate: '',
                        AccreditationDocument: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsForAccrediation]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticMeterChangeAction = () => {
        getStatisticMeterChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticMeterChange !== null &&
                    res?.data?.GetStatisticMeterChange !== undefined
                ) {
                    const temp = [...res.data.GetStatisticMeterChange];

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

                    const temp2 = [];

                    let count = 1;

                    for (const item of temp) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };
                        temp2.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Đồng Hồ Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Đồng Hồ Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldMeter: '',
                        OldTran: '',
                        Meter: '',
                        MeterId: '',
                        TransmitterId: '',
                        Transmitter: '',
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        AccreditationDocument: '',
                        ExpiryDate: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldMeter: 'Đồng hồ cũ',
                        OldTran: 'Bộ hiển thị cũ',
                        Meter: 'Meter',
                        MeterId: 'Mã ĐH',
                        TransmitterId: 'Mã BHT',
                        Transmitter: 'Bộ hiển thị',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp2]);

                    //@ts-ignore
                    setColumn([...columnsForAnother]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticTransmitterChangeAction = () => {
        getStatisticTransmitterChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticTransmitterChange !== null &&
                    res?.data?.GetStatisticTransmitterChange !== undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data
                        ?.GetStatisticTransmitterChange) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Bộ Hiển Thị Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Bộ Hiển Thị Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldMeter: '',
                        OldTran: '',
                        Meter: '',
                        MeterId: '',
                        TransmitterId: '',
                        Transmitter: '',
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        AccreditationDocument: '',
                        ExpiryDate: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldMeter: 'Đồng hồ cũ',
                        OldTran: 'Bộ hiển thị cũ',
                        Meter: 'Meter',
                        MeterId: 'Mã ĐH',
                        TransmitterId: 'Mã BHT',
                        Transmitter: 'Bộ hiển thị',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsForAnother]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticLoggerChangeAction = () => {
        getStatisticLoggerChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticLoggerChange !== null &&
                    res?.data?.GetStatisticLoggerChange !== undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data?.GetStatisticLoggerChange) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Logger Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Logger Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldLogger: '',
                        NewLogger: '',
                        DateOfChange: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldLogger: 'Logger cũ',
                        NewLogger: 'Logger mới',
                        DateOfChange: 'Ngày thay',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsForLogger]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticBatteryChangeAction = () => {
        getStatisticBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticBatteryChange !== null &&
                    res?.data?.GetStatisticBatteryChange !== undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data?.GetStatisticBatteryChange) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Acquy Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Acquy Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldMeter: '',
                        OldTran: '',
                        Meter: '',
                        MeterId: '',
                        TransmitterId: '',
                        Transmitter: '',
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        AccreditationDocument: '',
                        ExpiryDate: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldMeter: 'Đồng hồ cũ',
                        OldTran: 'Bộ hiển thị cũ',
                        Meter: 'Meter',
                        MeterId: 'Mã ĐH',
                        TransmitterId: 'Mã BHT',
                        Transmitter: 'Bộ hiển thị',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setData([...temp]);

                    //@ts-ignore
                    setColumn([...columnsForAnother]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticTransmitterBatteryChangeAction = () => {
        getStatisticTransmitterBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticTransmitterBatteryChange !== null &&
                    res?.data?.GetStatisticTransmitterBatteryChange !==
                        undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data
                        ?.GetStatisticTransmitterBatteryChange) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Pin Bộ Hiển Thị Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Pin Bộ Hiển Thị Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldMeter: '',
                        OldTran: '',
                        Meter: '',
                        MeterId: '',
                        TransmitterId: '',
                        Transmitter: '',
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        AccreditationDocument: '',
                        ExpiryDate: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldMeter: 'Đồng hồ cũ',
                        OldTran: 'Bộ hiển thị cũ',
                        Meter: 'Meter',
                        MeterId: 'Mã ĐH',
                        TransmitterId: 'Mã BHT',
                        Transmitter: 'Bộ hiển thị',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsForAnother]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getStatisticLoggerBatteryChangeAction = () => {
        getStatisticLoggerBatteryChange({
            variables: {
                date: time,
            },
        })
            .then((res) => {
                if (
                    res?.data?.GetStatisticLoggerBatteryChange !== null &&
                    res?.data?.GetStatisticLoggerBatteryChange !== undefined
                ) {
                    const temp = [];

                    let count = 1;

                    for (const item of res.data
                        ?.GetStatisticLoggerBatteryChange) {
                        const obj = {
                            STT: count++,
                            ...item,
                        };

                        temp.push(obj);
                    }

                    setTitle(
                        `Điểm Lắp Đặt Mới Thay Pin Logger Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                    );

                    const objTitle = {
                        STT: '',
                        _id: '',
                        Location: `Điểm Lắp Đặt Mới Thay Pin Logger Sau Ngày ${convertDateToString(
                            //@ts-ignore
                            time,
                        )}`,
                        OldMeter: '',
                        OldTran: '',
                        Meter: '',
                        MeterId: '',
                        TransmitterId: '',
                        Transmitter: '',
                        Marks: '',
                        Size: '',
                        DateOfChange: '',
                        AccreditationDocument: '',
                        ExpiryDate: '',
                        DescriptionOfChange: '',
                    };

                    const obj = {
                        STT: 'STT',
                        _id: 'Mã vị trí',
                        Location: 'Vị trí',
                        OldMeter: 'Đồng hồ cũ',
                        OldTran: 'Bộ hiển thị cũ',
                        Meter: 'Meter',
                        MeterId: 'Mã ĐH',
                        TransmitterId: 'Mã BHT',
                        Transmitter: 'Bộ hiển thị',
                        Marks: 'Hiệu',
                        Size: 'Cở',
                        DateOfChange: 'Ngày kiểm định',
                        ExpiryDate: 'Ngày hết hạn',
                        AccreditationDocument: 'Giấy kiểm định',
                        DescriptionOfChange: 'Ghi chú',
                    };

                    //@ts-ignore
                    setData([objTitle, obj, ...temp]);

                    //@ts-ignore
                    setColumn([...columnsForAnother]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onViewClicked = () => {
        if (type !== 0 && time !== null && time !== undefined) {
            if (type === 1) {
                getStatisticAcccreditationAction();
            } else if (type === 2) {
                getStatisticMeterChangeAction();
            } else if (type === 3) {
                getStatisticTransmitterChangeAction();
            } else if (type === 4) {
                getStatisticLoggerChangeAction();
            } else if (type === 5) {
                getStatisticBatteryChangeAction();
            } else if (type === 6) {
                getStatisticTransmitterBatteryChangeAction();
            } else if (type === 7) {
                getStatisticLoggerBatteryChangeAction();
            }
        }
    };

    const tableData = {
        columns,
        data,
        fileName: title,
    };

    return (
        <Grid>
            <Col md={6}>
                {changeData ? (
                    <Select
                        label="Loại"
                        placeholder="Loại"
                        searchable
                        nothingFound="Không tìm thấy loại"
                        //@ts-ignore
                        data={changeData}
                        onChange={onChangeTypeChanged}
                    />
                ) : null}
            </Col>
            <Col md={6}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="mốc thời gian"
                    placeholder="mốc thời gian"
                    mx="auto"
                    value={time}
                    onChange={(e) => setTime(e)}
                />
            </Col>

            {isAdminViewer == false ? (
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
                    />
                </DataTableExtensions>
            </Col>
        </Grid>
    );
};

export default StatisticChangePeriodPage;
