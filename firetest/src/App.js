import React, { Component } from 'react';
import Form from './form.js'
import Content from './content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/img/PacGosu.png" className="App-logo" alt="logo" />
          <h1 className="App-title">นี่มันเว็บเชี่ยไรกันเนี่ยย</h1>
        </header>
        <Content />
        <Form />
      </div>
    );
  }
}



export default App;
