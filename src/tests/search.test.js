import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../store/reducers/artists-slice';
import albumsReducer from '../store/reducers/albums-slice';
import uiReducer from '../store/reducers/ui-slice';
import ArtistSearched from '../components/Search/ArtistSearched';

const initialState = {
  artists: [],
  albums: [],
  ui: {
    toolBarIsIntersecting: false,
  },
};

const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albums: albumsReducer,
    ui: uiReducer,
  },
  preloadedState: initialState,
});

describe('ArtistSearched', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <ArtistSearched
              artist={{
                id: 'id',
                name: 'artist name',
                images: [{ url: 'url' }],
              }}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
