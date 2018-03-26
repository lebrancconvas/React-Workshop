import React, { Component } from 'react';
import styled from 'styled-components';
import './style/app-logo.css'

const Webhead = styled.h1`
  font-size : 45px;
  padding-top : 35px;
`;

class Applogo extends Component {
  render() {
    return (
        <div>
          <div className="column-padd">
            <div className="columns">
              <div className="column has-text-centered">
                <img src="/img/PacGosu.png" className="App-logo" alt="logo" />
              </div>
              <Webhead>MockUp Fighter</Webhead>
              <div className="column has-text-centered">
                <img src="/img/PacGosu.png" className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Applogo;
