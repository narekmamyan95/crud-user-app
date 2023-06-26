import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: ''
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsOpen: (state, {payload}) => {
      state.isOpen = payload;
    }
  },
});

// actions from slice
export const { setIsOpen } = commonSlice.actions;

// The reducer
export default commonSlice.reducer;
