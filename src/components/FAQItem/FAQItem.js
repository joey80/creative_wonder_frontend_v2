import React, { useRef, useState } from 'react';
import './FAQItem.scss';

const FAQItem = ({ answer, color, question }) => {
  const faqRef = useRef(null);

  const handleClick = () => {
    faqRef.current.classList.toggle('faq-item--show');
  };

  return (
    <div
      className='faq-item__container'
      ref={faqRef}
      style={{ backgroundColor: `${color}` }}
      onClick={handleClick}
    >
      <span className='faq-item__question'>{question}</span>
      <span className='faq-item__answer'>
        <p>{answer}</p>
      </span>
    </div>
  );
};

export default FAQItem;
