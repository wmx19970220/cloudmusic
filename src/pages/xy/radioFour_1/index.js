import React, { Component } from 'react';
import { FourOne, RadioBorder } from './FourOne'
import axios from 'axios'
import BackHeader from '../../../components/common/back_header'
import { Link } from 'react-router-dom'
import {Toast} from 'antd-mobile'

class CategoryOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotcategory: [],
            morecategory: []
        }
    }
    componentDidMount() {
        Toast.loading('亲们请稍等片刻哟', 1);
        axios({
            url: '/dj/catelist'
        }).then(res => {
            const newarr = res.data.categories.slice(0, 6)
            const morearr = res.data.categories.slice(6)
            this.setState({
                hotcategory: newarr,
                morecategory: morearr
            })
        })
            .catch(err => console.log(err))
    }

    renderCategories = () => {
        return this.state.hotcategory.map && this.state.hotcategory.map(item => {
            return (
                <li key={item.id}>
                    <Link to={{
                        pathname: "/catedetail",
                        search: `?id=${item.id}&name=${item.name}`
                    }}>
                        <img src={item.pic56x56Url} alt={item.name} />
                        <span>{item.name}</span>
                    </Link>
                </li>
            )
        })
    }
    renderMore = () => {
        return this.state.morecategory.map && this.state.morecategory.map(item => {
            return (

                <li key={item.id}>
                    <Link to={{
                        pathname: "/catedetail",
                        search: `?id=${item.id}&name=${item.name}`
                    }}>
                        <img src={item.pic56x56Url} alt={item.name} />
                        <span>{item.name}</span>
                    </Link>
                </li>

            )
        })
    }
    render() {
        return (
            <div className="animated fadeIn">
                <FourOne>
                    <BackHeader name='电台分类' history={this.props.history}></BackHeader>
                    <p className="space"></p>
                    <div style = {{overflow:'auto'}}>
                        <span className="hot">热门分类</span>
                        <RadioBorder>
                            {this.renderCategories()}
                        </RadioBorder>
                        <span className="hot">更多分类</span>
                        <RadioBorder>
                            {this.renderMore()}
                        </RadioBorder>
                    </div>
 
                </FourOne>
            </div>
        );
    }
}

export default CategoryOne