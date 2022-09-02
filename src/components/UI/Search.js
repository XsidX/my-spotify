import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Search = () => (
  <div className="grid grid-cols-12 gap-2 text-gray-200 text-xs relative z-30">
    <div className="relative col-span-10 flex items-center p-2 gap-2 ">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
      <FontAwesomeIcon icon={solid('search')} className="text-base z-10" />
      <p className="z-10">Find in playlist</p>
    </div>
    <div className="relative col-span-2 flex items-center justify-center py-2 text-gray-200">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
      <button type="button" className="z-10">
        Sort
      </button>
    </div>
  </div>
);

export default Search;
