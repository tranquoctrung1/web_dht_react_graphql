import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddLockValveState {
    value: [];
}

const initialState: AddLockValveState = {
    value: [],
};

export const AddLockValveSlice = createSlice({
    name: 'addLockValve',
    initialState,
    reducers: {
        addLockValves: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
    },
});

export const { addLockValves } = AddLockValveSlice.actions;

export const AddLockValveState = (state: RootState) => state.addLockValve.value;

export default AddLockValveSlice.reducer;
