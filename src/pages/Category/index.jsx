import React, { Component } from 'react'
import CategoryTab from './categoryTab'
import { getCategory } from 'api'
class List extends Component {
    state = {
        categoryList: []
    }
    componentDidMount () {
        if (sessionStorage.getItem('categoryList')) {
            this.setState({
                categoryList: JSON.parse(sessionStorage.getItem('categoryList'))
            });
        } else {
            getCategory().then(res => {
                this.setState({
                    categoryList: res.message
                });
                sessionStorage.setItem('categoryList', JSON.stringify(res.message))
            });
        }
    }
    render () {
        const { categoryList } = this.state;
        return (
            <div className="home_wrap">
                <CategoryTab categoryList={categoryList} />
            </div>
        )
    }
}
export default List;