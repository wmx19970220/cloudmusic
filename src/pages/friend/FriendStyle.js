import styled from 'styled-components'
import border from 'utils/border';

export const FriendContainer = border({
    component:styled.div`
    // margin-top:.5rem;
    .info_container{
        padding-top:.2rem;

        background:#fff;
        
        .info_top{
            display:flex;
            padding-left:5%;
            margin-bottom:.1rem;
            img{
                width:.3rem;
                height:.3rem;
                border-radius:50%;
                border:1px solid #000;
            }
            .user{
                margin-left:.1rem;
                font-size:.12rem;
            }
        }
        .info_content{
            padding-left:10%;
            padding-right:5%;
            p{
                font-size:.12rem;
                margin-bottom:.1rem;
            }
            img{
                width:100%;
            }
        }
        .info_bottom{
            display:flex;
            align-items:center;
            height:.3rem;
            padding-left:10%;
            .count{
                width:50%;
                display:flex;
            }
            .extra{
                width:50%;
                text-align:right;
                
            }
            span,.iconfont{
                display:inline-block;
                font-size:.1rem;
                margin-right:.1rem;
            }
        }
    
    `,
    width : '0 0 1px 0',
    style : 'solid',
    color : '#ccc',
    radius : 0
})




    