import React, { Component, Fragment } from 'react'
import NavSearch from 'components/NavSearch'
import NoResult from 'components/NoResult'
import { searchGoods } from 'api'
import styles from './index.module.scss'
class SearchGoods extends Component {
    state = {
        goodsList: [],
        isEmpty: false
    }
    componentDidMount () {
        const { id } = this.props.match.params;
        searchGoods(id).then(res => {
            const { goods, total } = res.message;
            this.setState({
                goodsList: goods
            })
            if (total === 0) {
                console.log(111);
                this.setState({
                    isEmpty: true
                })
            }
        })
    }
    searchFocus = () => {
        this.props.history.push('/searchfield');
    }
    render () {
        const { goodsList, isEmpty } = this.state;
        return (
            <Fragment>
                <NavSearch handleSearchFocus={this.searchFocus} placeholderPre='搜索你感兴趣的商品'></NavSearch>
                <div className="content">
                    {
                        isEmpty ?<NoResult />:
                        <div className={styles.searchgoods_wrap}>
                        {
                            goodsList.map(item => {
                                return <div className={styles.goods_list} key={item.goods_id}>
                                    <div className={styles.goods_info} onClick={() => this.props.history.push(`/goodsdetail/${item.goods_id}`)}>
                                        <img src={item.goods_small_logo} alt="" />
                                        <p className={styles.describe}>{item.goods_name}</p>
                                        <span className={styles.price}>￥{item.goods_price}</span>
                                    </div>
                                </div>
                            })
                        }
                        </div>
                    }
                </div>
            </Fragment>
        )
    }
}
export default SearchGoods