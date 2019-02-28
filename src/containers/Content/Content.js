import React, { Component } from 'react';
import './Content.css';
import Intro from '../Intro/Intro';
import Chalkboard from '../Chalkboard/Chalkboard';

class Content extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Chalkboard />
      </div>
    );
  }
}

export default Content;
