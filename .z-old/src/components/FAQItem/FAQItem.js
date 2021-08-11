import React, { useState } from 'react';
import './FAQItem.scss';

const FAQItem = ({ answer, num, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button className='faq-item__container' onClick={() => setIsOpen(!isOpen)}>
        <span className={`faq-item__question faq-item__question--${num}`}>{question}</span>
      </button>
      <span className={`faq-item__answer ${isOpen ? 'faq-item__answer--open' : ''}`}>
        <p className='faq-item__answer__text'>{answer}</p>
      </span>
    </li>
  );
};

export default FAQItem;
