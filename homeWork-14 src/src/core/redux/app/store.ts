import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signInSlise from "../../../modules/autharization/signInSlise";

export const store = configureStore({
  reducer: {
    signInSliseReduser: signInSlise,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
