import React from 'react'
import {Button} from 'antd-mobile'
import './index.scss'
import errorImg from '../../assets/images/404.png'
export default class NotFound extends React.Component {
    handleBack = (backType) => {
        return () => {
            if (backType === "backIndex") {
                this.props.history.push("/");
            } else if (backType === 'backPrev') {
                window.history.back(-1);
            } else {
                return;
            }
        }
    }
    render () {
        return (
            <div className="error_wrap">
                <img src={errorImg} alt="" />
                <h3>哎呀，非常抱歉页面被狗狗叼走啦～～～</h3>
                <p>请点击以下链接继续浏览网页</p>
                <div className="error_btn">
                    <Button type="ghost" icon="check-circle-o" onClick={this.handleBack("backIndex")}>返回首页</Button>
                    <Button type="ghost" icon="left" onClick={this.handleBack("backPrev")}>返回上一页</Button>
                </div>
            </div>
        )
    }
}