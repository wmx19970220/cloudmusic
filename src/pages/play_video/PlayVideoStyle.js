import styled from 'styled-components'

export const PlayVideoContainer = styled.div`
    @media screen and (orientation: portrait) {
        html{
            width : 100% ;
            height : 100% ;
            overflow : hidden;
        }
        body{
            width : 100% ;
            height : 100% ;
            overflow : hidden;
        }
        #print{
            position : absolute ;
            background:#000;
        }
    } 
    @media screen and (orientation: landscape) {
        html{
            width : 100% ;
            height : 100% ;
        } 
        body{
            width : 100% ;
            height : 100% ;
        }
        #print{
            position : absolute ;
            top : 0 ; 
            left : 0 ;
            background:#000;
            width : 100% ;
            height : 100% ;
        }
    }
    #print video{
        margin: auto ;
        text-align: center;
        width:100%;
        height:100%;
    }

    #print span{
        position:absolute;
        top:5%;
        left:3%;
        z-index:10;
        width:.3rem;
        height:.3rem;
        text-align:center;
        line-height:.3rem;
        color:#fff;
        font-size:.2rem;
        font-weight:bolder;
    }

`