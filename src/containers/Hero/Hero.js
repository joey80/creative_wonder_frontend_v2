import React from 'react'
import Button from '../../components/Button/Button'
import HeroShip from './HeroShip/HeroShip'
import './Hero.scss'

const Hero = props => (
  <section className='hero'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-10 col-lg-8'>
          <h1>Voted Top Pre-School Five Years In A Row</h1>
          <p>
            Our qualified teachers and parents work together to provide a safe, nurturing,
            educational experience that embraces diversity and prepares children for elementary
            school. Through 2010 - 2015, Creative Wonder Early Learning Center was selected as the
            best preschool in Northern Virginia by Northern Virginia Magazine. In fact, our school
            received the highest grade of all 33 schools listed for Fairfax County. This is in no
            small part due to the dedication of our teachers, parents, and staff.
          </p>
          <Button>Call Us</Button>
          <Button>Email Us</Button>
        </div>
        <HeroShip />
      </div>
    </div>
  </section>
)

export default Hero
