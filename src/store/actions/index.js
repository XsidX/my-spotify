import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getCredentials from '../../auth/credentials';

let token = null;

const getArtists = createAsyncThunk('artists/getArtists', async () => {
  const spotify = getCredentials();

  token = await axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(
        `${spotify.CLIENT_ID}:${spotify.CLIENT_SECRET}`,
      )}`,
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  }).then((tokenResponse) => tokenResponse.data.access_token);
  const artists = await axios(
    'https://api.spotify.com/v1/artists?ids=7bXgB6jMjp9ATFy66eO08Z%2C5j4HeCoUlzhfWtjAfM1acR%2C7dGJo4pcD2V6oG8kP0tJRR%2C3wcj11K77LjEY1PkEazffa%2C1nzgtKYFckznkcVMR3Gg4z%2C5cj0lLjcoR7YOSnhnX0Po5%2C3TVXtAsR1Inumwj472S9r4%2C687cZJR45JO7jhk1LHIbgq',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((artists) => artists.data.artists);

  return { token, artists };
});

const getAlbums = createAsyncThunk('albums/getAlbums', async (artistId) => {
  const albums = await axios(
    `https://api.spotify.com/v1/artists/${artistId}/albums?market=ES&limit=10&offset=0`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((albums) => albums.data.items);
  // remove duplicate albums
  const albumsWithoutDuplicates = albums.filter(
    (album, index, self) => index === self.findIndex((t) => t.name === album.name),
  );

  // trim to 5 albums if there are more than 5
  if (albumsWithoutDuplicates.length > 5) {
    albumsWithoutDuplicates.splice(5, albumsWithoutDuplicates.length - 5);
  }

  return albumsWithoutDuplicates;
});

const searchArtists = createAsyncThunk(
  'artists/searchArtists',
  async (searchTerm) => {
    const artists = await axios(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist&market=ES&limit=20&offset=0`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ).then((artists) => artists.data.artists.items);

    // filter out artists with no images
    const artistsWithImages = artists.filter(
      (artist) => artist.images.length > 0,
    );

    return artistsWithImages;
  },
);

export { getArtists, getAlbums, searchArtists };
