import styled from "styled-components";

export const Button = styled.button`
   background:#fff;
   width:16rem;
   height:4rem;
   display:flex;
   align-items:center;
   border-radius: 0 .6rem .6rem 0;
   font-weight: bold;
   border:.1rem solid #b4b5b7;
   cursor: pointer;
   transition:.2s;
      p{
         color:#0f0f0f;
         font-size:1.5rem;
      }
      img{
         margin-right: .7rem;
      }
      &:hover{
         filter:brightness(1.1);
         opacity:.7;
      }
`;