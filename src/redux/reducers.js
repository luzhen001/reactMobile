/**
 *包含n个reducer函数(根据老的state和action返回一个新的state)
 */
import { combineReducers } from 'redux'
import {
    OPEN_LOADING,
    CLOSE_LOADING,
    INCREMENT,
    DECREMENT,
    COMMENT_ADD,
    COMMENT_DELETE,
    ADD_PERSON,
    AUTH_SUCCSEE,
    ERROR_MSG
} from './action-types'


//全局loading
const initLoading = {
    isLoading: false
}
function pageLoading (state = initLoading, action) {
    const { type } = action;
    switch (type) {
        case OPEN_LOADING:
            return { isLoading: true };
        case CLOSE_LOADING:
            return { isLoading: false };
        default:
            return state;
    }
}





function counter (state = 0, action) {
    const { type, data } = action;
    let newState;
    switch (type) {
        case INCREMENT:
            newState = state + data;
            return newState;
        case DECREMENT:
            newState = state - data;
            return newState;
        default:
            return state;
    }
}
const initComments = [
    { id: 1, username: '小明', usercontent: '你好吗' },
    { id: 2, username: '小王', usercontent: '何以少团栾' },
    { id: 3, username: '小李', usercontent: '何以别离少' }
]
function comments (state = initComments, action) {
    const { type, data } = action;
    switch (type) {
        case COMMENT_ADD:
            return [data, ...state];
        case COMMENT_DELETE:
            return state.filter(item => item.id !== data);
        default:
            return state;
    }
}
const initPerson = [{ id: 1, name: '张三', age: 18 }, { id: 2, name: '李四', age: 30 }, { id: 3, name: '王五', age: 26 }];
function person (preState = initPerson, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}





const initUser = {
    username: '',//用户名
    type: '',//用户类型
    msg: '',//错误提示信息
    redirectTo: ''
}
function user (state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCSEE:
            return { ...action.data, redirectTo: '/' }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        default:
            return state;
    }
}

export default combineReducers({
    pageLoading,
    counter,
    comments,
    person,
    user
})