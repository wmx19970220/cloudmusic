import React, { Component } from 'react';
import axios from 'axios'
import { CategoryStyle } from './CategoryStyle'
import { Link } from 'react-router-dom'

class CateList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorylist: null
        }
    }

    componentDidMount() {
        axios({
            // url: '/dj/catelist'//这个是热门分类和更多分类的20个，前六个用slice截取
            // url: '/dj/recommend/type?type=2'这个可以得到分类更多那里的列表数据
            url: '/dj/category/recommend'//这个接口就是分类下面的三个

        }).then(res => {
            this.setState({
                categorylist: res.data.data,
            })
            // console.log('cate1', this.state.categorylist)
        })
            .catch(err => console.log(err))
    }

    renderCate = () => {
        return this.state.categorylist && this.state.categorylist.map((item, index) => {
            return (
                <div key={item.categoryId} className="category">
                    <div className="cateicon">
                        <Link to={{
                            pathname: "/catedetail",
                            search: `?id=${item.categoryId}&name=${item.categoryName}`
                        }}>
                            <span>{item.categoryName}</span> <i className="fa fa-angle-right"></i>
                        </Link></div>
                    <ul>
                        {this.renderRadio(index)}
                    </ul>
                </div>
            )
        })
    }

    renderRadio = (index) => {
        return this.state.categorylist[index].radios && this.state.categorylist[index].radios.map(item => {
            // console.log('cate2', item)
            return (
                <li key={item.id}>
                    <Link to={{
                        pathname: '/todaydetail',
                        search: `?picUrl=${item.picUrl}&nm=${item.name}&num=${item.programCount}`
                    }}>
                        <div className="catetop">
                            <img src={item.picUrl} alt={item.name}
                            />
                            <span>{item.name}</span>
                        </div>
                        <div className="catebottom">
                            <i>{item.rcmdText}</i>
                        </div>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <CategoryStyle >
                {this.renderCate()}
            </CategoryStyle>
        );
    }
}

export default CateList