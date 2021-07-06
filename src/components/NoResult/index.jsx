import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import imgUlr from './empty.png';
export default class NoResult extends Component {
    static defaultProps = {
        isShowImg: true,
        text: '暂无任何数据哦~~~'
    }
    static propTypes = {
        isShowImg: PropTypes.bool,
        text: PropTypes.string
    }
    render () {
        const { isShowImg, text } = this.props;
        return (
            <div className={styles.no_result}>
                {isShowImg ? <img src={imgUlr} alt="" /> : ''}
                <span>{text}</span>
            </div>
        )
    }
}