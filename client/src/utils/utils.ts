// @ts-ignore no bundled types for this fork
import * as XLSX from 'xlsx-js-style';

const cssColorToHex = (color: string): string | null => {
    const m = color.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
    );
    if (!m) return null;
    const [, r, g, b, a] = m;
    if (a !== undefined && parseFloat(a) === 0) return null;
    return [r, g, b]
        .map((x) => parseInt(x, 10).toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
};

const THIN_BORDER = { style: 'thin', color: { rgb: '000000' } };

// table_to_book/sheet_add_dom only copy cell text/merges - they don't read
// CSS, so visual styling (borders, bold headers, centered text, highlighted
// cells) has to be picked up from the DOM and applied onto the worksheet
// cells by hand, to match how the table actually renders on screen.
const applyTableCellStyles = (
    table: HTMLElement,
    ws: any,
    rowOffset: number,
) => {
    const occupied: Set<number>[] = [];
    Array.from((table as HTMLTableElement).rows).forEach((row, r) => {
        occupied[r] = occupied[r] || new Set();
        let c = 0;
        Array.from(row.cells).forEach((cell) => {
            while (occupied[r].has(c)) c++;
            const colSpan = cell.colSpan || 1;
            const rowSpan = cell.rowSpan || 1;
            for (let rr = r; rr < r + rowSpan; rr++) {
                occupied[rr] = occupied[rr] || new Set();
                for (let cc = c; cc < c + colSpan; cc++) occupied[rr].add(cc);
            }

            const computed = window.getComputedStyle(cell);
            const style: any = {
                border: {
                    top: THIN_BORDER,
                    bottom: THIN_BORDER,
                    left: THIN_BORDER,
                    right: THIN_BORDER,
                },
            };

            const bgHex = cssColorToHex(computed.backgroundColor);
            if (bgHex) {
                style.fill = {
                    patternType: 'solid',
                    fgColor: { rgb: bgHex },
                };
            }

            const weight = computed.fontWeight;
            const isBold = weight === 'bold' || parseInt(weight, 10) >= 700;
            if (isBold) {
                style.font = { bold: true };
            }

            if (computed.textAlign === 'center' || computed.textAlign === 'right') {
                style.alignment = { horizontal: computed.textAlign };
            }

            // A merged cell only has one real entry in the sheet (the
            // top-left corner); the other cells it spans over don't exist,
            // so their border edges would otherwise render blank. Style
            // every covered cell so the merge looks like one solid block.
            for (let rr = r; rr < r + rowSpan; rr++) {
                for (let cc = c; cc < c + colSpan; cc++) {
                    const addr = XLSX.utils.encode_cell({
                        r: rr + rowOffset,
                        c: cc,
                    });
                    if (!ws[addr]) ws[addr] = { t: 'z' };
                    ws[addr].s = { ...(ws[addr].s || {}), ...style };
                }
            }

            c += colSpan;
        });
    });
};

// Widen each column to fit its longest value so text like long "Vị trí"
// notes isn't clipped. The merged title row (rowOffset) is skipped since a
// long caption would otherwise blow up column A's width alone.
const autoSizeColumns = (ws: any, rowOffset: number) => {
    if (!ws['!ref']) return;
    const range = XLSX.utils.decode_range(ws['!ref']);
    const cols: { wch: number }[] = [];
    for (let c = range.s.c; c <= range.e.c; c++) {
        let maxLen = 8;
        for (let r = range.s.r + rowOffset; r <= range.e.r; r++) {
            const cell = ws[XLSX.utils.encode_cell({ r, c })];
            if (cell && cell.v !== undefined && cell.v !== null) {
                maxLen = Math.max(maxLen, String(cell.v).length);
            }
        }
        cols.push({ wch: Math.min(maxLen + 2, 80) });
    }
    ws['!cols'] = cols;
};

export const exportTableToExcel = (
    tableId: string,
    filename: string,
    sheetName: string = 'Sheet1',
) => {
    const table = document.getElementById(tableId) as HTMLTableElement | null;
    if (!table) return;
    const sheet = sheetName.substring(0, 31);

    const captionEl = table.querySelector('caption');
    const captionText = captionEl?.textContent?.trim() || '';
    const rowOffset = captionText ? 1 : 0;

    const ws: any = {};
    XLSX.utils.sheet_add_dom(ws, table, { origin: { r: rowOffset, c: 0 } });

    if (captionText) {
        XLSX.utils.sheet_add_aoa(ws, [[captionText]], { origin: 'A1' });
        const range = XLSX.utils.decode_range(ws['!ref']);
        ws['!merges'] = ws['!merges'] || [];
        ws['!merges'].push({
            s: { r: 0, c: 0 },
            e: { r: 0, c: range.e.c },
        });
        ws['A1'].s = {
            font: { bold: true },
            alignment: { horizontal: 'center' },
        };
    }

    applyTableCellStyles(table, ws, rowOffset);
    autoSizeColumns(ws, rowOffset);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, sheet);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
};

export const convertDateToStringNotTime = (date: any) => {
    if (
        date != null &&
        date != undefined &&
        date.toString().trim() != '' &&
        date != 'NO DATA'
    ) {
        let year = date.getFullYear();
        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;

        return `${day}/${month}/${year}`;
    }
    return '';
};

export const convertDateToStringNotTimeForTitle = (date: any) => {
    if (
        date != null &&
        date != undefined &&
        date.toString().trim() != '' &&
        date != 'NO DATA'
    ) {
        let year = date.getFullYear();
        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;

        return `${day}/${month}/${year}`;
    }
    return '';
};

// @ts-ignore
export const quickSort = (arr: any) => {
    if (arr !== undefined && arr !== null) {
        if (arr.length < 2) return arr;

        // *** lấy phần tử cuối của 'arr' làm 'pivot'
        const pivotIndex = arr.length - 1;
        const pivot = arr[pivotIndex];

        const left = [];
        const right = [];

        let currentItem;
        // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
        for (let i = 0; i < pivotIndex; i++) {
            currentItem = arr[i];

            if (currentItem.SiteId[2] < pivot.SiteId[2]) {
                left.push(currentItem);
            } else {
                right.push(currentItem);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    } else {
        return [];
    }
};

export const detectedDateRemainInPeriod = (
    dateRange: number[],
    start: number,
    end: number,
) => {
    let result = [];
    if (start !== null && end !== null) {
        let temp = start;

        while (temp <= end) {
            let find = dateRange.find((el) => el === temp);
            if (find === undefined) {
                result.push(new Date(temp));
            }

            temp += 86400000;
        }
    }

    return result;
};

export const detectedDateRemainInPeriodByMilisecond = (
    dateRange: number[],
    start: number,
    end: number,
) => {
    let result = [];
    if (start !== null && end !== null) {
        let temp = start;

        while (temp <= end) {
            let find = dateRange.find((el) => el === temp);
            if (find === undefined) {
                result.push(temp);
            }

            temp += 86400000;
        }
    }

    return result;
};

export const detectedDateRangeContinuous = (dateRange: number[]) => {
    let result = [];
    if (dateRange.length > 1) {
        let temp = [dateRange[0]];

        for (let i = 1; i < dateRange.length; i++) {
            if (dateRange[i - 1] + 86400000 === dateRange[i]) {
                temp.push(dateRange[i]);
                if (i === dateRange.length - 1) {
                    result.push(temp);
                }
            } else {
                result.push(temp);
                temp = [dateRange[i]];
                if (i === dateRange.length - 1) {
                    result.push(temp);
                }
            }
        }
    } else if (dateRange.length == 1) {
        result.push([dateRange[0]]);
    }

    return result;
};

export const calcSpace2Date = (start: number, end: number) => {
    let differentInTime = end - start;
    let differentInDay = differentInTime / (1000 * 3600 * 24);

    return differentInDay + 1;
};

export const convertDateToPeriod = (date: number) => {
    let time = new Date(date);

    return `${time.getMonth() + 1}/${time.getFullYear()}`;
};

export const convertDatePeriodToMonth = (date: number) => {
    if (date !== null && date !== undefined && date !== 0) {
        let time = new Date(date);

        return `${time.getMonth() + 1}`;
    }
    return '';
};

export const convertDatePeriodToYear = (date: number) => {
    if (date !== null && date !== undefined && date !== 0) {
        let time = new Date(date);

        return `${time.getFullYear()}`;
    }
    return '';
};

export const convertDateToDayAndMonth = (date: number) => {
    let time = new Date(date);

    return `${time.getDate()}/${time.getMonth() + 1}`;
};

export const convertMilisecondToStringDate = (date: number) => {
    let time = new Date(date);

    return convertDateToStringNotTime(time);
};

export const convertStringMilisecondToStringDate = (milisecond: string) => {
    if (milisecond !== '') {
        let date = new Date(parseInt(milisecond));

        let year = date.getFullYear();
        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let hour =
            date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        let minute =
            date.getMinutes() >= 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`;
        let second =
            date.getSeconds() >= 10
                ? date.getSeconds()
                : `0${date.getSeconds()}`;

        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }

    return '';
};

export const getHourAndMinute = (time: string) => {
    if (time != '' && time !== null && time !== undefined) {
        let date = new Date(time);

        let year = date.getFullYear();

        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let hour =
            date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        let minute =
            date.getMinutes() >= 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`;
        let second =
            date.getSeconds() >= 10
                ? date.getSeconds()
                : `0${date.getSeconds()}`;

        return `${hour}:${minute}`;
    }
    return '';
};

export const convertTimeStampToDate = (time: string) => {
    if (time != '' && time !== null && time !== undefined) {
        let date = new Date(time);

        let year = date.getFullYear();

        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let hour =
            date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        let minute =
            date.getMinutes() >= 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`;
        let second =
            date.getSeconds() >= 10
                ? date.getSeconds()
                : `0${date.getSeconds()}`;

        return `${day}/${month}/${year}`;
    }
    return '';
};

export const convertDateToString = (time: Date) => {
    if (time !== null && time !== undefined) {
        let date = new Date(time);

        let year = date.getFullYear();

        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let hour =
            date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        let minute =
            date.getMinutes() >= 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`;
        let second =
            date.getSeconds() >= 10
                ? date.getSeconds()
                : `0${date.getSeconds()}`;

        return `${day}/${month}/${year}`;
    }
    return '';
};

export const convertDateToTimeString = (time: Date) => {
    if (time !== null && time !== undefined) {
        let date = new Date(time);

        let year = date.getFullYear();

        let month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
        let hour =
            date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
        let minute =
            date.getMinutes() >= 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`;
        let second =
            date.getSeconds() >= 10
                ? date.getSeconds()
                : `0${date.getSeconds()}`;

        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }
    return '';
};

export const isEmptyObject = (data: object | null | undefined) => {
    if (data == null || data == undefined) {
        return true;
    }
    return Object.keys(data).length === 0 && data.constructor === Object;
};

export const checkCustomerRole = () => {
    const role = localStorage.getItem('Role');

    let check = false;

    if (role != undefined && role !== null && role !== '') {
        if (role === 'customer') {
            check = true;
        } else {
            check = false;
        }
    } else {
        check = false;
    }

    return check;
};

export const checkAdminViewerRole = () => {
    const role = localStorage.getItem('Role');

    let check = false;

    if (role != undefined && role !== null && role !== '') {
        if (
            role === 'adminviewer' ||
            role === 'meter_logger_tran' ||
            role === 'staff'
        ) {
            check = true;
        } else {
            check = false;
        }
    } else {
        check = false;
    }

    return check;
};

export const checkMeterLoggerTranRole = () => {
    const role = localStorage.getItem('Role');

    return role === 'meter_logger_tran';
};

export const checkStaffRole = () => {
    const role = localStorage.getItem('Role');

    return role === 'staff';
};

export const checkAdminRole = () => {
    const role = localStorage.getItem('Role');

    let check = false;

    if (role != undefined && role !== null && role !== '') {
        if (role === 'admin') {
            check = true;
        } else {
            check = false;
        }
    } else {
        check = false;
    }

    return check;
};

export const createListCompanyForStatisticMarkSize = (listSites: any) => {
    // find list companies
    const listCompanies = [];

    for (const site of listSites) {
        if (site._id !== null && site._id !== undefined && site._id !== '') {
            const t = site._id[0] + site._id[1];
            const find = listCompanies.find((el) => el === t);
            if (find === undefined) {
                listCompanies.push(t);
            }
        }
    }

    const listInitSizeCompanies = [];

    for (const c of listCompanies) {
        const obj = {
            Company: c,
            Amount: 0,
        };

        listInitSizeCompanies.push(obj);
    }

    return listInitSizeCompanies;
};

export const updateAmoutSizeForMark = (data: any, site: any) => {
    const temp = data;

    if (temp.length > 0) {
        //@ts-ignore
        const findProvider = data.find((el) => el.Provider === site.Provider);

        if (findProvider !== undefined) {
            const findMark = findProvider.Marks.find(
                //@ts-ignore
                (el) => el.Mark === site.Marks,
            );

            if (findMark !== undefined) {
                const t = site._id[0] + site._id[1];

                const findCompany = findMark.Companies.find(
                    //@ts-ignore
                    (el) => el.Company === t,
                );

                if (findCompany !== undefined) {
                    findCompany.Amount += 1;

                    findMark.Companies[0].Amount += 1;
                }
            }
        }
    }

    return temp;
};

export const updateAmoutSizeForSize = (data: any, site: any) => {
    const temp = data;

    if (temp.length > 0) {
        //@ts-ignore
        const findSize = temp.find((el) => el.Size === site.Size);

        if (findSize !== undefined) {
            const t = site._id[0] + site._id[1];

            //@ts-ignore
            const findCompany = findSize.Companies.find(
                //@ts-ignore
                (el) => el.Company == t,
            );

            if (findCompany !== undefined) {
                findCompany.Amount += 1;

                findSize.Companies[0].Amount += 1;
            }
        }
    }

    return temp;
};

export const updateAmountMarkSize = (data: any, site: any) => {
    const temp = data;

    if (temp.length > 0 && site._id !== '') {
        //@ts-ignore
        const findProvider = temp.find((el) => el.Provider === site.Provider);
        if (findProvider !== undefined) {
            const findMark = findProvider.Marks.find(
                //@ts-ignore
                (el) => el.Mark === site.Marks,
            );

            if (findMark !== undefined) {
                const findModel = findMark.Models.find(
                    //@ts-ignore
                    (el) => el.Model === site.Model,
                );

                if (findModel !== undefined) {
                    const findSize = findModel.Sizes.find(
                        //@ts-ignore
                        (el) => el.Size === site.Size,
                    );

                    if (findSize !== undefined) {
                        const t = site._id[0] + site._id[1];

                        const findCompany = findSize.Companies.find(
                            //@ts-ignore
                            (el) => el.Company === t,
                        );

                        if (findCompany !== undefined) {
                            findCompany.Amount += 1;
                            findSize.Companies[0].Amount += 1;

                            const findTotalSize = findModel.Sizes[
                                findModel.Sizes.length - 1
                                //@ts-ignore
                            ].Companies.find((el) => el.Company === t);
                            if (findTotalSize !== undefined) {
                                findTotalSize.Amount += 1;
                                findModel.Sizes[
                                    findModel.Sizes.length - 1
                                ].Companies[0].Amount += 1;
                            }
                        }
                    }
                }
            }
        }
    }

    return temp;
};
