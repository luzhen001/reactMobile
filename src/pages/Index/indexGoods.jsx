import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Button } from 'antd-mobile'
import qs from 'querystring'
class IndexGoods extends Component {
    handleGoodsDetail = (goods_id) => {
        this.props.history.push(`/goodsdetail/${goods_id}`)
    }
    handleSearchGoods = (cid) => {
        this.props.history.push(`/searchgoods/${qs.stringify({cid})}`)
    }
    render () {
        const { goodsList } = this.props;
        return (
            <div className="goods_wrap">
                {
                    goodsList.map(item => {
                        return <div className="goods_list" key={item.group_img}>
                            <img src={item.group_img} alt="" className="goods_title" />
                            <div className="goods_cont">
                                {
                                    item.goods.map(v => {
                                        return (
                                            <div key={v.goods_id} className="goods_item">
                                                <div className="goods_info" onClick={() => this.handleGoodsDetail(v.goods_id) }>
                                                    <img src={v.goods_small_logo} alt="" />
                                                    <p className="describe">{v.goods_name}</p>
                                                    <span className="price">￥{v.goods_price}</span>
                                                </div>
                                                <Button size="small" inline className="goods_btn" onClick={() => this.handleSearchGoods(v.cat_id)}>找相似</Button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default withRouter(IndexGoods)