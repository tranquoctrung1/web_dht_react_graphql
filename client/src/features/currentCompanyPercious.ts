import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CurrentCompanyPreciousState {
    value: string;
}

const initialState: CurrentCompanyPreciousState = {
    value: '',
};

export const CurrentCompanyPreciousSlice = createSlice({
    name: 'currentCompanyPrecious',
    initialState,
    reducers: {
        setCurrentCompanyPrecious: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentCompanyPrecious } =
    CurrentCompanyPreciousSlice.actions;

export const CurrentCompanyPreciousState = (state: RootState) =>
    state.currentCompanyPrecious.value;

export default CurrentCompanyPreciousSlice.reducer;
