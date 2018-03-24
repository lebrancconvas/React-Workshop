import React, { Component } from 'react';
import Header from './components/header.js';
import Applogo from './components/app-logo.js'
import Menu from './components/menu.js';



class App extends Component {
  render() {
    return (
      <div>
        <Applogo />
        <Header />
        <Menu />
      </div>

    );
  }
}



export default App;
