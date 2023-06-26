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
