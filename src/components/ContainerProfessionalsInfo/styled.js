import styled from "styled-components";

export const Container = styled.section`
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
   max-width:35vw;
   height:23rem;

   @media (max-width:800px){
      width:40rem;
      display:inline-block;
   }
`;