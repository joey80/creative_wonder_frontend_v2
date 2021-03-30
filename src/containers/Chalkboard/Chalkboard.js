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
      data-src={require('../../assets/images/chalkboard__bg.jpg').default}
      // TODO: fix the border src
      border-src='https://res.cloudinary.com/hwzdnifrp/image/upload/v1552267905/chalkboard__wood.jpg'
    >
      <div className='chalkboard__container'>{children}</div>
    </section>
  );
};

export default Chalkboard;
