import React from 'react';
import CustomImage from '../CustomImage/CustomImage';

const HeroSection = () => {
  const images = [
    '/img/gallery/Nig-food-0.jpg',
    '/img/gallery/Nig-food-1.jpg',
    '/img/gallery/Nig-food-2.jpg',
    '/img/gallery/Nig-food-3.jpg',
    '/img/gallery/Nig-food-4.jpg',
    '/img/gallery/Nig-food-5.jpg',
    '/img/gallery/Nig-food-6.jpg',
    '/img/gallery/Nig-food-7.jpg',
    '/img/gallery/Nig-food-9.jpg',
  ];
  return (
    <div>
      <div className='section hero'>
        <div className='col typography'>
          <h1 className='title'>What Are We About</h1>
          <p className='info'>
            Welcome, we are happy to have you here. FoodiesTreat is where you
            feed your soul and tummy with deliscious food recipies of all
            cuisine.And our service is absolutely free.So start exploring now
          </p>
          <button className='btn'>explore now</button>
        </div>
        <div className='col gallery'>
          {images.map((src, index) => (
            <CustomImage key={index} imgSrc={src} pt={'90%'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
