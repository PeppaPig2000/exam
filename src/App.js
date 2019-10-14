import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {enquireScreen} from 'enquire-js';
import Header from './containers/Home/Nav1';
import Footer from './containers/Home/Footer0';
import Home from './containers/Home';
import Login from './containers/login'
import Main from './containers/main'

import {
    Nav10DataSource,
    Footer00DataSource,
} from './containers/Home/data.source.js';

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
            <HashRouter>
                    <Header dataSource={Nav10DataSource} isMobile={this.state.isMobile}/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route component={Main}/>
                </Switch>
                    <Footer  dataSource={Footer00DataSource} isMobile={this.state.isMobile}/>
            </HashRouter>
    );
    }
    }

    export default App;
