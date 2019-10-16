import styled from 'styled-components'

export const RunningContainer = styled.div`
.running-box{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#242430;
    .top-bar{
        display:flex;
        width:100%;
        height:.5rem;
        color:#fff;
        .left,.right{
            width:20%;
            text-align:center;
            line-height:.5rem;
        }
        .fm-category{
            display:flex;
            justify-content:center;
            width:80%;
            div{
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                a{
                    width:100%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    text-align:center;
                    margin:0 .1rem;
                    font-size:.05rem;
                    color:#5e5e62;
                    .iconfont{
                        font-size:.25rem;
                    }
                }
                .active{
                    color:#fff;
                }
                
            }
        }
        
    }
    .running-content{
        position:relative;
        flex:1
        width:100%;
        .running-wrapper{
            position:absolute;
            top:10%;
            left:50%;
            width:3rem;
            height:3rem;
            margin-left:-1.5rem;
            text-align:center;
            .timer{
                width:2rem;
                height:2rem;
                margin:0 auto;
                
                border:#53515d .1rem solid;
                border-radius:50%;
                div{
                    color:#fff;
                    font-size:.2rem;
                    font-weight:bold;
                    margin-top:1rem;
                    margin-bottom:.1rem;
                }
                .info{
                    font-size:.14rem;
                    color:#a8a8ae;
                }
            }
            h1{
                color:#adaab0;
                margin:.2rem 0;
                font-size:.14rem;
                font-weight:normal;
            }
            p{
                color:#8a868e;
                font-size:.1rem;
            }
        }
        
    }
}
`