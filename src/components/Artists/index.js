import React from 'react';
import { useSelector } from 'react-redux';
import Artist from './Artist';
import Grid from './Grid';

const Artists = () => {
  const artists = useSelector((state) => state.artists.artists) || [];
  return (
    <Grid>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </Grid>
  );
};

export default Artists;
