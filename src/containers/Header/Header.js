import React, { Component } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      menuOpen: false,
      showLinks: false
    }
  }

  // Controls the nav menu
  toggleMenu() {
    const menuState = this.state.menuOpen;

    if(menuState) {
      // Hide the links then hide the nav menu
      setTimeout(() => {
        this.setState({ menuOpen: !menuState });
      }, 150);
      this.setState({ showLinks: !menuState });
    } else {
      // Show the nav menu then show the links
      setTimeout(() => {
        this.setState({ showLinks: !menuState });
      }, 300);
      this.setState({ menuOpen: !menuState });
    }
  }

  toggleMobileMenu() {
    alert('mobile menu');
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header__container">
            <div className="header__logo"></div>
            <Button onClick={this.toggleMenu}
                    mobileClick={this.toggleMobileMenu}
                    buttonText="Main Menu"
                    isNavButton={true}
                    isMenuOpen={this.state.menuOpen} />
          </div>
        </div>
        <Nav isMenuOpen={this.state.menuOpen}
             areLinksVisible={this.state.showLinks} />
      </div>
    );
  }
}

export default Header;
