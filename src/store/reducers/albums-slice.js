/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getAlbums } from '../actions';

const albumsSlice = createSlice({
  name: 'artists',
  initialState: {
    albums: [],
  },
  reducers: {},
  extraReducers: {
    [getAlbums.fulfilled]: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const arActions = albumsSlice.actions;

export default albumsSlice.reducer;
