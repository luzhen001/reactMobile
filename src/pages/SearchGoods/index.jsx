import React, { Component, Fragment } from 'react'
import NavSearch from 'components/NavSearch'
import { searchGoods } from 'api'
import './index.scss'
class SearchGoods extends Component {
    state = {
        goodsList: []
    }
    componentDidMount () {
        console.log(this.props);
        const { id } = this.props.match.params;
        searchGoods(id).then(res => {
            const { goods } = res.message;
            this.setState({
                goodsList: goods
            })
        })
    }
    render () {
        return (
            <Fragment>
                <NavSearch title="搜索"></NavSearch>
                <div className="content">
                    <div className="searchgoods_wrap">
                        {
                            this.state.goodsList.map(item => {
                                return <div className="goods_list" key={item.goods_id}>
                                    <div className="goods_info" onClick={() => this.props.history.push(`/goodsdetail/${item.goods_id}`)}>
                                        <img src={item.goods_small_logo} alt="" />
                                        <p className="describe">{item.goods_name}</p>
                                        <span className="price">￥{item.goods_price}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SearchGoods