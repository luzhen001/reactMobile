import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const AuthRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        console.log(props);
        const isLogin = localStorage.getItem("username");
        if (isLogin) {
            return <Component {...props} />
        } else {
            return <Redirect to={{
                pathname: '/login',
                state: {from:props.location}
            }} />
        }
    }}></Route>
}
export default AuthRoute