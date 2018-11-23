import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/scss/main.css';
import Header from './Components/Header';
import Me from './Components/Me';
import Works from './Components/Works';
import Sketches from './Components/Sketches';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="container"  >
          <Header />
          <Route exact path="/" component={Me} />
          <Route path="/works" component={Works} />
          <Route path="/sketches" component={Sketches} />
        </div>
      </Router>
    );
  }
}

export default App;
