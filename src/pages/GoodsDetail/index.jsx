import React, { Component, Fragment } from 'react';
import NavBar from 'components/NavBar';
import Carousel from 'components/Carousel';
import { Button } from 'antd-mobile';
import { getGoodsDetail } from 'api';
import {toastMsg} from 'utils'
import styles from './index.module.scss'
class GoodsDetail extends Component {
    state = {
        swiperList: []
    }
    async componentDidMount () {
        let { message: { pics, goods_name, goods_price,hot_mumber, goods_introduce } } = await getGoodsDetail(this.props.match.params.id);
        let tempPics = []
        for (let i of pics) {
            tempPics.push({
                pics_id: i.pics_id,
                goods_id: i.goods_id,
                title: i.pics_id + '_' + i.goods_id,
                imgUrl: i.pics_mid_url
            })
        }
        this.setState({
            swiperList: tempPics,
            goods_name,
            goods_price,
            hot_mumber,
            goods_introduce
        })
    }
    tipMsg(){
        toastMsg('开发中...');
    }
    //加入购物车
    handleAddCart = () => {
        
    }
    //理解购买
    handleBuyNow = () => {
        
    }
    render () {
        const { swiperList, goods_name, goods_price, hot_mumber,goods_introduce } = this.state;
        return (
            <Fragment>
                <NavBar title="商品详情"></NavBar>
                <div className={`content ${styles.goods_content}`}>
                    <Carousel swiperList={swiperList} height={380} />
                    <div className={styles.goods_main}>
                        <div className={styles.goods_title}>
                            <h3>{goods_name}</h3>
                            <p>
                                <span>￥{goods_price}</span>
                                <em>月销{hot_mumber}</em>
                            </p>
                        </div>
                        <div className={styles.goods_query}>

                        </div>
                    </div>
                    <div className={styles.goods_info}>
                        <div dangerouslySetInnerHTML={{ __html: goods_introduce }}></div>
                    </div>
                </div>
                <div className={styles.goods_buy}>
                    <div className={styles.buy_left}>
                        <div className={styles.left_item} onClick={this.tipMsg}>
                            <i className={`iconfont icon-dianpu ${styles.color_red}`} />
                            <span>店铺</span>
                        </div>
                        <div className={styles.left_item} onClick={this.tipMsg}>
                            <i className="iconfont icon-kefu" />
                            <span>客服</span>
                        </div>
                        <div className={styles.left_item} onClick={this.tipMsg}>
                            <i className="iconfont icon-shoucang" />
                            <span>收藏</span>
                        </div>
                        <div className={styles.left_item} onClick={this.tipMsg}>
                            <i className="iconfont icon-gongneng" />
                            <span>功能</span>
                        </div>
                    </div>
                    <div className={styles.buy_right}>
                        <Button type="primary" className={`${styles.btn} ${styles.cart_btn}`} onClick={this.handleAddCart}>加入购物车</Button>
                        <Button type="primary" className={`${styles.btn} ${styles.buy_btn}`} onClick={this.handleBuyNow}>立即购买</Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default GoodsDetail;