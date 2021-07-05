import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { Tabs } from 'antd-mobile';
import styles from './index.module.scss';
class CategoryTab extends Component {
    handleCategoryClick = (cat_id) => {
        this.props.history.push(`/searchgoods/cid=${cat_id}`)
    }
    render () {
        const { categoryList } = this.props;
        const cates = categoryList.map(item => {
            return { ...item, title: item.cat_name }
        })
        return (
            <Tabs tabs={cates}
                initalPage={0}
                animated={true}
                useOnPan={true}
                tabBarPosition="left"
                tabDirection="vertical"
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={12} />}
                tabBarTextStyle={{
                    width: 86,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 13
                }}
            >
            {
                cates.length ? cates.map(v=>(
                    v.children.map(v1=>(
                        v1.children?
                            <div className={styles.cate_list} key={v1.cat_id}>
                                <div className={styles.cate_title}>{v1.cat_name}</div>
                                <div className={styles.cate_content}>
                                    {
                                        v1.children.map(v2=>(
                                            <div className={styles.cate_item} key={v2.cat_id} onClick={()=>this.handleCategoryClick(v2.cat_id)}>
                                                <img src={v2.cat_icon} alt="" />
                                                <span className={styles.cat_name}>{v2.cat_name}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        : ''
                        ))
                )) :''}
            </Tabs>
        )
    }
}
export default withRouter(CategoryTab);