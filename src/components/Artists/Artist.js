import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  const { id, name, images } = artist;

  return (
    <Link to={`/artist/${id}`} className="relative h-48 col-span-1">
      <img src={images[0]?.url} alt={name} className="object-contain" />

      <div className="absolute bottom-2 left-4 text-white">
        <h2 className="text-sm font-medium">{name}</h2>
      </div>
    </Link>
  );
};

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    followers: PropTypes.shape({
      total: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Artist;
