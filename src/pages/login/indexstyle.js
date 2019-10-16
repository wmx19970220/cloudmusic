import styled from 'styled-components'

import BGP from 'assets/image/login_bg.jpg'
import LOGO from 'assets/image/logo.jpg'
import EMAIL from 'assets/image/email.jpg'
import QQ from 'assets/image/qq.jpg'
import WEIBO from 'assets/image/weibo.jpg'

export const LoginContainer = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:10;
    background:url(${BGP});
    background-size:100% 100%;  
    
    .login_logo{
        height:2rem;
        span{
            display:block;
            width:3.75rem;
            height:2rem;
            background:url(${LOGO});
            background-size:100% 100%;
        }
    }

    .btn_box{
        text-align:center;
        a{
            display:block;
            width: 90%;
            height: .4rem;
            border-radius:.25rem;
            border: 1px solid #d33a31;
            color: #d33a31;
            font-size: .18rem;
            margin:.1rem auto;
            line-height:.4rem;
        }
        .special{
            border:none;
            color:#99CCFF;
            text-decoration:underline;
            width:auto;
            height:auto;
            display:inline-block;
            font-size:.12rem;
            margin-top:-.1rem;
            line-height:.2rem;
        }
    }

    .bottom_box{
        position:absolute;
        bottom:0;
        height:1.2rem;
        width:100%;
        h4{
            display:flex;
            align-items: center;
            padding: 0 5px;
            color: #999;
            font-size: .13rem;
            span{
                padding:0 .05rem;
                font-weight:normal;
            }
            i{
                &.left{
                    background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.1));
                }
                &.right{
                    background-image: linear-gradient(270deg,transparent,rgba(0,0,0,.1));
                }
                display: block;
                width: 1.35rem;
                height: 1px;
            }
        }
        ul{
            padding:.16rem .39rem 0;
            display:flex;
            justify-content:space-between;
            li{
                width:.5rem;
                height:.66rem;
                a{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:center;
                    height:100%;
                }
                span{
                    display:block;
                    width:.39rem;
                    height:.39rem;
                    border-radius:50%;
                    border:1px solid #999;
                    margin-top:.02rem;
                    &.email{
                        background:url(${EMAIL}) -.27rem;
                        background-size:300% 100%;
                    }
                    &.qq{
                        background:url(${QQ});
                        background-size:100% 100%;
                    }
                    &.weibo{
                        background:url(${WEIBO});
                        background-size:100% 100%;
                    }
                }
                p{
                    color: #999;
                    font-size:.12rem;
                }
            }
        }
    }
`