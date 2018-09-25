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
      showLinks: false,
      isMobile: false
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


  render() {
    return (
      <div className="header__section">
        <div className="header">
          <div className="header__container">
            <div className="header__logo"></div>
            <Button onClick={this.toggleMenu}
                    isNavButton={true}
                    isMenuOpen={this.state.menuOpen}>
              Main Menu
            </Button>
          </div>
        </div>
        <Nav isMenuOpen={this.state.menuOpen}
             areLinksVisible={this.state.showLinks} />
      </div>
    );
  }
}

export default Header;
