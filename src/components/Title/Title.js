import React, { Component } from 'react';
import './Title.css';

class Title extends Component {

  renderTitle() {
    if(this.props.isLight) {
      return(
        <div className="title__container">
            <div className="title--light">
            {this.props.children}
            </div>
        </div>
      );
    } else {
      return(
        <div className="title__container">
            <div className="title">
            {this.props.children}
            </div>
        </div>
      );
    }
  }

  render() {
    return this.renderTitle();
  }
}

export default Title;
