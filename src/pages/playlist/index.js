import React, { Component } from 'react';
import http from 'utils/http'
import {Link} from 'react-router-dom'
import {PlayListContainer} from './PlayList'
import { Icon} from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import { Toast } from 'antd-mobile'

const tabs = [
    { title: <div>
        <i>全部歌单</i><span className="iconfont">&#xe680;</span>
    </div>},
    { title: <div>华语</div>},
    { title: <div>民谣</div> },
    { title: <div>电子</div> },
  ];
  
class PlayList extends Component {

    
    constructor(props) {
        super(props);
        this.state = { 
            playlists:null,
            list:'right',
            highqualitys:null,
            china:null,
            folks:null,
            electrons:null,
        }
    }

    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }

    renderPalylist = () =>{
        return this.state.playlists && this.state.playlists.playlists.map(item=>{
            return (
                
                <li key={item.id} >
                    <div className="cover-box">
                        <img src={item.coverImgUrl} alt =""></img>
                        <div>
                            <p className="first-box">
                                <span className="iconfont">&#xe605;</span>
                                <span className="playCount">{item.playCount>100000?Math.floor(item.playCount/10000)+'万':item.playCount}</span>
                            </p>
                            
                            <p className="second-box">
                                <span className="iconfont">&#xe604;</span>
                                <i>{item.creator.nickname}</i>
                            </p>
                        </div>
                    </div>
                    
                    <p>{item.name}</p>
                </li>
            )
        })
    }

    renderChina = () =>{
        return this.state.china && this.state.china.playlists.map(item=>{
            return (
                
                <li key={item.id} >
                    <div className="cover-box">
                        <img src={item.coverImgUrl}></img>
                        <div>
                            <p className="first-box">
                                <span className="iconfont">&#xe605;</span>
                                <span className="playCount">{item.playCount>100000?Math.floor(item.playCount/10000)+'万':item.playCount}</span>
                            </p>
                            
                            <p className="second-box">
                                <span className="iconfont">&#xe604;</span>
                                <i>{item.creator.nickname}</i>
                            </p>
                        </div>
                    </div>
                    
                    <p>{item.name}</p>
                </li>
            )
        })
    }

    renderFolk = () =>{
        return this.state.folks && this.state.folks.playlists.map(item=>{
            return (
                
                <li key={item.id} >
                    <div className="cover-box">
                        <img src={item.coverImgUrl}></img>
                        <div>
                            <p className="first-box">
                                <span className="iconfont">&#xe605;</span>
                                <span className="playCount">{item.playCount>100000?Math.floor(item.playCount/10000)+'万':item.playCount}</span>
                            </p>
                            
                            <p className="second-box">
                                <span className="iconfont">&#xe604;</span>
                                <i>{item.creator.nickname}</i>
                            </p>
                        </div>
                    </div>
                    
                    <p>{item.name}</p>
                </li>
            )
        })
    }

    renderElectron = () =>{
        return this.state.electrons && this.state.electrons.playlists.map(item=>{
            return (
                
                <li key={item.id} >
                    <div className="cover-box">
                        <img src={item.coverImgUrl}></img>
                        <div>
                            <p className="first-box">
                                <span className="iconfont">&#xe605;</span>
                                <span className="playCount">{item.playCount>100000?Math.floor(item.playCount/10000)+'万':item.playCount}</span>
                            </p>
                            
                            <p className="second-box">
                                <span className="iconfont">&#xe604;</span>
                                <i>{item.creator.nickname}</i>
                            </p>
                        </div>
                    </div>
                    
                    <p>{item.name}</p>
                </li>
            )
        })
    }

    render() {
       
        return ( 
            
            <PlayListContainer style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}} className="animated fadeIn">
                <div className="playlist_top_bar">
                    <div>
                        <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                        <span>歌单</span>
                    </div>
                </div>
                <Link to='/highquality'>
                        <div className="playlist_banner">
                            <div className="playlist_banner_pic">
                                <img src={this.state.highqualitys && this.state.highqualitys.playlists[0].coverImgUrl} alt=""></img>
                            </div>
                            <div className="banner_tag">
                                <h1>
                                    <span className="iconfont">&#xe67f;</span>
                                    <span>精品歌单</span>
                                    <Icon type={this.state.list} />
                                </h1>
                                <h2>
                                    {this.state.highqualitys && this.state.highqualitys.playlists[0].name}
                                </h2>
                                <h3>
                                    {this.state.highqualitys && this.state.highqualitys.playlists[0].copywriter} 
                                </h3>
                            </div>
                        </div>
                </Link>
                <div className="playlist_title">
                    
                    <Tabs tabs={tabs}
                    initialPage={0}
                    usePaged={false}
                    tabBarUnderlineStyle={{backgroundColor:"#fff"}}
                    swipeable={false}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height: '100%', backgroundColor: '#fff' }}>
                        <ul>
                            {this.renderPalylist()}
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <ul>
                            {this.renderChina()}
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <ul>
                            {this.renderFolk()}
                        </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <ul>
                            {this.renderElectron()}
                        </ul>
                    </div>
                    </Tabs>
                </div>
                
            </PlayListContainer>
        );
    }

    componentDidMount(){
       
            Toast.loading('拼命加载中',1)

            setTimeout(async()=>{
                const playlists1 = await http({
                    url:'/top/playlist'
                })
                const china1 = await http({
                    url:'/top/playlist',
                    params:{
                        cat:'华语'
                    }
                })
                const folks1 = await http({
                    url:'/top/playlist',
                    params:{
                        cat:'民谣'
                    }
                })
                const electrons1 = await http({
                    url:'/top/playlist',
                    params:{
                        cat:'电子'
                    }
                })
                const highqualitys1 = await http({
                    url:'/top/playlist/highquality',
                    params:{
                        limit:1
                    }
                })
                this.setState({
                    playlists:playlists1.data,
                    china:china1.data,
                    folks:folks1.data,
                    electrons:electrons1.data,
                    highqualitys:highqualitys1.data
                })

            },0)

    }


}
 
export default PlayList;