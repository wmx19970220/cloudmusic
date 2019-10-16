import React, { Component } from 'react';
import {SongListContainer} from './SongListStyle'
import qs from 'querystring'
import axios from 'axios'
import { Toast } from 'antd-mobile'

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:null,
            picUrl:null,
            playcount:null,
            nickname:null,
            backgroundUrl:null,
            songs:null,
        }
    }



    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }

    renderItem = () =>{
        return this.state.songs && this.state.songs.dailySongs.map((item,index)=>{
            return(
                <li key={item.id}>
                    <div className="album">
                        {index+1}
                    </div>
                    <div className="song_list">
                        <div className="song_details">
                            <div className="song_summary">
                                <i className="song_name">{item.name}</i>
                                <em className="song_alias">{item.alias.length!==0 && '('+item.alias.join()+')'}</em>
                            </div>
                            <div className="song_artists">{item.artists[0].name} - {item.album.name}</div>
                        </div>
                        <div className="song_play">
                            <span className="iconfont">&#xe652;</span>
                            <span className="iconfont">&#xe619;</span>
                        </div>
                    </div>
                </li>
            )
        })
        
    }

    render() { 
        const {name,picUrl,playcount,nickname,backgroundUrl} = this.state
        return (
            <SongListContainer style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}} className="animated fadeIn">
                <div className="songlist_top_bar">
                    <div>
                        <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                        <span>歌单</span>
                    </div>
                </div>
                <div className="songlist_banner">
                    <div className="banner-box">
                        <div className="pic_box">
                            <img src={picUrl}></img>
                            <div>
                                <span className="iconfont">&#xe605;</span>
                                <span className="playcount">{playcount>100000?Math.floor(playcount/10000)+'万':playcount}</span>
                            </div>
                        </div>
                        <div className="summary-box">
                            <h1>{name}</h1>
                            <p>
                                <img src={backgroundUrl}></img>
                                <span>{nickname}</span>
                                <strong className="iconfont">&#xe680;</strong>
                            </p>
                        </div>
                    </div>
                    <p>
                        <span>
                            <i className="iconfont">&#xe61c;</i>
                            <em onClick={this.getData}>11</em>
                        </span>
                        <span>
                            <i className="iconfont">&#xe628;</i>
                            <em>22</em>
                        </span>
                        <span>
                            <i className="iconfont">&#xe640;</i>
                            <em>下载</em>
                        </span>
                        <span>
                            <i className="iconfont">&#xe611;</i>
                            <em>多选</em>
                        </span>
                    </p>
                </div>
                <div>
                    <div className="fn">
                        <p>
                            <span className="iconfont">&#xe62e;</span>
                            <span className="play_all">播放全部</span>
                        </p>
                        <p className="collect">
                            <span className="iconfont">+</span>
                            <span className="select_more">收藏()</span>
                        </p>
                    </div>
                    <ul>
                        {this.renderItem()}
                    </ul>
                </div>
            </SongListContainer> 
        );
    }

    componentDidMount(){
        Toast.loading('拼命加载中……',1)
        const {name,picUrl,playcount,nickname,backgroundUrl} = qs.parse(this.props.location.search.slice(1))
        this.setState({
            name:name,
            picUrl:picUrl,
            playcount:playcount,
            nickname:nickname,
            backgroundUrl:backgroundUrl
        })

        axios({
            url:'/recommend/songs'
        })
        .then(res=>{
            // console.log(res.data)
            this.setState({
                songs:res.data.data
            })
        })
        .catch(error=>console.log(error))
        

        axios({
            url:'/comment/playlist',
            params:{
                id:2829839197
            }
        })
        .then(res=>{
            // console.log('歌单评论',res.data)
            // this.setState({
            //     songs:res.data.data
            // })
        })
        .catch(error=>console.log(error))
    }
}
 
export default SongList;