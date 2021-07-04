import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
class FrontendAuth extends Component {
    render () {
        const { routerConfig, location,auth } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem("username");
        const targetRouterConfig = routerConfig.find(item => item.path === pathname)
        if (isLogin) {
            // 如果是登陆状态，想要跳转到登陆或注册页面，重定向到首页
            if (pathname === "/login" || pathname === "/signup") {
                return <Redirect to="/home" />;
            } else {
                // 如果路由合法，就跳转到相应的路由
                if (targetRouterConfig) {
                    return <Route exact path={pathname} component={targetRouterConfig.component} />
                } else {
                // 如果路由不合法，重定向到 404 页面
                    return <Redirect to="/notfound" />
                }
            }
        } else {
            if (targetRouterConfig && targetRouterConfig.meta.auth) {
                //非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
                return <Redirect to="/login" />;
            } else if(targetRouterConfig && !targetRouterConfig.meta.auth && !isLogin){
                //非登陆状态下，当路由合法时且不需要权限校验时，就跳转到相应的路由
                return <Route exact path={pathname} component={targetRouterConfig.component} />
            } else {
                //非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to="/notfound" />
            }
        }
    }
}
export default FrontendAuth