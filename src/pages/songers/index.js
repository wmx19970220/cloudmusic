import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd-mobile'
import {Songerstyle} from './songerstyle'
class Songers extends Component{
    constructor(props)          
         {       
            super(props)
            this.state={
                tab:[
                    {
                        id:1,
                        name:'华语男歌手',
                        canshu:1001
                    },
                    {
                        id:2,
                        name:'华语女歌手',
                        canshu:1002,
                    },
                    {
                        id:3,
                        name:'华语乐队/组合',
                        canshu:1003
                    }, {
                        id:4,
                        name:'欧美男歌手',
                        canshu:2001
                    },
                    {
                        id:5,
                        name:'欧美女歌手',
                        canshu:2002
                    },
                    {
                        id:6,
                        name:'欧美乐队/组合',
                        canshu:2003
                    }, {
                        id:7,
                        name:'其他男歌手',
                        canshu:4001
                    }, {
                        id:8,
                        name:'其他女歌手',
                        canshu:4002
                    }, {
                        id:9,
                        name:'其他乐队/组合',
                        canshu:4003
                    },
                    
                ]
            
                }
         }
        
         backPage=()=>{
            this.props.history.go(-1)
          }
          getSonger=()=>{
                 return this.state.tab.map((item)=>{
               return  (
                     <div className='hang_box'key={item.id}>
                          <li  ><Link to={{pathname: `/songerPage`,
                                  search:`?id=${item.id}&canshu=${item.canshu}&name=${item.name}`}}>{item.name}</Link></li>
                      </div>
                       )
              })}
        
      render(){
          return(
              <Songerstyle>
                  <div className="head_box"><Icon type='left' onClick={this.backPage}/> <span className='text_box'>歌手分类</span></div>
                  <div className="fl_box">
                 { this.getSonger()} 
                 </div>
              </Songerstyle>
          )
      }


        }

        export   default Songers 