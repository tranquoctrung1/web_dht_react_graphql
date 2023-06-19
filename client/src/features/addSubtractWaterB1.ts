import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddSubtractWaterB1State {
    value: [];
}

const initialState: AddSubtractWaterB1State = {
    value: [],
};

export const AddSubtractWaterB1Slice = createSlice({
    name: 'addSubtractWaterB1',
    initialState,
    reducers: {
        addSubtractWaterB1s: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
    },
});

export const { addSubtractWaterB1s } = AddSubtractWaterB1Slice.actions;

export const AddSubtractWaterB1State = (state: RootState) =>
    state.addSubtractWaterB1.value;

export default AddSubtractWaterB1Slice.reducer;
