import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import NavBar from 'components/NavBar'
import { register } from '../../redux/actions'

class SignUp extends Component {
    state = {
        isRight: true,
        username: '',
        password: '',
        repassword: '',
        usertype: 'dashen'
    }
    handleSubmit = () => {
        this.props.register(this.state)
    }
    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }
    handleLogin = () => {
        this.props.history.replace('/login');
    }
    render () {
        const { usertype, isRight } = this.state;
        const { redirectTo } = this.props.user;
        if (redirectTo) {
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <Fragment>
                <NavBar title="注册" isRight={isRight} rightIcon="icon-denglu" handleNavRightClick={this.handleLogin} />
                <WingBlank>
                    <List>
                        <InputItem type="phone" clear placeholder="请输入手机号码" onChange={val => { this.handleChange('username', val) }}>手机号码：</InputItem>
                        <WhiteSpace />
                        <InputItem type="number" clear placeholder="请输入验证码" onChange={val => { this.handleChange('username', val) }}>验证码：</InputItem>
                        <WhiteSpace />
                        <InputItem type="email" clear placeholder="请输入邮箱" onChange={val => { this.handleChange('username', val) }}>邮箱：</InputItem>
                        <WhiteSpace />
                        <InputItem type="text" clear placeholder="请输入用户名" onChange={val => { this.handleChange('username', val) }}>用户名：</InputItem>
                        <WhiteSpace />
                        <InputItem type="password" clear placeholder="请输入密码" onChange={val => { this.handleChange('password', val) }}>密码：</InputItem>
                        <WhiteSpace />
                        <InputItem type="password" clear placeholder="请输入确认密码" onChange={val => { this.handleChange('repassword', val) }}>确认密码：</InputItem>
                        <WhiteSpace />
                        <List.Item>
                            <span>性别：</span>
                            <Radio checked={usertype === 'dashen'} onChange={() => { this.handleChange('usertype', 'dashen') }}>大神</Radio>
                            <Radio checked={usertype === 'laoban'} onChange={() => { this.handleChange('usertype', 'laoban') }}>老板</Radio>
                        </List.Item>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        <Button onClick={this.handleLogin}>已有账号</Button>
                    </List>
                </WingBlank>
            </Fragment>
        )
    }
}
export default connect(
    state => ({ user: state.user }),
    { register }
)(SignUp)