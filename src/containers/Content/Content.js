import React, { Component } from 'react';
import './Content.css';
import Intro from '../Intro/Intro';

class Content extends Component {
  render() {
    return (
      <div>
        <Intro />
        <div className="content">I'm the content!!</div>
      </div>
    );
  }
}

export default Content;
