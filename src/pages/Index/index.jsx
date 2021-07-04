import React, { Component } from 'react'
import CarouselSwiper from 'components/Carousel'
import IndexCategory from './indexCategory'
import IndexGoods from './indexGoods'
import IndexSearch from './indexSearch'

import { getHomeGoodslist } from 'api'

import banner1 from 'assets/images/banner1.png'
import banner2 from 'assets/images/banner2.png'
import banner3 from 'assets/images/banner3.png'

import './index.scss'
export default class Index extends Component {
    state = {
        swiperList: [
            {
                title: 'banner1',
                url: 'http://www.baidu.com',
                imgUrl: banner1
            },
            {
                title: 'banner2',
                url: 'http://www.taobao.com',
                imgUrl: banner2
            },
            {
                title: 'banner2',
                url: 'http://www.tmall.com',
                imgUrl: banner3
            }
        ],
        placeholderPre:'',
        goodsList: []
    }
    async componentDidMount () {
        const {message} = await getHomeGoodslist();
        const index = Math.floor((Math.random() * 16))
        // 计算行和列
        const i = Math.floor(index / 4)
        const j = index % 4
        this.setState({
            goodsList: message,
            placeholderPre:message[i].goods[j].goods_name.substring(0,16)+'...'
        })
    }
    searchFocus = () => {
        this.props.history.push('/searchfield');
    }
    render () {
        const { swiperList, goodsList,placeholderPre} = this.state;
        return (
            <div className="home_wrap">
                <IndexSearch searchFocus={this.searchFocus} placeholderPre={placeholderPre} />
                <CarouselSwiper swiperList={swiperList} />
                <IndexCategory />
                <IndexGoods goodsList={goodsList} />
            </div>
        )
    }
}