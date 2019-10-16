import React, { Component } from 'react';
import { _LoginContainer } from './loginstyle'
import Back_header from 'components/common/back_header'
import axios from 'axios'
import 'utils/cookie.js'
import { Toast } from 'antd-mobile'

class _Login extends Component{
    
    login = () => {       
        const phone = document.querySelector('.phone_input').value;
        const password = document.querySelector('.password_input').value;
        const reg_phone = /^1[3456789]\d{9}$/  //匹配手机号码
        const reg_pwd = /\S{6,}/ //至少6位数的密码
        if(reg_phone.test(phone)){
            if(reg_pwd.test(password)){
                Toast.loading('登录中...',5)
                axios({
                    url:'/login/cellphone',
                    params:{
                        phone,
                        password
                    }
                }).then(res=>{
                    window.cookie.set('token',res.data.account.userName)
                    window.cookie.set('uid',res.data.account.id)
                    Toast.loading('登录成功！',1)
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
                alert('密码至少6位数')
            }
        }else{
            alert('请输入正确的手机号！')
        }
    }


    render(){

        return(
            <div className="animated fadeIn ">
                <_LoginContainer>
                    <Back_header name = "手机号登录" history = { this.props.history }></Back_header>
                    <div className = "_login_box">
                        <p className = "phone_box">
                            <span>
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <b>+86</b>
                            </span>
                            <input
                                type="tel"
                                placeholder="请输入手机号"
                                className = "phone_input"
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
                        <button className = "login_btn" onClick = { this.login }>登录</button>
                    </div>
                    
                </_LoginContainer>            
            </div>
        )
    }

    componentDidMount(){
        document.querySelector('.phone_input').focus()
        const token = window.cookie.get('token')
        const uid = window.cookie.get('uid')
        if( token && uid ){
             alert('存在用户信息！')
             this.props.history.push('/home')   
        }
    }
  
}


export default _Login