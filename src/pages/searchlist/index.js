import React,{Component} from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import axios from 'axios'
import {SearchListcontainer} from './sendstyled'
import  {Icon}  from  'antd-mobile'
import {Link} from 'react-router-dom'

class SearchList extends Component{
    constructor(props){
        super(props)
        this.state={
            songs:'',
            stars:'',
             Mvs:'',
             
            tabs : [
                { title: '单曲', sub: '1' },
                { title: '歌手', sub: '2' },
                { title: '视频', sub: '3' },
              ]
        }
    }
    backPage=()=>{
        this.props.history.go(-1)
      }

     componentDidMount(){
         
         axios({   
             url:'/search',
             params:{
                 keywords:this.props.location.state.name
                }    
         }).then(res=>
             this.setState({
                 songs:res
             })
         )    //获取歌曲

         axios({
             url:'/search',
             params:{
                keywords:this.props.location.state.name,
                type:100
             }
         }).then(res=>
            this.setState({
                stars:res
            }))            //获取歌手

            axios({
                url:'/search',
                params:{
                   keywords:this.props.location.state.name,
                   type:1014
                }
            }).then(res=>
                this.setState({
                    Mvs:res
                   
                }))  
        
     }
    
    
     //渲染单曲
     songsGet=()=>{
      return  this.state.songs&&this.state.songs.data.result.songs.map((item,index)=>{
            return(   <Link to = {{
                                pathname : '/audio',
                                state:this.state.songs.data.result.songs,
                                search : `?id=${ item.id }&picUrl=${ item.album.artist.img1v1Url }&index=${index}s }`
                            }} key={index} >
                 <div className='songs_starts' >
                <p className='blue_box'>{item.name}</p>
                  <p >{item.artists[0].name}-{item.album.name}</p>
                  <p>{item.alias}</p>
                 <span>{item.artists[0].name}</span>
                 </div>
                 </Link>
                  )
             })
            }
            //传参
    
          
            //渲染歌手
      starsGet=()=>{
          return  this.state.stars&&this.state.stars.data.result.artists.map(item=>{
               return(  
                <Link to = {{
                    pathname : '/artistpage',
                    search:`?name=${item.name}&id=${item.id}`
                }} key={item.id} >
                  <div className='songs_starts' ><img src={item.img1v1Url&&item.img1v1Url||'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'}></img>
                  <span className="star_box">{item.name}</span>
                   </div>
                   </Link>
                    )
                })
            }
            //渲染MV
      MvsGet=()=>{
             return  this.state.Mvs&&this.state.Mvs.data.result.videos.map((item,index)=>{
                  return(  
                    <Link to={{
                        pathname:'/play_video',
                        search:`?id=${item.vid}`
                    }} key = {item.vid}>
                        <div    className='video_box'> 
                                        <div  className='img_box' style={{backgroundImage:`url(${item.coverUrl}`,backgroundSize:'100%'}}>
                                                <span  className='play_box' >
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
            }
                
    render(){
        return(
            <SearchListcontainer>
                <div className='head_box'><Icon type='left' onClick={this.backPage}/><span className='name_box'>{this.props.location.state.name}</span></div>
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                    tabBarPosition="top"
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`, backgroundColor: '#fff' }}>
                         <div className='data_box'><div className='_box'>{this.songsGet()}</div></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`, backgroundColor: '#fff' }}>
                        <div  className='data_box'><div className='_box'>{this.starsGet()}</div></div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:`${document.documentElement.clientHeight-93.5*(document.documentElement.clientHeight/667)}px`, backgroundColor: '#fff' }}>
                        <div  className='data_box'><div className='_box'>{this.MvsGet()}</div></div>
                    </div>
                </Tabs>
    <WhiteSpace />
          </SearchListcontainer>
        )
    }
}

export default SearchList