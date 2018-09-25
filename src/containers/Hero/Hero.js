import React, { Component } from 'react';
import './Hero.css';
import Button from '../../components/Button/Button';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <p><span className="hero__content__title">Voted Top Pre-School Five Years In A Row</span></p>
            <p>Our qualified teachers and parents work together to provide a safe, nurturing, educational experience
            that embraces diversity and prepares children for elementary school. Through 2010 - 2015, Creative Wonder
            Early Learning Center was selected as the best preschool in Northern Virginia by Northern Virginia Magazine.
            In fact, our school received the highest grade of all 33 schools listed for Fairfax County. This is in no
            small part due to the dedication of our teachers, parents, and staff.</p>
            <Button>Call Us</Button><Button>Email Us</Button>
          </div>
        </div>
        <div className="hero__ship"></div>
      </section>
    );
  }
}

export default Hero;
