import styled from 'styled-components'
import { defaultThemeColor } from 'theme'
export const Pagestyle=styled.div`
width:100%;
height:100%;
.head_box{
    background:${ defaultThemeColor };
    width:100%;
    height:0.5rem;   
    display:flex
}
.am-icon-md{
    width:10%;
    height:0.5rem;
    color:white
}
.text_box{
    display:inline-block;
    width:90%;
    height:0.5rem;
    color:white;  
    line-height:0.5rem;
    overflow:hidden
}
.list_box{
    width:100%;
height:100%;
}
.songer_box{
    width:100%;
    height:auto;
    font-size:0.1rem;
    border-bottom:solid 1px #E0EEE0;
    padding:0.05rem 0 0.05rem 0.15rem;
    img{
        width:0.5rem;
        height:0.5rem;
        border-radius:0.1rem
    };
    
  p,span{
      margin:0.03rem
  }
}
`