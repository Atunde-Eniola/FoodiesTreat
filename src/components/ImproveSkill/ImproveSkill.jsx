import React from 'react';

const ImproveSkill = () => {
  const list = [
    'Learn new recipes',
    'Experiment with food',
    'Write your own recipes',
    'Know nutrition facts',
    'Get cooking tips',
    'Get ranked',
  ];

  return (
    <div>
      <div className='section improve-skills'>
        <div className='col img'>
          <img src='/img/gallery/Foreign-1.jpg' alt='food' />
        </div>
        <div className='col typography'>
          <h1 className='title'>Improve Your Culinary Skills</h1>
          {list.map((item, index) => (
            <p className='skill-item' key={index}>
              {item}
            </p>
          ))}
          <button className='btn'>signup now</button>
        </div>
      </div>
    </div>
  );
};

export default ImproveSkill;
