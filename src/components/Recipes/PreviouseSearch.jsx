import React from 'react';
import * as FaIcons from 'react-icons/fa';

const PreviouseSearch = () => {
  const searches = [
    'Ofada rice',
    'Ewaganyin',
    'Burger',
    'Abula',
    'Moimoi',
    'Fried rice',
    'Soup',
    'Salad',
    'plantain',
    'Juice',
  ];
  return (
    <div>
      <div className='previous-searches section'>
        <h2>Previous Searches</h2>
        <div className='previous-searches-container'>
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.2 + 's' }}
              className='search-item'>
              {search}
            </div>
          ))}
        </div>
        <div className='search-box'>
          <input type='text' placeholder='search...' />
          <button className='btn'>
            <FaIcons.FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviouseSearch;
