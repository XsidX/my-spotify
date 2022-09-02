/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getArtists, searchArtists } from '../actions';

const artistsSlice = createSlice({
  name: 'artists',
  initialState: {
    artists: null,
  },
  reducers: {},
  extraReducers: {
    [getArtists.fulfilled]: (state, action) => {
      state.artists = action.payload.artists;
    },
    [searchArtists.fulfilled]: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const artistsActions = artistsSlice.actions;

export default artistsSlice.reducer;
