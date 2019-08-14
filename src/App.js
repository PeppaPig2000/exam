import React, {Component} from 'react';
import {HashRouter as Router, Route ,} from "react-router-dom";
import {enquireScreen} from 'enquire-js';
import Header from './Home/Nav1';
import Footer from './Home/Footer0';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

import {
    Nav10DataSource,
    Footer00DataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Header dataSource={Nav10DataSource} isMobile={this.state.isMobile}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path="/page2" component={Page2}/>
                    <Route exact path="/page3" component={Page3}/>
                    <Route exact path="/page4" component={Page4}/>
                    <Footer dataSource={Footer00DataSource} isMobile={this.state.isMobile}/>
                </div>
            </Router>
        );
    }
}

export default App;
