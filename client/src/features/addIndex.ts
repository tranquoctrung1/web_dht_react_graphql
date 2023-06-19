import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddIndexState {
    value: [];
}

const initialState: AddIndexState = {
    value: [],
};

export const AddIndexSlice = createSlice({
    name: 'addIndex',
    initialState,
    reducers: {
        addIndexs: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
    },
});

export const { addIndexs } = AddIndexSlice.actions;

export const AddIndexState = (state: RootState) => state.addIndex.value;

export default AddIndexSlice.reducer;
