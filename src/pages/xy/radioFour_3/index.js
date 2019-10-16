import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import BackHeader from 'components/common/back_header'
import { FourThree, FourRight } from './FourThree'
import { PullToRefresh, ListView, Toast } from 'antd-mobile';
// import BScroll from 'better-scroll'

class CategoryThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paylist: null
        }
    }
    componentDidMount() {
        Toast.loading('亲们请稍等片刻哟', 2);
        axios({
            url: '/dj/paygift?limit=50&offset=10'
        }).then(res => {
            this.setState({
                paylist: res.data.data.list
            })
            // console.log('pay', res.data.data.list)
        }
        )
            .catch(err => console.log(err))

        // new BScroll('.bigbox', {
        //     click: true
        // })
    }

    renderPayer = () => {
        return this.state.paylist && this.state.paylist.map(item => {
            return (
                <div className="paylists" key={item.id}>
                    <Link to={{
                        pathname: '/paydetail',
                        search: `?name=${item.name}&into=${item.rcmdText}&price=${item.originalPrice}&picUrl=${item.picUrl}`
                    }}>
                        <img src={item.picUrl} alt={item.name} />
                        <FourRight>
                            <h2>{item.name}</h2>
                            <span>{item.rcmdText}</span>
                            <span>最新上架</span>
                            <i>¥{(item.originalPrice / 100) && (item.originalPrice / 100) || (item.originalPrice / 100).toFixed(1)}</i>
                        </FourRight>
                    </Link>
                </div>)
        })
    }
    render() {
        return (
            <FourThree className="animated fadeIn">
                <BackHeader name='付费精品' history={this.props.history}></BackHeader>
                <div className="bigbox">
                    {this.renderPayer()}
                </div>
            </FourThree>
        );
    }
}

export default CategoryThree