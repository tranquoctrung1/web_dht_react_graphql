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
        addLocation: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        deleteLocation: (state, action: PayloadAction) => {
            console.log(action.payload);
            // @ts-ignore
            state.value.slice(action.payload, 1);
        },
    },
});

export const { addLocations, addLocation, deleteLocation } =
    AddLocationSilce.actions;

export const AddLocationState = (state: RootState) => state.addLocation.value;

export default AddLocationSilce.reducer;
