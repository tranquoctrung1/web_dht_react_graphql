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
        addIndex: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateIndex: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i !== action.payload.index) {
                    // @ts-ignore
                    state.value[i].SiteId = action.payload.SiteId;
                    // @ts-ignore
                    state.value[i].Location = action.payload.Location;
                    // @ts-ignore
                    state.value[i].PreviousPeriodIndex =
                        // @ts-ignore
                        action.payload.PreviousPeriodIndex;
                    // @ts-ignore
                    state.value[i].NextPeriodIndex =
                        // @ts-ignore
                        action.payload.NextPeriodIndex;
                }
            }
        },
        updateSite: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i !== action.payload.index) {
                    // @ts-ignore
                    state.value[i].SiteId = action.payload.SiteId;
                    // @ts-ignore
                    state.value[i].Location = action.payload.Location;
                }
            }
        },
        updatePreviousPeriodIndex: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i !== action.payload.index) {
                    // @ts-ignore
                    state.value[i].PreviousPeriodIndex =
                        // @ts-ignore
                        action.payload.PreviousPeriodIndex;
                }
            }
        },
        updateNextPeriodIndex: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i !== action.payload.index) {
                    // @ts-ignore
                    state.value[i].NextPeriodIndex =
                        // @ts-ignore
                        action.payload.NextPeriodIndex;
                }
            }
        },
        deleteIndex: (state, action: PayloadAction<number>) => {
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

export const {
    addIndexs,
    addIndex,
    deleteIndex,
    updateIndex,
    updateSite,
    updateNextPeriodIndex,
    updatePreviousPeriodIndex,
} = AddIndexSlice.actions;

export const AddIndexState = (state: RootState) => state.addIndex.value;

export default AddIndexSlice.reducer;
