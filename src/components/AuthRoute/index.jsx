import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
class AuthRoute extends Component {
    render () {
        const { location, component, auth } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem("username");
        if (isLogin) {
            // 如果是登陆状态，想要跳转到登陆或注册页面，重定向到首页
            if (pathname === "/login" || pathname === "/signup") {
                return <Redirect to="/" />
            } else {
                // 如果路由合法，就跳转到相应的路由
                return <Route exact path={pathname} component={component} />
            }
        } else {
            //非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if (auth) {
                return <Redirect exact to={{ pathname: "/login", state: { from: location } }} />
            } else {
                //非登陆状态下，当路由合法时且不需要权限校验时，就跳转到相应的路由
                return <Route path={pathname} component={component} />
            }
        }
    }
}
export default AuthRoute