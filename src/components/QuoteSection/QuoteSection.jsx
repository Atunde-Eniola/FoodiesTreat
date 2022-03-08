import React from 'react';
import * as FaIcons from 'react-icons/fa';

const QuoteSection = () => {
  return (
    <div className='section quote'>
      <p className='quote-text'>
        <FaIcons.FaQuoteLeft />
        Food is everything we are. It's an extension of nationalist
        feeling,ethic feeling and personal history,your province, your region,
        your tribe, your grandma.It's inseperable from those from the get-go.
      </p>
      <div className='quote-author'>- Atunde Eniola</div>
    </div>
  );
};

export default QuoteSection;
