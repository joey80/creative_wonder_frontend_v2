import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo">CreativeWonder</div>
          <div>MENU BUTTON</div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
