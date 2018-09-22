import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuOpen: false
    }
  }

  toggleMenu() {
    const menuState = this.state.menuOpen;
    this.setState({ menuOpen: !menuState });
    // toggle nav menu
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo"></div>
          <Button onClick={this.toggleMenu}
                  buttonText="Main Menu"
                  buttonClass={`button__header button__header--${this.state.menuOpen ? 'on': 'off'}`}
                  buttonTextClass="button__header__text" />
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
