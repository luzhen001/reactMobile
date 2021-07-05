import React, { Component } from 'react';
import { List,} from 'antd-mobile';
import personBg from 'assets/images/profile_bg.png';
import personLogo from 'assets/images/profile_logo.png';
import styles from './index.module.scss';
class Profile extends Component {
    render() {
        const isLogin = localStorage.getItem("username");
        return (
            <div className="home_wrap">
                <div className={styles.profile_top} style={{background:`url(${personBg}) no-repeat center center / cover`}}>
                    <div className={styles.profile_info}>
                        <img src={personLogo} alt="" />
                        {
                            isLogin?
                            <p>用户名</p>
                            :
                            <p>还没有登录</p>
                        }
                    </div>
                </div>
                <div className={styles.profile_mid}>
                    <List>
                        <List.Item extra="查看全部" arrow="horizontal" onClick={() => {}}>我的订单</List.Item>
                    </List>
                    <div className={styles.profile_main}>
                        <div className={styles.profile_list}>
                            <i className="iconfont icon-dingdan"></i>
                            <span>全部订单</span>
                        </div>
                        <div className={styles.profile_list}>
                            <i className="iconfont icon-qian"></i>
                            <span>待付款</span>
                        </div>
                        <div className={styles.profile_list}>
                            <i className="iconfont icon-daifahuo"></i>
                            <span>待发货</span>
                        </div>
                    </div>
                </div>
                <div className="profile_bot">
                    <List>
                        <List.Item thumb={<i className="iconfont icon-zhanghuanquan"></i>} arrow="horizontal" onClick={() => {}}>账户安全</List.Item>
                        <List.Item thumb={<i className="iconfont icon-shezhi"></i>} arrow="horizontal" onClick={() => {}}>设置</List.Item>
                        <List.Item thumb={<i className="iconfont icon-wenti"></i>} arrow="horizontal" onClick={() => {}}>常见问题</List.Item>
                        <List.Item thumb={<i className="iconfont icon-shezhi"></i>} arrow="horizontal" onClick={() => {}}>意见反馈</List.Item>
                        <List.Item thumb={<i className="iconfont icon-guanyuwomen"></i>} arrow="horizontal" onClick={() => {}}>关于我们</List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
export default Profile