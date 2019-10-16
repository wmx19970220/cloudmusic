import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import BackHeader from 'components/common/back_header'
import { Tabs, Badge, Toast } from 'antd-mobile';
import { FourTwo, Msg } from './FourTwo'
import 'assets/comstylesheets/setcolor.css'

class CategoryTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: <Badge >最热节目</Badge> },
                { title: <Badge >最热电台</Badge> },
            ],
            hottestpro: null,
            hottestdj: null,
            msgFlag: false
        }
    }
    componentDidMount() {
        Toast.loading('亲们请稍等片刻哟', 2);
        axios({
            url: '/dj/hot?limit=217&offset=20'
        }).then(res => {
            const onearr = res.data.djRadios.slice(0, 100)
            const twoarr = res.data.djRadios.slice(100, 200)
            this.setState({

                hottestpro: onearr,
                hottestdj: twoarr
            })
            // console.log(res.data.djRadios)
        }).catch(err => {
            console.log(err)
        })
    }

    renderHot = () => {
        return this.state.hottestpro && this.state.hottestpro.map((item, index) => {
            return (
                <li key={index} style={{ marginBottom: '.06rem' }}>
                    <Link to={{
                        pathname: '/todaydetail',
                        search: `?picUrl=${item.picUrl}&nm=${item.name}&num=${item.programCount}&dingyue=${item.subCount}`
                    }} style={{ display: 'flex' }}>
                        <div style={{ padding: '.2rem', fontWeight: '900' }}>{index + 1}</div>
                        <div style={{ position: 'relative' }}>
                            <img src={item.picUrl} alt={item.name} style={{
                                width: '.7rem',
                                height: '.7rem',
                                borderRadius: '.02rem'
                            }} />
                            <i className="fa fa-play-circle-o" style={{ position: 'absolute', right: 0, bottom: '.05rem' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '.1rem' }}>
                            <h3 style={{ fontSize: '.14rem', paddingTop: '.10rem', fontFamily: 'weiruanjiahei' }}>{item.name}</h3>
                            <span style={{ fontSize: '.13rem', paddingTop: '.05rem' }}>{item.rcmdtext}</span>
                            <i className="fa fa-fire" style={{ fontSize: '.13rem', paddingTop: '.05rem' }}> 热度未知</i>
                        </div>
                    </Link>
                </li>
            )
        })
    }
    renderDj = () => {
        return this.state.hottestdj && this.state.hottestdj.map((item, index) => {
            return (
                <li key={index} style={{ marginBottom: '.06rem' }}>
                    <Link to={{
                        pathname: '/todaydetail',
                        search: `?picUrl=${item.picUrl}&nm=${item.name}&num=${item.programCount}&dingyue=${item.subCount}`
                    }} style={{ display: 'flex' }}>
                        <div style={{ padding: '.2rem', fontWeight: '900' }}>{index + 1}</div>
                        <div style={{ position: 'relative' }}>
                            <img src={item.picUrl} alt={item.name} style={{
                                width: '.7rem',
                                height: '.7rem',
                                borderRadius: '.02rem'
                            }} />
                            <i className="fa fa-play-circle-o" style={{ position: 'absolute', right: 0, bottom: '.05rem' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '.1rem' }}>
                            <h3 style={{ fontSize: '.14rem', paddingTop: '.10rem', fontFamily: 'weiruanjiahei' }}>{item.name}</h3>
                            <span style={{ fontSize: '.13rem', paddingTop: '.05rem' }}>{item.rcmdtext}</span>
                            <i className="fa fa-fire" style={{ fontSize: '.13rem', paddingTop: '.05rem' }}> 热度未知</i>
                        </div>
                    </Link>
                </li>
            )
        })
    }
    changeMsgFlag = () => {
        this.setState({
            msgFlag: true
        })
    }

    closeMsg = (e) => {
        if (e.target.className !== 'fa fa-exclamation-circle') {
            this.setState(
                {
                    msgFlag: false
                }
            )
        }
    }
    render() {
        const { msgFlag } = this.state
        return (
            <FourTwo className="animated fadeIn">
                <BackHeader name='主播电台排行榜' history={this.props.history}></BackHeader>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                >
                    <div style={{  backgroundColor: '#fff', height: `${document.documentElement.clientHeight - 93.5 * (document.documentElement.clientHeight / 667)}px`, overflowY: 'auto', overflowX: 'hidden' }} onClick={this.closeMsg}>
                        <div style={{ marginTop: '.08rem' }}><span>最近更新:9月24日</span><i className="fa fa-exclamation-circle" onClick={this.changeMsgFlag}></i></div>
                        {msgFlag && <Msg>选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算</Msg>}
                        <ul style={{ marginTop: '.2rem' }}>
                            {this.renderHot()}
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#fff', height: `${document.documentElement.clientHeight - 93.5 * (document.documentElement.clientHeight / 667)}px`, overflowY: 'auto', overflowX: 'hidden' }} onClick={this.closeMsg}>
                        <div style={{ marginTop: '.08rem' }}><span>最近更新:9月24日</span><i className="fa fa-exclamation-circle" onClick={this.changeMsgFlag}></i></div>
                        {msgFlag && <Msg>选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算</Msg>}
                        <ul style={{ marginTop: '.2rem' }}>
                            {this.renderDj()}
                        </ul>
                    </div>
                </Tabs>
            </FourTwo>
        );
    }
}

export default CategoryTwo