import styled from 'styled-components'

export const TodayDetailStyle = styled.div`
width:100%;
height:100%;
position:fixed;
background:#fff;
top:0;
left:0;
z-index:10

.bigbox{
    width:100%;
    position:relative;
    .headbox{
        width:100%
        display:flex;
        position:absolute;
        top:.1rem;
        z-index:20
        i{
            font-size:.2rem;
            color:white;
            padding:0 .1rem
        }
        .headright{
            position:absolute;
            top:0;
            right:0
            i{
                padding:0 .1rem
            }
        }
    }
    
    img{
        width:100%;
        display:block;
    }

    .bottombox{
        width:100%
        display:flex;
        position:absolute;
        bottom:.2rem;
        z-index:20
        span{
            font-size:.16rem;
            color:white;
            padding:0 .1rem;
            font-weight:800;
            font-family:'微软雅黑'
        }
        i{
            background:#F65345
            padding:.1rem .2rem
            color:white;
            border-radius:.2rem
            position:absolute;
            right:.1rem;
            bottom:0
        }
    }
    p{
        font-size:.14rem;
        color:white;
        padding:0 .1rem;
        font-weight:800;
        font-family:'微软雅黑'
    }
    .mask{
        position:absolute;
        width:100%;
        height:100%
        top:0;
        left:0;
        background:rgba(0,0,0,.3);
        z-index:15
    }
}
`