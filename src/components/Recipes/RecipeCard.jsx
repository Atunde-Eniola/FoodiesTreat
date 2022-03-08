import React from 'react';
import { Link } from 'react-router-dom';
import CustomImage from '../CustomImage/CustomImage';
import * as FaIcons from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
      <CustomImage imgSrc={recipe.image} pt='65%' />
      <div className='recipe-card-info'>
        <img className='author-img' src={recipe.authorImg} alt='chef' />
        <p className='recipe-title'>{recipe.title}</p>
        <p className='recipe-desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit Labore
          exercitationem.
        </p>
        <Link to='#' className='view-btn '>
          view recipe
          <FaIcons.FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
