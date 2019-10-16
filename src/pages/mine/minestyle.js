import styled from 'styled-components'
import {defaultThemeColor} from 'theme'
export const MineContainer = styled.div`
    position:relative;
    overflow:auto;
    height:100%;
    .red_bg{
        height:.5rem;
        background:${defaultThemeColor};
    }
    .head_box{
        position:absolute;
        top:.20rem;
        left:0;
        right:0;
        margin:0 auto;
        width:95%;
        height:.6rem;
        background:#FDF3F2;
        border-radius:.05rem;
        box-shadow:-1px .04rem .03rem .05rem #F2F2F2;
        display:flex;
        justify-content:space-between;
        div{
            margin-left:.1rem;
            display:flex;
            align-items:center;
            span{
                width:.45rem;
                height:.45rem;  
                // background-size:100%;
            }
            i{
                color:#D6D8DA;
                font-size:.45rem;
            }
            p{
                padding-left:.1rem;
                font-family:'黑体';
            }
        }
        b{
            margin-right:.1rem;
            display:block;
            width:.5rem;
        }
    }

`


export const MineList = styled.div`
    margin-top:.42rem;
    
    .music_list{
        li{
            width:100%;
            height:.5rem;

            a{
                display:flex;
                width:100%;
                height:100%;
                text-indent:.03rem;
                i{
                    line-height:.5rem;
                    text-align:center;
                    width:14%;
                    font-size:.22rem;
                    color:${defaultThemeColor}
                }   
                p{
                    width:86%;
                    line-height:.5rem;
                    font-size:.14rem;
                    font-family:'圆体';
                    font-weight:bold;
                    border-bottom:1px solid #D6D8DA; 
                    b{
                        font-size:.11rem;
                        color:#9F9F9F;
                    }
                }
            }
        }
    }
    .create-list{
        &::after{
            content:'';
            height:1px;
            display: block;
            box-shadow:1px 1px 4px 4px #F3F3F3;
        }
        margin-top:-1px;
        .am-accordion{
            .am-accordion-header{
                height:.3rem;
                background:#F3F3F3;
                font-size:.12rem;
                font-family:'圆体';
                color:#666666;
                font-weight:bold;
                text-indent:.24rem;
                line-height:.3rem;
                i{
                    width:.12rem;
                    height:.12rem;
                    top:.09rem;
                    left:.18rem;
                }
            }  
            .am-list-item{
                height:.54rem;
                .am-list-content{
                    height:.54rem;
                    padding:0 0 0 .05rem;
                    display:flex;
                    align-items:center;
                    span{
                        height:.5rem;
                        width:.5rem;
                        background:rgba(0,0,0,.7);
                        border-radius:.05rem;
                        text-align:center;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        i{
                            color:#fff;
                            font-size:.28rem;
                        }
                    }
                    .list_text{
                        font-family:'圆体';
                        height:100%;
                        margin-left:.1rem;
                        width:3.1rem;
                        border-bottom:2px solid #F0F0F0;
                        display:flex;
                        justify-content:space-between;
                        .text_box{
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                            .text1{
                                font-size:.15rem;
                                font-weight:bold;
                            }
                            .text2{
                                font-size:.12rem;
                                color:#818181;
                            }
                        }
                    }
                }
                padding:0;
                .am-list-line{
                    padding:0;
                }
                .am-list-line::after{
                    height:0;
                }
            }         
        }
    }
`