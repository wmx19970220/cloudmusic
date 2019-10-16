import styled from 'styled-components'

export const PersonalFmContainer = styled.div`
    .fm-box{
        position:absolute;
        top:0;
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        background:#fff;
        .top-bar{
            display:flex;
            align-items:center;
            width:100%;
            height:8%;
            background:rgba(0,125,125,.5);
            color:#fff;
            .left,.right{
                width:20%;
                text-align:center;
            }
            .right{
                background:transparent;
            }
            .fm-category{
                display:flex;
                justify-content:center;
                width:80%;
                height:100%;
                div{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    a{
                        width:100%;
                        height:100%;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-around;
                        text-align:center;
                        margin:0 .1rem;
                        font-size:.05rem;
                        color:#5e5e62;
                        .iconfont{
                            font-size:.25rem;
                        }
                    }
                    .active{
                        color:#fff;
                    }
                    
                }
            }
        }
        .content-bar{
            width:100%;
            height:72%;
            background:rgba(0,125,125,.5);
            .fm-content{
                width:90%;
                margin:8% auto 0;
                
                text-align:center;
                .show-pic{
                    width:100%
                    img{
                        width:100%;
                        vertical-align:middle;
                    }  
                }
                h2{
                    color:#fff;
                    font-size:.14rem;
                    margin:3% 0;
                }
                p{
                    font-size:.1rem;
                    color:#818584;
                    .iconfont{
                        font-size:.1rem;
                        color:#818584;
                    }
                }
                
            }
           
        }
        
        .bottom-bar{
            position:fixed;
            bottom:0;
            width:100%;
            height:20%;
            background:rgba(0,125,125,.5);
            .wrapper{
                width:80%;
                height:100%;
                margin:0 auto;
                .play-bar{
                    width:100%;
                    height:30%;
                    display:flex;
                    align-items:center;
                    .current-time{
                        width:10%;
                        margin-right:.05rem;
                        height:.2rem;
                        font-size:.1rem;
                        text-align:center;
                        line-height:.2rem;
                        color:#fff;
                    }
                    .outer-box{
                        width:80%;
                        height:.03rem;
                        margin:0 auto;
                        background:#7d7572;
                        .inner-box{
                            height:.03rem;
                            background:#d33a31;
                        }
                    }
                    .duration-time{
                        width:10%;
                        margin-left:.05rem;
                        height:.2rem;
                        font-size:.1rem;
                        text-align:center;
                        line-height:.2rem;
                        color:#fff;
                    }
                }
            }
            
            .operate{
                display:flex;
                align-items:center;
                width:100%;
                height:70%;
                span{
                    display:inline-block;
                    width:20%;
                    text-align:center;
                    font-size:.2rem;
                    color:#fff;
                   
                }
                .iconfont:nth-child(3){
                    font-size:.3rem;
                }
            }
                  
        }
    }
    .am-drawer-sidebar{
        border:none;
        border-radius:3% 3% 0 0;
        box-sizing:border-box;
    }
    .am-list-body{
        dl{
            padding:0 .1rem;
            background:#f3f3f3;
            dt{
                line-height:.4rem
                height:.4rem;
                font-size:.12rem;
                color:#878787;
            }
            dd{
                display:flex；
                align-items:center;
                height:.4rem;
                .iconfont{
                    display:block;
                    width:10%;
                    height:100%;
                    line-height:.4rem;
                    text-align:center;
                    color:#d5443b;
                    font-size:.16rem;
                }
                span{
                    display:block;
                    width:90%;
                    height:100%;
                    line-height:.4rem;
                    font-size:.12rem;
                    color:#4d4d4d;
                    border-bottom:1px solid #e4e4e4;
                    box-sizing:border-box;
                }
            }
        }
    }
    
    
`