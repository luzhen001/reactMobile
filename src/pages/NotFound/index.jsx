import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import errorImg from './404.png';
import styles from './index.module.scss';
export default class NotFound extends Component {
    handleAction = (backType) => {
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
            <div className={styles.error_wrap}>
                <img src={errorImg} alt="404" />
                <h3>哎呀，非常抱歉页面被狗狗叼走啦～～～</h3>
                <div className={styles.error_btn}>
                    <Button type="ghost" icon="check-circle-o" onClick={this.handleAction("backIndex")}>返回首页</Button>
                    <Button type="ghost" icon="left" onClick={this.handleAction("backPrev")}>返回上一页</Button>
                </div>
            </div>
        )
    }
}