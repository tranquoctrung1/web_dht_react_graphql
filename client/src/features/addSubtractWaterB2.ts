import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AddSubtractWaterB2State {
    value: [];
}

const initialState: AddSubtractWaterB2State = {
    value: [],
};

export const AddSubtractWaterB2Slice = createSlice({
    name: 'addSubtractWaterB2',
    initialState,
    reducers: {
        addSubtractWaterB2s: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
        addSubtractWaterB2: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateNumberPrecious: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].NumberPrecious =
                        //@ts-ignore
                        action.payload.NumberPrecious;
                }
            }
        },
        updateContent: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Content = action.payload.Content;
                }
            }
        },
        updateProvider: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Provider = action.payload.Provider;
                }
            }
        },
        updateAmountWater: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].AmountWater = action.payload.AmountWater;
                }
            }
        },
        updateNote: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Note = action.payload.Note;
                }
            }
        },
        deleteAddSubtractWaterB2: (state, action: PayloadAction<number>) => {
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
    addSubtractWaterB2s,
    addSubtractWaterB2,
    updateNumberPrecious,
    updateNote,
    updateAmountWater,
    updateContent,
    updateProvider,
    deleteAddSubtractWaterB2,
} = AddSubtractWaterB2Slice.actions;

export const AddSubtractWaterB2State = (state: RootState) =>
    state.addSubtractWaterB2.value;

export default AddSubtractWaterB2Slice.reducer;
