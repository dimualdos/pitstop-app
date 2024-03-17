import { combineReducers, configureStore } from "@reduxjs/toolkit";
import openSlice from "./open-menu-slice";
import themeSlice from "./theme-slice";

export const store = configureStore({
  reducer: {
    openStateReduser: openSlice,
    themeAppReduser: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
