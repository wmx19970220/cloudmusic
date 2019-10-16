import styled from 'styled-components'

export const RegisterContainer = styled.div`
    position:fixed;
    width:100%
    height:100%;
    top:0;
    left:0;
    background:#fff;

    .register_box,.register_last_box{
        margin-top:.3rem;
        display:flex;
        flex-direction:column;
        align-items:center;

        p{
            border-bottom:1px solid rgba(0,0,0,.1);
            display:flex;
            height:.45rem; 
            width:3.4rem;
            span{
                height:100%;
                width:.70rem;
                font-size:.25rem;
                display:flex;
                align-items:center;
                justify-content:space-between;
                b{
                    font-size:.18rem;
                    padding-right:.1rem;
                    font-weight:normal;
                }
            }
            input{
                width:100%;
                font-size:.18rem;
                font-weight:border;
                caret-color:red;
                caret-height:.25rem;
                border:none;
            }     
        }

        .register_btn{
            display:block;
            width:3.4rem;
            height:.4rem;
            background: #d33a31;
            color: #fff;
            font-size:.17rem;
            font-weight:bolder;
            border:none;
            border-radius:.25rem;
            margin-top:.3rem;
        }
    }   

    .register_next_box{
       
        p{
            font-size:.14rem;
            color:#999;
            padding:.20rem .15rem;
        }
        .code_box{ 
            width:100%;
            height:.6rem;
            display:flex;
            justify-content:space-around;
            input{
                position:absolute;
                width:7.5rem;
                height:.6rem;
                z-index: 2;
                opacity: 0;
            }
            span{
                display:block;
                box-sizing:border-box;
                font-size:.35rem;
                color:#333;
                width:.48rem;
                height:.6rem;
                line-height:.6rem;
                border-bottom: 1px solid rgba(0,0,0,.1);
                text-align:center;
            }

        }
    }
`