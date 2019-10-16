import React,{Component} from  'react'
import axios from 'axios'
import { Tabs, WhiteSpace, Badge,Icon } from 'antd-mobile';
import {Artbox} from './artstyle'
import qs from 'querystring'
import {Link} from 'react-router-dom'

 class  _Artist extends  Component{
     constructor(props){
         super(props)
         this.state={
             name:'',
             songs:'',
             video:'',
             info:'',
            tabs : [
                { title: '热门演唱', sub: '1' },
                { title: '视频', sub: '2' },
                { title: '艺人信息', sub: '3' },
              ]
         }
     }
     componentDidMount(){
        //  console.log(this.props.location.search)
          const {id,name}=qs.parse(this.props.location.search.slice(1))
        //   console.log(id)
        //   console.log(name)
          this.setState({
              name:name
          })
         axios({
             url:'/artists',
             params:{
                 id:id
             }
         }).then((res)=>{
             this.setState({
                 songs:res
             })
            //  console.log(this.state.songs)
         })

         axios({
            url:'/search',
            params:{
               keywords:name,
               type:1014
            }
        }).then(res=> { 
            this.setState({
                video:res
               
            })
            // console.log(res)
         })  
    

        axios({
            url:'/artist/desc',
            params:{
                id:id
            }
        }).then((res)=>{
            this.setState({
                info:res
            })
            // console.log(this.state.info)
        })
        
     }
     backPage=()=>{
        this.props.history.go(-1)
     }

//热歌
     songsGet=()=>{
        return  this.state.songs&&this.state.songs.data.hotSongs.map((item,index)=>{
              return(   <Link to = {{
                                  pathname : '/audio',
                                  state:this.state.songs.data.hotSongs,
                                  search : `?id=${ item.id }&picUrl=${ item.al.picUrl }&index=${index} }`
                              }} key={index} >
                   <div className='songs_starts' >
                  <p className='blue_box'>{item.privilege.name}</p>
                    <p >{item.ar[0].name}-{item.al.name}</p>    
                   </div>
                   </Link>
                    )
               })
              }

    //MV
    MvsGet=()=>{
    return  this.state.video&&this.state.video.data.result.videos.map(item=>{
             return(  
               <Link to={{
                   pathname:'/play_video',
                   
                   search:`?id=${item.vid}`
               }} key={item.vid}>
                   <div  className='video_box'> 
                                   <div  className='img_box' style={{backgroundImage:`url(${item.coverUrl}`,backgroundSize:'100%'}}>
                                           <span  className='play_box'>
                                           <i className="fa fa-play" aria-hidden="true"></i> <i>{(item.playTime>100000)? (Math.floor(item.playTime/10000)+'万'):(item.playTime)}</i>
                                           </span>
                                   </div>
                               <div className="left_box">
                                   <div className='v_name'>{item.title}</div> <span>{ ((item.durationms/1000)>60) ? (Math.floor(item.durationms/60000)+':'+ (Math.floor( item.durationms/1000)-60*Math.floor(item.durationms/60000))) : ('00'+':'+Math.floor(item.durationms/1000))}</span> <i>by</i>  <span>{item.creator[0].userName}</span>
                               </div> 
                   </div>
              </Link> 
                     )
                })
                //
       }
       //desc
       infoGet=()=>{
           return ( this.state.info.data&&<div>
                   { this.state.info.data.briefDesc}
            </div>)
       }

     render(){
        return <Artbox>
            <div className='head_box'><Icon type='left' onClick={this.backPage}/><span className='name_box'>{this.state.name}</span></div>
        <Tabs tabs={this.state.tabs}
        initialPage={1}
        tabBarPosition="top"
        >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' ,height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden'}}>
             <div className='data_box'><div className='_box'>{this.songsGet()}</div></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden', backgroundColor: '#fff' }}>
           <div className='data_box'><div className='_box'> {this.MvsGet()}</div></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden', backgroundColor: '#fff' }}>
        <div  className='data_box'><div className='_box'><div className='info_box'>{this.infoGet()||`暂无歌手信息`}
        </div></div></div>
        </div>
    </Tabs>
    </Artbox>

     }

 }
export  default _Artist