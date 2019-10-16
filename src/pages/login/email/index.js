import React, { Component } from 'react';
import { EmailContainer } from './emailstyle'
import Back_header from 'components/common/back_header'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import 'utils/cookie.js'

class Email extends Component{

    login = () => {
        const email = document.querySelector('.email_input').value;
        const password = document.querySelector('.password_input').value;
        const reg_email = /^([A-Za-z0-9_\-\.])+\@163.com$/ //网易邮箱正则
        const reg_pwd = /\S{6,}/ //至少6位数的密码
        console.log(email,password)
        if(reg_email.test(email)){
            if(reg_pwd.test(password)){
                
                Toast.loading('登录中...',5)
                axios({
                    url:'http://localhost:4000/login',
                    params:{
                        email,
                        password
                    }
                }).then(res=>{
                    Toast.loading('登录成功！',1)
                    window.cookie.set('token',res.data.account.userName)
                    window.cookie.set('uid',res.data.account.id)
                    setTimeout(()=>{
                        this.props.history.push('/home')
                    },1000)
                })
                .catch(error => {
                    Toast.loading('登录失败',1)
                    setTimeout(()=>{
                        document.location.reload()
                    },1000)
               })
            }else{
                alert('密码至少6位数！')
            }
        }else{
            alert('请输入正确的邮箱格式！')
        }
    }

    render(){
        return(
            <div className="animated fadeIn ">
                <EmailContainer>
                    <Back_header name = "邮箱登录" history = { this.props.history }></Back_header>
                    <div className = "email_login_box">
                        <p className = "phone_box">
                            <span>
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            </span>
                            <input
                                type="email"
                                placeholder="请输入邮箱"
                                className = "email_input"
                            ></input>
                        </p>
                        <p className = "password_box">
                            <span>
                                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                <b></b>
                            </span>
                            <input
                                type="password"
                                placeholder="请输入密码"
                                className = "password_input"
                            ></input>
                        </p>
                        <button className = "email_login_btn" onClick = { this.login }>登录</button>
                    </div>
                </EmailContainer>
            </div>
        )
    }
    componentDidMount(){
        const token = window.cookie.get('token')
        const uid = window.cookie.get('uid')
        if( token && uid ){
             alert('存在用户信息！')
             this.props.history.push('/home')   
        }
    }
}

export default Email