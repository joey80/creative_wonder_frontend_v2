import React from 'react';
import Title from '../../components/Title/Title';
import './Intro.css';

const Intro = () => (
  <section className='container intro'>
    <div className='row'>
      <div className='col-12'>
        <Title>Where Your Child Matters</Title>
      </div>
    </div>
    <div className='intro__container'>
      <div className='intro__video'>
        <iframe
          src='https://www.youtube.com/embed/PZY-hB2C_Iw'
          frameBorder='0'
          allow='accelerometer; gyroscope;'
          allowFullScreen
          className='no-border'
          title='Preschool Video'
        ></iframe>
      </div>
      <div className='intro__content'>
        <p>
          Creative Wonder Early Learning Center provides a high standard of care, education and
          learning opportunities. Children are able to explore a rich and{' '}
          <a href='index.html'>diverse range of activities</a> within a flexible, stimulating,
          inclusive and welcoming learning environment. We aim to help the children develop
          self-respect, respect for others and respect for their environment, to fufill their full
          potential and achieve the outcomes of Every Child Matters.
        </p>
        <p>
          Children develop in a fun and relaxed environment. The involvement of parents in their
          child's preschool experience plays a crucial role in building a firm foundation for future
          education.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
