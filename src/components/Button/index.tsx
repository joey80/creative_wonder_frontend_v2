import React from 'react';
import { ButtonType, NavButtonType } from './types';
import './styles.scss';

const Button: ButtonType = ({ children, onClick, variant }) => (
  <button className={`button ${variant ? `button--${variant}` : ''}`} {...{ onClick }}>
    {children}
  </button>
);

const NavButton: NavButtonType = ({ children, isMenuOpen, onClick }) => (
  <div className="button__header__container">
    <button
      className={`button__header button__header--${isMenuOpen ? 'on' : 'off'}`}
      {...{ onClick }}
    >
      <span className="button__header__text">{children}</span>
      <span className="button__header__hamburger" {...{ onClick }}></span>
    </button>
  </div>
);

export { Button, NavButton };
