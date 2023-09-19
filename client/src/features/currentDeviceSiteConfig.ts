import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Stats } from 'fs';

interface CurrentDeviceSiteConfigState {
    _id: String;
    LoggerId: String;
    SiteId: String;
    Tel: String;
    Pressure: Number | null;
    Pressure1: Number | null;
    Forward: Number | null;
    Reverse: Number | null;
    BeginTime: String;
    ZoomInit: Number | null;
    ZoomOn: Number | null;
}

const initialState: CurrentDeviceSiteConfigState = {
    _id: '',
    LoggerId: '',
    SiteId: '',
    Tel: '',
    Pressure: null,
    Pressure1: null,
    Forward: null,
    Reverse: null,
    BeginTime: '',
    ZoomInit: null,
    ZoomOn: null,
};

export const CurrentDeviceSiteConfigSlice = createSlice({
    name: 'currentDeviceSiteConfig',
    initialState,
    reducers: {
        setCurrentDeviceSiteConfig: (state, action: PayloadAction) => {
            //@ts-ignore
            state._id = action.payload._id;
            //@ts-ignore
            state.LoggerId = action.payload.LoggerId;
            //@ts-ignore
            state.Tel = action.payload.Tel;
            //@ts-ignore
            state.Pressure = action.payload.Pressure;
            //@ts-ignore
            state.Pressure1 = action.payload.Pressure1;
            //@ts-ignore
            state.Forward = action.payload.Forward;
            //@ts-ignore
            state.Reverse = action.payload.Reverse;
            //@ts-ignore
            state.ZoomInit = action.payload.ZoomInit;
            //@ts-ignore
            state.BeginTime = action.payload.BeginTime;
            //@ts-ignore
            state.ZoomOn = action.payload.ZoomOn;
        },
    },
});

export const { setCurrentDeviceSiteConfig } =
    CurrentDeviceSiteConfigSlice.actions;

export const CurrentDeviceSiteConfigState = (state: RootState) =>
    state.currentDeviceSiteConfig;

export default CurrentDeviceSiteConfigSlice.reducer;
