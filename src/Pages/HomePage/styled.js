import styled from "styled-components";

export const Page = styled.main`
   width:100vw;
   height:75vh;
   background: url('../../../bgSopha.jpg')center;
   background-size: cover;
   display:flex;
   flex-direction:column;
      div.header{
         display:flex;
         justify-content: flex-end;
         height:15vh;
         padding-right:8rem;
      }
      section.main{
         display:flex;
         max-width:80vw;
         max-height:20vh;
         align-items:center;
         justify-content:center;
         position:relative;
      }
      div.contentLeft{
         
      }
      div.phone{
        max-height:15rem;
        max-width:10rem;
      }
      footer{
         display:flex;
         align-items:center;
         justify-content:center;
      }
         h2.footerLink{
            font-size:3rem;
            color:#0f0f0f; 
            padding-bottom: 5rem;
         }  
`;