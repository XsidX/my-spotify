import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from './reducers/artists-slice';
import albumsReducer from './reducers/albums-slice';
import uiReducer from './reducers/ui-slice';

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albums: albumsReducer,
    ui: uiReducer,
  },
});

export default store;
