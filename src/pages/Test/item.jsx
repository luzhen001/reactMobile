import React, { Component } from 'react'
import { Button, Modal } from 'antd-mobile'
export default class Item extends Component {
    handleDel = (id) => {
        Modal.alert("温馨提示", "确认要删除吗？", [
            { text: "取消" },
            {
                text: "确定",
                onPress: () => {
                    this.props.commentDel(id);
                }
            }
        ]);
    }
    render () {
        let { id, commentName, commentContent } = this.props;
        return (
            <li>
                <div>
                    <p>评论人：{commentName}</p>
                    <p>评论内容：{commentContent}</p>
                </div>
                <div>
                    <Button type="warning" onClick={() => { this.handleDel(id) }}>删除</Button>
                </div>
            </li>
        )
    }
}