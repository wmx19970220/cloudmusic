import styled from 'styled-components';
import border from 'utils/border';

export const Page = styled.div`
    position : fixed ;
    top : 0 ;
    left : 0 ;
    z-index : 1000 ; 
    overflow:auto;
    width : 100% ;
    height : 100% ;
    background : white ;
    .list_box{
        padding : 0 .15rem ;
        .list_item a{
            display : flex ;
            align-items : center ;
            .list_num {
                margin-right : .15rem ;
                color : #A52A2A
            }
        }
    }
`
/* 主体部分的顶部 */
export const ListTop = border({
    component : styled.div`
    height : .36rem ;
    display : flex ;
    padding-left : .15rem ;
    justify-content : space-between ;
    .listTop_right {
        font-size : .13rem ;
        color : white ;
        line-height : .36rem ;
        background-color : red ;
        border-radius : 0 .15rem  0 0;
        padding : 0 .2rem ;
    }
`,
    width : '0 0 1px 0',
    style : 'solid',
    color : '#ccc',
    radius : 0
});

/* 下面的主题部分 */
export const MusicLists = styled.div`
    background : #fff ;
    margin-top : -.2rem ;
    border-radius : .15rem ;
    height : 5rem ;
    box-sizing : border-box ;
`

/* 头部盒子 */
export const TopBg = styled.div`
    height : 2.5rem ;
    background : url('/img/topbg.jpg') no-repeat ;
    background-size : 100% 100% ;
    overflow : hidden ;
    }
`
export const TopContent = styled.div`
    
    .topcontent_box{
        display : flex
        margin-top : .5rem ;
        margin-left : .15rem
        .leftbox {
            position : relative ;
            height : 1.1rem ;
            width : 1.1rem ;
        
            img {
                display : block ;
                width : 100% ;
                height : 100% ;
            }

            .img_content {
                position : absolute ;
                top : 0.03rem ;
                right : 0.05rem ;

                i {
                    font-size : .1rem ;
                    color : white ;
                }

                span {
                    font-size : .1rem ;
                    color : white ;

                }
            }

            .info {
                position : absolute ;
                right : .05rem ;
                bottom : .03rem ;
                font-size : .15rem ;
                color : white ;
            }
        }

        .rightbox {
            margin-left : .12rem ;

            .name {
                margin-top : .1rem ;
                font-weight : 900 ;
                color : #FFA500 ;
            }

            .office_info {
                height : .2rem ;
                margin-top : .35rem ;
                margin-left : .1rem ;

                img {
                    width : .2rem ;
                    height :.2rem ;
                    border-radius : .04rem ;
                    vertical-align : middle ;
                    display : inline-block ;
                }

                span {
                    line-height : .27rem 
                    vertical-align : middle 
                    font-size : .12rem
                    color : #FFA500
                }
            }
        }
    }
    .choose{
        margin-top : .15rem;
        ul {
            display : flex ;
            justify-content : space-around ;
            li{
                width : 25% ;
                text-align : center ;
                p{
                    text-align : center ;
                    margin-top : .1rem ;
                    font-size : .12rem ;
                }
            }
        }
    }

`

export const InfoBox = styled.div`
    position : fixed 
    top : 0 
    left : 0 
    width : 100% 
    height : 100% 
    background : #8B0000 
    z-index : 123456 
    
    #img-img {
        width : 1.5rem
        height : 1.5rem
        display : block 
        margin : 0 auto 
        margin-top : .8rem
    }

    .title {
        color : white 
        margin-top : .15rem 
        text-align : center
    }

    .label {
        color : white 
        font-size : .12rem 
        padding : 0 .3rem 
        margin-top : .5rem
    }

    .description {
        color : white
        margin-top : .2rem 
        font-size : .12rem 
        padding : 0 .3rem
    }
`

/* 音乐列表的列表的主体部分 */
export const ListItemContent = border({
    component : styled.div`
    flex : 1 ;
    padding : .07rem 0 ;
    p {
        font-size : .13rem ;
        font-weight : 700 ;
    }
    span {
        font-size : .1rem ;
    }
`,
    width : '0 0 1px 0',
    style : 'solid',
    color : '#ccc',
    radius : 0
});

export const HeadBox = styled.div`
position : absolute;
left : 0 ;
top : 0
width : 100%
height : .5rem

i {
    line-height : .5rem ;
    font-size : .2rem;
    margin-left : .13rem ;
    color : white 
}

span {
    margin-left : .1rem ;
    color : white
}
`

export const SearchBox = styled.div`
    position : fixed ;
    top : .0rem ;
    left : 0 ;
    background : white ;
    width : 100% ;
    height : 100% ;
    z-index : 123456 ;
    overflow : auto

    .search_top {
        display : flex ;

        i {
            line-height : .5rem 
            font-size : .25rem
            margin-left : .13rem 
            color : #CDCDB4 
        }

        input {
            border : 0 ;
            outline : 0 
            border-bottom : .02rem solid #aaa 
            flex : 1 
            margin : 0 .1rem 
            line-height : .4rem 
            font-size : .2rem
        }

    }
`
 
export const SearchContent = styled.div`
    margin-left : .05rem 
    border-bottom : 0.01rem solid #aaa   
    padding : 0.05rem

    a {
        display : flex 
        height : .4rem  

        span {
            color : black
            line-height : .4rem
            margin-right : .1rem
        }

        div {
            flex : 1

            .p_top {
                font-size : .14rem 
                font-weight : 900
            }

            .p_bottom {
                margin-left : .1rem 
                font-size : .10rem 
                color : #666
                margin-top : .05rem
            }
        }

        i {
            align-self : center
            margin-right : .1rem
            color : black
        }
    }

`