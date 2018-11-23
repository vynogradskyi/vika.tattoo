
import React, { Component } from 'react';
import Contacts from './Contacts';
import img from '../assets/img/vika-1.jpg';

class Me extends Component {
    render() {
        return <div id="me">
            <div className="main-photo-wrapper">
                <img src={img} className="main-photo" />
            </div>
            <div className="info-wrapper">
                <h1> <a href="http://www.google.com/search?q=wroclaw+skullmaster" target="_blank">Viktoria Vinogradska</a> </h1>
                <Contacts />
            </div>
        </div>
    }
}
export default Me;