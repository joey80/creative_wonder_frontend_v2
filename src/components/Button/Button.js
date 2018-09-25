import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  renderButton() {
    if(this.props.isNavButton) {
      return(
        <div className="button__header__container">
          <button className={`button__header button__header--${this.props.isMenuOpen ? "on" : "off"}`} onClick={this.props.onClick}>
            <span className="button__header__text">{this.props.children}</span>
            <span className="button__header__hamburger" onClick={this.props.onClick}></span>
          </button>
        </div>
      );
    } else {
      return(
        <button className="button" onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
