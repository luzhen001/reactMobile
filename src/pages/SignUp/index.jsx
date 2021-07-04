import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import NavBar from 'components/NavBar'
import {register} from '../../redux/actions'

class SignUp extends Component {
    state = {
        username:'',
        password:'',
        repassword:'',
        usertype:'dashen'
    }
    handleSubmit = () => {
        this.props.register(this.state)
    }
    handleChange = (name,val) => {
        this.setState({
            [name]:val
        })
    }
    handleJump = () => {
        this.props.history.replace('/login');
    }
    render () {
        const {usertype} = this.state;
        const {redirectTo} = this.props.user;
        if(redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <Fragment>
                <NavBar title="注册" />
                <WingBlank>
                    <List>
                        <InputItem placeholder='用户名' onChange={val=>{this.handleChange('username',val)}}>用户名：</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder='密码' type="password" onChange={val=>{this.handleChange('password',val)}}>密码：</InputItem>
                        <WhiteSpace />
                        <InputItem placeholder='确认密码' type="password" onChange={val=>{this.handleChange('repassword',val)}}>确认密码：</InputItem>
                        <WhiteSpace />
                        <List.Item>
                            <span>用户类型</span>
                            <Radio checked={usertype==='dashen'} onChange={()=>{this.handleChange('usertype','dashen')}}>大神</Radio>
                            <Radio checked={usertype==='laoban'} onChange={()=>{this.handleChange('usertype','laoban')}}>老板</Radio>
                        </List.Item>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        <Button onClick={this.handleJump}>已有账号</Button>
                    </List>
                </WingBlank>
            </Fragment>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {register}
)(SignUp)