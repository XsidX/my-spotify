import React from 'react';
import { useSelector } from 'react-redux';
import ArtistSearched from '../components/Search/ArtistSearched';

const Searches = () => {
  const artists = useSelector((state) => state.artists.artists) || [];
  return (
    <div className="bg-black min-h-screen px-4 md:px-32 pt-24 pb-10 md:flex flex-col items-center justify-center">
      <div className="text-white pb-4 text-base font-bold ">
        <h2 className="md:mb-5">Recent Searches</h2>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 md:grid grid-cols-4">
        {artists.map((artist) => (
          <ArtistSearched key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default Searches;
