import { configureStore } from '@reduxjs/toolkit';
import machineReducer from './machineSlice';

export const store = configureStore({
  reducer: {
    machines: machineReducer,
  },
});

// TypeScript types สำหรับ RootState และ AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
