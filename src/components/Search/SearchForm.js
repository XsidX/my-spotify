import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { searchArtists } from '../../store/actions';

const SearchForm = ({ isArtist }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchArtists(searchTerm));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchArtists(searchTerm));
    setSearchTerm('');
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        type="text"
        onChange={inputChangeHandler}
        value={searchTerm}
        placeholder="Who do you want to find?"
        className={`${
          isArtist && 'hidden'
        } placeholder:text-gray-100 placeholder:text-sm text-sm text-white focus:outline-none bg-transparent border-none`}
      />
    </form>
  );
};

SearchForm.propTypes = {
  isArtist: propTypes.bool.isRequired,
};

export default SearchForm;
