import React from 'react';

const CustomImage = ({ imgSrc, pt }) => {
  return (
    <div className='custom-image' style={{ paddingTop: pt }}>
      <img src={imgSrc} alt='foods' />
    </div>
  );
};

export default CustomImage;
