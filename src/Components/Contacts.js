
import React, { Component } from 'react';
import config from '../config';

class Contacts extends Component {
    state = {
        contacts: null
    }
    componentDidMount = async () => {

        if(!this.state.contacts){
            let response = await fetch(config.urls.info);
            let contacts = await response.json();
            this.setState({ contacts })
        }
    }
    render() {

        if (!this.state.contacts) {
            return <div>Loading</div>
        }

        let { fb, instagram, phone, email, skInstagram, skFb } = this.state.contacts;
        return <div id="contacts">
            <h3>Contact Me:</h3>
            <p>Facebook: <a target="_blank" href={fb.link}>{fb.text}</a>  </p>
            <p>Instagram:  <a target="_blank" href={instagram.link}>{instagram.text}</a></p>
            <p>Phone: {phone}</p>
            <p>Email: <a target="_blank" href={`mailto:${email.mailto}`}>{email.text}</a></p>
            <h3>Contact Studio:</h3>
            <p>Facebook: <a target="_blank" href={skFb.link}>{skFb.text}</a>  </p>
            <p>Instagram:  <a target="_blank" href={skInstagram.link}>{skInstagram.text}</a></p>

        </div>
    }
}
export default Contacts;