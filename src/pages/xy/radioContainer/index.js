import React, { Component } from 'react';
import TodaySelect from '../todaySelect';
import CateList from '../catelist';
import PayGift from '../paygift';
import RadioBanner from '../radioBanner';
import RadioHotCate from '../radioHotCate';
import RadioFour from '../radioFour';
import { Toast } from 'antd-mobile'


class RadioContainer extends Component {
    render() {
        return (
            <div style={{ marginTop: '1.3rem' }} className="animated fadeIn">
                {/* <RadioBanner></RadioBanner> */}      
                <RadioBanner></RadioBanner>
                <RadioFour></RadioFour>
                <TodaySelect></TodaySelect>
                <PayGift></PayGift>
                <CateList></CateList>
                <RadioHotCate></RadioHotCate>
            </div>
        );
    }
    componentDidMount(){
        Toast.loading('拼命加载中……',1)
    }
    componentWillUnmount(){
        this.setState(()=>{
            return
        })
    }
}

export default RadioContainer;