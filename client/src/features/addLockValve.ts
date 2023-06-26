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
        addLockValve: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateSite: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].SiteId = action.payload.SiteId;
                    // @ts-ignore
                    state.value[i].Location = action.payload.Location;
                }
            }
        },
        deleteLockValve: (state, action: PayloadAction<number>) => {
            //@ts-ignore
            let temp = [];

            for (let i = 0; i < state.value.length; i++) {
                if (i !== action.payload) {
                    temp.push(state.value[i]);
                }
            }
            // @ts-ignore
            state.value = [...temp];
        },
    },
});

export const { addLockValves, addLockValve, updateSite, deleteLockValve } =
    AddLockValveSlice.actions;

export const AddLockValveState = (state: RootState) => state.addLockValve.value;

export default AddLockValveSlice.reducer;
