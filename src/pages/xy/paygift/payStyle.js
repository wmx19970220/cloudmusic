import styled from 'styled-components'

export const PayStyle = styled.div`
width:100%
height:3rem
background: url(http://img5.imgtn.bdimg.com/it/u=256206375,3260415920&fm=26&gp=0.jpg)100% 150% no-repeat;
h2{
    text-align:center
    font:bold .18rem/.2rem '圆体'
}
p{
    color:#666;
    font-size:.12rem;
    text-align:center;
    margin-top:.04rem
}
.paymore{
    text-align:center;
    width:1.5rem;
    height:.2rem;
    border-radius:.2rem;
    border:1px solid white;
    margin:.1rem auto;
    padding:.1rem 0;
    line-height:.2rem
}
ul{
    height:1.8rem;
    width:100%;
    padding-top:.25rem;
    display:flex;
    justify-content:space-around;
    li{
        width:32.5%;
        display:flex;
        flex-direction:column
        .paytop{
            position:relative
            width:100%;
            img{
                width:100%;
                border-radius: .03rem;
                display:block
            }
            span{
                color:white;
                font-size:.1rem;
                position:absolute;
                bottom:.04rem;
                z-index:5;
                left:0;
            }
            em{
                color:white;
                font-size:.1rem;
                position:absolute;
                top:0;
                z-index:5;
                left:0;
                width:.55rem;
                height:.15rem;
                background-color:#CC4844;
                border-radius: .03rem 0 .03rem 0;
                text-align:center;
                font-weight:300;
                line-height:.15rem
            }
        }
        .paybottom{
            display:flex;
            flex-direction:column;
            background:white;
            flex:1
            i{
                color:black;
                font-size:.13rem;
                font-weight:700;
                margin-top:0.02rem
            }
            span{
                color:#DE6A63;
                font-size:.13rem;
                font-weight:700;
                margin-top:0.02rem
            }
        }
    }
}
`