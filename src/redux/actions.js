/*
包含n个 action creator
异步action
同步action
 */
import {
    LOGIN_SUCCESS,
    ERR_MSG,
    RECEIVE_USER,
    RECEIVR_TESTPAPER,
    RECEIVE_TESTLIST,
    RECEIVE_POSTANSWER

} from './action-types' //每一个type必然对应一个同步action
import {
    reqLogin,
    reqUser,
    reqTestPaper,
    reqTestList,
    postTestAnswer
} from "../api";

//登陆成功的同步action
const loginSuccess = (user) =>({type:LOGIN_SUCCESS,data: user});
//错误提示信息的action
const errMsg = (msg) =>({type: ERR_MSG,data: msg });
//接受用户信息的同步action
const receiveUser = (user) =>({type:RECEIVE_USER,data:user});
//接收试卷列表的同步action
const receiveTestPaper = (testPaper) =>({type:RECEIVR_TESTPAPER,data:testPaper});
//接收试卷内容的同步action
const receiveTsetList = (testList) =>({type:RECEIVE_TESTLIST,data:testList});
//提交试卷答案的同步action
const receivePostAnswer =  (postAnswer) =>({type:RECEIVE_POSTANSWER,data: postAnswer})

//登陆的异步action
export const login = (user)=>{
    //表单输入合法，返回一个ajax请求的异步action函数
    return async dispatch =>{
        //发送异步请求
        const response = await  reqLogin(user);
        const result = response.data;
        if (result.code===200){
            //成功，分发授权成功的同步action
            dispatch(loginSuccess(result.data))
        } else if(result.code===401){
            //失败，分发提示错误信息的action
            dispatch(errMsg(result.msg))
        }
    }
};
//获取用户userId的异步action
export const getUser = (userId)=>{
    return async dispatch =>{
        const response = await reqUser(userId);
        const result = response.data;
        if (result.code===301){
            dispatch(errMsg(result.msg))
        } else {
            dispatch(receiveUser(result))
        }
    }
};

//获取试卷列表的异步action
export const getTestPaper =(userId)=>{
    return async dispatch =>{
        const response = await reqTestPaper(userId);
        const result = response.data;
        if (result.code===301){
            dispatch(errMsg(result.msg))
        }else {
            dispatch(receiveTestPaper(result))
        }
    }
};
//获取试卷内容的异步action
export const getTestList = ({userId,testId})=>{
    return async dispatch =>{
        const response = await reqTestList({userId,testId});
        const result = response.data;
        if (result.code===500){
            dispatch(errMsg(result.msg))
        } else {
            dispatch(
                receiveTsetList(result)
            )
        }
    }
};
//提交试卷答案的异步action
export const postTestList = ({testAnswer,userId})=>{
    return async dispatch =>{
        const response = await postTestAnswer({testAnswer,userId});
        const result = response.data;
        if (result.code!==200){
            dispatch(errMsg('提交失败！'))
        } else {
            dispatch(receivePostAnswer(result))
        }
    }

}