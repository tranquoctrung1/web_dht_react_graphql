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
} = AddLocationSilce.actions;

export const AddLocationState = (state: RootState) => state.addLocation.value;

export default AddLocationSilce.reducer;
