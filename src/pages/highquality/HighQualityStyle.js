import styled from 'styled-components'
import {defaultThemeColor} from 'theme'
export const HighQualityContainer = styled.div`
    .top-bar{
        position:fixed;
        top:0;
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
    .highquality_list{
        display:flex;
        .list_left{
            img{
                width:.8rem;
                height:.8rem;
            }
        }
        .list_right{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            margin-left:.2rem;
            padding:.1rem 0;
            h1{
                font-size:.12rem;
            }
            h2{
                font-size:.09rem;
                font-weight:normal;
                color:#aaaaaa;
            }
            p{
                .tag{
                    font-size:.05rem;
                    padding:.01rem;
                    color:#e79691;
                    border:#e79691 solid 1px;
                    margin-right:.05rem;
                }
                .copywriter{
                    font-size:.08rem;
                    color:#818181;
                }
            }
        }
    }
`