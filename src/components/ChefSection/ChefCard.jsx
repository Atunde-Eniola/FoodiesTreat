import React from 'react';
import * as FaIcons from 'react-icons/fa';

const ChefCard = ({ chef }) => {
  return (
    <div className='chef-card'>
      <img src={chef.img} alt='chef' />
      <div className='chef-card-info'>
        <h3 className='chef-card-name'>{chef.name}</h3>
        <p className='chef-recipe-count'>
          recipe: <b>{chef.recipeCount}</b>
        </p>
        <p className='chef-cuisine'>
          cuisine:<b>{chef.cuisine}</b>
        </p>
        <p className='chef-icons'>
          <FaIcons.FaFacebook />
          <FaIcons.FaTwitter />
          <FaIcons.FaInstagram />
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
