import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
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
