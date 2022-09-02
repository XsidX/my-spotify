import renderer from 'react-test-renderer';
import Album from '../components/Tracks/Albums/Album';

describe('Album', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Album
          album={{
            name: 'album name',
            images: [{ url: 'url' }],
            release_date: '2021-01-01',
            type: 'album',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
