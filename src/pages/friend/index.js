import React, { Component } from 'react';
import http from 'utils/http'
import { FriendContainer } from './FriendStyle';
import axios from 'axios'
// import BScroll from 'better-scroll'
import 'utils/cookie'

class Friend extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            shares:null,
            idlists:null
        }
    }

    renderShare = () => {
        return this.state.shares && this.state.shares.event.map(item=>{
            
            return(
                <div key={item.id} className="info_container">
                    <div className="info_top">
                        <img src={item.user.avatarUrl}></img>
                        <div className="user">{item.user.nickname}</div>
                    </div>
                    <div className="info_content">
                        <p>{JSON.parse(item.json).msg}</p>
                        <img src={JSON.parse(item.json).video && JSON.parse(item.json).video.coverUrl}></img>
                    </div>
                    <div className="info_bottom">
                        <div className="count">
                            <div>
                                <span className="iconfont">&#xe634;</span><span>{item.info.likedCount}</span>
                            </div>
                            <div>
                                <span className="iconfont">&#xe60b;</span><span>{item.info.commentCount}</span>
                            </div>
                            <div>
                                <span className="iconfont">&#xe628;</span><span>{item.info.shareCount}</span>
                            </div>
                        </div>
                        
                        <div className='extra'>
                            <span className="iconfont">&#xe619;</span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() { 
        // console.log(this.state.shares)
        return (
            <div className="FriendContainer">
                <ul>
                    <li>
                        <FriendContainer style = {{height:`${document.documentElement.clientHeight-100*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}}>
                            {this.renderShare()}
                        </FriendContainer>
                    </li>
                </ul>
            </div> 
            
        );
    }

    componentDidMount(){
        setTimeout(async()=>{
        const token = window.cookie.get('token');
        // console.log(!token)
        if(!token){
           axios({
                url:'/login/cellphone',
                params:{
                    phone:17746645063,
                    password:'lj1996'
                }
            }).then((res)=>{
                axios({
                    url:'/event',
                    withCredentials: true
                }).then(res=>{
                    this.setState({
                        shares:res.data
                        })
                })
                // if(!token){
                //    http({
                //        url:'/logout'
                //    })
                // }
            })
        }else{

            const result = await http({
                 url:'/event',
                 withCredentials: true
             })
             console.log(1,result)
             this.setState({
             shares:result.data
             })
        }
      

        },0)
            

            

    }

    

}
 
export default Friend;