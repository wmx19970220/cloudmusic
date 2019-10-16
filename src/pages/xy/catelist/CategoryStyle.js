import styled from 'styled-components'

export const CategoryStyle = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top:.2rem
.category{
    margin-top:.1rem
    .cateicon{
        padding-left: .07rem;
        text-align:left
        span{
            font:bold .16rem/.2rem '圆体';
            padding-right:.02rem;
        }
        i{
            color:#666
        }
    }
    ul{
        height:200px;
        width:100%;
        display:flex;
        padding-top:.1rem
        justify-content:space-around;
        li{
            width:31.5%;
            .catetop{
                position:relative
                width:100%;
                img{
                    width:100%;
                    height:100%;
                    border-radius: .03rem;
                }
                span{
                    color:white;
                    font-size:.1rem;
                    position:absolute;
                    bottom:.04rem;
                    z-index:5;
                    left:0;
                }
            }
            .catebottom{
                i{
                    font-size:.12rem;
                    text-align:left!important
                }
            }
        }   
    }
}

`