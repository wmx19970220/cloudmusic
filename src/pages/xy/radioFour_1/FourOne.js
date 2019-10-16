import styled from 'styled-components'
import border from 'utils/border'

export const FourOne = styled.div`
width:100%;
height:100%;
position:fixed;
overflow:auto;
background:#fff;
top:0;
left:0;
z-index:10
text-align:center;
.hot{
    font-size: .16rem;
    font-weight: 900;
    padding-left: .07rem;
    font-family:STHeiti ;
}
.space{
    height:.12rem;
    width:100%;
}

`
export const RadioBorder = border({
    component: styled.div`
        width:100%
        display:flex;
        margin-top:.12rem;
        margin-bottom:.12rem;
        flex-wrap:wrap
        li{
            width:40%;
            height:.5rem;
            padding-left:.3rem
            a{
                display:flex;
                align-items:center
                img{
                    width:.25rem;
                    height:.25rem;    
                }
                span{
                    line-height:.5rem;
                    font-size:.14rem;
                    font-family:STHeiti ;
                    font-weight: 900;
                    padding-left: .07rem;
                }
            }
            
        }
    
    `,
    width: '1px 0 1px 0',
    style: 'solid',
    color: '#ccc',
    radius: 0,
})