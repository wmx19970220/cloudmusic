import styled from 'styled-components'

import {defaultThemeColor} from 'theme'

export const TitleContainer = styled.div`
    position:absolute;
    top:0;
    width:100%;
    background:${defaultThemeColor};
    ul{
        display:flex;
        width:100%;
        height:1.3rem;
        li{
            width:33.3%;
            height:.5rem;
            text-align:center;
            line-height:.5rem;
            a{
                display:block;
                width:100%;
                height:100%;
                text-decoration:none;
                color:#D3D3D3;
                &.active{
                    color:#fff;
                    font-weight:bold;
                    span{
                        border-bottom:1px solid #fff;
                    }
                }
                span{
                    padding:.07rem;
                }
            }
        }
    }
`