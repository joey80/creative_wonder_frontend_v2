import React from 'react';

const FAQItem = ({ answer, color, question }) => (
  <div className='FAQItem__container'>
    <span className='FAQItem__question'>{question}</span>
    <span className='FAQItem__answer'>
      <p>{answer}</p>
    </span>
  </div>
);

export default FAQItem;
