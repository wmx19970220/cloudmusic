import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring'
import {PlayVideoContainer} from './PlayVideoStyle'
import $ from 'jquery'

class PlayVideo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            video_url:null
        }
    }

    goBack = () =>{
        const { go } = this.props.history
        go(-1)
    }

    render() {
        console.log(this.state.video_url)
        return (
            <PlayVideoContainer>
                <div id="print">
                    <video src={this.state.video_url && this.state.video_url.url } controls="controls" autoPlay={true}></video>
                    <span className="iconfont" onClick={this.goBack}>&#xe603;</span>
                </div>
            </PlayVideoContainer> 
        );
    }

    componentDidMount(){
        console.log('id',qs.parse(this.props.location.search.slice(1)).id)
        axios({
            url:'/video/url',
            params:{
                id:qs.parse(this.props.location.search.slice(1)).id
            }
        })
        .then(res=>{
            if(res.data.urls[0]){
                this.setState({
                    video_url:res.data.urls[0]
                })
            }else{
                axios({
                    url:'http://localhost:4000/mv/url',
                    params:{
                        id:qs.parse(this.props.location.search.slice(1)).id
                    }
                }).then(res1=>{
                    this.setState({
                        video_url:res1.data.data
                    })
                }).catch(error1=>console.log(error1))
            }
          
        })
        .catch(error=>console.log(error))

        var width = document.documentElement.clientWidth;
        var height =  document.documentElement.clientHeight;
        if( width < height ){
            // console.log(width + " " + height);
            $('#print').width(height);
            $('#print').height(width);
            $('#print').css('top',  (height-width)/2 );
            $('#print').css('left',  0-(height-width)/2 );
            $('#print').css('transform' , 'rotate(90deg)');
            $('#print').css('transform-origin' , '50% 50%');
        }

        
    }
}
 
export default PlayVideo;
