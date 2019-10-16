import React, { Component } from 'react'
import axios from 'axios'
import { RadioCateStyle, RadioBorder } from './RadioCateStyle'
import { Link } from 'react-router-dom'

class RadioHotCate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotcategory: [],
            morecategory: []
        }
    }
    componentDidMount() {
        axios({
            url: '/dj/catelist'
        }).then(res => {
            const newarr = res.data.categories.slice(0, 6)
            const morearr = res.data.categories.slice(6)
            this.setState({
                hotcategory: newarr,
                morecategory: morearr
            })
            // console.log('fenlei', res.data.categories.slice(0, 6))
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
                        <span>{item.name}</span></Link>
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
                        <span>{item.name}</span></Link>
                </li>
            )
        })
    }
    render() {
        return (
            <RadioCateStyle >
                <span>热门分类</span>
                <RadioBorder>
                    {this.renderCategories()}
                </RadioBorder>
                <span>更多分类</span>
                <RadioBorder>
                    {this.renderMore()}
                </RadioBorder>
            </RadioCateStyle>
        );
    }
}

export default RadioHotCate