import React from 'react';
import ChefSection from '../components/ChefSection/ChefSection';

import HeroSection from '../components/HeroSection/HeroSection';
import ImproveSkill from '../components/ImproveSkill/ImproveSkill';

import QuoteSection from '../components/QuoteSection/QuoteSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImproveSkill />
      <QuoteSection />
      <ChefSection />
    </div>
  );
};

export default Home;
