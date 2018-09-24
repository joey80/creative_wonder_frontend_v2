import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  renderButton() {
    if(this.props.isNavButton) {
      return(
        <button className={`button__header button__header--${this.props.isMenuOpen ? "on" : "off"}`} onClick={this.props.onClick}>
          <span className="button__header__hamburger"></span>
          <span className="button__header__text">{this.props.buttonText}</span>
        </button>
      );
    } else {
      return(
        <button className="button" onClick={this.props.onClick}>
          {this.props.buttonText}
        </button>
      );
    }
  }

  render() {
    return this.renderButton();
  }
}

export default Button;