import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderContainer from "./styled/HeaderContainer";

class Header extends Component{
    render(){
        return <HeaderContainer>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/sketches">Sketches</Link>
        </HeaderContainer>
    }
}

export default Header;