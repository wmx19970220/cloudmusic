import styled from 'styled-components'
import border from 'utils/border'

export const RadioFourStyle = border({
    component: styled.div`
    width:100%
    display:flex;
    justify-content:space-around;
    margin-bottom:.25rem;
    padding:.15rem 0
    a{
        display:flex;
        flex-direction:column;
        align-items:center
        .circle{
            width:.4rem;
            height:.4rem;
            background:#EB483C
            border-radius:50%;
            text-align:center;
            i{
                font-size:.2rem;
                color:white;
                line-height:.4rem;
            }
        }
        span{
            font-size:.12rem;
            padding-top:.1rem
        }
    }
    
    `,
    width: '0 0 1px 0',
    style: 'solid',
    color: '#ccc',
    radius: 0,
})

