import styled from 'styled-components'
import border from 'utils/border'

export const RadioCateStyle = styled.div`
width:100%
span{
    font-size: .13rem;
    font-weight: 900;
    padding-left: .07rem;
    font-family:STHeiti ;
}

`

export const RadioBorder = border({
    component: styled.div`
        width:100%
        display:flex;
        margin-top:.1rem;
        margin-bottom:.1rem;
        flex-wrap:wrap
        li{
            width:40%;
            height:.4rem;
            padding-left:.3rem
            
            
            a{
                display:flex;
                align-items:center
            img{
                width:.2rem;
                height:.2rem;    
            }
            span{
                line-height:.4rem;
                font-size:.12rem;
                font-family:STHeiti ;
            }  
            }

        }
    
    `,
    width: '1px 0 1px 0',
    style: 'solid',
    color: '#ccc',
    radius: 0,
})
