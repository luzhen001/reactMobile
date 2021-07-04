import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
export default class NoResult extends React.Component {
    render() {
        return (
            <div className="no_result">
                {
                    this.props.isShowImg?<div className="icon"></div>:''
                }
                <div className="text">{this.props.resultText}</div>
            </div>
        )
    }
}
NoResult.propTypes = {
    isShowImg:PropTypes.bool,
    resultText:PropTypes.string
}
NoResult.defaultProps = {
    isShowImg:true,
    resultText:'暂无任何数据哦~'
}