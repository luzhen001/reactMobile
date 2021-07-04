import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Icon,SearchBar} from 'antd-mobile'
import './index.scss'
class NavSearch extends Component {
    handleSearchBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="search_wrap">
                <Icon type="left" color="#fff" onClick={this.handleSearchBack} />
                <SearchBar></SearchBar>
            </div>
        )
    }
}
export default withRouter(NavSearch)