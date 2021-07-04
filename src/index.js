import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import './assets/fonts/iconfont.css'
import './assets/css/common.scss'
//mock数据
import './mock/index'
//处理移动端点击300ms延迟事件
import FastClick from 'fastclick'
FastClick.attach(document.body)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)