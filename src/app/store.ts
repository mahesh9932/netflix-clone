import { configureStore } from "@reduxjs/toolkit";
import infoModalReducer from "../features/infoModal/infoModalSlice";

export const store = configureStore({
  reducer: {
    infoModal: infoModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
