import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginContainer } from './indexstyle'


class Login extends Component{

    render(){
        return(
            <div className="animated fadeIn login_box">                            
                      <LoginContainer>
                    <div className = "login_logo">
                        <span></span>
                    </div>
                    <div className = "btn_box">
                        <Link to = '/login/login'> 手机号登录 </Link>
                        <Link to = '/login/register'> 注册 </Link>
                        <Link to = '/home' className = 'special'>游客试用</Link>
                    </div>
                    <div className = "bottom_box">
                         <h4>
                             <i className = "left"></i>
                             <span>其他登录方式</span>
                             <i className = "right"></i>
                         </h4>
                         <ul>
                             <li>
                                <a onClick = { () => alert('敬请期待！')} >
                                    <span className = "qq"></span>
                                    <p>QQ</p>
                                </a>     
                            </li>  
                            <li>
                                <a onClick = { () => alert('敬请期待！')} >
                                    <span className = "weibo"></span>
                                    <p>微博</p>
                                </a>      
                            </li>  
                            <li>
                                <Link to = 'login/email'>
                                    <span className = "email"></span>
                                    <p>网易邮箱</p>
                                </Link>       
                            </li>   
                         </ul>
                    </div>
                </LoginContainer>
            </div>
        )
    }
}

export default Login