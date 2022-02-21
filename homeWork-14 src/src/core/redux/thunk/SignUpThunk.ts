import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpThunk = createAsyncThunk(
  `autharization/sign-Up`,
  async function (_, { rejectWithValue }) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: "string",
          login: "string",
          password: "string",
        }),
      };
      const response = await fetch(
        `http://dev.trainee.dex-it.ru/api/Auth/SignUp`,
        postData
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
