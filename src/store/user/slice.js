import { createSlice } from "@reduxjs/toolkit";
import { requestState } from "../../constants";
import { getUsers, getUser, updateUser, createUser, deleteUser } from "./actions";

export const initialState = {
  error: "",
  status: "idle",
  users: [],
  userDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setUserDetails: (state, { payload }) => {
      state.userDetails = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.status = requestState.FULFILLED;
      state.users = payload;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = requestState.REJECTED;
    });

    builder.addCase(getUser.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.status = requestState.FULFILLED;
      state.userDetails = payload;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = requestState.REJECTED;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.status = requestState.FULFILLED;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.status = requestState.REJECTED;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.status = requestState.FULFILLED;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.status = requestState.REJECTED;
    });

    builder.addCase(createUser.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(createUser.fulfilled, (state) => {
      state.status = requestState.FULFILLED;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.status = requestState.REJECTED;
    });
  },
});

export const { setUsers, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
