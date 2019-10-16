import styled from 'styled-components'
import { defaultThemeColor } from 'theme/index'

export const BackContainer = styled.div`
    height:0.5rem;
    background:${defaultThemeColor};
    .icon_box{
        height:100%;
        display:flex;
        align-items:center;
        span{
            color:#fff;
            font-size:.20rem;
        }
    }
    i{
        color:#fff;
        font-size:.22rem;
        margin-left:.1rem;
        margin-right:.15rem;
    }
`