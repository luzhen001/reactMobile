import { lazy } from 'react'

import News from 'pages/News'
import List from 'pages/List'
import Profile from 'pages/Profile'
const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/Login'))
const SignUp = lazy(() => import('pages/SignUp'))
const OffLine = lazy(() => import('pages/OffLine'))
const CityList = lazy(() => import('pages/CityList'))
const Test = lazy(() => import('pages/Test'))
const NotFound = lazy(() => import('pages/NotFound/'))



const Routers =  [
    {
        path: "/",
        name: "Home",
        component: Home,
        exact: true,
        meta:{
            title: '首页',
            auth: true,
            isNav:false,
            isTabBar:true
        }
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        exact: true,
        meta:{
            title: '首页',
            auth: true,
            isNav:false,
            isTabBar:true
        }
    },
    {
        path: "/home/news",
        name: "News",
        component: News,
        meta:{
            title: '找房',
            auth: true,
            isNav:false,
            isTabBar:true
        }
    },
    {
        path: "/home/list",
        name: "List",
        component: List,
        meta:{
            title: '首页',
            auth: true,
            isNav:false,
            isTabBar:true
        }
    },
    {
        path: "/home/profile",
        name: "Profile",
        component: Profile,
        meta:{
            title: '我的',
            auth: true,
            isNav:false,
            isTabBar:true
        }
    },


    {
        path: "/login",
        name: "Login",
        component: Login,
        meta:{
            title: '登录',
            auth: false,
            isNav:false,
            isTabBar:false
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        meta:{
            title: '注册',
            auth: false,
            isNav:false,
            isTabBar:false
        }
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
        title: '测试页面',
        meta:{
            title: '城市选择',
            auth: true,
            isNav:true,
            isTabBar:false
        }
    },
    {
        path: "/citylist",
        name: "CityList",
        component: CityList,
        meta:{
            title: '城市选择',
            auth: true,
            isNav:true,
            isTabBar:false
        }
    },
    {
        path: "/offline",
        name: "OffLine",
        component: OffLine,
        meta:{
            title: '断网处理',
            auth: false,
            isNav:false,
            isTabBar:false
        }
    },
    {
        path: "/notfound",
        name: "NotFound",
        component: NotFound,
        meta:{
            title: '404',
            auth: false,
            isNav:false,
            isTabBar:false
        }
    }
]
export default Routers