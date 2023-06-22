import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CurrentStartDatePreciousState {
    value: Number;
}

const initialState: CurrentStartDatePreciousState = {
    value: 0,
};

export const CurrentStartDatePreciousSlice = createSlice({
    name: 'currentStartDatePrecious',
    initialState,
    reducers: {
        setCurrentStartDatePrecious: (state, action: PayloadAction<Number>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentStartDatePrecious } =
    CurrentStartDatePreciousSlice.actions;

export const CurrentStartDatePreciousState = (state: RootState) =>
    state.currentStartDatePrecious.value;

export default CurrentStartDatePreciousSlice.reducer;
