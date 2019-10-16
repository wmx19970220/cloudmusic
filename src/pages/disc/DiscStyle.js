import styled from 'styled-components'
import {defaultThemeColor} from 'theme'

export const DiscContainer = styled.div`
    background:#f3f3f3;
    .disc_top_bar{
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
    .digital_disc{
        width:100%;
        background:#fff;
        margin-bottom:.1rem;
        h1{
            padding:.1rem 0 .1rem .1rem;
            font-weight:blod;
            font-size:.16rem;
        }
        .disc_content{
            width:100%;
            padding:0 2.5%;
            box-sizing:border-box;
            display:flex;
            .disc_box{
                position:relative;
                width:33%;
                margin-bottom:.2rem;
                img{
                    width:80%;
                    vertical-align:middle;
                    border-radius:.03rem;
                    border:1px solid #ccc;
                }
                p{
                    width:80%;
                    margin:.02rem 0;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    font-size:.1rem;
                    font-weight:bold;
                }
                h2{
                    width:80%;
                    font-size:.1rem;
                    font-weight:normal;
                    color:#909090;
                }
            }
        }
    }
    .weekly_disc{
        width:100%;
        background:#fff;
        h1{
            padding:.1rem 0 .1rem .1rem;
            font-weight:blod;
            font-size:.16rem;
        }
        .disc_content{
            width:100%;
            padding:0 2.5%;
            box-sizing:border-box;
            display:flex;
            flex-wrap:wrap;
            .disc_box{
                position:relative;
                width:50%;
                margin-bottom:.2rem;
                .pic_box{
                    img{
                        width:80%;
                        vertical-align:middle;
                        border-radius:.03rem;
                        border:1px solid #ccc;
                    }
                }
                
                p{
                    width:80%;
                    margin:.02rem 0;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    font-size:.12rem;
                    font-weight:bold;
                }
                h2{
                    width:80%;
                    font-size:.1rem;
                    font-weight:normal;
                    color:#909090;
                }
            }
        }
    }
`