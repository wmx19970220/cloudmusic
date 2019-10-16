import React, { Component } from 'react';
import axios from 'axios'
import {DailySongContainer} from './DailySongStyle'
import { Toast } from 'antd-mobile'


class DailySong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dailysongs:null,
            time:null
        }
    }

    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }
    
    getDate = () =>{
        return 
        
    }
    renderDailySongs = () =>{
        return this.state.dailysongs && this.state.dailysongs.dailySongs.map(item=>{
            return(
                <li key={item.id}>
                    <div className="album">
                        <img src={item.album.blurPicUrl} alt=""></img>
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
        return ( 
            <DailySongContainer style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}} className="animated fadeIn">
                <div className="dailysong_top_bar">
                    <div>
                        <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                        <span>每日推荐</span>
                    </div>
                </div>
                <div className="calendar-box">
                    <div className="calendar">
                        <span className="iconfont">&#xe89e;
                            <i>
                                {this.state.time}
                            </i>
                        </span>
                    </div>
                    <p>
                        <span className="iconfont">&#xe68c;</span>
                        <span>根据你的音乐口味生成每天6:00更新</span>
                    </p>
                </div>
                <div className="fn">
                    <p>
                        <span className="iconfont">&#xe62e;</span>
                        <span className="play_all">播放全部</span>
                    </p>
                    <p>
                        <span className="iconfont">&#xe625;</span>
                        <span className="select_more">多选</span>
                    </p>
                    
                </div>
                <ul>
                    {this.renderDailySongs()}
                </ul>
            </DailySongContainer>   
        );
    }

    componentDidMount(){
        Toast.loading('拼命加载中……',1)
        axios({
            url:'/login/cellphone',
            params:{
                phone:13372543211,
                password:'lh83415671'
            }
        })
        .then(res=>{
            // console.log('cellphone',res.data)
            axios({
                url:'/recommend/songs'
            })
            .then(res=>{
                // console.log('dailysongs',res.data)
                this.setState({
                    dailysongs:res.data.data
                })
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))

        var date = new Date()
        this.setState({
            time : date.getDate()
        })
    }
}
 
export default DailySong;