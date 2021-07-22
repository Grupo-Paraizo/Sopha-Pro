import styled from "styled-components";

export const TextArea = styled.textarea`
   box-sizing:border-box;
   padding:.8rem;
   margin:1rem 2.7rem ;
   outline:none;
   width:27vw;
   height:12rem;
   border: .2rem solid #0e0e0e;
   border-radius:.7rem;
   @media (max-width:800px){
      display:none;
      visibility:hidden;
      width:0;
      height:0;
      margin:0;
   }
`