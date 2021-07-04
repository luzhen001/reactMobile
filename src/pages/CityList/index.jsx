import React, { Component, Fragment } from 'react'
import { Button, List, Calendar } from 'antd-mobile';
import NavBar from 'components/NavBar'
import './index.scss'
export default class CityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            config: {},
        }
    }
    renderBtn (config = {}) {
        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
            </List.Item>
        );
    }
    onConfirm = (startTime, endTime) => {
        this.setState({
            show: false,
            startTime,
            endTime,
        })
    }

    onCancel = () => {
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        })
    }




    submitBtn = () => {
        alert('你还好吗');
    }
    handleJump = () => {
        this.props.history.push('/test')
    }
    handleClick = () => {
        alert(111);
    }
    render () {
        return (
            <Fragment>
                <NavBar title='城市选择' isRight={true} handleNavRightClick={this.submitBtn} />
                <div className="content">
                    <Button onClick={this.handleJump}>跳转</Button>
                    <List className="calendar-list" >
                        {this.renderBtn('选择日期时间区间(快捷)', 'Select DateTime Range (Shortcut)', { pickTime: true, showShortcut: true })}
                        {
                            this.state.startTime &&
                            <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
                        }
                        {
                            this.state.endTime &&
                            <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
                        }
                    </List>
                    <Calendar
                        {...this.state.config}
                        visible={this.state.show}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}
                    />
                </div>
            </Fragment>
        )
    }
}