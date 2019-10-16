import React, { Component } from 'react';

import {Route,Redirect,Switch} from 'react-router-dom'

import Recommend from 'pages/recommend'
import Friend from 'pages/friend'
import Radio from 'pages/xy/radioContainer'
import Title from 'pages/title'

import 'utils/cookie'

import 'animate.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import action from 'action'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'



class Home extends Component{


    render() {
        return (
            // 添加过渡动画类名
            // <Fragment>
                <div className="animated fadeIn"  style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflow:'auto',position:'relative'}}>
                    <Title></Title>
                    <ReactCSSTransitionGroup 
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                        transitionName="animated"
                        >
                        <Switch>
                            <Redirect from="/home" to="/home/recommend" exact></Redirect>
                            <Route path='/home/recommend' component={Recommend} exact></Route>
                            <Route path='/home/friend' component={Friend}></Route>
                            <Route path='/home/radio' component={Radio}></Route>
                        </Switch>
                    </ReactCSSTransitionGroup>                    
                </div>
            //  </Fragment> 
            
            // </Fragment>

        )
    }
    
    // componentDidMount(){
        // const uid = window.cookie.get('uid');
       
        // Toast.loading('拼命加载中……',1)
        // this.props.getUserInfo()
        

    // }
    

}

export default Home