import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increment, decrement,personAdd } from '../../redux/actions'
class News extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        personAdd:PropTypes.func.isRequired
    }
    incrementBtn = () => {
        let { value } = this.selectNumber;
        this.props.increment(value * 1);
    }
    decrementBtn = () => {
        let { value } = this.selectNumber;
        this.props.decrement(value * 1)
    }
    incrementOddBtn = () => {
        let { value } = this.selectNumber;
        let count = this.props.counter;
        if (count % 2 === 1) {
            this.props.increment(value * 1);
        }
    }
    incrementAsyncBtn = () => {
        let { value } = this.selectNumber;
        setTimeout(() => {
            this.props.increment(value * 1);
        }, 1000);
    }


    handleAddPerson = () => {
        let name = this.username.value;
        let age = this.userage.value;
        this.props.personAdd({id:Math.random(),name,age})
        this.username.value = '';
        this.userage.value = '';
    }
    render () {
        let count = this.props.counter;
        let personArr = this.props.person;
        return (
            <div className="home_wrap">
                <div>
                    <h3>当前计数为：{count}</h3>
                    <select ref={selectVal => this.selectNumber = selectVal}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type="primary" onClick={this.incrementBtn}>+</button>
                    <button type="primary" onClick={this.decrementBtn}>-</button>
                    <button type="primary" onClick={this.incrementOddBtn}>increment if odd</button>
                    <button type="primary" onClick={this.incrementAsyncBtn}>decrement async</button>
                </div>
                <hr />

                <div>
                    <input style={{border:'1px solid #999'}} type="text" ref={name=>this.username=name} placeholder="请输入名字" />
                    <input style={{border:'1px solid #999'}} type="text" ref={age=>this.userage=age}placeholder="请输入年龄" />
                    <button onClick={this.handleAddPerson}>添加</button>
                    {
                        personArr.map((item,index)=>{
                            return (
                                <div key={item.id}>
                                    姓名：{item.name},年龄：{item.age}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({ counter: state.counter,person:state.person }),
    { increment, decrement,personAdd }
)(News)