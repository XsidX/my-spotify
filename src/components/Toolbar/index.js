import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { uiActions } from '../../store/reducers/ui-slice';

const Toolbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    rootMargin: '-56px 0px',
    threshold: 1,
  });

  const navigateToSearchHandler = () => {
    navigate('/search');
  };

  useEffect(() => {
    dispatch(uiActions.toolBarIsIntersecting(inView));
  }, [inView]);

  return (
    <div ref={ref} className="text-lg text-gray-200 font-bold flex gap-5 ">
      <button type="button" onClick={navigateToSearchHandler}>
        <FontAwesomeIcon icon={solid('search')} className="text" />
      </button>
      <button type="button">
        <FontAwesomeIcon icon={solid('plus')} className="text" />
      </button>
      <button type="button">
        <FontAwesomeIcon icon={solid('ellipsis-v')} className="text" />
      </button>
    </div>
  );
};

export default Toolbar;
