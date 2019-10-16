import styled from 'styled-components' ;

export const PayPage = styled.div`
    position : absolute ;
    left : 0 ;
    top : 0 ;
    z-index : 12345678;

    width : 100% ;
    min-height : 100% ;
    background : white ;
    .active {
        border : .01rem solid red !important;
    }
    .request{
        height : .35rem ;
        background : #FF5151 ;
        line-height : .35rem ;
        text-align : center ;
        font-size : .12rem ;
        color : white ;
    }
    .isload{
        padding : .1rem ;
        box-sizing : border-box ;
        display : flex ;
        .user_head{
            font-size : .35rem ;
        }
        .load_info{
            margin-left : .08rem ;
            p{
                font-size : .15rem ;
                font-weight : 800 ;
            }
            span {
                font-size : .12rem ;
            }
        }
        
    }
`

export const Topback = styled.div`
    height : .5rem
    background : white
    width : 100% 

    i {
        fontSize : .2rem
        margin-left : .1rem
        line-height : .5rem
    }

    span {
        line-height:.5rem
        font-size: .17rem
        margin-left : .15rem
    }
` 

export const AudioContent = styled.div`
    position : absolute ;
    top : 0 ;
    left : 0 ;
    z-index : 1234567 ;
    width : 100% ;
    min-height:100% ;
    overflow : auto ;
    ::-webkit-scrollbar { width: 0px; }  ;
    ::-webkit-scrollbar { height: 0px; } ;
    background : url(/img/playBg.jpg) no-repeat;
    background-size : 100% 100%;
`
export const ImgBox = styled.div`
    position : absolute ;
    top : 15% ;
    left : 0 ;
    right : 0 ;
    margin : 0 auto ;

    width : 50% ;
    height : auto ;
    border-radius : 50% ;
    overflow : hidden ;
    padding : .4rem ;
    background : black ;
    animation : imgbox 14s infinite linear ;
    img{
        width : 100% ;
        height : 100% ;
        border-radius : 50%;
    }
    @keyframes imgbox{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

export  const  VipType = styled.div`
    display : flex;
    justify-content : space-around;
    height : .24rem;
    width : 1.6rem ;
    border : 0.01rem solid #FF5151 ;
    border-radius:.25rem ;

    margin : 0 auto ;
    line-height : .24rem ;
    color : #FF5151 ;
    font-size : .14rem ;
    margin-top : .2rem ;
    div{
        width : 50% ;
        text-align : center ;
        height : 100% ;
        padding : 0.01rem 0 .01rem .01rem ;
    }
    
`


export const HuiseBg = styled.div`
    height : .09rem 
    width : 100%
    background : #EAEAEA 
`
export const PayLists = styled.div`
    width : 96%
    margin : 0 auto
    border : 0.01rem solid #fee

`

export const Baoyue = styled.div`
    marginTop : .12rem
    height : 0.5rem
    boxSizing : border-box
    padding : 0.05rem
    display : flex 
    justify-content : space-between
    margin : 0
    border : .01rem solid transparent 

    .leftbox {

        span {
            font-weight : 100
            font-size : .08rem
            padding : 0.02rem
            padding-left : .04rem
            background : #FFD2D2 
            border-radius : 0.15rem 
            color : red    
        }

        em {
            font-weight : 100
            font-size : .08rem
            color : #ccc
        }
    }

    .rightbox {
        line-height : .4rem
        color : #FF5151
    }
`

export const Del = styled.del`
    color : #ccc
    font-size : 0.09rem
    font-weight : 100
    margin-left : 0.04rem
    text-decoration:line-through 
    flex :1
`

export const Shieryue = styled.div`
    height : 0.5rem
    box-sizing : border-box
    padding : 0.05rem
    display : flex 
    line-height : 0.4rem
    border : .01rem solid transparent 

    .rightbox {
        height : 100%
        display : flex 
        flex-direction : column
        justify-content : space-around

        p {
            line-height : .25rem
            color : #FF5151
            text-align : right
        }

        span {
            line-height : .15rem
            font-size : 0.12rem                                         
        }
    }
`

export const Sangeyue = styled.div`
    height : 0.5rem
    box-sizing : border-box
    padding : 0.05rem
    display : flex 
    line-height : 0.4rem
    border : .01rem solid transparent 

    .rightbox {
        height : 100%
        display : flex 
        flex-direction : column
        justify-content : space-around

        p {
            line-height : .25rem
            color : #FF5151
            text-align : right
        }

        span {
            line-height : .15rem
            font-size : 0.12rem                                         
        }
    }
`

export const Yigeyue = styled.div`
    height : 0.5rem
    box-sizing : border-box
    padding : 0.05rem
    display : flex 
    line-height : 0.4rem
    justify-content : space-between 
    border : .01rem solid transparent 

    span {
        line-height : .4rem
        color : #FF5151
    }
`

export const Liangyuan = styled.div`
    margin-top : .12rem
    height : 0.5rem
    box-sizing : border-box
    padding : 0.05rem
    display : flex 
    justify-content : space-between
    margin : 0
    line-height : .4rem

    span {
        margin-right : .08rem
    }
`

export const Youhui = styled.div`
    margin-top : .2rem
    padding : 0 .1rem
    margin-bottom : .35rem
    display : flex
    justify-content : space-between

    span {
        font-size : .12rem
        font-weight : 900

        i {
            font-size : .12rem
            margin-left : .1rem
        }
    }
`

export const PayPath = styled.div`
    .weixinbox {
        display : flex 
        margin-top : .05rem
        justify-content : space-between

        .leftbox {
            display : flex 
            margin-top : .05rem
            justify-content : space-between

            img {
                width : .45rem
                height : .3rem
            }

            p {
                line-height: .3rem

                span {
                    background : red
                    font-size : .04rem
                    vertical-align: middle
                    color : white
                    padding : .01rem
                    line-height: .3rem 
                }
            }
        }

        .right_img {
            width : .2rem
            height : .2rem
            margin-top : .08rem
            margin-right : .15rem
        }
    }
`

export const Zhifubao = styled.div`
    display : flex 
    margin-top : .05rem
    margin-bottom : .1rem
    justify-content : space-between
    
    .leftbox {
        display : flex 
        margin-top : .05rem
        justify-content : space-between

        img {
            width : .23rem
            height : .23rem
            margin : 0rem .1rem
        }
    }

    .right_img {
        width : .2rem
        height : .2rem
        margin-top : .08rem
        margin-right : .15rem
}

`

export const Duihuanma = styled.div`
    height : .5rem
    line-height : .5rem
    display : flex
    justify-content : space-between
    padding : 0 .1rem

    i {
        line-height : .5rem
    }

`

export const Lipinka = styled.div`
    height : .5rem
    line-height : .5rem
    display : flex
    justify-content : space-between
    padding : 0 .1rem

    i {
        line-height : .5rem
    }
`

export const Attntion = styled.div`
    width : 100%
    background : #EAEAEA 
    padding-top : .12rem

    p {
        text-align : center

        span {
            font-size : .08rem
            color : blue
        }
    }

    .help {
        margin-top : .3rem
        font-size : .08rem
        color : #ccc
        text-align : center
        text-decoration : underline
        padding-bottom : .4rem 
    }
`

export const Zongji = styled.div`
    height : .4rem
    background : white
    display : flex
    justify-content : space-between

    div {

        i {
            line-height : .4rem
        }

        span {
            line-height : .4rem
            color : #FF4040
        }
    }

    .queren {
        width : 1.2rem
        background : #FF7256
        line-height : .4rem
        text-align : center
    }
`

export const TopBack = styled.div`
    position : absolute ;
    left : 0 ;
    top : 0 ;
    width : 100% ;
    height : .5rem ;
    background : rgba(0,0,0,.3);
    display : flex ;
    align-items : center;

    i {
        color : white
        font-size : .2rem 
        line-height:.5rem
        margin-left : .15rem
    }

    .back_content {
        margin-left : .15rem

        p {
            color : white
            font-size : .18rem
        }

        span {
            font-size : .13rem
            color : #999
        }
    }
`

export const Buttons = styled.div`
    position : absolute
    left : 0
    bottom : .5rem
    display : flex
    width : 100%
    justify-content : space-around
    align-items : center

    i {
        color : white 
        font-size : .2rem
    }

` 

export const PlayPage = styled.div`
    audio {
        position : absolute
        bottom : 1.2rem
        background : transparent 
        height : 0.1rem 
        width : 150% 
        margin-left : -1.2rem
        margin-bottom : .05rem
    }

`