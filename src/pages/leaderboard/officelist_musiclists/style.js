import styled from 'styled-components';
import border from 'utils/border';

/* 整个页面的盒子 */
export const Content = styled.div`
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
/* 头部大盒子 */
export const TopBg = styled.div`
    height : 2.5rem ;
    background : url('/img/topbg.jpg') no-repeat;
    background-size : 100% 100% ;
    overflow : hidden ;
    /* 飙升榜盒子 */
    .biaoshengbang {
        font-size : .3rem ;
        margin-left : 0.02rem ;
        color : #FF0000	 ;
        margin-top : .8rem ;
        i {
            font-size : .12rem ;
            position : relative ;
            div {
                position : absolute ;
                top : .05rem ;
                left : 50% ;
                margin-left : -0.08rem

                width: 0;
                height: 0;     
                border-width: .08rem;  
                border-style: solid;
                border-color: transparent transparent #272727 transparent;             
            }
        }
    }
    /* 飙升榜旁边的icon */
    .description {   
        position : absolute ;            
        background : #272727 ;
        margin-top : 0.04rem ;
        height : .3rem ;
        width : 95% ;
        margin-left : -2.5% ;
        border-radius : 0.02rem ;
        color : #fff ;
        font-size : 0.12rem ;
        line-height : .3rem ;
        padding-left : .15rem ;
        box-sizing : border-box ;
    }
`
/* 头部盒子下面的四个选项 */
export const TopContent = styled.div`
    margin-top : .6rem ;
    margin-left : .3rem ;
    .choose{
        margin-top : .6rem;
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
/* 下面的主题部分 */
export const MusicLists = styled.div`
    background : #fff ;
    margin-top : -.2rem ;
    border-radius : .15rem ;
    height : 5rem ;
    box-sizing : border-box ;
`
/* 主体部分的顶部 */
export const ListTop = border({
    component : styled.div`
    height : .36rem ;
    display : flex ;
    padding-left : .15rem ;
    justify-content : space-between ;
    .listTop_left{
        i{
            font-size : .17rem ; 
            line-height : .36rem ;
        }
        span {
            font-size : .16rem ;
            line-height : .36rem ;
            font-weight : 900 ;          
            b{
                font-size : .12rem ;
                line-height : .36rem ;
                font-weight : 100;
                color : #778899 ;
            }
        }
    }
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
position : absolute ;
top : 0 ;
bottom : 0 ;
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