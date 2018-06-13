import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  height: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;


export default Footer;