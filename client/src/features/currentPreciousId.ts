import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CurrentPreciousIdState {
    value: string;
}

const initialState: CurrentPreciousIdState = {
    value: '',
};

export const CurrentPreciousIdSlice = createSlice({
    name: 'currentPreciousId',
    initialState,
    reducers: {
        setCurrentPreciousId: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setCurrentPreciousId } = CurrentPreciousIdSlice.actions;

export const CurrentPreciousIdState = (state: RootState) =>
    state.currentPreciousId.value;

export default CurrentPreciousIdSlice.reducer;
