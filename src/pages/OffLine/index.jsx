import React,{Component} from 'react'
import {Button} from 'antd-mobile'
import styles from './index.module.scss'
export default class OffLine extends Component{
    handleRefresh = () => {
        window.location.reload();
        window.history.back(-1);
    }
    render(){
        return(
            <div className={styles.error_404}>
                <h3>页面加载失败，过会在试试呗～～～</h3>
                <p>这里信息量太大，给我点时间准备下嘛</p>
                <Button type="primary" className={styles.refresh_btn} onClick={this.handleRefresh}>刷新</Button>
            </div>
        )
    }
}