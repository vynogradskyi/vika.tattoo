import styled from 'styled-components';
import React from 'react';

export default styled.div`
  height: 50px;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`;