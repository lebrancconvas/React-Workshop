import React, { Component } from 'react';
import Header from '../components/header.js';
import Applogo from '../components/app-logo.js'
import Menu from '../components/menu.js';
import Footer from '../components/Footer.js';




class App extends Component {
  render() {
    return (
      <div>
        <Applogo />
        <Header />
        <Menu />
        <Footer />
      </div>

    );
  }
}



export default App;
