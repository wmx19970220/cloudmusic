import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import BackHeader from 'components/common/back_header'
// import { CateDetailStyle } from './CateDetailStyle'
import { Tabs, Badge,Toast } from 'antd-mobile'
import 'assets/comstylesheets/setcolor.css'
import qs from 'querystring'
import { FourThree, FourRight } from '../radioFour_3/FourThree'

class DjCateDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: <Badge >热门</Badge> },
                { title: <Badge >更多</Badge> }
            ],
            secondlist: null
        }
    }
    componentDidMount() {
        Toast.loading('亲们请稍等片刻哟', 1);
        const { id } = qs.parse(this.props.location.search.slice(1))
        axios({
            url: `/dj/recommend/type?type=${id}`
        }).then(res => {
            this.setState({
                secondlist: res.data.djRadios
            })
            // console.log('res', res.data.djRadios)
        })
            .catch(err => console.log(err))
    }

    renderSecond = () => {
        return this.state.secondlist && this.state.secondlist.map(item => {
            return (<div className="paylists" key={item.id}>
                <Link to={{
                    pathname: '/todaydetail',
                    search: `?picUrl=${item.picUrl}&nm=${item.name}&num=${item.programCount}&dingyue=${item.subCount}`
                }}>
                    <img src={item.picUrl} alt={item.name} />
                    <FourRight>
                        <h2>{item.name}</h2>
                        <span>{item.rcmdtext}</span>
                        <span>节目:{item.programCount}</span>
                    </FourRight>
                </Link>
            </div>)
        })
    }
    render() {
        const { name } = qs.parse(this.props.location.search.slice(1))
        return (
            <FourThree className="animated fadeIn"  style={{overflow:'hidden'}}>
                <BackHeader name={name} history={this.props.history}></BackHeader>
                <Tabs tabs={this.state.tabs} 
                    initialPage={0}
                >
                    <div style={{height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden', backgroundColor: '#fff' }} onClick={this.closeMsg}>
                        {this.renderSecond()}
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }} onClick={this.closeMsg}>
                        暂无内容
                    </div>
                </Tabs>
            </FourThree>
        );
    }
}

export default DjCateDetail