import React,{ Component } from 'react'
import { HeaderContainer } from './Headerstyle'
import { NavLink } from 'react-router-dom'
import { Drawer, List, NavBar } from 'antd-mobile'
import {Link} from 'react-router-dom'
import 'utils/cookie'
import action from 'action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//backgroundUrl:'',
// nickname:'',
// avatarUrl:'',
//this.props.userReducer.xxx

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      token:'',
    }
  }
  state = {
    open: false,
  }

  componentDidMount(){
        const token = window.cookie.get('token');
        this.setState({
          token:token
        })

        
  }
  outLogin=()=>{
    if(window.cookie.get('token')){
      if(window.confirm('确认退出吗？')){
         window.cookie.remove('token');
         window.cookie.remove('uid');
         this.props.exitUser()
        this.props.history.push('/login')
    
        // this.setState({ open: !this.state.open });
        this.onOpenChange()
      }
    }else{
      alert('请先登录!')
    }
      
  }
  onOpenChange = (...args) => {
    // console.log(args);
    this.setState({ open: !this.state.open });
  }
  LoginBar=()=>{
    // console.log(this.props.userReducer.backgroundUrl)
    if(!this.state.token){
      return(
        <div className='in_box' style={{height:'100%',width:'100%'}} >
        <div className='login_box'>
        <p> 欢迎登陆网易云音乐 </p>
              <span> 320k高音质音乐无限下载，手机电脑多端同步</span>
        </div>
          <Link  to='/login'><button>立即登录</button></Link>
          </div>
      )
    }else
      {
      return (
        <div className='in_box' style={{height:'100%',width:'100%',backgroundImage:`url(${this.props.userReducer.backgroundUrl})`,backgroundSize:'100% 150%' }}>
          <div className="ydl_box">
                    <div className='ava_box' style={{backgroundImage:`url(${this.props.userReducer.avatarUrl})`}}></div>
                     <span className='nice_box'>{this.props.userReducer.nickname}</span>
                     <span className='qiandao'>签到</span>
          </div>

        </div>
      )
    }
  }
  
    render(){
    
      const sidebar = (<div className="big_box" style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`}}>
                             <div   className='show_box' style = {{overflowX:'hidden'}}>
                 <List>
                            <div  className='LoginBar' >
                                {this.LoginBar()}
                            </div>
                          <List.Item><i className="fa fa-envelope-o" aria-hidden="true"></i><i>我的消息</i></List.Item>
                          <List.Item><i className="fa fa-vine" aria-hidden="true"></i><i>会员中心</i></List.Item>
                          <List.Item><i className="fa fa-shopping-cart" aria-hidden="true"></i> <i>商城推荐</i></List.Item>
                          <List.Item><i className="fa fa-gamepad" aria-hidden="true"></i><i>游戏中心</i></List.Item>
                          <List.Item><i className="fa fa-gamepad" aria-hidden="true"></i><i>在线听歌免流量</i></List.Item>
               </List>
               <List>
                      <List.Item><i className="fa fa-user" aria-hidden="true"></i><i>我的好友</i></List.Item>
                      <List.Item><i className="fa fa-map-marker" aria-hidden="true"></i><i>附近的人</i></List.Item>
                      <List.Item><i className="fa fa-eye" aria-hidden="true"></i><i>个性换肤</i></List.Item>
                      <List.Item><i className="fa fa-microphone" aria-hidden="true"></i><i>听歌识曲</i></List.Item>
                      <List.Item><i className="fa fa-clock-o" aria-hidden="true"></i><i>定时停止播放</i></List.Item>
                      <List.Item><i className="fa fa-qrcode"></i><i>扫一扫</i></List.Item>
                      <List.Item><i className="fa fa-bell-o" aria-hidden="true"></i><i>音乐闹钟</i></List.Item>
                      <List.Item><i className="fa fa-car" aria-hidden="true"></i><i>驾驶模式</i></List.Item>
                      <List.Item><i className="fa fa-child" aria-hidden="true"></i><i>亲子频道</i></List.Item>
                      <List.Item><i className="fa fa-credit-card" aria-hidden="true"></i><i>优惠券</i></List.Item>
                </List>
                
                </div>
                <div className='Foot_box'>
                  <a><i className="fa fa-moon-o" aria-hidden="true"></i><i>夜间模式</i></a>
                  <a><i className="fa fa-cog" aria-hidden="true"></i><i>设置</i></a>
                  <a><i className="fa fa-power-off" aria-hidden="true"></i><i onClick={this.outLogin}>退出</i></a>
                </div> 
            </div>
            
            )
     
        return(
            <HeaderContainer>
                <NavBar icon={<i className = "fa fa-list-ul" aria-hidden="true"/>} onLeftClick={this.onOpenChange}>   
                  </NavBar>
                  <Drawer
                    className="my-drawer"        
                    enableDragHandle
                    contentStyle={{ color: 'regb(0,0,0,0)', textAlign: 'center', paddingTop: 42 }} 
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                  >
                    1
                  </Drawer>
        
                <div className = "three_box">
                    <NavLink to = "/mine" activeClassName = "active">
                         <i className="fa fa-music" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to='/home' activeClassName="active" >
                        <i className="fa fa-headphones" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to="/_video" activeClassName="active">
                        <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                    </NavLink>
                </div>
                <NavLink  to="/_search" className = "search_box">
                    <i className = "fa fa-search" aria-hidden="true"></i>
                </NavLink>
            </HeaderContainer>

        )
    }
}

const mapStateFromProps = state => {
  return state //传递state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( action,dispatch )
}
export default connect( mapStateFromProps,mapDispatchToProps )(Header)
