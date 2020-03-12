import React from 'react';
import './Button.scss';

const Button = ({ children, isMenuOpen, isNavButton, isSmall, onClick }) => {
  if (isNavButton) {
    return (
      <div className='button__header__container'>
        <button
          className={`button__header button__header--${isMenuOpen ? 'on' : 'off'}`}
          onClick={onClick}
        >
          <span className='button__header__text'>{children}</span>
          <span className='button__header__hamburger' onClick={onClick}></span>
        </button>
      </div>
    );
  }

  if (isSmall) {
    return (
      <button className='button button--small' onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
