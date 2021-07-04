import React, { Component, Fragment,lazy } from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import './index.scss'

import AuthRoute from 'components/AuthRoute'

const Index = lazy(()=>import('../Index'))
const Category = lazy(()=>import('../Category'))
const Cart = lazy(()=>import('../Cart'))
const Profile= lazy(()=>import( '../Profile'))

const tabBarItems = [
    {
        title: '首页',
        key: 'tabIndex',
        icon: 'icon-shouye',
        path: '/home'
    },
    {
        title: '分类',
        key: 'tabList',
        icon: 'icon-leixing',
        path: '/home/category'
    },
    {
        title: '购物车',
        key: 'tabNews',
        icon: 'icon-gouwuche2',
        path: '/home/cart'
    },
    {
        title: '我的',
        key: 'tabProfile',
        icon: 'icon-wode',
        path: '/home/profile'
    }
]
//渲染tabbar
export default class Home extends Component {
    state = {
        selectedTab: this.props.location.pathname
    }
    componentDidUpdate(prevProps){
        const {pathname} = this.props.location;
        if(prevProps.location.pathname !== pathname){
            this.setState({selectedTab:pathname})
        }
    }
    renderTabBarItem () {
        return tabBarItems.map(item =>
            <TabBar.Item
                title={item.title}
                key={item.key}
                icon={<i className={`iconfont ${item.icon}`}></i>}
                selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                selected={this.state.selectedTab === item.path}
                onPress={
                    () => {
                        this.setState({ selectedTab: item.path });
                        this.props.history.push(item.path);
                    }
                }
            >
            </TabBar.Item>
        )
    }
    render () {
        return (
            <Fragment>
                <Router>
                <Switch>
                    <Route path="/home" exact component={Index}></Route>
                    <Route path="/home/category" component={Category}></Route>
                    <AuthRoute path="/home/cart" component={Cart}  auth={true}></AuthRoute>
                    <Route path="/home/profile" component={Profile}></Route>
                </Switch>
                </Router>
                <TabBar noRenderContent={true} unselectedTintColor="#888" tintColor="#2fcc78" barTintColor="white">
                    {this.renderTabBarItem()}
                </TabBar>
            </Fragment>
        )
    }
}