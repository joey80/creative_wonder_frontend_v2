import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className={`nav nav--${this.props.isMenuOpen ? "down" : "hidden"}`}>
        <div className="nav__container">
          <ul className={`nav__list__first ${this.props.areLinksVisible ? "nav--down" : ""}`}>
            <li>Home</li>
            <li>About</li>
            <li>Examples</li>
            <li class="nav__arrow">Blog
              <ul class="nav__list__second">
                <li>Nintendo</li>
                <li>Sony</li>
                <li>Microsoft</li>
              </ul>
            </li>
            <li class="nav__arrow">Gallery
              <ul class="nav__list__second">
                <li>Go To Bed</li>
                <li>Brush Teeth</li>
                <li>Floss</li>
                <li>Jump Rope</li>
              </ul>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
