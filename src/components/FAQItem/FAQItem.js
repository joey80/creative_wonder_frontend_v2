import React, { useRef } from 'react';
import './FAQItem.scss';

const FAQItem = ({ answer, num, question }) => {
  const faqRef = useRef(null);

  const handleClick = () => {
    faqRef.current.children[1].classList.toggle('faq-item__answer--open');
  };

  return (
    <div className='faq-item__container' ref={faqRef} onClick={handleClick}>
      <span className={`faq-item__question faq-item__question--${num}`}>{question}</span>
      <span className='faq-item__answer'>
        <p class='faq-item__answer__text'>{answer}</p>
      </span>
    </div>
  );
};

export default FAQItem;
