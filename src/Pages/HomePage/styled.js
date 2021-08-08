import styled from "styled-components";

export const Page = styled.main`
   width:100vw;
   height:70vh;
   background: url('../../../bgSopha.jpg')center;
   background-size: cover;
      div.header{
         display:flex;
         justify-content: flex-end;
         height:15vh;
         padding-right:10rem;
      }
      section.main{
         display:flex;
         width:70vw;
         margin:5rem auto 0 auto;
         align-items:stretch;
      }
      div.contentLeft{
      }

      div.phone{
         margin-top: -10rem;
      }
      footer{
         display:flex;
         align-items:center;
         justify-content:center;
         margin-top:-4rem;
      }
         a.footerLink{
            text-decoration:none;
            font-size:3rem;
            color:#0f0f0f; 
            padding-bottom: 5rem;
         }
`;