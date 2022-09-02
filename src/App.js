import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArtists } from './store/actions';
import Home from './pages/Home';
// import Tracks from './pages/Tracks';
import Searches from './pages/Searches';
import Layout from './components/layout/layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/artist/:id" element={<Tracks />} /> */}
        <Route path="/search" element={<Searches />} />
      </Routes>
    </Layout>
  );
}

export default App;
