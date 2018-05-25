import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return <div>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/sketches">Sketches</Link>
        </div>
    }
}

export default Header;