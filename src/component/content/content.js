import React, { useState } from 'react';
import './content.css';
import { Button} from 'antd';

const quotesList = [
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson',
  'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
  'Do not wait for leaders; do it alone, person to person. - Mother Teresa',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius'
];

export const Content = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleQuoteBtnClick = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesList.length);
  };


  const currentQuote = quotesList[quoteIndex];

    return (
    <div className="content">
      <div className="centered-content">
        <h2>Quote</h2>
        <p>{currentQuote}</p>
        <Button className='quotesbtn' onClick={handleQuoteBtnClick} type='primary'>Quotes</Button>
      </div>
    </div>
  );
};
