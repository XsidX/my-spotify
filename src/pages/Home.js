import React from 'react';
import HomeHero from '../components/Hero/HomeHero';
import Artists from '../components/Artists';

const Home = () => (
  <div className="bg-black min-h-screen">
    <HomeHero />
    <Artists />
  </div>
);

export default Home;
