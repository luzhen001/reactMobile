import React, { Component } from 'react'
import Item from './item'
export default class List extends Component {
    render () {
        let { commentList, commentDel } = this.props;
        return (
            <div>
                {
                    commentList.length <= 0 ?
                        <div className="comment_mid">暂无数据，赶紧添加评论吧！！！</div>
                        :
                        <ul>
                            {
                                commentList.map((item) => {
                                    return <Item key={item.id} {...item} commentDel={commentDel} />
                                })
                            }
                        </ul>
                }
            </div>
        )
    }
}