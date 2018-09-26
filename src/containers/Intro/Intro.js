import React, { Component } from 'react';
import './Intro.css';
import Title from '../../components/Title/Title';

class Intro extends Component {
  render() {
    return (
        <section className="intro">
            <Title>
                Where Your Child Matters
            </Title>
            <div className="intro__container">
                <div className="intro__video">
                    <iframe src='http://www.youtube.com/embed/PZY-hB2C_Iw?wmode=transparent' allowfullscreen className="no-border" title="Preschool Video"></iframe>
                </div>
                <div className="intro__content">
                    <p>Creative Wonder Early Learning Center provides a high standard of care, education and learning opportunities.
                    Children are able to explore a rich and <a href="" >diverse range of activities</a> within a flexible, stimulating, inclusive
                    and welcoming learning environment. We aim to help the children develop self-respect, respect for others and
                    respect for their environment, to fufill their full potential and achieve the outcomes of Every Child Matters.</p>
                    <p>Children develop in a fun and relaxed environment. The involvement of parents/carers in their child's
                    preschool experience plays a crucial role in building a firm foundation for future education.</p>
                </div>
            </div>
        </section>
    );
  }
}

export default Intro;
