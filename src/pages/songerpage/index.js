import React,{ Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd-mobile'
import axios from 'axios'
import {Pagestyle} from './pagestyle'
import  qs from 'querystring'

class SongerPage extends Component{
    constructor(props){
        super(props)
        this.state= {
            List:'', 
            name:'',
        }
    }
    componentDidMount(){
        const {name,canshu}=qs.parse(this.props.location.search.slice(1)) 
       this.setState(
           {
               name:name
           })
    axios({
        url:'/artist/list',
        params:{
            cat:canshu

        }

    }).then((res)=>{
        
           this.setState({
               List:res
           })
          
    })
    
}
backPage=()=>{
    this.props.history.go(-1)
  }
getSongers=()=>{
    
         
         return   this.state.List&&this.state.List.data.artists.map((item)=>{
          return   <Link to = {{
                            pathname : '/artistpage',
                            search :`?name=${item.name}&id=${item.id}`
                        }} key={item.id} >
                    <div className='songer_box' >
                        <img src={item.img1v1Url&&item.img1v1Url||'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'}></img>
                        <span className="star_box">{item.name}</span>
                  </div>
                  </Link>
      })
    }
render(){
    return (
        <Pagestyle>
        <div className="head_box"><Icon type='left' onClick={this.backPage}/> <span className='text_box'>{this.state.name}</span></div>
             <div className="list_box" style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflow:'hidden auto'}}>
                 {this.getSongers()}
             </div>
             </Pagestyle>
        )

        }



}

export default SongerPage