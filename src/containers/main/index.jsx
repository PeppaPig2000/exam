import React from 'react'
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {message} from 'antd'

import MyExam from "../myExam";
import SelfExam from "../selfExam";
import TopicList from "../topicList";
import Inform from "../inform";
import Login from "../login";
import Home from "../Home";




export default class Main extends React.Component {

    render() {
        const userId = Cookies.get('userId');
        if (!userId){
            message.error('请先登录!！',1);
            return <Redirect to='/login'/>
        }
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/myexam" component={MyExam}/>
                    <Route exact path="/selfexam" component={SelfExam}/>
                    <Route  path="/topiclist" component={TopicList}/>
                    <Route exact path="/inform" component={Inform}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Home}/>
                </Switch>
            </HashRouter>
        )
    }
}