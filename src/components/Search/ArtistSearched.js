import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const ArtistSearched = ({ artist }) => {
  const { id, name, images, type } = artist;
  const image = images[0]?.url;

  return (
    <Link to={`/artist/${id}`} className="flex items-center gap-3">
      <div className="h-14 w-14 rounded-full overflow-hidden">
        <img src={image} alt={name} className="object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-sm">{name}</h3>
        <p className="text-gray-300 capitalize text-xs">{type}</p>
      </div>
    </Link>
  );
};

ArtistSearched.propTypes = {
  artist: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(
      propTypes.shape({
        url: propTypes.string.isRequired,
      }),
    ).isRequired,
    type: propTypes.string.isRequired,
  }).isRequired,
};

export default ArtistSearched;
