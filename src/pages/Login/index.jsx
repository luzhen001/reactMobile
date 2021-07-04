import React, { Component,Fragment } from 'react'
import { WingBlank, List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import NavBar from 'components/NavBar'
export default class Login extends Component {
    state = {
        username:'',
        password:''
    }
    handleSubmit = () => {
        localStorage.setItem('username','token-admin')
        if(!this.props.location.state){
            this.props.history.replace('/');
        }else{
            this.props.history.replace(this.props.location.state.from.pathname);
        }
    }
    handleChange = (name,val) => {
        this.setState({
            [name]:val
        })
    }
    handleJump = () => {
        this.props.history.replace('/signup');
    }
    render () {
        return (
            <Fragment>
                <NavBar title="登录" />
                <WingBlank>
                    <List>
                        <InputItem placeholder='用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder='密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密码：</InputItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        <Button onClick={this.handleJump}>前往注册</Button>
                    </List>
                </WingBlank>
            </Fragment>
        )
    }
}