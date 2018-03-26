import React, { Component } from 'react';
import styled from 'styled-components';

const Lover = styled.footer`
  font-size : 12px;
  color : white;
  background-color : black;
  text-align : center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

class Footer extends Component{
  render(){
    return(
      <Lover>Copyright 2018 - Lebranc Convas</Lover>
    );
  }
}

export default Footer;
