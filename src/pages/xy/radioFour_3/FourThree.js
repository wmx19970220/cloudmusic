import styled from 'styled-components'
import border from 'utils/border'

export const FourThree = styled.div`
width:100%;
height:100%;
position:fixed;
background:#fff;
top:0;
left:0;
z-index:10;
overflow:auto
.bigbox{
    height:100%
}

.paylists{
    margin-top:.03rem;
    padding-left:.05rem;
    a{
        display:flex
        img{
            width:1.2rem;
            height:1.2rem;
            border-radius:.05rem
        }
    }
}
`

export const FourRight = border({
    component: styled.div`
    flex:1;
    padding:.1rem 0 .2rem .1rem ;
    display:flex;
    flex-direction:column;
    h2{
        font-size:.15rem;
        font-family:STHeiti ;
        font-weight:800;
        margin-bottom:.1rem
    }
    i{
        color:#D33A31;
        font-size:.1rem;
        padding-top:.1rem;
        font-size:.14rem;
    }
    span{
        color:#666;
        font-size:.12rem;
        margin-bottom:.05rem;
    }
`,
    width: '0 0 1px 0',
    style: 'solid',
    color: '#ccc',
    radius: 0,
})
