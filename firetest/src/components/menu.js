import React, { Component } from 'react';
import './style/menu.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu-bar">
          <div className="columns">
            <div className="column has-text-centered">
              <a className="button is-primary">Primary</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-link">Primary</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-warning">Primary</a>
            </div>
            <div className="column has-text-centered">
              <a className="button is-danger">Primary</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
