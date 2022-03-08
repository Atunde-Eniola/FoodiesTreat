import React from 'react';
import ChefCard from './ChefCard';

const ChefSection = () => {
  const chefs = [
    {
      name: 'Atunde Modinat',
      img: 'img/top-chefs/chef-1.jpg',
      recipeCount: '06',
      cuisine: 'Ukraine',
    },
    {
      name: 'Olapeji Afusat',
      img: 'img/top-chefs/chef-2.jpg',
      recipeCount: '05',
      cuisine: 'Dubai',
    },
    {
      name: 'Moren Keji',
      img: 'img/top-chefs/chef-3.jpg',
      recipeCount: '14',
      cuisine: 'Ghana',
    },
    {
      name: 'Omolabake Olawale',
      img: 'img/top-chefs/chef-4.jpg',
      recipeCount: '17',
      cuisine: 'South Africa',
    },
    {
      name: 'Oyindamola Bello',
      img: 'img/top-chefs/chef-5.jpg',
      recipeCount: '10',
      cuisine: 'U.S.A',
    },
    {
      name: 'Ajao Adedoyin',
      img: 'img/top-chefs/chef-1.jpg',
      recipeCount: '12',
      cuisine: 'Mexico',
    },
  ];

  return (
    <div className='section chefs'>
      <h1 className='title'>Our Top Chefs</h1>
      <div className='top-chef-container'>
        {chefs.map(chef => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
