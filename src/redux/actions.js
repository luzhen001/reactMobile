/**
 * 所有action creator(action的工厂函数)
 * 所有同步的action都返回一个对象
 * 所有异步的action都返回一个函数
 */

import {
    INCREMENT,
    DECREMENT,
    COMMENT_ADD,
    COMMENT_DELETE,
    ADD_PERSON,
    AUTH_SUCCSEE,
    ERROR_MSG
} from './action-types'
import { reqRegister, reqLogin } from 'api'


//计数
export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })
//异步action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number));
        }, 1000);
    }
}
//评论
export const commentAdd = (comment) => ({ type: COMMENT_ADD, data: comment })
export const commentDel = (id) => ({ type: COMMENT_DELETE, data: id })
//添加人
export const personAdd = (person) => ({ type: ADD_PERSON, data: person })




//授权成功的同步action
const authSuccess = (user) => ({ type: AUTH_SUCCSEE, data: user })
//错误提示信息的同步action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })


//注册异步action
export const register = (user) => {
    const { username, password, repassword } = user;
    if (!username) {
        return errorMsg('用户名不能为空！');
    }
    if (password !== repassword) {
        return errorMsg('两次密码不一致！');
    }
    return async dispatch => {
        const res = await reqRegister(user)
        if (res.code === 0) {
            dispatch(authSuccess(res.data));
        } else {
            dispatch(errorMsg(res.msg));
        }
    }
}
//登录异步action
export const Login = (user) => {
    return async dispatch => {
        const res = await reqLogin(user)
        if (res.code === 0) {
            dispatch(authSuccess(res.data));
        } else {
            dispatch(errorMsg(res.msg));
        }
    }
}