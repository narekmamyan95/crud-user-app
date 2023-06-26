import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import userSlice from './user/slice';
import commonSlice from './common/slice';

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  common: commonSlice
});

export default rootReducer;
