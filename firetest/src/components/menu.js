import React, { Component } from 'react';
import Applogo from './app-logo.js';
import './style/menu.css';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      message:"Please Click on the button to change the word!",
      image:"./img/PacGosu.png"
    };
    this.changeMessage1 = this.changeMessage1.bind(this);
    this.changeMessage2 = this.changeMessage2.bind(this);
    this.changeMessage3 = this.changeMessage3.bind(this);
    this.changeMessage4 = this.changeMessage4.bind(this);
  }

  changeMessage1(){
    this.setState({message:"Bulbasaur",image:"./img/B.png"});
  }

  changeMessage2(){
    this.setState({message:"Squirtle",image:"./img/S.png"});
  }

  changeMessage3(){
    this.setState({message:"Pikachu",image:"./img/P.png"});
  }

  changeMessage4(){
    this.setState({message:"Charmander",image:"./img/C.png"});
  }

  render() {
    return (
      <div>
        <div className="menu-bar">
          <div className="columns">
            <div className="column has-text-centered">
              <a className="button is-primary" onClick={this.changeMessage1}>Bulbasaur</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-link" onClick={this.changeMessage2}>Squirtle</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-warning" onClick={this.changeMessage3}>Pikachu</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-danger" onClick={this.changeMessage4}>Charmander</a>
            </div>
          </div>
        </div>
        <div className="changer">
          <img src={this.state.image} className="imag" />
          <p className="text-message">{this.state.message}</p>
        </div>

      </div>
    );
  }
}

export default Menu;
