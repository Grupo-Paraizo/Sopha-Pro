import styled from "styled-components";

export const Container = styled.div`
   width:35rem;
   box-sizing:border-box;
   border:none;
   display:flex;
   flex-wrap:wrap;
   margin-bottom:2rem;
`;

export const Button = styled.button`
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1.6rem;
   font-weight:bold;
   color:#fff;
   text-transform:uppercase;
   width:36rem;
   height:3.5rem;
   border: none;
   border-radius:.7rem;
   background-color:#594aa0;
   margin-top: .9rem;
   cursor: pointer;
   transition:.2s;
      &:hover{
         filter:brightness(1.3)
      }
`;


export const Search = styled.div`
   display:block;
   justify-content:left;
   align-items:center;
   width: 35rem;
   font-size: 1.6rem;
   height: 4rem;
  box-sizing:border-box;
   border: .2rem solid #d7d8da;
   border-radius: .8rem;
      button{
         background:transparent;
         border:none;
      }
       button:hover{
            opacity:0.8;
         }
      img{
         width:3rem;
         cursor: pointer;
         padding-left:.8rem;
      }
      input{
         outline:none;
         border:none;
         width:31rem;
         font-size:1.8rem;
         padding-left:.8rem;
         color:#262827;
      }
         input::placeholder{
            color: #9b98a4;
            font-size:1.4rem;
         }
`;