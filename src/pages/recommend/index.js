import React, { Component } from 'react';
import {Link} from 'react-router-dom'

//导入axios
import axios from 'axios'
import http from 'utils/http'
//导入样式组件
import {RecommendContainer} from './RecommendStyle'

//导入组件库
import Swiper from 'swiper'; 
import {Toast} from 'antd-mobile'

import action from 'action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            banners: null,
            recommends:null,
            radios:null,
            newsongs:null,
            videos_id:null,
            videos:null
        }
    }


    getVideoId = () =>{
       return  this.state.videos_id && this.state.videos_id.map(item=>{
           
       })
    }

    renderBanner = () =>{
        return this.state.banners && this.state.banners.banners.map((item,index)=>{
            return (
                <div className="swiper-slide" key={index}>
                    <Link to = ''>
                        <img src={item.pic} alt=""></img>
                        <span style={{
                        background:item.titleColor,
                        }}>{item.typeTitle}</span>
                    </Link>
                </div>
                
            )
        })
    }

    renderRecommend = () =>{
        return this.state.recommends && this.state.recommends.recommend.slice(0,6).map(item=>{
            return(
                <div className="recommend_pic_box" key={item.id}>
                    <Link to={{
                        pathname:'/song_list',
                        search:`?name=${item.name}&picUrl=${item.picUrl}&playcount=${item.playcount}&nickname=${item.creator.nickname}&backgroundUrl=${item.creator.backgroundUrl}`
                    }}>
                        <div className="pic_box">
                            <img src={item.picUrl}></img>
                            <div>
                                <span className="iconfont">&#xe605;</span>
                                <span className="playcount">{item.playcount>100000?Math.floor(item.playcount/10000)+'万':item.playcount}</span>
                            </div>
                        </div>
                        <p>{item.name}</p>
                    </Link>   
                </div>
            )
        })
    }
    
    renderNewSong = () =>{
        return this.state.newsongs && this.state.newsongs.albums.slice(1,7).map(item=>{
            return(
                <div className="newsong_pic_box" key={item.id}>
                    <div className="pic_box">
                        <img src={item.picUrl} alt=""></img>
                    </div>
                    <p>{item.name}</p>
                </div>
            )
        })
    }

    renderRadio = () => {

        return this.state.radios && this.state.radios.result.map(item=>{
            return(
                <div className="recommend_radio_box" key={item.id}>
                    <div className="pic_box">
                        <img src={item.picUrl} alt=""></img>
                    </div>
                    <p>{item.name}</p>
                </div>
            )
        })
    }
    
    renderVideo = () =>{
        return this.state.videos && this.state.videos.datas.map((item,index)=>{
            return(
                <div className="video_box" key={index}>
                    <Link to={{
                        pathname:'/play_video',
                        search:`?id=${item.data.vid}`
                    }}>
                        <div className="video_cover_pic">
                            <img src={item.data.coverUrl} alt=""></img>
                            <span className="iconfont">&#xe61d;</span>
                        </div>
                        <div className="video_info">
                            <p className="info_left">
                                <img src={item.data.creator.backgroundUrl} alt =""></img>
                                <strong>{item.data.creator.nickname}</strong>
                            </p>
                            <p className="info_right">
                                <i className="iconfont">&#xe866; {item.data.playTime>100000?Math.floor(item.data.playTime/10000)+'万':item.data.playTime}</i>
                                <em className="iconfont">&#xe61c; {item.data.commentCount}</em>
                                <span className="iconfont">&#xe619;</span>
                            </p>
                        </div>
                    </Link>
                </div>
            )
        })
    }


    render() { 
        return ( 
            <RecommendContainer className="animated fadeIn " >
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.renderBanner()}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>  
                </div>
                <ul className="category">
                    <li>
                        <Link to='/per_fm'>
                            <div>
                                <span className="iconfont">&#xe606;</span>
                            </div>
                            <p>私人FM</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dailysong'>
                            <div>
                                <span className="iconfont">&#xe601;</span>
                            </div>
                            <p>每日推荐</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/play_list'>
                            <div>
                                <span className="iconfont">&#xe602;</span>
                            </div>
                            <p>歌单</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/charts'>
                            <div>
                                <span className="iconfont">&#xe618;</span>
                            </div>
                            <p>排行榜</p>
                        </Link>
                    </li>
                </ul>
                <div className="recommend_song">
                    <div className="recommend_song_list">
                        <Link to="/play_list">
                            <i>推荐歌单</i>
                            <span className="iconfont">&#xe680;</span>
                        </Link>
                    </div>
                    <div className="recommend_song_pic">
                        {this.renderRecommend()}
                    </div>
                </div>
                <div className="new_song">
                    <div className="new_song_list">
                        <Link to='/disc'>
                            <i>最新音乐</i>
                            <span className="iconfont">&#xe680;</span>
                        </Link>
                    </div>
                    <div className="new_song_pic">
                        {this.renderNewSong()}
                    </div>
                </div>
                <div className="recommend_radio">
                    <div className="recommend_radio_list">
                        <Link to='/home/radio'>
                            <i>主播电台</i>
                            <span className="iconfont">&#xe680;</span>
                        </Link>
                    </div>
                    <div className="recommend_radio_pic">
                        {this.renderRadio()}
                    </div>
                </div>
                
                <div className="recommend_video">
                    {this.renderVideo()}
                </div>
                
            </RecommendContainer>
        );
    }

     componentDidMount(){        
        Toast.loading('拼命加载中……',1)
        
        setTimeout(async () => { 
        const token = window.cookie.get('token');
        if(token){
            this.props.getUserInfo()
            this.props.getUserMusic()
            await http({
                url:'/login/refresh',
                withCredentials: true
            })
            const banner1 = await http({
                url:'/banner',
                params:{
                    type:1
                }
            })
            const recommends1 = await http({
                url:'/recommend/resource',
                withCredentials: true
            })

            const radios1 = await http({
                url:'/personalized/djprogram'
            })

            const newsongs1 = await http({
                url:'/top/album'
            })

            const videos_id1 = await http({
                url:'/video/group/list'
            })

            const videos1 = await http({
                url:'/video/group',
                params:{
                    id: 58104
                }
            })
            this.setState({
                banners:banner1.data,
                recommends:recommends1.data,
                radios:radios1.data,
                newsongs:newsongs1.data,
                videos_id:videos_id1.data.data,
                videos:videos1.data,
            },()=>{
                this.mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:true,
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                    }
                  })  
            })
        }else{
            axios({
                url:'/login/cellphone',
                params:{
                    phone:17746645063,
                    password:'lj1996'
                }
            }).then(async(res)=>{
                const banner1 = await http({
                    url:'/banner',
                    params:{
                        type:1
                    }
                })
                const recommends1 = await http({
                    url:'/recommend/resource',
                    withCredentials: true
                })
    
                const radios1 = await http({
                    url:'/personalized/djprogram'
                })
    
                const newsongs1 = await http({
                    url:'/top/album'
                })
    
                const videos_id1 = await http({
                    url:'/video/group/list'
                })
    
                const videos1 = await http({
                    url:'/video/group',
                    params:{
                        id: 58104
                    }
                })
                this.setState({
                    banners:banner1.data,
                    recommends:recommends1.data,
                    radios:radios1.data,
                    newsongs:newsongs1.data,
                    videos_id:videos_id1.data.data,
                    videos:videos1.data,
                },()=>{
                    this.mySwiper = new Swiper ('.swiper-container', {
                        loop: true, // 循环模式选项
                        autoplay:true,
                        // 如果需要分页器
                        pagination: {
                          el: '.swiper-pagination',
                        }
                      })  
                })
            })
        }

            // const banner1 = await http({
            //     url:'/banner',
            //     params:{
            //         type:1
            //     }
            // })
            // const recommends1 = await http({
            //     url:'/recommend/resource',
            //     withCredentials: true
            // })

            // const radios1 = await http({
            //     url:'/personalized/djprogram'
            // })

            // const newsongs1 = await http({
            //     url:'/top/album'
            // })

            // const videos_id1 = await http({
            //     url:'/video/group/list'
            // })

            // const videos1 = await http({
            //     url:'/video/group',
            //     params:{
            //         id: 58104
            //     }
            // })

            // if(!token){
            //      http({
            //         url:'/logout'
            //     })
            // }
            // const result1 = await http({
            //     url:'http://localhost:4000/dj/banner',
            //     withCredentials: true
            // })
            // console.log(result1)

          
        }, 0);
           
    }
    
}
const mapStateFromProps = state => {
    return state //传递state
  }
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators( action,dispatch )
}
export default connect( mapStateFromProps,mapDispatchToProps )(Recommend)
 