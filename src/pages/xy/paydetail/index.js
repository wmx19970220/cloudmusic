import React, { Component } from 'react'
import { TodayDetailStyle } from '../todaydetail/TodayDetailStyle'
import qs from 'querystring'


class PayDetail extends Component {

    goBack = () => {
        const { go } = this.props.history
        go(-1)
    }
    render() {
        const { name, into, price, picUrl } = qs.parse(this.props.location.search.slice(1))
        return (
            <TodayDetailStyle style={{overflow:'auto'}}>
                <div className="bigbox">
                    <div className="headbox" style={{position:'fixed',top:'.1rem',zIndex:50}}>
                        <i className="fa fa-arrow-left" onClick={this.goBack} style={{color:'#FF8C00',fontSize:'.2rem'}}>&nbsp;&nbsp;付费精品</i>
                        <div className="headright">
                            <i className="fa fa-share-alt"></i>
                        </div>
                    </div>
                    <img src={picUrl} alt={name} />
                    <div className='bottombox'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>{name}</span>
                            <p style={{ color: '#FFFAF0' }}>{into}</p>
                        </div>
                        <span style={{ position: 'absolute', right: '.1rem' }}>最新上架</span>
                    </div>
                    <div className="mask"></div>
                </div>
                <div className='introdution' style={{
                    borderRadius: '.1rem .1rem 0 0',
                    background: 'white',
                    marginTop: '-0.1rem',
                    width: '100%',
                    height: '100%',
                    zIndex: 20,
                    position: 'relative'
                }}>
                    <p style={{
                        font: 'bold .2rem/.4rem 圆体',
                        padding: '.2rem 0 0 .1rem'
                    }}>电台内容简介</p>
                    <p></p>
                </div>
                <div className='pay' style={{
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 30,
                    display: 'flex',
                    width: '100%',
                    height: '.4rem',
                }}>
                    <i className="fa fa-play-circle-o" style={{
                        width: '40%',
                        color: '#D93E35',
                        fontSize: '.16rem',
                        lineHeight: '.4rem',
                        textAlign: 'center',
                        background:'white'
                    }}>&nbsp;&nbsp;免费试听</i>
                    <div style={{
                        width: '60%',
                        background: '#D93E35',
                        color: 'white',
                        font: 'bold .16rem/.4rem 圆体',
                        textAlign: 'center'
                    }}>购买：¥{(price / 100) && (price / 100) || (price / 100).toFixed(1)}</div>
                </div>
            </TodayDetailStyle>
        );
    }
}

export default PayDetail