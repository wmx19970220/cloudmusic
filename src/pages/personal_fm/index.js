import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

//导入样式组件
import { PersonalFmContainer } from './PersonalFmStyle'

//导入axios
import axios from 'axios'
import http from 'utils/http'

//导入antd-mobile组件库
import { Drawer, List, NavBar,Toast } from 'antd-mobile'

class PersonalFM extends Component {
    
    constructor(props){
        super(props)
        this.state={
            personal_fm:null,
            player_flag:true,
            index:0,
            idlists:null,
            song_id:null,
            play_src:null,
            step:null,
            timer_flag:null,
            current:0,
            duration:0,
            docked: false,
        }
    }

    

    renderItem = (index) =>{
        const ss = this.state.personal_fm && this.state.personal_fm.data[index]
        // console.log('ss',ss)
        if(ss){
            return (
                <div className="fm-content">
                    <div className="show-pic fadeOutLeftBig">
                        <img src={ss.album.picUrl} alt = ""></img>
                    </div>
                    <h2>{ss.name}</h2>
                    <p>
                        <i>{ss.artists[0].name}</i>
                        <span className="iconfont">&#xe680;</span>
                    </p>
                    
                </div>
            )
        }
    }

    

    onDock = (d) => {
    this.setState({
        [d]: !this.state[d],
    });
    }

    //antd-mobile轻提示
    loadingToast = () =>{
        Toast.loading('Loading...', 1, () => {
            console.log('Load complete !!!');
        });
    }

    //停止计时器
    clearTimer = () =>{
        clearInterval(this.state.timer_flag)
    }

    //返回
    goBack = () =>{
        //返回时停止定时器
        this.clearTimer()

        //返回主页
        const { push } = this.props.history
        push('/home')
    }

    //获取歌曲当前的时间
    getCurrentTime = () =>{
        //返回audio.currentTime
        return parseInt(this.player.currentTime)
    }

    //获取歌曲的总时长
    getDuration = () =>{
        //返回audio.duration
        // console.log(this.player.duration)
        return parseInt(this.player.duration)
    }

    //播放
    play =() =>{
        //播放时调用audio.play方法
        this.player.play()

        var timer = setInterval(() => {

            this.setState({
                //歌曲当前时间/歌曲的总时长
                step:this.getCurrentTime()/this.player.duration,
                current:this.getCurrentTime(),
                duration:this.getDuration(),
            })

            //当进度条到99%时自动切换下一首歌曲
            //console.log(this.getCurrentTime()/this.player.duration)
            if(this.getCurrentTime()/this.player.duration>0.99){

                this.next()
               
            }else{
                this.setState({
                    //歌曲当前时间/歌曲的总时长
                    step:this.getCurrentTime()/this.player.duration,
                    current:this.getCurrentTime(),
                    duration:this.getDuration(),
                })
            }
        }, 1000);

        this.setState({
            player_flag:true,
            timer_flag:timer
        })

        // console.log(this.props)
    }

    //暂停
    pause = () => {
        //暂停时调用audio.pause方法
        this.player.pause()

        this.setState({
            player_flag:false,
        })

        //暂停时停止计时器
        this.clearTimer()
    }

    //下一首
    next = async() =>{
        this.state.index++
        let song_id = this.state.idlists[this.state.index]
        // console.log(song_id)

        axios({
            url:'/song/url',
            params:{
                id:song_id
            }
        })
        .then(res=>{
            this.setState({
                play_src:res.data.data[0].url
            })
        })
        .catch(error=>console.log(error))

        //切下一首的时候停止计时器
        this.clearTimer()

        //切下一首歌的时候调用audio.play的方法
        this.play()
        
    }

    
    render() {
        const sidebar = (
        <List>
            <dl>
                <dt>歌曲：</dt>
                <dd>
                    <i className="iconfont">&#xe687;</i><span>收藏到歌单</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe640;</i><span>下载</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe628;</i><span>分享</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe610;</i><span>歌手：</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe60c;</i><span>专辑：</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe60e;</i><span>音质：自动选择</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe652;</i><span>查看视频</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe60d;</i><span>定时停止播放</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe79b;</i><span>打开驾驶模式</span>
                </dd>
            </dl>
        </List>);
        return ( 
            <PersonalFmContainer>
                
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebarStyle={{ border: '1px solid #ddd' }}
                    sidebar={sidebar}
                    docked={this.state.docked}
                    position={"bottom"}
                >
                </Drawer>
                <div className="fm-box">
                    <div className="top-bar">
                        <span className="iconfont left" onClick={this.goBack}>&#xe603;</span>
                        <div className="fm-category">
                        <div>
                            <NavLink to="/per_fm" activeClassName="active" onClick={this.loadingToast}>
                                <span className="iconfont">&#xe850;</span>
                                <span>私人FM</span>
                            </NavLink>      
                        </div>
                        <div>
                            <NavLink to="/running" onClick={this.clearTimer}>
                                <span className="iconfont">&#xe655;</span>
                                <span>跑步FM</span>
                            </NavLink>
                        </div> 
                    </div>
                        <NavBar onLeftClick={() => this.onDock('docked')} className="iconfont right">
                            &#xe619;
                        </NavBar>
                    </div>
                    <div className="content-bar">
                        {this.renderItem(this.state.index)}
                    </div>
                    
                    
                    <div className="bottom-bar">
                        <div className="wrapper">
                            <div className="play-bar">
                                <audio src={this.state.play_src} autoPlay="autoplay" ref={el=>{this.player=el}} ></audio>
                                <div className="current-time">{this.state.current<60 ? '0:'+this.state.current : (parseInt(this.state.current/60)+':'+(this.state.current-parseInt(this.state.current/60)*60))}</div>
                                <div className="outer-box">
                                    <div className="inner-box" style={{
                                        width:`${this.state.step*100}%`,
                                        position:'relative'
                                    }}>
                                        <dfn style={{
                                            position:'absolute',
                                            right:0,
                                            top:'-.015rem',
                                            display:'block',
                                            width:'.08rem',
                                            height:'.08rem',
                                            background:'#fff',
                                            borderRadius:'50%'
                                        }} onMouseDown={this.drag}></dfn>
                                    </div>
                                </div >
                                <div className="duration-time">{this.state.duration<60 ? '0:'+this.state.duration :(parseInt(this.state.duration/60)+':'+(this.state.duration-parseInt(this.state.duration/60)*60))}</div>
                            </div>

                            <div className="operate">
                                <span className="iconfont">&#xe60a;</span>
                                <span className="iconfont">&#xe634;</span>
                                {this.state.player_flag && <span className="iconfont" onClick={this.pause}>&#xe668;</span> }
                                {!this.state.player_flag && <span className="iconfont" onClick={this.play}>&#xe62e;</span>}
                                <span className="iconfont" onClick={this.next}>&#xe61e;</span>
                                <span className="iconfont">&#xe61c;</span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
             </PersonalFmContainer>
        )
    }

    componentDidMount(){

        this.clearTimer()
        //挂载完成后直接调用play方法播放第一首歌
        this.play() 

        setTimeout(async()=>{
            //从第一个接口获取id，存为数组
            const  personal_fm1 = await http({
                url:'/top/song'
            })
            // console.log(personal_fm1.data);
            var arr = [];
            personal_fm1.data.data.map(item=>{
                arr.push(item.id)
            })
            //console.log(arr)

            //第一首歌
            const  play_src1 = await http({
                url:'/song/url',
                params:{
                    id:arr[0]
                }
            })

            this.setState({
                idlists:arr,
                personal_fm:personal_fm1.data,
                play_src: play_src1.data.data[0].url,
                duration: parseInt(personal_fm1.data.data[0].duration/1000),
                current:this.getCurrentTime()
            })

        },0)

        
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
    
        setTimeout(() => {
            Toast.hide();
        }, 2000);

    }
    componentWillUnmount(){
        this.clearTimer()
    }
     
}
 
export default PersonalFM;