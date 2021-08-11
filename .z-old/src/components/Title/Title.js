import React from 'react';
import './Title.scss';

const Title = ({ children, isLight }) => (
  <div className='title__container'>
    <div className={isLight ? 'title--light' : 'title'}>{children}</div>
  </div>
);

export default Title;
