import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './actions';
import { requestState, storageKey } from '../../constants';
import { get, set, remove } from '../../utils/storage';

export const initialState = {
  isAuthenticated: get(storageKey.IS_AUTHENTICATED) || false,
  error: '',
  status: 'idle',
  user: get(storageKey.USER) || {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(logIn.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.status = requestState.FULFILLED;
      state.user = payload.user;
      set(storageKey.USER, payload.user);
      set(storageKey.IS_AUTHENTICATED, !!payload.login);
    });
    builder.addCase(logIn.rejected, (state, { payload }) => {
      state.error = payload;
      state.isAuthenticated = false;
      state.status = requestState.REJECTED;
    });
    // LOGOUT
    builder.addCase(logOut.pending, (state) => {
      state.status = requestState.PENDING;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.status = requestState.FULFILLED;
      state.user = {};
      remove(storageKey.USER);
      remove(storageKey.IS_AUTHENTICATED);
      window.location = '/login';
    });
    builder.addCase(logOut.rejected, (state) => {
      state.isAuthenticated = false;
      state.status = requestState.REJECTED;
      state.user = {};
      remove(storageKey.USER);
      remove(storageKey.IS_AUTHENTICATED);
      window.location = '/login';
    });
  }
});

// actions from slice
export const { clearAuthError } = authSlice.actions;

// The reducer
export default authSlice.reducer;
