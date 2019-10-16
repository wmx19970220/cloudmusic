import styled from 'styled-components'

export const BannerStyle = styled.div`
.swiper-container{
    position:relative;
    width:100%;
    margin-top:.5rem;
    .swiper-wrapper{
        position:relative;
        .swiper-slide{
            position:relative;
            a{
                display:block;
                width:95%;
                height:auto;
                margin:0 auto;
                position:relative;
                img{
                    width:100%;
                    vertical-align:middle;
                }
                span{
                    position:absolute;
                    right:0;
                    bottom:0;
                    display:block;
                    padding:.03rem;
                    font-size:0.1rem;
                    color:#fff;
                    border-radius:.03rem
    
                }
            }
        }
    }
    
}
`