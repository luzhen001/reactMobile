import React, { Component } from 'react'
import {Button} from 'antd-mobile';
import {toastMsg} from '../../utils/index.js';
export default class Item extends Component {
    handleAdd = () => {
        let commentName = this.inputRef.value;
        let commentContent = this.textRef.value;
        if (commentName.trim() === "") {
            toastMsg("请输入评论人！");
            return;
        }
        if (commentContent.trim() === "") {
            toastMsg("请输入评论内容！");
            return;
        }
        this.props.commentAdd({ id: Math.random(), commentName, commentContent });
        this.inputRef.value = "";
        this.textRef.value = "";
    }
    render() {
        return (
          <div className="comment_top">
            <input type="text" ref={(inputVal) => { this.inputRef = inputVal; }} />
            <textarea ref={(textVal) => { this.textRef = textVal; }} ></textarea>
            <Button type="primary" onClick={this.handleAdd}> 添加 </Button>
          </div>
        )
    }
}