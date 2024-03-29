import { configureStore } from '@reduxjs/toolkit';
import AddIndexSlice from './features/addIndex';
import AddLocationSlice from './features/addLocation';
import AddLockValveSlice from './features/addLockValve';
import AddSubtractWaterB1Slice from './features/addSubtractWaterB1';
import AddSubtractWaterB2Slice from './features/addSubtractWaterB2';
import AddWaterCustomerSlice from './features/addWaterCustomer';
import CounterSlice from './features/counter';
import currentCompanyNamePreciousSlice from './features/currentCompanyNamePrecious';
import CurrentCompanyPreciousSlice from './features/currentCompanyPercious';
import CurrentEndDatePreciousSlice from './features/currentEndDatePrecious';
import CurrentPreciousIdSlice from './features/currentPreciousId';
import CurrentStartDatePreciousSlice from './features/currentStartDatePrecious';
import ListPreciousSlice from './features/listPrecious';
import OpenSidebarSlice from './features/openSidebar';
import QuantityWaterSupplySlice from './features/quantityWaterSupply';
import ListChannelSlice from './features/listChannel';
import CurrentDeviceSiteConfigSlice from './features/currentDeviceSiteConfig';
import HostnameSlice from './features/hostname';

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        open: OpenSidebarSlice,
        addLocation: AddLocationSlice,
        addIndex: AddIndexSlice,
        addLockValve: AddLockValveSlice,
        addSubtractWaterB1: AddSubtractWaterB1Slice,
        addSubtractWaterB2: AddSubtractWaterB2Slice,
        addWaterCustomer: AddWaterCustomerSlice,
        currentCompanyPrecious: CurrentCompanyPreciousSlice,
        currentStartDatePrecious: CurrentStartDatePreciousSlice,
        currentEndDatePrecious: CurrentEndDatePreciousSlice,
        quantityWaterSupply: QuantityWaterSupplySlice,
        currentCompanyNamePrecious: currentCompanyNamePreciousSlice,
        listPrecious: ListPreciousSlice,
        currentPreciousId: CurrentPreciousIdSlice,
        listChannel: ListChannelSlice,
        currentDeviceSiteConfig: CurrentDeviceSiteConfigSlice,
        hostname: HostnameSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
