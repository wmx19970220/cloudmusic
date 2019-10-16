import React, { Component } from 'react';
import axios from 'axios'
import { PayStyle } from './payStyle'
import { Link } from 'react-router-dom'

class PayGift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paylist: []
        }
    }
    componentDidMount() {
        axios({
            url: '/dj/paygift?limit=3&offset=3'
        }).then(res => {
            this.setState({
                paylist: res.data.data.list
            })
            //console.log('paygift', res.data.data.list)
        })
            .catch(err => console.log(err))
    }

    renderPay = () => {
        return this.state.paylist.map(item => {
            return (
                <li key={item.id}>
                    <div className='paytop'>
                        <img src={item.picUrl} alt={item.name} />
                        <span>{item.lastProgramName}</span>
                        <em>付费精品</em>
                    </div>
                    <div className='paybottom'>
                        <i>{item.name}</i>
                        <span>￥{(item.originalPrice / 100) && (item.originalPrice / 100) || (item.originalPrice / 100).toFixed(1)}</span>
                    </div>
                </li>
            )
        })
    }
    render() {
        return (
            <PayStyle>
                <h2>精品推荐</h2>
                <p>你值得拥有的优质</p>
                <ul>
                    {this.renderPay()}
                </ul>
                <div className='paymore'>
                    <Link to="/radioFour_3">
                        全部精品电台
                    <i className="fa fa-arrow-right"></i></Link>
                </div>
            </PayStyle>
        );
    }
}

export default PayGift