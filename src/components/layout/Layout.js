import React, { Component, Fragment } from 'react'
import Header from 'components/common/header'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


import Home from 'pages/home/index'
import Mine from 'pages/mine/index'
import _Video from 'pages/_video/index'
import Login from 'pages/login/index'
import _Login from 'pages/login/login'
import Email from 'pages/login/email'
import Register from 'pages/login/register'
import DailySong from 'pages/dailysong'
import PlayList from 'pages/playlist'
import HighQuality from 'pages/highquality'
import PersonalFM from 'pages/personal_fm'
import PlayVideo from 'pages/play_video'
import Running from 'pages/running'
import SongList from 'pages/songlist'
import Disc from 'pages/disc'
import Songers  from 'pages/songers'
import Search from 'pages/_search/SearchPage'
import SearchList from 'pages/searchlist'
import SongerPage from 'pages/songerpage'
import _Artist from 'pages/artistpage'
import RadioFourOne from 'pages/xy/radioFour_1'
import RadioFourTwo from 'pages/xy/radioFour_2'
import RadioFourThree from 'pages/xy/radioFour_3'
import DjCateDetail from 'pages/xy/catedetail'
import TodayDetail from 'pages/xy/todaydetail'
import PayDetail from 'pages/xy/paydetail'

import 'animate.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Charts from "pages/leaderboard/home_pages/home";
import Audio from 'pages/leaderboard/audio';
import OfficeListRoutes from 'pages/leaderboard/officelist_musiclists';
import GlobalRoute from 'pages/leaderboard/globallist_musiclists'





class Layout extends Component{
    constructor( props ) {
        super ( props );
        this.state = {
            header_flag: true
        }
    }

    componentDidMount() {
        this.watchHead()
        if(document.documentElement.clientWidth>1024){
            alert('为了您的更好体验！请在移动端或者模拟移动端打开网站')
        }
    }

    componentWillReceiveProps(nextProps) {
        this.watchHead(nextProps)
    }

    watchHead = ( nextProps ) => {
        var arr = ['/home','/mine','/_video','/home/recommend','/home/radio','/home/friend'];
        const { pathname }  = nextProps ? nextProps.location : this.props.location
        const f = arr.some( item =>   item === pathname )
        if( f ){
            this.setState({
                header_flag: false
            })
        } else {
            this.setState({
                header_flag: true
            })
        }
    }

    render() {
        const { header_flag } = this.state
        return (
            <Fragment>
                {!header_flag && <Header {...this.props}></Header>}
                {/* <Header></Header> */}
                        {/* <Redirect from = "/" to = "/home" exact ></Redirect>       */}
                    <ReactCSSTransitionGroup 
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                        transitionName="animated"
                        >
                        <Switch>
                            <Redirect from = "/" to = "/home" exact ></Redirect> 
                            <Route path = "/home" component = { Home } key="amache1"></Route>               
                            <Route path = "/mine" component = { Mine } key = "amache2"></Route>
                            <Route path = "/_video" component = { _Video } key = "amache3" ></Route>
                            <Route path = "/login" component = { Login } exact></Route> 
                            <Route path = "/login/login" component = { _Login } ></Route>
                            <Route path = "/login/email" component = { Email } ></Route>
                            <Route path = "/login/register" component = { Register } ></Route>                               
                            <Route path = '/charts' component={Charts}></Route>                                          
                            <Route path = "/audio" component = { Audio } />
                            <Route path = "/officeRoute" component = { OfficeListRoutes } />
                            <Route path = "/globalRoute" component = { GlobalRoute } /> 
                            <Route path = "/dailysong" component = { DailySong } ></Route>
                            <Route path = "/play_list" component = { PlayList } ></Route>
                            <Route path = "/per_fm" component = { PersonalFM } ></Route>
                            <Route path = "/highquality" component = { HighQuality } ></Route>
                            <Route path = "/play_video" component = { PlayVideo } ></Route>
                            <Route path = "/running" component = { Running } ></Route>
                            <Route path = '/songlist' component={SongList}></Route> 
                            <Route path = '/song_list' component={SongList}></Route>
                            <Route path = '/disc' component={Disc}></Route>  
                            <Route path="/_search"   component={Search}  key="amache4" exact></Route>
                            <Route path="/_search/_searchlist"  component={ SearchList }  exact></Route>
                            <Route path="/_search/songers"  component={ Songers }  exact></Route>
                            <Route path="/songerPage"  component={ SongerPage }  exact></Route>
                            <Route path="/artistpage"  component={ _Artist }  exact></Route>
                            <Route path="/radioFour_1" component={RadioFourOne}></Route>
                            <Route path="/radioFour_2" component={RadioFourTwo}></Route>
                            <Route path="/radioFour_3" component={RadioFourThree}></Route>
                            <Route path="/catedetail" component={DjCateDetail}></Route>
                            <Route path="/todaydetail" component={TodayDetail}></Route>
                            <Route path="/paydetail" component={PayDetail}></Route>
                            <Route render = { () => <div> 404 </div>}/>     
                        </Switch>   
                    </ReactCSSTransitionGroup>                             
                </Fragment>
        )
    }
    
}

export default withRouter(Layout)