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
    },
});

export const { addWaterCustomers } = AddWaterCustomerSlice.actions;

export const AddWaterCustomerState = (state: RootState) =>
    state.addWaterCustomer.value;

export default AddWaterCustomerSlice.reducer;
