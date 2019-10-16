import React, { Component } from 'react';

import { RegisterContainer } from './registerstyle'
import Back_header from 'components/common/back_header'
import http from 'utils/http'
import axios from 'axios'
import { Toast } from 'antd-mobile'

class Register extends Component{

    constructor(props){
        super(props)
        this.state = {
            step1_flag:true,
            step2_flag:false,
            step3_flag:false,
            phone:'',
            code:''
        }
    }

    register = () => {
        const phone = document.querySelector('.phone_register_input').value;
        const reg_phone = /^1[3456789]\d{9}$/  //匹配手机号码
        if(reg_phone.test(phone)){
                console.log('12')
                // axios({
                //     url:'/cellphone/existence/check',
                //     params:{
                //         phone
                //     }
                // }).then(res=>{
                //     // console.log('2',res)
                //     if(res.data.exist === 1){
                //         alert('该手机号已经被注册！')
                //         document.location.reload()
                //     }else{
                        http({
                            url:'/captcha/sent',
                            params:{
                                phone
                            }
                        })
                        // console.log('3')
                        this.setState({
                            step1_flag:false,
                            step2_flag:true,
                            phone:phone
                        })
                        setTimeout(()=>{
                            document.querySelector('.code').focus()

                        },100)
                    // }
                // })
           
        }else{
            alert('请输入正确的手机号码！')
        }
    }

    //添加验证码
    addCode(code,value){
        if(value){
            code.innerHTML = value
        }else{
            code.innerHTML = ''
        }
    }

    codeChange = (e) => {
        let code_span = document.querySelectorAll('.code_span')
        this.addCode(code_span[0],e.target.value[0])
        this.addCode(code_span[1],e.target.value[1])
        this.addCode(code_span[2],e.target.value[2])
        this.addCode(code_span[3],e.target.value[3])

        //判断是否满足四位数
        if(e.target.value.length === 4){
             this.setState({
                code:e.target.value
            })
            axios({
                url:'/captcha/verify',
                params:{
                    phone:this.state.phone,
                    captcha:e.target.value
                }
            }).then(res=>{   
                this.setState({
                    step2_flag:false,
                    step3_flag:true
                })          
            }).catch(error=>{
                alert('验证码错误！')
            })
           
            e.target.value = ''
            this.codeChange(e)

        }
    }

    //注册最后一步
    registerLast = () => {
        const password = document.querySelector('.register_password').value
        const name = document.querySelector('.register_name').value
        const reg_pwd = /\S{6,16}/ //至少6位数的密码
        const _this=this
        if(reg_pwd.test(password)){

            axios({
                url:'/register/cellphone',
                params:{
                    phone:this.state.phone,
                    password,
                    captcha:this.state.code,
                    nickname:name
                }
            }).then(res=>{
                Toast.success('注册成功！',1)
                setTimeout(() => {
                    _this.props.history.push('/login')
                },1000)
            }).catch(error=>{
                Toast.fail('出错了，请稍后再试！',1)
                setTimeout(() => {
                    _this.props.history.push('/login')
                },1000)
            })
            


        }else{
            alert('密码为6到16位数')
        }
    }

    render(){
        const { step1_flag,step2_flag,step3_flag} = this.state
        return(
            <div className="animated fadeIn ">
                <RegisterContainer>
                    <Back_header name = "手机号注册" history = { this.props.history } ></Back_header>
                    { step1_flag && <div className = "register_box">
                        <p className = "phone_register">
                            <span>
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <b>+86</b>
                            </span>
                            <input
                                type = "tel"
                                placeholder = "请输入手机号"
                                className = "phone_register_input"
                            ></input>
                        </p>
                       
                        <button className = "register_btn" onClick = { this.register }>下一步</button>
                    </div>}
                    { step2_flag && <div className = "register_next_box">
                        <p>为了安全，我们会向你的手机发送短信验证码</p>
                        <div className = "code_box">
                            <input className = "code" onKeyUp = { this.codeChange }></input>
                            <span className = "code_span"></span>
                            <span className = "code_span"></span>
                            <span className = "code_span"></span>
                            <span className = "code_span"></span>
                        </div>
                    </div> }
                    { step3_flag && <div className = "register_last_box">
                        <p>
                            <span><i className="fa fa-key" aria-hidden="true"></i></span>
                            <input type = "password" placeholder = "请输入你设置的密码" className = "register_password"></input>
                        </p>
                        <p>
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                            <input type = "text" placeholder = "请输入你设置的昵称" className = "register_name"></input>
                        </p>
                        <button className = "register_btn" onClick = { this.registerLast }>注册</button>
                    </div>}
                </RegisterContainer>
            </div>
        )
    }

    componentDidMount(){
        document.querySelector('.phone_register_input').focus()
    }
}

export default Register