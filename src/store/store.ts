import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../lib/baseApi';

export const store = () => {
    return configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
        },
        middleware: (getDefauiltMiddleware) =>
            getDefauiltMiddleware().concat(baseApi.middleware),
    });
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']