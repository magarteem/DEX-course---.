import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "./thunk";

const initialState = {
  isAuth: false,
};

const autharizationSlise = createSlice({
  name: "autharization",
  initialState,
  reducers: {
    login(state) {
      //  state.isAuth = true;
      console.log("222222");
      console.log(state.isAuth);
    },
  },

  extraReducers: {
    [signInThunk.pending.type]: (state) => {},
    [signInThunk.fulfilled.type]: (state, actions) => {
      state.isAuth = true;
      console.log("1111");
      console.log(actions);
    },
    [signInThunk.rejected.type]: (state, actions) => {},
  },
});

export const { login } = autharizationSlise.actions;
export default autharizationSlise.reducer;
