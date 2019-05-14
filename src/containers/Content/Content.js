import React, { Component } from 'react';
import './Content.css';
import Intro from '../Intro/Intro';
import Cards from '../Cards/Cards';
import Blog from '../Blog/Blog';
import FAQ from '../FAQ/FAQ';

class Content extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Cards />
        <Blog />
        <FAQ />
      </div>
    );
  }
}

export default Content;
