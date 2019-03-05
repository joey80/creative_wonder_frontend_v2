import React, { Component } from 'react';
import './Content.css';
import Intro from '../Intro/Intro';
import Chalkboard from '../Chalkboard/Chalkboard';
import Blog from '../Blog/Blog';

class Content extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Chalkboard />
        <Blog />
      </div>
    );
  }
}

export default Content;
