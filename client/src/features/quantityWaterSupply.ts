import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface QuantityWaterSupplyState {
    value: [];
}

const initialState: QuantityWaterSupplyState = {
    value: [],
};

export const QuantityWaterSupplySlice = createSlice({
    name: 'quantityWaterSupply',
    initialState,
    reducers: {
        setQuantityWaterSupply: (state, action: PayloadAction<[]>) => {
            state.value = action.payload;
        },
    },
});

export const { setQuantityWaterSupply } = QuantityWaterSupplySlice.actions;

export const QuantityWaterSupplyState = (state: RootState) =>
    state.quantityWaterSupply.value;

export default QuantityWaterSupplySlice.reducer;
