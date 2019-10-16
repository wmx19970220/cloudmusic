import styled from 'styled-components'
import {defaultThemeColor} from 'theme'

export const RecommendContainer = styled.div`
    .swiper-container{
        position:relative;
        width:100%;
        margin-top:.5rem;
        .swiper-wrapper{
            position:relative;
            .swiper-slide{
                position:relative;
                a{
                    display:block;
                    width:95%;
                    height:auto;
                    margin:0 auto;
                    position:relative;
                    img{
                        width:100%;
                        vertical-align:middle;
                    }
                    span{
                        position:absolute;
                        right:0;
                        bottom:0;
                        display:block;
                        padding:.03rem;
                        font-size:0.1rem;
                        color:#fff;
                        border-radius:.03rem
        
                    }
                }
            }
        }
        
    }

    
    .category{
        display:flex;
        li{
            width:25%;
            padding:.2rem;
            box-sizing:border-box;
            a{
                
                width:100%;
                height:100%;
                text-align:center;
                div{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:.4rem;
                    height:.4rem;
                    margin:0 auto;
                    margin-bottom:.1rem;
                    border-radius:50%;
                    background:${defaultThemeColor};
                    .iconfont{
                        color:#fff;
                        font-size:.16rem;
                    }
                }
                p{
                    display:block;
                    font-size:.12rem;
                }
            }
            
        }
    }
    .recommend_song{
        overflow:hidden;
        border-top:1px solid #ccc;
        .recommend_song_list{
            display:flex;
            align-items:center;
            margin:.2rem 0 .1rem .05rem;
            font-size:.14rem;
            font-weight:bold;
            .iconfont{
                font-size:.1rem;
                color:#c7c7c7;
            }
        }
        .recommend_song_pic{
            display:flex;
            flex-wrap:wrap;
            .recommend_pic_box{
                width:33.3%;
                padding:.05rem;
                margin-bottom:.15rem;
                box-sizing:border-box;
                .pic_box{
                    width:100%;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    position:relative;
                    img{
                        width:100%;
                        height:auto;
                        border-radius:.03rem;
                    }
                    div{
                        position:absolute;
                        top:.05rem;
                        right:.05rem;
                        color:#fff;
                        font-size:.1rem;
                        .iconfont{
                            font-size:.1rem;
                        }
                    }
                    
                }
                p{
                    font-size:.08rem;
                    line-height:.2rem;
                    font-weight:bold;
                }
                
            }
        }
    }
    .new_song{
        overflow:hidden;
        border-top:1px solid #ccc;
        .new_song_list{
            display:flex;
            align-items:center;
            margin:.2rem 0 .1rem .05rem;
            font-size:.14rem;
            font-weight:bold;
            .iconfont{
                font-size:.1rem;
                color:#c7c7c7;
            }
        }
        .new_song_pic{
            display:flex;
            flex-wrap:wrap;
            .newsong_pic_box{
                width:33.3%;
                padding:.05rem;
                margin-bottom:.15rem;
                box-sizing:border-box;
                .pic_box{
                    width:100%;
                    position:relative;
                    img{
                        width:100%;
                        height:auto;
                        border-radius:.03rem;
                    }
                    div{
                        position:absolute;
                        top:.05rem;
                        right:.05rem;
                        color:#fff;
                        font-size:.1rem;
                        .iconfont{
                            font-size:.1rem;
                        }
                    }
                    
                }
                p{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size:.08rem;
                    line-height:.2rem;
                    font-weight:bold;
                }
                
            }
        }
    }
    .recommend_radio{
        overflow:hidden;
        border-top:1px solid #ccc;
        .recommend_radio_list{
            display:flex;
            align-items:center;
            margin:.2rem 0 .1rem .05rem;
            font-size:.14rem;
            font-weight:bold;
            .iconfont{
                font-size:.1rem;
                color:#c7c7c7;
            }
        }
        .recommend_radio_pic{
            display:flex;
            flex-wrap:wrap;
            .recommend_radio_box{
                width:33.3%;
                padding:.05rem;
                margin-bottom:.15rem;
                box-sizing:border-box;
                img{
                    width:100%;
                    height:auto;
                    border-radius:.03rem;
                }
                p{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size:.08rem;
                    line-height:.2rem;
                    font-weight:bold;
                }
            }
        }
    }

    .recommend_video{
        width:100%;
        padding:.05rem
        box-sizing:border-box;
        .video_box{
            width:100%;
            .video_cover_pic{
                position:relative;
                width:100%;
                img{
                    width:100%;
                    border-radius:.03rem;
                    vertical-align:middle;
                }
                span{
                    position:absolute;
                    top:50%;
                    left:50%;
                    z-index:9;
                    width:.4rem;
                    height:.4rem;
                    margin-left:-.2rem;
                    margin-top:-.2rem;
                    font-size:.3rem;
                    text-align:center;
                    line-height:.3rem;
                    color:rgba(255,255,255,.8)
                }
            }
            .video_info{
                display:flex;
                justify-content:space-between;
                width:100%;
                height:.4rem;
                .info_left{
                    display:flex;
                    align-items:center;
                    font-size:.1rem;
                    img{
                        width:.2rem;
                        height:.2rem;
                        border-radius:50%;
                        margin-right:.05rem;
                    }
                    
                }
                .info_right{
                    display:flex;
                    align-items:center;
                    width:50%;
                    .iconfont{
                        font-size:.1rem;
                        font-weight:normal;
                        text-align:center;
                        color:#b9b9b9;
                    }
                    i{
                        width:35%;
                    }
                    em{
                        width:35%;
                    }
                    span{
                        width:30%;
                    }
                }
            }
        }
    }

` 