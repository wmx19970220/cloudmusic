import styled from 'styled-components'
import border from 'utils/border'

export const TodayStyle = styled.div`
width:100%;
ul{
    width:100%;
    margin-top:.2rem;
    margin-bottom:.3rem;
    li{
       a{
        display:flex;
        margin-bottom:.05rem;
        padding-left:.07rem;
        img{
            width:1rem;
            height:1rem;
            border-radius:.03rem
        }
       }
    }
}
`
export const TodayRight = border({
    component: styled.div`
    flex:1;
    padding:.2rem 0 .2rem .1rem ;
    display:flex;
    flex-direction:column;
    h3{
        text-align:left;
        font-family:none
        font:bold .16rem/.2rem '圆体'
    }
    i{
        text-align:left;
        color:#666;
        font-size:.1rem;
        padding-top:.1rem;
        padding-bottom:.07rem;
    }
    span{
        color:#666;
        font-size:.12rem
    }
`,
    width: '0 0 1px 0',
    style: 'solid',
    color: '#ccc',
    radius: 0,
})


export const TodayHead = styled.div`
display:flex;
justify-content:space-between;

h3{
    padding-left:.07rem
    vertical-align:top;
    font:bold .18rem/.2rem '圆体'
}
div{
    i{
        width:.2rem;
        height:.2rem
    }
    span{
        padding-right:.07rem;
        color:#666
    }
}

`