import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import imgUlr from './no-result@2x.png'
export default class NoResult extends Component {
    static defaultProps = {
        isShowImg: true,
        resultText: '暂无任何数据哦~'
    }
    static propTypes = {
        isShowImg: PropTypes.bool,
        resultText: PropTypes.string
    }
    render () {
        return (
            <div className={styles.no_result}>
                {this.props.isShowImg ? <img src={imgUlr} alt="" />: ''}
                <div className={styles.text}>{this.props.resultText}</div>
            </div>
        )
    }
}