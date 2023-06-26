import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddWaterCustomerState {
    value: [];
}

const initialState: AddWaterCustomerState = {
    value: [],
};

export const AddWaterCustomerSlice = createSlice({
    name: 'addWaterCustomer',
    initialState,
    reducers: {
        addWaterCustomers: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
        addWaterCustomer: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateNumberPrecious: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].NumberPrecious =
                        //@ts-ignore
                        action.payload.NumberPrecious;
                }
            }
        },
        updateDatePublished: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].DatePublished =
                        //@ts-ignore
                        action.payload.DatePublished;
                }
            }
        },
        updateAmountMeter: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].AmountMeter =
                        //@ts-ignore
                        action.payload.AmountMeter;
                }
            }
        },
        updateAmountWater: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].AmountWater =
                        //@ts-ignore
                        action.payload.AmountWater;
                }
            }
        },
        updateNote: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Note =
                        //@ts-ignore
                        action.payload.Note;
                }
            }
        },
        deleteAddWaterCustomer: (state, action: PayloadAction<number>) => {
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
    addWaterCustomers,
    addWaterCustomer,
    updateNumberPrecious,
    updateDatePublished,
    updateAmountMeter,
    updateAmountWater,
    updateNote,
    deleteAddWaterCustomer,
} = AddWaterCustomerSlice.actions;

export const AddWaterCustomerState = (state: RootState) =>
    state.addWaterCustomer.value;

export default AddWaterCustomerSlice.reducer;
