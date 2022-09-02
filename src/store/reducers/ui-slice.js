/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    toolBarIsIntersecting: false,
  },
  reducers: {
    toolBarIsIntersecting(state, action) {
      state.toolBarIsIntersecting = action.payload;
    },
    currentRoute(state, action) {
      state.currentRoute = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
