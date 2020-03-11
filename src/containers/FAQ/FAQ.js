import React from 'react';
import Title from '../../components/Title/Title';
import Chalkboard from '../Chalkboard/Chalkboard';
import FAQItem from '../../components/FAQItem/FAQItem';
import { Data } from './FAQ.data';
import './FAQ.scss';

const FAQ = () => (
  <Chalkboard>
    <Title isLight>Frequently Asked Questions</Title>
    {Data.map(({ answer, color, question }, idx) => (
      <FAQItem answer={answer} color={color} question={question} key={idx} />
    ))}
  </Chalkboard>
);

export default FAQ;
