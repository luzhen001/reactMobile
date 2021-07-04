import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
class IndexSearch extends Component {
    handleFocus = () => {
        this.props.searchFocus()
    }
    render() {
        const {placeholderPre} = this.props;
        return (
            <div className="indexsearch_wrap">
                <SearchBar onFocus={this.handleFocus} placeholder={placeholderPre}></SearchBar>
            </div>
        )
    }
}
export default IndexSearch;