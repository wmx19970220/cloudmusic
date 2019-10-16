import React, { Component } from 'react';
import { DiscContainer } from './DiscStyle';
import Axios from 'axios';

class Disc extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            discs:null,
            digitals:null
        }
    }

    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }

    renderDigital = () =>{
        return this.state.digitals && this.state.digitals.albums.slice(0,3).map(item=>{
            return(
                <div key={item.id} className="disc_box">
                    <img src={item.picUrl} alt=''></img>
                    <p>{item.name}</p>
                    <h2>{item.artist.name}</h2>
                </div>
            )
        })
    }

    renderAlbum = () =>{
        return this.state.discs && this.state.discs.albums.map(item=>{
            return (
                <div key={item.id} className="disc_box">
                    <div className="pic_box">
                        <img src={item.picUrl} alt=''></img>
                    </div>
                    <p>{item.name}</p>
                    <h2>{item.artist.name}</h2>
                </div>
            )
        })
    }

    render() { 
        return ( 
            <DiscContainer style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden',marginTop:'.5rem'}}>
                <div className="disc_top_bar">
                    <div>
                        <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                        <span>新碟上架</span>
                    </div>
                </div>
                <div className="digital_disc">
                    <h1>数字专辑</h1>
                    <div className="disc_content">
                        {this.renderDigital()}
                    </div>
                </div>
                <div className="weekly_disc">
                    <h1>本周新碟</h1>
                    <div className="disc_content">
                        {this.renderAlbum()}
                    </div>
                </div>
            </DiscContainer>
        );
    }

    componentDidMount(){
        Axios({
            url:'/login/cellphone',
            params:{
                phone:13372543211,
                password:'lh83415671'
            }
        })
        .then(res=>{

            Axios({
                url:'/top/album'
            })
            .then(res=>{
                console.log('新碟上架',res.data)
                this.setState({
                    discs:res.data
                })
            })
            .catch(error=>console.log(error))
            
            Axios({
                url:'/album/newest'
            })
            .then(res=>{
                console.log('数字专辑',res.data)
                this.setState({
                    digitals:res.data
                })
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    }
}
 
export default Disc;