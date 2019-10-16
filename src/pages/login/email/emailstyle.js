import styled from 'styled-components'

export const EmailContainer = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:#fff;

    .email_login_box{
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

        .email_login_btn{
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
`