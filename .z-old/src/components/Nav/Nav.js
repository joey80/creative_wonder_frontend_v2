import React from 'react';
import './Nav.scss';

const Nav = ({ areLinksVisible, isMenuOpen }) => (
  <div className={`nav nav--${isMenuOpen ? 'down' : 'hidden'}`}>
    <div className='nav__container'>
      <ul className={`nav__list__first ${areLinksVisible ? 'nav--down' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Examples</li>
        <li className='nav__arrow'>
          Blog
          <ul className='nav__list__second'>
            <li>Nintendo</li>
            <li>Sony</li>
            <li>Microsoft</li>
          </ul>
        </li>
        <li className='nav__arrow'>
          Gallery
          <ul className='nav__list__second'>
            <li>Go To Bed</li>
            <li>Brush Teeth</li>
            <li>Floss</li>
            <li>Jump Rope</li>
          </ul>
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
);

export default Nav;
