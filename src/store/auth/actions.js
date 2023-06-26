import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../constants';
import axios from "axios";

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ userName, password }, thunkAPI) => {
    try {
      const url = `${config.baseURI}/${config.endpoints.auth.signIn}`;
      const { data } = await axios.post(url, { userName, password });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
  try {
    const url = `${config.baseURI}/${config.endpoints.auth.signOut}`;
    await axios.post(url);
  } catch (err) {
    return thunkAPI.rejectWithValue('Error in logout');
  }
});
