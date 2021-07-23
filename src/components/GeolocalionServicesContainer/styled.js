import styled from "styled-components";

export const Container = styled.section`
   display:flex;
   flex-wrap:wrap;
   margin-left:3.5rem;
   margin-bottom: 5rem;
   width:65vw;
   height: 25rem;
   border: .2rem solid #5f5f5f;
   border-radius: .2rem;
   background: #fff;
   
   @media (max-width:800px){
      flex-direction:column;
      flex-wrap:nowrap;
      box-sizing:border-box;
      width:80vw;
      height:30rem;
      justify-content:left;
      align-items:center;
      padding:0;
   }
`;
