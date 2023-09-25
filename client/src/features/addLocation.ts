import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddLocationState {
    value: [];
}

const initialState: AddLocationState = {
    value: [],
};

export const AddLocationSilce = createSlice({
    name: 'addLocation',
    initialState,
    reducers: {
        addLocations: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
        addLocation: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateSite: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].SiteId = action.payload.SiteId;
                    //@ts-ignore
                    state.value[i].Location = action.payload.Location;
                    break;
                }
            }
        },
        updateReason: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].Reason = action.payload.Reason;
                    break;
                }
            }
        },
        updateAverageDate: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].AverageDate = action.payload.AverageDate;
                    break;
                }
            }
        },
        updatePeriods: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].Periods[action.payload.indexPeriod].Period =
                        //@ts-ignore
                        action.payload.Period;
                    // @ts-ignore
                    state.value[i].Periods[
                        //@ts-ignore
                        action.payload.indexPeriod
                        //@ts-ignore
                    ].Quantity = action.payload.Quantity;
                    break;
                }
            }
        },
        updateQuantityForPeriod: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Periods[
                        //@ts-ignore
                        action.payload.indexPeriod
                        //@ts-ignore
                    ].Quantity = action.payload.Quantity;
                    break;
                }
            }
        },
        updateDateCalclogger: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].DateCalclogger =
                        //@ts-ignore
                        action.payload.DateCalclogger;
                    break;
                }
            }
        },
        updateQuantityLogger: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].QuantityLogger =
                        //@ts-ignore
                        action.payload.QuantityLogger;
                    break;
                }
            }
        },
        updateTotalQuantity: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].TotalQuantity =
                        //@ts-ignore
                        action.payload.TotalQuantity;
                    break;
                }
            }
        },
        updatePrevTetHoliday: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].PrevTetHoliday =
                        //@ts-ignore
                        action.payload.PrevTetHoliday;
                    break;
                }
            }
        },
        updateNextTetHoliday: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].NextTetHoliday =
                        //@ts-ignore
                        action.payload.NextTetHoliday;
                    break;
                }
            }
        },
        updateTenDayPrevTetHoliday: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].TenDayPrevTetHoliday =
                        //@ts-ignore
                        action.payload.TenDayPrevTetHoliday;
                    break;
                }
            }
        },
        updateAveragePrevTetHoliday: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].AveragePrevTetHoliday =
                        //@ts-ignore
                        action.payload.AveragePrevTetHoliday;
                    break;
                }
            }
        },
        updateAverageTenDayPrevTetHoliday: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].AverageTenDayPrevTetHoliday =
                        //@ts-ignore
                        action.payload.AverageTenDayPrevTetHoliday;
                    break;
                }
            }
        },
        updateKFactory: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].KFactory =
                        //@ts-ignore
                        action.payload.KFactory;
                    break;
                }
            }
        },
        updateNumberLockPeriod: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i === action.payload.index) {
                    //@ts-ignore
                    state.value[i].NumberLockPeriod =
                        //@ts-ignore
                        action.payload.NumberLockPeriod;
                    break;
                }
            }
        },
        deleteLocation: (state, action: PayloadAction<number>) => {
            //@ts-ignore
            let temp = [];

            for (let i = 0; i < state.value.length; i++) {
                if (i !== action.payload) {
                    temp.push(state.value[i]);
                }
            }
            // @ts-ignore
            state.value = [...temp];
        },
    },
});

export const {
    addLocations,
    addLocation,
    deleteLocation,
    updateSite,
    updateAverageDate,
    updatePeriods,
    updateQuantityForPeriod,
    updateDateCalclogger,
    updateQuantityLogger,
    updateTotalQuantity,
    updateReason,
    updatePrevTetHoliday,
    updateNextTetHoliday,
    updateTenDayPrevTetHoliday,
    updateKFactory,
    updateAveragePrevTetHoliday,
    updateAverageTenDayPrevTetHoliday,
    updateNumberLockPeriod,
} = AddLocationSilce.actions;

export const AddLocationState = (state: RootState) => state.addLocation.value;

export default AddLocationSilce.reducer;
