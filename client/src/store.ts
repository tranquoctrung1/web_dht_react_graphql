import { configureStore } from '@reduxjs/toolkit';
import AddIndexSlice from './features/addIndex';
import AddLocationSlice from './features/addLocation';
import AddLockValveSlice from './features/addLockValve';
import AddSubtractWaterB1Slice from './features/addSubtractWaterB1';
import AddSubtractWaterB2Slice from './features/addSubtractWaterB2';
import AddWaterCustomerSlice from './features/addWaterCustomer';
import CounterSlice from './features/counter';
import OpenSidebarSlice from './features/openSidebar';

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
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
