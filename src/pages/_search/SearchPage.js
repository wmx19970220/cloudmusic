import React,{Component}from 'react'
import axios from 'axios'
import {Searchcontainer} from './SearchStyle'
import { Icon} from 'antd-mobile';
//, Grid ,Tag,Tabs, WhiteSpace, Badge
import { Link} from 'react-router-dom'
//Route,withRouter,NavLink,
// import  SearchList from  'pages/searchlist'


 
class Search extends Component{
  
   constructor(props){ 
        super(props)
        this.state={
              songs:'',
              Res:'',
              inputvalue:'',
              Flag:true, 
              hot_list:'',
        }
    }
     
  

  backPage=()=>{
    this.props.history.go(-1)
  }
   


   addSongs(e){
    this.setState({         
        Flag:true,
        inputvalue:e.target
    })
    if(this.state.inputvalue.value){
             axios({  
      url:'/search',
            params:{
                keywords:this.state.inputvalue.value,
                limit :10,
                    }
            }) .then((res)=>{
                    this.setState({     
                        Res:res.data.result.songs
                    }) 
                  })
                 }
                }
                
                inputOn=(val)=>{   
                
                  this.state.inputvalue.value=val;    
                  this.props.history.push({ pathname:'/_search/_searchlist',state:{name :this.state.inputvalue.value }})
                  this.setState({         
                    Flag:false
                })
              }

              getList=()=>{   
             return this.state.Res&&this.state.Res.map((item)=>{
              return (
                   this.state.Flag && <li key={item.id} onClick={()=>this.inputOn(item.name)}>
                     <i className="fa fa-search" aria-hidden="true"></i> <span>{item.name}</span>
                  </li>
                     )}
                    )}       
     
      
    searchSongs=(e)=>{
    
              if (e.keyCode=='13'){
                this.props.history.push({ pathname:'/_search/_searchlist',state:{name :this.state.inputvalue.value }})
                      this.setState({         
                        Flag:false
                                   })
                                 }
                                }
        
                    //获取热门歌曲标签
                    componentDidMount(){
                      var input_value=document.querySelector(".input_box")
                      // console.log(input_value)
                      this.setState({          
                        inputvalue:input_value
                    })
                      const _this=this
                      axios({
                        url:'/search/hot/detail'
                      }).then(res=>(
                        _this.setState({  
                           hot_list:res.data.data
                        })     
                      ))

                     
                    }
                    //渲染热门歌曲标签
                    makeHotList=()=>{
                      // this.getHot()
                      
                      return this.state.hot_list&&this.state.hot_list.map((item,index)=>{
                               return(
                                <span  className='am-tag-normal' key={index} onClick={()=>this.inputOn(item.searchWord)}>{item.searchWord} </span>  
                                     )
                                  })
                                 }
                         
   
    render(){
        return(
          <Searchcontainer>
                <div className="head_box">
                <Icon type='left' onClick={this.backPage}/>
                 <input  className='input_box'
                 placeholder='输入你想听的'
                  onChange={this.addSongs.bind(this)}
                  defaultValue={this.state.songs} 
                  onKeyDown={this.searchSongs}
                  ></input>
                  </div>
                  
                  <div className='songs_fl'><Link to='/_search/songers'><i className="fa fa-users" aria-hidden="true"></i> <span>歌手分类</span></Link></div>
                  <div className="hot_search">
                    <span className='hot_b'>热门搜索</span>
                       <div> 
                         {this.makeHotList()}
                       </div>
                  </div>
                 <ul className='search_list'>
                       {this.state.inputvalue.value&&this.getList()}
                 </ul>  
                 
              </Searchcontainer>
        )
    }
}
export default Search