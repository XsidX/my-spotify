import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import SearchForm from '../Search/SearchForm';

const Nav = () => {
  const isIntersecting = useSelector((state) => state.ui.toolBarIsIntersecting);

  const location = useLocation();
  const currentRoute = location.pathname;
  const isHome = currentRoute === '/';

  // find currentRoute is artist page
  const isArtist = currentRoute.includes('/artist/');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isIntersecting ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
        className={`${
          !isIntersecting && isHome && 'bg-neutral-800'
        } fixed top-0 left-0 right-0 z-40 h-14`}
      />
      <div
        className={`${
          isIntersecting && isHome && 'hidden'
        } fixed top-0 left-0 right-0 z-50 flex items-center gap-4 px-4 h-14`}
      >
        <button type="button">
          <FontAwesomeIcon
            icon={solid('arrow-left')}
            className="text-xl text-white"
            onClick={handleNavigate}
          />
        </button>
        <SearchForm isArtist={isArtist} />
      </div>
    </>
  );
};

export default Nav;
