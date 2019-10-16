import React, { Component } from 'react';
import axios from 'axios'
import Swiper from 'swiper';
import { Link } from 'react-router-dom'

import { BannerStyle } from './bannerStyle'
//该组件是电台轮播图
class RadioBanner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            banner: null
        }
    }

    componentDidMount() {
        axios({
            url: '/banner',
            params: {
                type: 2
            }
        })
            .then(res => {
                // const newbanner = 
                this.setState({
                    banner: res.data.banners
                })
                // console.log('newbanner', res.data.banners)
            })
            .catch(error => console.log(error))
    }

    renderBanner = () => {
        return this.state.banner && this.state.banner.map((item, index) => {
            return (
                <div className="swiper-slide" key={index}>
                    <Link to="/">
                        <img src={item.pic}></img>
                        <span style={{
                            background: item.titleColor,
                        }}>{item.typeTitle}</span>
                    </Link>
                </div>
            )
        })
    }
    render() {
        return (
            <BannerStyle>
                <div className="swiper-container" style={{ marginTop: '-.8rem' }}>
                    <div className="swiper-wrapper">
                        {this.renderBanner()}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </BannerStyle>
        );
    }
    componentDidUpdate() {
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}

export default RadioBanner
