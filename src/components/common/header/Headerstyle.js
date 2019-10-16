import styled from 'styled-components'

import { defaultThemeColor } from 'theme'

export const HeaderContainer = styled.div`
    width:100%;
    height:.50rem;
    background:${ defaultThemeColor } 
    display:flex;
    justify-content:space-between;
    font-size:.22rem;
    color:#fff;
    .am-navbar{
      background:${ defaultThemeColor } 
    }
    .big_box{
      overflow:auto;
      position:relative;
    }
    .fa-search{color:white}
    .my-drawer {
      
      top:0.505rem;
      left:-0.1rem;s
      -webkit-overflow-scrolling: touch;s
    }
    .my-drawer .am-drawer-sidebar {
      background-color: #fff;
     
      -webkit-overflow-scrolling: touch;
      
    }
    .my-drawer .am-drawer-sidebar .am-list {
      width: 3.2rem;
      padding: 0;
    }
    .am-list-body{  
          .LoginBar{
            height:1.4rem;
            width:100%;
            background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569058821078&di=246b5ab6f0ad392d8691c224520918d0&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F7592eee7b36fe55c2fda6a5699657d023155d957220f6-ez33zZ_fw658'); 
            font-size:0.12rem;
            dispaly:flex;
            // padding-top:20px; 
            button{
              width:1.5rem;
              height:0.3rem;
              margin-left:0.9rem;
              border: solid gray 1px;
              border-radius:0.1rem;
              color:white;
              background:rgba(0, 0, 0, 0);
              &:hover{
                background:gray
              }
            }
            .ydl_box{
              width:100%;
              height:100%;
              padding-left:0.18rem;
              padding-top:0.3rem;
              padding-bottom:0.1rem
            }
            .nice_box{
              font-size:0.14rem;
              display:inline-block;
              height:0.3rem;
            }
            .ava_box{
              width:0.6rem;
              height:0.6rem;
              border-radius:50%;
              background-size:100% 100%;
              margin-bottom:0.1rem;

            }
            .qiandao{
              display:inline-block;
              height:0.3rem;
              font-size:0.12rem;
              line-height:0.3rem;
              width:0.6rem;
              border:solid 1px white;
              text-align:center;
              margin-left:1.5rem;
              border-radius:0.2rem
            }
            .login_box{

                width:100%;
                height:40%;
                padding-top:0.25rem;
                p{ 
                  margin-left:1.08rem;
                  margin-bottom:0.05rem
                }
                span{
                  margin-left:0.42rem
                }
                
            }
          }
      }
      
      .Foot_box{
       
       position:sticky;
       left:0;
       bottom:0;
        height:0.5rem;
        
        font-size:0.13rem;
        text-align:center;
        display:flex;
        justify-content:space-between
        a{
          display:inline-block;
          width:33%;
          height:0.5rem;
          line-height:0.5rem;
          padding-top:0.04rem;
          background:white;
          &:hover{
            background:gary
          }
        }
        
      }
      .am-list-item .am-list-line .am-list-content{
        height:0.15rem;
        font-size:0.13rem
      }
      .am-list-content{
        i{
          margin:0 0.02rem
        }
      }
   
    .info_box{
        line-height:.5rem;
        margin-left:.1rem;
    }
    .three_box{
        width:1.2rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
       a{
        color:#D3D3D3;
        i{
            display:block
        }
        &.active{
            color:#fff
        }
       }
    }
    .search_box{
        line-height:.5rem;
        margin-right:.1rem;
    }

`