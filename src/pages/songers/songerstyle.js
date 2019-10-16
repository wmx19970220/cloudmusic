import styled from 'styled-components'
import { defaultThemeColor } from 'theme'
export const   Songerstyle=styled.div`
.fl_box
         {
        width:100%;
        height:auto;      
    };
.hang_box{
    height:0.5rem;
    line-height:0.5rem;
    padding-left:0.13rem
};
.head_box{
    height:0.5rem;
    width:100%;
    background:${ defaultThemeColor };
    display:flex;
    .am-icon-md{
        width:10%;
        height:0.5rem;
        color:white
    };
    .text_box{
        display:inline-block;
        height:0.5rem;
        line-height:0.5rem;
        color:white;
        text-align:center;
    };
    
}

` 