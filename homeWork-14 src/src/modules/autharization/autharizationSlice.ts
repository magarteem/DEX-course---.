import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const autharizationSlise = createSlice({
  name: "autharization",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log(state.isAuth);
    },
  },
});

export const { login } = autharizationSlise.actions;
export default autharizationSlise.reducer;
