import React, { Component } from 'react';
import axios from 'axios'
import { TodayStyle, TodayHead, TodayRight } from './TodayStyle'
import { Link } from 'react-router-dom'

class TodaySelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios({
            url: '/dj/today/perfered'
        }).then(res => {
            this.setState({
                list: res.data.data
            })
            // console.log('res', res)
        })
            .catch(err => console.log(err))
    }

    renderToday = () => {
        return this.state.list.map(item => {
            return (<li key={item.id}>
                <Link to={{
                    pathname: '/todaydetail',
                    search: `?picUrl=${item.picUrl}&nm=${item.name}&num=${item.programCount}`
                }}>
                    <img src={item.picUrl} alt={item.name} />
                    <TodayRight>
                        <h3>{item.name}</h3>
                        <i>节目:{item.programCount}</i>
                        <span>{item.rcmdText}</span>
                    </TodayRight>
                </Link>
            </li>)
        })
    }

    render() {
        return (
            <TodayStyle>
                <TodayHead>
                    <h3>今日优选</h3>
                    <div className="icon">
                        <i className="fa fa-refresh"></i>
                        <span>换一换</span>
                    </div>
                </TodayHead>
                <ul>
                    {this.renderToday()}
                </ul>
            </TodayStyle>
        );
    }
}

export default TodaySelect