import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAlbums } from '../../../store/actions';
import Album from './Album';

const Albums = () => {
  const { id } = useParams();
  const albums = useSelector((state) => state.albums.albums);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbums(id));
  }, [dispatch]);

  return (
    <div className="mt-4">
      <h2 className="text-white pb-4 text-base font-bold relative z-30">
        Popular releases
      </h2>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Albums;
