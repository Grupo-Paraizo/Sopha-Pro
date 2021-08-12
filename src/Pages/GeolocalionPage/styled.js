import styled from "styled-components";

export const Page = styled.main`
   max-width:100%;
   height:100%;
      div.main{
         display:flex;
         justify-content:center;
      }
   @media (max-width:800px){
      padding:0;
      div.main{
         flex-direction:column;
         align-items:center;
        
      }
   }   
`;