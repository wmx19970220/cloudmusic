import styled from 'styled-components'
import {defaultThemeColor} from 'theme'
import BG from 'assets/image/1.jpg'
export const DailySongContainer = styled.div`
    .dailysong_top_bar{
        position:fixed;
        top:0;
        z-index:5;
        width:100%;
        height:.5rem;
        background:${defaultThemeColor};
        color:#fff;
        div{
            line-height:.5rem;
            span{
                margin-left:.15rem;
                font-size:.16rem;
            }
        }
        
    }
    .calendar-box{
        width:100%;
        height:1.5rem;
        background:url(${BG}) no-repeat;
        .calendar{
            display:flex;
            align-items:center;
            width:100%;
            height:.6rem;
            padding-top:.5rem;
            padding-left:.1rem;
            .iconfont{
                position:relative;
                font-size:.5rem;
                color:#fff;
                i{
                    display:block;
                    width:.2rem;
                    height:.2rem;
                    position:absolute;
                    left:0;
                    top:0;
                    right:0;
                    bottom:0;
                    margin: 50% auto;
                    font-size:.16rem;
                }
            }
            
        }
        p{
            height:.2rem;
            line-height:.2rem;
            padding-left:.1rem;
            font-size:.06rem;
            color:#fff;
            .iconfont{
                font-size:.1rem;
                color:#fff;
                margin-right:.05rem;
            }
        }
    }    
    .fn{
        margin-top:-.1rem;
        display:flex;
        justify-content:space-between;
        padding:.12rem .1rem;
        border:1px solid #ccc;
        border-left:none;
        border-right:none;
        border-radius:.08rem .08rem 0 0;
        background:#fff;
        p{
            display:flex;
            align-items:center;
            .iconfont{
                margin-left:.1rem;
                margin-right:.1rem;
                font-size:.14rem;
            }
            .play_all{
                font-weight:bold;
                font-size:.14rem;
            }
            .select_more{
                font-weight:bold;
                font-size:.12rem;
            }
        }
    }
    ul{
        li{
            display:flex;
            overflow:hidden;
            .album{
                display:flex;
                width:15%;
                margin:.1rem 0;
                justify-content:center;
                align-items:center;
                img{
                    width:.4rem;
                    height:.4rem;
                    border-radius:.03rem;
                }
            }
            .song_list{
                display:flex;
                width:85%;
                justify-content:space-between;
                border-bottom:1px solid #ccc;
                .song_details{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    .song_summary{
                        .song_name{
                            font-size:.1rem;
                            font-weight:bold;
                        }
                        .song_alias{
                            font-size:.1rem;
                            font-weight:normal;
                            color:#999999;
                        }
                    }
                    .song_artists{
                        font-size:.06rem;
                    }
                }
                .song_play{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    .iconfont{
                        margin-right:.2rem;
                        font-size:.14rem
                    }
                }
            }
        }
    }

`