import React from 'react';
import PreviouseSearch from '../components/Recipes/PreviouseSearch';
import RecipeCard from '../components/Recipes/RecipeCard';

const Recipes = () => {
  const recipes = [
    {
      title: 'Abasha Spongeiun',
      image: 'img/gallery/foreign-1.jpg',
      authorImg: 'img/top-chefs/chef-1.jpg',
    },
    {
      title: 'Buguleri Skelio',
      image: 'img/gallery/foreign-2.jpg',
      authorImg: 'img/top-chefs/chef-2.jpg',
    },
    {
      title: 'Abasha Spatule',
      image: 'img/gallery/foreign-3.jpg',
      authorImg: 'img/top-chefs/chef-3.jpg',
    },
    {
      title: 'Bites and Fries',
      image: 'img/gallery/foreign-5.jpg',
      authorImg: 'img/top-chefs/chef-5.jpg',
    },
    {
      title: 'Fried Rice',
      image: 'img/gallery/foreign-6.jpg',
      authorImg: 'img/top-chefs/chef-3.jpg',
    },
    {
      title: 'Nigeria Jollof',
      image: 'img/gallery/foreign-7.jpg',
      authorImg: 'img/top-chefs/chef-2.jpg',
    },
  ];
  // .sort(() => math.random() - 0.5);

  return (
    <div>
      <PreviouseSearch />
      <div className='recipe-container'>
        {/* <RecipeCard /> */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
