import styled from 'styled-components'

export const PlayListContainer = styled.div`
    .playlist_top_bar{
        position:fixed;
        top:0;
        z-index:5;
        width:100%;
        height:.5rem;
        background:#7c7d80;
        color:#fff;
        div{
            line-height:.5rem;
            span{
                margin-left:.15rem;
                font-size:.16rem;
            }
        }
        
    }    
    
    .playlist_banner{
        display:flex;
        background:#7c7d80;
        color:#fff;
        .playlist_banner_pic{
            img{
                width:1rem;
                height:1rem;
                border-radius:.03rem;
                margin-left:.1rem;
                margin-right:.08rem;
                vertical-align:middle;
            }
        }
        .banner_tag{
            color:#fff;
            h1{
                display:flex;
                align-items:center;
                font-size:.14rem;
                margin-top:.15rem;
                .iconfont{
                    margin-right:.05rem;
                    color:#c59a61;
                }
            }
            h2{
                font-size:.12rem;
                margin-top:.05rem;
            }
            h3{
                font-size:.08rem;
                margin-top:.04rem;
                color:#a8a8a9;
            }
        }
    }
    .playlist_title{
        position:relative;
        width:100%;
        
        .allsong{
            position:absoulte !important;
            top:0;
            z-index:20;
            display:flex;
            align-items:center;
            i{
                display:block;
                font-size:.16rem;
                font-weight:bold;
            }
            .iconfont{
                font-size:.12rem;
                color:#a2a2a2;
            }
        }
        .am-tabs-horizontal{
            width:100%;
            .am-tabs-tab-bar-wrap{
                display:flex;
                .am-tabs-default-bar-underline{
                    display:none !important;
                }
                .am-tabs-default-bar{
                    background:#fff !important;
                    .am-tabs-default-bar-tab{
                        color:#000;
                    }
                }
                .am-tabs-default-bar-content{
                    .am-tabs-default-bar-tab{
                        width:10% !important;
                        &:nth-child(1){
                            width:70% !important;
                                justify-content:flex-start;
                                padding-left:.1rem;
                           
                        }
                    }
                    
                }
                
                
                
            }
            .am-tabs-content-wrap{
                .am-tabs-pane-wrap{
                    div{
                        ul{
                            display:flex;
                            flex-wrap:wrap;
                            li{
                                width:50%;
                                box-sizing:border-box;
                                padding:.05rem;
                                .cover-box{
                                    position:relative;
                                    width:100%;
                                    img{
                                        width:100%;
                                        height:auto;
                                        border-radius:.03rem;
                                        vertical-align:middle;
                                    }
                                    div{
                                        p{
                                            position:absolute;
                                            margin:0;
                                            display:flex;
                                            align-items:center;
                                        }
                          
                                        .first-box{
                                            top:.02rem;
                                            right:.03rem;
                                            color:#fff;
                                            font-size:.1rem;
                                            .iconfont{
                                                font-size:.1rem;
                                                margin-right:.01rem;
                                            }
                                        }
                                        .second-box{
                                            bottom:.02rem;
                                            left:.03rem;
                                            color:#fff;
                                            font-size:.1rem;
                                            .iconfont{
                                                font-size:.1rem;
                                                margin-right:.01rem;
                                            }
                                        }
                                        
                                    }
                                }
                                
                                p{
                                    color:#393939;
                                    font-size:.11rem;
                                    font-weight:bold;
                                    line-height:.16rem;
                                    margin:.1rem 0 .15rem 0;
                                }
                            }
                        }
                    }
                }
                  
            }

        }
        
        
    }
    
    
`

