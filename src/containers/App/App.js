import React, { Component } from 'react';
import '../../components/Global/Global.css';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
