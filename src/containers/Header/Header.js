import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuOpen: false,
      showLinks: false
    }
  }

  toggleMenu() {
    const menuState = this.state.menuOpen;
    if(menuState) {
      this.setState({ showLinks: !menuState });
      this.setState({ menuOpen: !menuState });
    } else {
      //show animate links
      setTimeout(() => {
        this.setState({ showLinks: !menuState });
      }, 300);
      this.setState({ menuOpen: !menuState });
    }
    
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header__container">
            <div className="header__logo"></div>
            <Button onClick={this.toggleMenu}
                    buttonText="Main Menu"
                    buttonClass={`button__header button__header--${this.state.menuOpen ? 'on': 'off'}`}
                    buttonTextClass="button__header__text" />
          </div>
        </div>
        <Nav menuPosition={`${this.state.menuOpen ? 'down': 'hidden'}`}
             linkAnimation={`${this.state.showLinks ? 'nav--down': ''}`} />
      </div>
    );
  }
}

export default Header;
