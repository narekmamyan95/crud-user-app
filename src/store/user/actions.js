import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../constants";

export const getUsers = createAsyncThunk("user/getUsers", async (thunkAPI) => {
  try {
    const url = `${config.baseURI}/${config.endpoints.users.getUsers}`;
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.Message);
  }
});

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, thunkAPI) => {
    try {
      const url = `${config.baseURI}/${config.endpoints.users.getUser}`;
      const { data } = await axios.post(url, { id });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.Message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (values, thunkAPI) => {
    try {
      const url = `${config.baseURI}/${config.endpoints.users.updateUser}`;
      const response = await axios.post(url, { ...values });
      if (response?.status === 200) {
        thunkAPI.dispatch(getUsers());
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.Message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, thunkAPI) => {
    try {
      const url = `${config.baseURI}/${config.endpoints.users.deleteUser}/${id}`;
      await axios.delete(url);
      thunkAPI.dispatch(getUsers());
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.Message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ values, navigate }, thunkAPI) => {
    try {
      const url = `${config.baseURI}/${config.endpoints.users.createUser}`;
      const response = await axios.post(url, { ...values });
      if (response?.status === 200) {
        navigate(-1);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.Message);
    }
  }
);
