
import React, { Component } from 'react';
import { TodayDetailStyle } from './TodayDetailStyle'
import { Tabs, Badge } from 'antd-mobile';
import qs from 'querystring'

class TodayDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: <Badge text={'99+'}>详情</Badge> },
                { title: <Badge >节目</Badge> }
            ]
        }
    }

    goBack = () => {
        const { go } = this.props.history
        go(-1)
    }

    render() {
        const { picUrl, nm, num, dingyue } = qs.parse(this.props.location.search.slice(1))

        return (
            <TodayDetailStyle >
                <div className="bigbox">
                    <div className="headbox">
                        <i className="fa fa-arrow-left" onClick={this.goBack}> 电台</i>
                        <div className="headright">
                            <i className="fa fa-share-alt"></i>
                            <i className="fa fa-ellipsis-v"></i>
                        </div>
                    </div>
                    <img src={picUrl} alt={nm} />
                    <div className='bottombox'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>{nm}</span>
                            <p>{dingyue && dingyue || ''}人已订阅</p>
                        </div>
                        <i className="fa fa-star-o">订阅</i>
                    </div>
                    <div className="mask"></div>
                </div>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                >
                    <div style={{ height: '100%', backgroundColor: '#fff' }} onClick={this.closeMsg}>
                        <div>
                            <span>共{num}期</span>
                        </div>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }} onClick={this.closeMsg}>
                        暂无内容
                    </div>
                </Tabs>
            </TodayDetailStyle>
        );
    }
}

export default TodayDetail