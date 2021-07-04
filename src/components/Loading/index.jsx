import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'antd-mobile'
export default class Loading extends Component {
    static defaultProps = {
        text:'加载中...'
    }
    static propTypes = {
        text:PropTypes.string
    }
    render () {
        const {text} = this.props;
        return (
            <div className="loading_wrap">
                <ActivityIndicator size="large" text={text} />
            </div>
        )
    }
}