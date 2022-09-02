import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import commaNumber from 'comma-number';
import Search from '../UI/Search';

const TracksHero = () => {
  const { id } = useParams();

  const artists = useSelector((state) => state.artists.artists);
  const artist = artists.find((artist) => artist.id === id);

  const { name, images, followers } = artist;
  const totalFollowers = commaNumber(followers.total);

  return (
    <div className="">
      <Search />
      <div className="mt-8 flex justify-center">
        <div className="h-64 w-64 relative">
          <img
            src={images[1].url}
            alt={`${name}`}
            className="z-0 object-cover blur-spotify-blur absolute inset-0"
          />
          <img
            src={images[1].url}
            alt={`${name}`}
            className="z-10 relative h-full w-full object-cover drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="py-3 text-white relative z-30">
        <h2 className="text-3xl font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-300">{`${totalFollowers} followers`}</p>
      </div>
    </div>
  );
};

export default TracksHero;
