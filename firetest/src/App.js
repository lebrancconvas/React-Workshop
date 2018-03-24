import React, { Component } from 'react';
import Header from './components/header.js';
import Applogo from './components/app-logo.js'
import Menu from './components/menu.js';
import Form from './components/form.js'
import Content from './components/content.js';
//import Form from './components/form.js';
//import Footer from './components/footer.js'



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
