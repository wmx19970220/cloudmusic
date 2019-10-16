import React, { Component } from 'react';
import axios from 'axios'

import {HighQualityContainer} from './HighQualityStyle'

class HighQuality extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            highqualitys:null
        }
    }

    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }

    renderHighQuality = () =>{
        return this.state.highqualitys && this.state.highqualitys.playlists.map(item=>{
            return (
                
                    <div className="highquality_list" key={item.id}>
                        <div className="list_left">
                            <img src={item.coverImgUrl} alt=""></img>
                        </div>
                        <div className="list_right">
                            <h1>{item.name}</h1>
                            <h2>by {item.creator.nickname}</h2>
                            <p>
                                <span className="tag">{item.tag}</span>
                                <span className="copywriter">{item.copywriter}</span>
                            </p>
                        </div>
                    </div>
            )
        })
    } 
    
    render() { 
        return ( 
            <HighQualityContainer>
                <div className="top-bar">
                    <div>
                        <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                        <span className="top-bar-title">精品歌单▪全部</span>
                    </div>
                </div>
                <div style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}}>
                    {this.renderHighQuality()}
                </div>
            </HighQualityContainer>
                
        );
    }

    componentDidMount(){
        axios({
            url:'/login/cellphone',
            params:{
                phone:13372543211,
                password:'lh83415671'
            }
        })
        .then(res=>{
            console.log(res)
            axios({
                url:'/top/playlist/highquality'
            })
            .then(res=>{
                console.log('highquality',res.data)
                this.setState({
                    highqualitys:res.data
                })
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    }
}
 
export default HighQuality;