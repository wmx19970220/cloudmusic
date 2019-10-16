import styled from 'styled-components'
import { defaultThemeColor } from 'theme'
export const Searchcontainer=styled.div`
position:fixed;
top:0;
left:0;
 width:100%;
 height:100%;
 backgorund:white;
 .search_list{
     position:absolute;
     left:5%;
     top:0.5rem;
     width:90%;
     box-shadow:1px 0 3px  1px #ccc;
     span{
         overflow:hidden;
     }
     
     li{
         width:100%;
         height:0.45rem;
         background:white;
         line-height:0.45rem;   
         padding:0.05rem;
         border:solid 1px gary;
         white-space:nowrap;
         overflow:hidden;
         text-overflow:ellipsis;     
     }
 }
 .fa{
     margin-right:0.02rem;
     color:#D3D3D3;
     span{
         display:inline-block;
         height:100%;
         overflow:hidden
     }
 }
 .songs_fl{
     font-size:0.14rem;
     text-align:center;
     height:0.4rem;
     line-height:0.4rem;
     border-bottom: solid 0.01rem #D3D3D3;
     a{display:inline-block;
         width:100%;
         height:100%;
         &:hover{
            background:gary
        }
     }
     
     span{color:#D3D3D3}
 }
 .am-icon{
     height:0.5rem;
     width:10%;
     background:${ defaultThemeColor } 
 }
 .hot_b{
     display:inline-block;
     font-size:0.13rem;
     margin:0.12rem 0.1rem;
     
     color:gary  
 }
 .head_box{
    display:flex;
    color:white
 }
 .am-tag-normal{
    margin:0.05rem;
    display:inline-block;
    border:0.008rem solid   	#F5F5F5;
    height:0.25rem;
    line-height:0.25rem;
    border-radius:0.05rem
    
 }
 .input_box{
     width:90%;
     height:0.5rem;
     background:${ defaultThemeColor };
     border:none;
     color:white;
     font-size:0.15rem
     &::-webkit-input-placeholder{
        color:#CDCDB4;}
 }
`