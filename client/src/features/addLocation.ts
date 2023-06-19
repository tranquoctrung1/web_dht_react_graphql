import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddLocationState {
    value: [];
}

const initialState: AddLocationState = {
    value: [],
};

export const AddLocationSilce = createSlice({
    name: 'addLocation',
    initialState,
    reducers: {
        addLocations: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
    },
});

export const { addLocations } = AddLocationSilce.actions;

export const AddLocationState = (state: RootState) => state.addLocation.value;

export default AddLocationSilce.reducer;
