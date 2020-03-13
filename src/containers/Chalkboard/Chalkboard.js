import React, { useEffect, useRef } from 'react';
import { lazyLoad } from '../../util/LazyLoad';
import './Chalkboard.scss';

const Chalkboard = ({ children }) => {
  const chalkboardRef = useRef(null);

  useEffect(() => {
    lazyLoad(chalkboardRef.current, 'div');
    lazyLoad(chalkboardRef.current, 'border');
  });

  return (
    <section
      ref={chalkboardRef}
      className='chalkboard'
      data-src='https://res.cloudinary.com/hwzdnifrp/image/upload/v1552263074/chalkboard__bg.jpg'
      border-src='https://res.cloudinary.com/hwzdnifrp/image/upload/v1552267905/chalkboard__wood.jpg'
    >
      <div className='chalkboard__container'>{children}</div>
    </section>
  );
};

export default Chalkboard;
