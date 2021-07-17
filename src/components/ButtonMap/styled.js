import styled from "styled-components";

export const Button = styled.button`
   display:flex;
   align-items:center;
   background: #6f74cb;
   width: 20rem;
   padding: 1rem 1.5rem;
   font-size: 1.5rem;
   border-radius: 0 .6rem .6rem 0;
   font-weight: bold;
   color:#f7f7f7;
   border:none;
   cursor: pointer;
   transition:.2s;
      img{
         margin-right: .7rem;
         width:2.2rem;
      }
      &:hover{
         filter:brightness(1.1);
      }
`;