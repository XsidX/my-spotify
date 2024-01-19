import React from 'react';
import TracksHero from '../components/Hero/TracksHero';
import Albums from '../components/Tracks/Albums';

const Tracks = () => (
  <div className="bg-black min-h-screen pt-16 pb-10 px-4 md:px-32">
    <TracksHero />
    <Albums />
  </div>
);

export default Tracks;
