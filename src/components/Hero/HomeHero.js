import React from 'react';
import { useSelector } from 'react-redux';
import Toolbar from '../Toolbar';

const HomeHero = () => {
  const artists = useSelector((state) => state.artists.artists) || [];
  const randomIndex = Math.floor(Math.random() * artists.length);

  return (
    <div className="h-screen30 md:h-screen40 md:py-6 relative">
      <img
        src={artists[randomIndex]?.images[0]?.url}
        alt={artists[randomIndex]?.name}
        className="object-contain md:h-full md:w-full blur-sm z-10"
      />
      <div className="absolute bottom-0 left-4 right-4 flex justify-between py-2 text-gray-50 text-4xl font-bold">
        <h2 className="md:text-5xl">Favourites</h2>
        <Toolbar />
      </div>
    </div>
  );
};

export default HomeHero;
