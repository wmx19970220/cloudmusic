import React, { Component } from 'react';
import 'utils/cookie'
import { MineContainer,MineList } from './minestyle'
import {Accordion,List} from 'antd-mobile'

import { Link } from 'react-router-dom'
//状态管理
import action from 'action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import axios from 'axios'

class Mine extends Component{
    constructor(props){
        super(props)
        this.state = {
            musicList:'',
            tokenFlag:false,
            creatNum:0,
            creatMusic:0,
            colNum:0,
            lists:[{
                id:1,
                icon:"fa fa-music",
                name:'本地音乐',
                num:'0'
            },{
                id:2,
                icon:"fa fa-play-circle-o",
                name:'最近播放',
                num:'0'
            },
            {
                id:3,
                icon:'fa fa-download',
                name:'下载管理',
                num:'0'
            },
            {
                id:4,
                icon:'fa fa-podcast',
                name:'我的电台',
                num:'0'
            },
            {
                id:5,
                icon:'fa fa-gratipay',
                name:'我的收藏',
                num:'专辑/歌手/视频/专栏'
            }
            ]
        }
    }

    renderMusicList = () => {
        return this.state.lists.map(item => {           
            return(
                <li key = {item.id}>
                    <a>
                        <i className={item.icon} aria-hidden="true"></i>
                        <p>{item.name}  <b>({item.num})</b> </p>
                    </a>
                </li>
            )
        })
    }

    renderCreateList = () => {
        const uid = window.cookie.get('uid');
        // console.log('1',this.state.musicList)
        // console.log(this.state.musicList)
        return this.state.musicList && this.state.musicList.map((item,index) => {
            if(uid == item.userId){
                return(
                    <Link key = {index} to={{
                        pathname:'/song_list',
                        search:`?name=${item.name}&picUrl=${item.coverImgUrl}&playcount=${item.playCount}&nickname=${item.creator.nickname}&backgroundUrl=${item.creator.avatarUrl}`
                    }}>
                        <List.Item>
                            <span style = {{backgroundImage:`url(${item.coverImgUrl})`,backgroundSize:'100%'}}></span>
                            <div className = "list_text">
                                <p className = "text_box">
                                    <b className = "text1">{ index===0 ? '我喜欢的音乐':item.name}</b>
                                    <b className = "text2">{item.trackCount}首</b>
                                </p>
                                <p></p>
                            </div>
                        </List.Item>
                    </Link>     
                )
            }
        })
    }

    renderCollectList = () => {
        const uid = window.cookie.get('uid')
        return this.state.musicList && this.state.musicList.map((item,index) => {
            if(uid != item.userId){
                return(
                    <Link key = {index} to={{
                        pathname:'/song_list',
                        search:`?name=${item.name}&picUrl=${item.coverImgUrl}&playcount=${item.playCount}&nickname=${item.creator.nickname}&backgroundUrl=${item.creator.avatarUrl}`
                    }}>
                        <List.Item>
                            <span style = {{backgroundImage:`url(${item.coverImgUrl})`,backgroundSize:'100%'}}></span>
                            <div className = "list_text">
                                <p className = "text_box">
                                    <b className = "text1">{item.name}</b>
                                    <b className = "text2">{item.trackCount}首</b>
                                </p>
                                <p></p>
                            </div>
                        </List.Item>
                    </Link>     
                )
            }
        })
    }

    render(){
        return(
            // 添加过渡动画类名
            <div className="animated fadeInLeft " style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`}}>
                <MineContainer>
                    <div className = 'red_bg'></div>
                    <div className = 'head_box'>
                        { !this.state.tokenFlag && <div onClick = { () => {this.props.history.push('/login')}}>
                            <span>
                                <i className="fa fa-user-circle"></i>
                            </span>
                            <p>未登录</p>
                        </div>}
                        { this.state.tokenFlag && <div>
                            <span style = {{
                                backgroundImage:`url(${this.props.userReducer.avatarUrl})`,
                                backgroundSize:'100%',
                                borderRadius:'50%'
                            }}>
                            </span>
                            <p>{this.props.userReducer.nickname}</p>
                        </div>}
                        <b></b>
                    </div>
                    <MineList>
                        <ul className = "music_list">
                            { this.renderMusicList() }
                        </ul>
                        <div className = "create-list">
                            <Accordion defaultActiveKey= "0">
                                <Accordion.Panel header={ `创建的歌单(${this.state.creatNum}) `}>
                                    <List className="my-list">
                                        {!this.state.tokenFlag && <a>
                                            <List.Item>
                                                <span>
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </span>
                                                <div className = "list_text">
                                                    <p className = "text_box">
                                                        <b className = "text1">我喜欢的音乐</b>
                                                        <b className = "text2">{this.state.creatMusic}首</b>
                                                    </p>
                                                    <p></p>
                                                </div>
                                            </List.Item>
                                        </a>}
                                        { this.state.tokenFlag && this.renderCreateList() }
                                        <List.Item style = {{height:'.2rem',minHeight:'0'}}></List.Item>
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header={ `收藏的歌单(${this.state.colNum}) `}>
                                    <List className="my-list">
                                        {/* <a>
                                            <List.Item>
                                                <span>
                                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                                </span>
                                                <div className = "list_text">
                                                    <p className = "text_box">
                                                        <p className = "text1">我喜欢的音乐</p>
                                                        <p className = "text2">0首</p>
                                                    </p>
                                                    <b></b>
                                                </div>
                                            </List.Item>
                                        </a> */}
                                        { this.state.tokenFlag && this.renderCollectList() }
                                        <List.Item style = {{height:'.2rem',minHeight:'0'}}></List.Item>
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </MineList>

                </MineContainer>
            </div>
        )
    }
    componentDidMount(){
        const token = window.cookie.get('token')
        const uid = window.cookie.get('uid')
        const _this=this
        if(token){
            this.setState({
                tokenFlag:true
            })
            this.props.getUserInfo()
            this.props.getUserMusic()
            
            

            setTimeout(()=>{
                axios({
                    url:'/user/subcount',
                    withCredentials: true
                }).then(res=>{
                    // console.log('3',res.data)
                    this.setState(()=>{
                        let state =_this.state
                        let creatNum = 0
                        let colNum = 0
                        state.lists[3].num = res.data.djRadioCount;
                        state.musicList = _this.props.userReducer.musicList;
                        state.musicList && state.musicList.map(item=>{
                            uid == item.userId ? creatNum++ : colNum++
                        })
                        state.creatNum = creatNum;
                        state.colNum = colNum;
                        return {
                            lists:state.lists,
                            creatNum:state.creatNum,
                            colNum:state.colNum,
                            musicList:state.musicList
                        }
                    })
                }).catch(error=>console.log(error))
            },100)

            
        }

    }
}

//状态管理
const mapStateFromProps = state => {
    return state //传递state
  }
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators( action,dispatch )
}
export default connect( mapStateFromProps,mapDispatchToProps )(Mine)