import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';

class Header extends Component {
  render() {
    return (
      <div className="header">
        I'm the header!!
        <div>LOGO</div>
        <div>MENU BUTTON</div>
        <Nav />
      </div>
    );
  }
}

export default Header;
