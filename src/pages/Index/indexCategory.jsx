import React, { Component } from 'react'
import { withRouter } from 'react-router'
import nav01 from '../../assets/images/icon_index_nav_1@2x.png'
import nav02 from '../../assets/images/icon_index_nav_2@2x.png'
import nav03 from '../../assets/images/icon_index_nav_3@2x.png'
import nav04 from '../../assets/images/icon_index_nav_4@2x.png'
import nav05 from '../../assets/images/icon_index_nav_5@2x.png'
class IndexCategory extends Component {
    state = {
        navList:[
            {
                title: '母婴',
                imgUrl: nav01,
                query: '母婴'
            },
            {
                title: '超市',
                imgUrl: nav02,
                query: '超市'
            },
            {
                title: '秒杀',
                imgUrl: nav03,
                query: '秒杀'
            },
            {
                title: '分类',
                imgUrl: nav04,
                query: '分类'
            },
            {
                title: '充值',
                imgUrl: nav05,
                query: '充值'
            }
        ]
    }
    handleClick = (query)=>{
        this.props.history.push(`/searchgoods/query=${query}`)
    }
    render () {
        const {navList} = this.state;
        return (
            <div className="category_wrap">
                {
                    navList.map(item=> (
                        <div className="category_list" key={item.query} onClick={()=>this.handleClick(item.query)}>
                            <img src={item.imgUrl} alt="" />
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default withRouter(IndexCategory)