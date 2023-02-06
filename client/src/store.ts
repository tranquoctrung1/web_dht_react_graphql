import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './features/counter';
import OpenSidebarSlice from './features/openSidebar';

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        open: OpenSidebarSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
