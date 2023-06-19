import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddSubtractWaterB2State {
    value: [];
}

const initialState: AddSubtractWaterB2State = {
    value: [],
};

export const AddSubtractWaterB2Slice = createSlice({
    name: 'addSubtractWaterB2',
    initialState,
    reducers: {
        addSubtractWaterB2s: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
    },
});

export const { addSubtractWaterB2s } = AddSubtractWaterB2Slice.actions;

export const AddSubtractWaterB2State = (state: RootState) =>
    state.addSubtractWaterB2.value;

export default AddSubtractWaterB2Slice.reducer;
