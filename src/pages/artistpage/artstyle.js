import styled from 'styled-components'
import { defaultThemeColor } from 'theme'
export const  Artbox=styled.div`
width:100%;
height:100%;
.data_box{
    width:100%;
    height:100%;
    overflow:auto;
}
.am-tabs-default-bar-underline{
    border:  1px  solid yellow;
}
._box{
    width:100%;
    height:auto;
    
}
.head_box{
    background:${ defaultThemeColor };
    width:100%;
    height:0.5rem;
    display:flex;
    
}
.am-icon-md{
    width:10%;
    height:0.5rem;
    color:white
}
.name_box{
    display:inline-block;
    width:90%;
    height:0.5rem;
    color:white;
    text-align:center;
    line-height:0.5rem;
    overflow:hidden
}
.left_box{
   width:65%;
   padding:0.1rem;
   font-size:0.13rem;
   span{
       font-size:0.1rem
   }
}
.img_box{
    display:flex;
    width:1.2rem;
    height:0.7rem;
    border-radius:0.06rem;
    justify-content:flex-end;
    padding:0.06rem;
    margin:0.05rem  0.04rem;
   
    
}
.v_name{
    margin-bottom:0.05rem
}
.play_box{
   
    color:white;
    font-size:0.09rem
}
.video_box{
   display:flex;
   width:100%;
   border-bottom:0.01rem solid #E6E6FA
}
.blue_box{
    color:#6495ED;
    font-size:0.13rem
}
.am-tabs-default-bar-tab{
    background:${defaultThemeColor};
    color:white
}
.star_box{
   font-size:0.12rem;
   margin:0.12rem;
   overflow:hidden
}
.songs_starts{
    
    width:100%;
    height:0.62rem;
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
   
};
.info_box{
    width:100%;
    height:100%;
    fint-size:0.15rem;
    padding:0.12rem;
}

}

`