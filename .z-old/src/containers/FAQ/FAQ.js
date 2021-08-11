import React from 'react';
import Title from '../../components/Title/Title';
import Chalkboard from '../Chalkboard/Chalkboard';
import FAQItem from '../../components/FAQItem/FAQItem';
import { Data } from './FAQ.data';
import './FAQ.scss';

const FAQ = () => (
  <Chalkboard>
    <Title isLight={true}>Frequently Asked Questions</Title>
    <ul className='faq__list'>
      {Data.map(({ answer, question }, index) => (
        <FAQItem num={index + 1} key={index} {...{ answer, question }} />
      ))}
    </ul>
  </Chalkboard>
);

export default FAQ;
