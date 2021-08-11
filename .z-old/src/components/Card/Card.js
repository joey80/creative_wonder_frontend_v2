import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { lazyLoad } from '../../util/LazyLoad';
import './Card.scss';

const Card = ({ blog, children, date, imgUrl, link, title }) => {
  const blogImageRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (blogImageRef && blogImageRef.current) {
      lazyLoad(blogImageRef.current, 'img');
    }

    if (imageRef && imageRef.current) {
      lazyLoad(imageRef.current, 'div');
    }
  });

  if (blog) {
    return (
      <div className='card__blog'>
        <img data-src={imgUrl} alt={title} ref={blogImageRef} className='card__blog__image' />
        <div className='card__blog__date'>{date}</div>
        <div className='card__blog__title'>{title}</div>
        <div className='card__blog__content'>
          {children}
          <p>
            <a href={link} className='card__blog__content__link'>
              Read More . . .{' '}
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='card'>
        <div className='card__image__container'>
          <div className='card__image' ref={imageRef} data-src={imgUrl.default}>
            <div className='card__overlay'>
              <Button isSmall>Read More</Button>
            </div>
          </div>
        </div>
        <div className='card__title'>{title}</div>
        <hr />
        <div className='card__content'>
          <p>{children}</p>
          <p>
            <a href={link}>Read More . . . </a>
          </p>
        </div>
      </div>
    );
  }
};

export default Card;
