import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ListChannelState {
    value: [];
}
const initialState: ListChannelState = {
    value: [],
};

export const ListChannelSlice = createSlice({
    name: 'listChannel',
    initialState,
    reducers: {
        addListChannel: (state, action: PayloadAction<[]>) => {
            state.value = [...action.payload];
        },
        insertListChannel: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value.push(action.payload);
        },
        updateListChannelByIndex: (state, action: PayloadAction) => {
            //@ts-ignore
            for (let i = 0; i < state.value.length; i++) {
                //@ts-ignore
                if (i == action.payload.index) {
                    //@ts-ignore
                    state.value[i] = action.payload.value;
                }
            }
        },
        updateListChannel: (state, action: PayloadAction) => {
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
        updateChannelId: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i]._id = action.payload._id;
                    // @ts-ignore
                    state.value[i].LoggerId = action.payload.LoggerId;
                }
            }
        },
        updateChannelName: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Name = action.payload.Name;
                    // @ts-ignore
                    state.value[i].LoggerId = action.payload.LoggerId;
                }
            }
        },
        updateUnit: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].Unit = action.payload.Unit;
                    // @ts-ignore
                    state.value[i].LoggerId = action.payload.LoggerId;
                }
            }
        },
        updateChannelType: (state, action: PayloadAction) => {
            for (let i = 0; i < state.value.length; i++) {
                // @ts-ignore
                if (i === action.payload.index) {
                    // @ts-ignore
                    state.value[i].LoggerId = action.payload.LoggerId;
                    // @ts-ignore
                    if (action.payload.type === 1) {
                        // @ts-ignore
                        state.value[i].Pressure1 = action.payload.value;
                        // @ts-ignore
                        state.value[i].Pressure2 = false;
                        // @ts-ignore
                        state.value[i].ForwardFlow = false;
                        // @ts-ignore
                        state.value[i].ReverseFlow = false;
                    }
                    // @ts-ignore
                    else if (action.payload.type == 2) {
                        // @ts-ignore
                        state.value[i].Pressure1 = false;
                        // @ts-ignore
                        state.value[i].Pressure2 = action.payload.value;
                        // @ts-ignore
                        state.value[i].ForwardFlow = false;
                        // @ts-ignore
                        state.value[i].ReverseFlow = false;
                    }
                    // @ts-ignore
                    else if (action.payload.type == 3) {
                        // @ts-ignore
                        state.value[i].Pressure1 = false;
                        // @ts-ignore
                        state.value[i].Pressure2 = false;
                        // @ts-ignore
                        state.value[i].ForwardFlow = action.payload.value;
                        // @ts-ignore
                        state.value[i].ReverseFlow = false;
                    }
                    // @ts-ignore
                    else if (action.payload.type == 4) {
                        // @ts-ignore
                        state.value[i].Pressure1 = false;
                        // @ts-ignore
                        state.value[i].Pressure2 = false;
                        // @ts-ignore
                        state.value[i].ForwardFlow = false;
                        // @ts-ignore
                        state.value[i].ReverseFlow = action.payload.value;
                    }
                }
            }
        },
        deleteListChannel: (state, action: PayloadAction) => {
            //@ts-ignore
            state.value = state.value.filter(
                //@ts-ignore
                (el) => el._id !== action.payload._id,
            );
        },
    },
});

export const {
    addListChannel,
    insertListChannel,
    updateListChannel,
    updateChannelId,
    updateChannelName,
    updateUnit,
    updateChannelType,
    deleteListChannel,
    updateListChannelByIndex,
} = ListChannelSlice.actions;

export const ListChannelState = (state: RootState) => state.listChannel.value;

export default ListChannelSlice.reducer;
