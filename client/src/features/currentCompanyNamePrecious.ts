import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CurrentCompanyNamePreciousState {
    value: string;
}

const initialState: CurrentCompanyNamePreciousState = {
    value: '',
};

export const CurrentCompanyNamePrecious = createSlice({
    name: 'currentCompanyNamePrecious',
    initialState,
    reducers: {
        setCurrentCompanyNamePrecious: (
            state,
            action: PayloadAction<string>,
        ) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentCompanyNamePrecious } =
    CurrentCompanyNamePrecious.actions;

export const CurrentCompanyNamePreciousState = (state: RootState) =>
    state.currentCompanyNamePrecious.value;

export default CurrentCompanyNamePrecious.reducer;
