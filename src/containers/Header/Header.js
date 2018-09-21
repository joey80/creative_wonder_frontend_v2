import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      active: false
    }
  }

  toggleMenu() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    // toggle nav menu
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo"></div>
          <Button onClick={this.toggleMenu}
                  buttonText="Main Menu"
                  buttonClass={`button__header button__header--${this.state.active ? 'off': 'on'}`}
                  buttonTextClass="button__header__text" />
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
