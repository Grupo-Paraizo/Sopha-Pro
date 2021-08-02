import styled from "styled-components";

export const Page = styled.main`
   max-width:100%;
   height:100%;
      div{
         display:flex;
         justify-content:center;
      }
   @media (max-width:800px){
      div{
         flex-direction:column;
         align-items:center;
         justify-content:flex-start;
      }
   }   
`;