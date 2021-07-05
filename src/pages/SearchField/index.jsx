import React, { Component, Fragment } from 'react';
import NavSearch from 'components/NavSearch';
import { searchSuggest } from 'api'
import {debounce} from 'utils'
import styles from './index.module.scss'
class SearchField extends Component {
    state = {
        suggestList: []
    }
    // 搜索建议
    handleSearchSuggest = async (value) => {
        const { message: { goods } } = await searchSuggest(value);
        //只获取前20条数据
        this.setState({
            suggestList: goods.slice(0, 20)
        })
    }
    handleDebounceSearch = (v)=>{
        let debounceAjax = debounce(this.handleSearchSuggest, 1000)
        debounceAjax(v)
    }
    handleSearch = value => {
        this.props.history.push('/searchgoods/query=' + value)
    }
    //点击搜索建议跳转到商品列表页面
    handleSearchSimilar = cid => {
        this.props.history.push('/searchgoods/cid=' + cid)
    }
    render () {
        const { suggestList } = this.state;
        return (
            <Fragment>
                <NavSearch
                    placeholderPre='搜索你感兴趣的商品'
                    cancelText='搜索'
                    handleSearchCancel={v=>this.handleSearch(v)}
                    handleSearchSubmit={v=>this.handleSearch(v)}
                    handleSearchChange={v=>{
                        if (v.indexOf("'") === -1) {
                            this.handleDebounceSearch(v)
                        }
                    }}
                />
                <div className="content">
                    <ul className={`${styles['suggest-list']}`}>
                        {
                            suggestList.map(item => (
                                <li key={item.goods_id} onClick={() => this.handleSearchSimilar(item.cat_id)}>
                                    <span className={styles.left}>{item.goods_name.slice(0, 25)}...</span>
                                    <span className={styles.right}>↖</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default SearchField;