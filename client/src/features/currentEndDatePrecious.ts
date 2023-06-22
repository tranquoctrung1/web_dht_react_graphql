import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CurrentEndDatePreciousState {
    value: Number;
}

const initialState: CurrentEndDatePreciousState = {
    value: 0,
};

export const CurrentEndDatePreciousSlice = createSlice({
    name: 'currentEndDatePrecious',
    initialState,
    reducers: {
        setCurrentEndDatePrecious: (state, action: PayloadAction<Number>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentEndDatePrecious } =
    CurrentEndDatePreciousSlice.actions;

export const CurrentEndDatePreciousState = (state: RootState) =>
    state.currentEndDatePrecious.value;

export default CurrentEndDatePreciousSlice.reducer;
