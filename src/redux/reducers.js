/*
包含多个reducer函数：根据老的state和制定的action返回一个新的state
 */
//暴露多个函数需要combineReducers
import {combineReducers} from 'redux'

import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_USER,
    RECEIVR_TESTPAPER,
    RECEIVE_TESTLIST,
    RECEIVE_POSTANSWER

} from './action-types'

const initUser = {
    username: '',

};

//产生user状态的reducer
function user(state = initUser, action) {
    switch (action.type) {
        case LOGIN_SUCCESS://data是user
            return {...state,user:action.data};
        case ERR_MSG:
            return{...state,message:action.data};
        case RECEIVE_USER:
            return action.data;
        default:
            return state

    }
}

//产生testPaper列表状态的reducer
const inittestPaper = [];
function testPaper(state=inittestPaper,action) {
    switch (action.type) {
        case RECEIVR_TESTPAPER:
            return action.data;
        default:
            return state

    }

}
//产生testList状态的reducer
const initTestList = {};
function testList(state=initTestList,action) {
    switch (action.type) {
        case RECEIVE_TESTLIST:
            return action.data
        default:
            return state
    }

}
//产生testAnswer状态的reducer
const initTestAnswer = {};
function testAnswer(state=initTestAnswer,action) {
    switch (action.type) {
        case RECEIVE_POSTANSWER:
            return action.data;
        default:
            return state

    }

}
export default combineReducers({
    user,
    testPaper,
    testList,
    testAnswer
})

// 向外暴露的状态的结构：{user:{}, testPaper:[], testList:{},testAnswer{} }


