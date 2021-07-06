import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, SearchBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
class NavSearch extends Component {
    static defaultProps = {
        placeholderPre: '',
        cancelText: '取消'
    }
    static propTypes = {
        placeholderPre: PropTypes.string,
        handleFocus: PropTypes.func,
        cancelText: PropTypes.string
    }
    render () {
        const { placeholderPre, cancelText, handleSearchFocus, handleSearchCancel, handleSearchSubmit, handleSearchChange } = this.props;
        return (
            <div className={styles.search_wrap}>
                <Icon type="left" color="#fff" onClick={() => { this.props.history.goBack() }} />
                <SearchBar
                    placeholder={placeholderPre}
                    cancelText={cancelText}
                    onFocus={handleSearchFocus}
                    onCancel={handleSearchCancel}
                    onSubmit={handleSearchSubmit}
                    onChange={handleSearchChange}
                ></SearchBar>
            </div>
        )
    }
}
export default withRouter(NavSearch)