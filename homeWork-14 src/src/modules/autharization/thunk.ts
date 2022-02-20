import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInThunk = createAsyncThunk(
  `autharization/sign-In`,
  async function (_, { rejectWithValue }) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: "string",
          password: "string",
        }),
      };
      const response = await fetch(
        `http://dev.trainee.dex-it.ru/api/1Auth/SignIn`,
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
