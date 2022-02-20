import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import autharizationSlise from "../../../modules/autharization/autharizationSlice";

export const store = configureStore({
  reducer: {
    autharizationSliseReduser: autharizationSlise,
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
