import styled from "styled-components";

export const Container = styled.div`
   max-height:70rem;
   max-width:70rem;
   @media (max-width:860px){
      width:100vw;
      display:flex;
      flex-direction:column;
   }
`;

export const TextContainer = styled.div`
   padding:2.5rem;
   border-radius:8px;
   text-align:justify;
   animation:TextAnimation 1.5s forwards;
   h3{
      font-size:4rem;
      font-weight:400;
      color:#fafafa;
   }
   p{
      font-size:2.5rem;
      color:#fafafa;
   }
   @keyframes TextAnimation{
      from{
         opacity:0;
         transform:translate3d(0, -100px, 0);
      }

      to{
         opacity:1;
         transform:translate3d(0, 0, 0);
      }
   }
`;

