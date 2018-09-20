import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return <button className={this.props.buttonClass}><span className="button__header__hamburger"></span><span className={this.props.buttonTextClass}>{this.props.buttonText}</span></button>;
  }
}

export default Button;
