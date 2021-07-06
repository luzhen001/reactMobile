import React, { Component } from "react";
class UnDebounce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: null, //整数 定时器的编号 用来取消这个定时器
        }
    }
    //模仿ajax请求
    ajax = (content) => {
        console.log('ajax：' + content)
    }
    debounce = (fn, delay = 3000) => {
        let timerId = null;
        //期间间隔执行 节流
        return (...rest) => { //箭头函数是没有arguments的 所以用...rest 来代替
            let args = rest;
            if (timerId) 
                clearTimeout(timerId);//要用this.timerId 而不能直接定义var timerId=null;
            timerId = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }

    }
    throttle = (fn, delay = 3000) => {//
        //期间间隔执行 节流
        let canRun = true;
        return (...rest) => {
            if (!canRun) return;
            canRun = false;
            setTimeout(() => {
                fn.apply(this, rest);
                canRun = true;
            }, delay)

        }
    }
    onUndebounceKeyUpClick = (e) => {//只要是按下键盘就会发生ajax请求 会出现资源浪费 一般情况下当输入完整字符才会请求数据
        this.ajax(e.target.value)
    }
    onDebounceKeyUpClick = (e) => {//加入防抖动后 在频繁输入后 不会发送请求
        let debounceAjax = this.debounce(this.ajax, 3000)
        debounceAjax(e.target.value)
    }
    onThrottleKeyUpClick = (e) => { //ajax会按照我们设定的时间，每1s执行一次
        let throttleAjax = this.throttle(this.ajax, 3000);
        throttleAjax(e.target.value)
    }
    render () {
        return (
            <div>
                正常input：<input onKeyUp={this.onUndebounceKeyUpClick} />
                <br/>
                防抖动的input：<input onKeyUp={this.onDebounceKeyUpClick} />
                <br/>
                节流的input：<input onKeyUp={this.onThrottleKeyUpClick} />
            </div>
        );
    }
}

export default UnDebounce;