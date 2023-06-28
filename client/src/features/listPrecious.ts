import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ListPreciousState {
    value: [];
}

const initialState: ListPreciousState = {
    value: [],
};

export const ListPreciousSlice = createSlice({
    name: 'listPrecious',
    initialState,
    reducers: {
        addListPrecious: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
        insertListPrecious: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateListPrecious: (state, action: PayloadAction) => {
            //@ts-ignore
            let index = state.value.findIndex(
                //@ts-ignore
                (el) => el._id === action.payload._id,
            );

            if (index >= 0) {
                //@ts-ignore
                state.value[index] = action.payload;
            }
        },
        deleteListPrecious: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value = state.value.filter(
                //@ts-ignore
                (el) => el._id !== action.payload._id,
            );
        },
    },
});

export const {
    addListPrecious,
    insertListPrecious,
    updateListPrecious,
    deleteListPrecious,
} = ListPreciousSlice.actions;

export const ListPreciousState = (state: RootState) => state.listPrecious.value;

export default ListPreciousSlice.reducer;
