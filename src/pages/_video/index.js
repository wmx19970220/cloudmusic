import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import http from 'utils/http'
import { VideoContainer } from './videostyle'
import { Toast } from 'antd-mobile'
import BScroll from 'better-scroll'
import { async } from 'q';
import Axios from 'axios';
// import action from 'action'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

class _Video extends Component{
    constructor(props){
        super(props)
        this.state = {
            videos:null,
            idList:''       
        }
    }
    renderVideo = () =>{
        return this.state.videos && this.state.videos.datas.map((item,index)=>{
            if (  item.data.creator ) {               
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
                                <img src={item.data.creator && item.data.creator.backgroundUrl} alt =""></img>
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
            }else{
                console.log('item',item)
            }
        })
    }
    render() { 
        return ( 
            <div className="animated fadeInRight ">
                <VideoContainer style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden'}} className = 'VideoContainer'>
                    <div>

                        {this.renderVideo()}
                    </div>
                </VideoContainer>
            </div>
        );
    }
     componentDidMount(){
        
        const token = window.cookie.get('token');
        if(!token){
            Axios({
                url:'/login/cellphone',
                params:{
                    phone:17746645063,
                    password:'lj1996'
                }
            }).then(async(res)=>{
                // console.log('1',res)
                const videos_id1 = await http({
                    url:'/video/group/list'
                })
                // console.log('2',videos_id1)
                const videos1 = await http({
                    url:'/video/group',
                    params:{
                        id: videos_id1.data.data[5].id
                    }
                })
                // console.log('3',videos1)
                this.setState({
                    idList:videos_id1.data.data,
                    videos:videos1.data
                })
            })
        }else{
            setTimeout(async()=>{
                const videos_id1 = await http({
                    url:'/video/group/list'
                })
                const videos1 = await http({
                    url:'/video/group',
                    params:{
                        id: videos_id1.data.data[0].id
                    }
                })
                this.setState({
                    idList:videos_id1.data.data,
                    videos:videos1.data
                })
            },0)
        }
       
        Toast.loading('拼命加载中……',1)
        let count = 0;
        this.bscroll = new BScroll('.VideoContainer',{
            click: true, // 解锁页面的点击(原因：有一层覆盖)
            pullUpLoad: {// 开启上拉加载，50表示拉动的距离是50时进行上拉的事件的触发
              threshold: 80
            },
            pullDownRefresh:{//下拉刷新
                threshold:50,
                stop:30
            }
          })
        
            // const videos_id1 = await http({
            //     url:'/video/group/list'
            // })
            // const videos1 = await http({
            //     url:'/video/group',
            //     params:{
            //         id: videos_id1.data.data[0].id
            //     }
            // })
            // this.setState({
            //     idList:videos_id1.data.data,
            //     videos:videos1.data
            // })
            // console.log('1',videos_id1)
            // console.log('2',videos1)
        

        this.bscroll.on('pullingDown',async()=>{
            if(token){

            
            Toast.success('已成功为您推荐新的内容!',1)
             count + 8 < 99 ? count+=8 : count=count-99+8
             const video = await http({
                url:'/video/group',
                params:{
                    id: this.state.idList[count].id
                }
            })
            // console.log('111',video.data.datas)
            this.setState({
                videos:video.data
            })
        }else{
            Toast.fail('登录后获取更多',1)
        }
            // console.log('shang',count)
            this.bscroll.finishPullDown();
            
        })

        this.bscroll.on('pullingUp',async()=>{
            if(token){
            
            Toast.loading('玩命加载中……',2)
            this.bscroll.refresh()
            count  < 98 ? count++ : count=count-98
            const video = await http({
                url:'/video/group',
                params:{
                    id: this.state.idList[count].id
                }
            })
            // console.log(this.state.idList)
            this.setState(()=>{
              video.data.datas.map(item=>{
                  this.state.videos.datas.push(item)
              })  
              return{
                  videos:this.state.videos
              }
            })
        }else{
            Toast.fail('请登录!',1)
        }
            // console.log('xia',count)
            this.bscroll.finishPullUp()
        })


            // if(!token){
            //     http({
            //         url:'/logout'
            //     })
            // }
    }
    
}


// const mapStateFromProps = state => {
//     return state //传递state
//   }
  
// const mapDispatchToProps = dispatch => {
//     return bindActionCreators( action,dispatch )
// }
export default _Video