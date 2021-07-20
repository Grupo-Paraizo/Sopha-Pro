import styled from "styled-components";

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
`