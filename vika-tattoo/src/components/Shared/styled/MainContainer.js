import React, { Component } from 'react'
import styled from 'styled-components'
import {media} from "styles";

const Container = styled.div`
    width: 100%;
    max-width: 1524px;
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    height: 100%;
    position: relative;
`;


export default Container;