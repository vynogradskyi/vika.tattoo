import React, {Component} from 'react';
import {ThemeProvider, injectGlobal} from 'styled-components';
import { theme, setUpGlobals } from './styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Sketches from "./containers/Sketches";
import Works from "./containers/Works";
import Home from "./containers/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import MainContainer from "./components/Shared/styled/MainContainer";

class App extends Component {
    render() {
        setUpGlobals();
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <MainContainer>
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/works" component={Works}/>
                        <Route exact path="/sketches" component={Sketches}/>
                        <Footer/>
                    </MainContainer>
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
