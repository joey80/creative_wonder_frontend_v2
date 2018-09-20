import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo"></div>
          <Button buttonText="Main Menu"
                  buttonClass="button__header button__header--off"
                  buttonTextClass="button__header__text" />
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
