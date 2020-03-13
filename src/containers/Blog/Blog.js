import React from 'react';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import { Data } from './Blog.data';
import './Blog.scss';

const Blog = () => (
  <section className='blog'>
    <Title>Latest News</Title>
    <div className='blog__container'>
      {Data.map({ date, description, imageLink, link, title }, idx => (
        <Card key={idx} blog imgUrl={imageLink} title={title} date={date} link={link}>
          {description}
        </Card>
      ))}
    </div>
  </section>
);

export default Blog;
