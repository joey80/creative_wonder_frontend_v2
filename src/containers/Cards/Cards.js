import React from 'react';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import Chalkboard from '../Chalkboard/Chalkboard';
import { Data } from './Cards.data';

const Cards = () => (
  <Chalkboard>
    <Title isLight>Communication Board</Title>
    <div className='chalkboard__card__container'>
      {Data.map(({ description, href, src, title }, idx) => (
        <Card key={idx} imgUrl={src} title={title} link={href}>
          {description}
        </Card>
      ))}
    </div>
  </Chalkboard>
);

export default Cards;
