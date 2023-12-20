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
            const split = action.payload.split('-');

            state.value = split[1];
        },
    },
});

export const { setCurrentCompanyNamePrecious } =
    CurrentCompanyNamePrecious.actions;

export const CurrentCompanyNamePreciousState = (state: RootState) =>
    state.currentCompanyNamePrecious.value;

export default CurrentCompanyNamePrecious.reducer;
