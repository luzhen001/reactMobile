import React, { Component, Suspense, Fragment, lazy } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute'
import Loading from 'components/Loading'

import store from './redux/store'


const Home = lazy(() => import('pages/Home'))
const SearchGoods = lazy(() => import('pages/SearchGoods'))
const SearchField = lazy(() => import('pages/SearchField'))
const GoodsDetail = lazy(() => import('pages/GoodsDetail'))
const Login = lazy(() => import('pages/Login'))
const SignUp = lazy(() => import('pages/SignUp'))
const OffLine = lazy(() => import('pages/OffLine'))
const CityList = lazy(() => import('pages/CityList'))
const Test = lazy(() => import('pages/Test'))
const NotFound = lazy(() => import('pages/NotFound'))

class App extends Component {
    state = {
        isShowLoading:false
    }
    componentDidMount () {
        store.subscribe(() => {
            let storeState = store.getState().pageLoading.isLoading
            this.setState({
                isShowLoading: storeState
            })
        })
    }
    render () {
        const {isShowLoading} = this.state;
        return (
            <Fragment>
                {
                    isShowLoading?<Loading />:''
                }
                <Suspense fallback={<></>}>
                    <Router>
                        <Switch>
                            <Route path="/" exact render={() => <Redirect to="/home" />}></Route>
                            <Route path="/home" component={Home} ></Route>
                            <Route path="/searchgoods/:id" component={SearchGoods}></Route>
                            <Route path="/goodsdetail/:id" component={GoodsDetail}></Route>
                            <Route path="/searchfield" component={SearchField}></Route>
                            <AuthRoute path="/test" component={Test} auth={true}></AuthRoute>
                            <AuthRoute path="/citylist" component={CityList} auth={true}></AuthRoute>
                            <AuthRoute path="/login" component={Login}></AuthRoute>
                            <AuthRoute path="/signup" component={SignUp}></AuthRoute>
                            <Route path="/offline" component={OffLine}></Route>
                            <Route path="*" component={NotFound}></Route>
                        </Switch>
                    </Router>
                </Suspense>
            </Fragment>
        )
    }
}
export default App;