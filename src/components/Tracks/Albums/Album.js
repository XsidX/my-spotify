import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import propTypes from 'prop-types';

const Album = ({ album }) => {
  const { name, images, release_date: dateReleased, type } = album;
  // trim the date to only show the year
  const yearReleased = dateReleased.substring(0, 4);
  return (
    <div className="text-white flex items-center gap-3 drop-shadow-md relative z-30">
      <div className="h-24 w-20">
        <img src={images[0].url} alt={name} />
      </div>
      <div className="text-sm">
        <p className="">{name}</p>
        <div className="text-gray-300 text-xs flex items-center gap-1">
          <p>{yearReleased}</p>
          <FontAwesomeIcon icon={solid('circle')} className="text-tiny" />
          <p className="capitalize">{type}</p>
        </div>
      </div>
    </div>
  );
};
Album.propTypes = {
  album: propTypes.shape({
    name: propTypes.string.isRequired,
    images: propTypes.arrayOf(
      propTypes.shape({
        url: propTypes.string.isRequired,
      }),
    ).isRequired,
    release_date: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
  }).isRequired,
};

export default Album;
