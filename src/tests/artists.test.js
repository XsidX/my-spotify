import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../store/reducers/artists-slice';
import albumsReducer from '../store/reducers/albums-slice';
import uiReducer from '../store/reducers/ui-slice';
import Artists from '../components/Artists';

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

describe('Artists', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Artists />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
