import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './style/menu.css';

const Play = () => <h1>play</h1>

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      message:"Character",
      image:"./img/PacGosu.png",
      feel:""
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

  onReset(){
    this.setState({message:"Character",image:"./img/PacGosu.png"})
  }

  onChange(event){
    this.setState({feel:event.target.value});
  }



  render() {
    return (
      <div className="root-element">
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
          <img src={this.state.image} className="imag" alt="character"/>
          <p className="text-message">{this.state.message}</p>
          <p className="field has-addons">
          <div className="app-play button is-primary" onClick={this.onReset.bind(this)}>
            <p>
              Reset
            </p>
          </div>
            <input type="text" className="input is-primary" placeholder="Input your Player Name" onChange={this.onChange.bind(this)} />
            <div className="app-play button is-primary">
                <p>
                  Play!
                </p>
            </div>
          </p>
          <div className="box">
            <p className="feeling is-large">Player : {this.state.feel} <br />As : {this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
