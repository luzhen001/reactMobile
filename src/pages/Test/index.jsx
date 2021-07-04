import React, { Component,Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Add from './add'
import List from './list'
import './index.scss'
class Profile extends Component {
    state = {
        commentList: [
            { id: 1, commentName: '小明', commentContent: '你好吗' },
            { id: 2, commentName: '小王', commentContent: '何以少团栾' },
            { id: 3, commentName: '小李', commentContent: '何以别离少' }
        ]
    }
    commentAdd = (data) => {
        let { commentList } = this.state;
        let newComments = [data, ...commentList];
        this.setState({
            commentList: newComments
        })
    }
    commentDel = (commentId) => {
        let { commentList } = this.state;
        let newComments = commentList.filter((item) => {
            return item.id !== commentId;
        })
        this.setState({
            commentList: newComments
        })
    }
    render () {
        let { commentList } = this.state;
        return (
            <Fragment>
                <NavBar title="测试页面"></NavBar>
                <div className="content">
                    <div className="comment">
                        <div className="comment_top">
                            <Add commentAdd={this.commentAdd} />
                        </div>
                        <div className="comment_bot">
                            <List commentList={commentList} commentDel={this.commentDel} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Profile);