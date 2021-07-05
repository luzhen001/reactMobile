import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd-mobile';
import styles from './index.module.scss'
class CarouselSwiper extends Component {
    static defaultProps = {
        swiperList:[],
        height:180,
        infinite:true,
        dots:true,//是否显示面板指示点
        vertical:false,//垂直显示
        autoplay:true//是否自动切换
    }
    static propTypes = {
        swiperList:PropTypes.array.isRequired,
        height:PropTypes.number,
        dots:PropTypes.bool,
        vertical:PropTypes.bool,
        autoplay:PropTypes.bool,
        infinite:PropTypes.bool,
    }
    render () {
        const { swiperList,height,dots,vertical,autoplay,infinite } = this.props;
        return (
            <Carousel dots={dots} infinite={infinite} vertical={vertical} autoplay={autoplay} infinite style={{width:'100%',height:height+'px'}}>
                {
                    swiperList.map(item => (
                        <a key={item.title} href={item.url} style={{height:height+'px'}}>
                            <img src={item.imgUrl} alt="" style={{width:'100%',height:height+'px'}}  />
                        </a>
                    ))
                }
            </Carousel>
        )
    }
}
export default CarouselSwiper