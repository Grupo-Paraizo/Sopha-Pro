import styled from "styled-components";

export const Page = styled.main`
   width:100vw;
   height:85vh;
   background: url('../../../bgSopha.jpg')center;
   background-size: cover;
   display:flex;
   flex-direction:column;
   align-items:center;
`;

export const Main = styled.div`
   height:100vh;
   width:100vw;
   display:flex;
   flex-direction:column;
`;
export const Header = styled.header`
   display:flex;
   justify-content:space-between;
   width:90vw;
   padding-bottom:10rem;
   padding-top:2rem;
   align-items:center;
`;

export const Footer = styled.footer`
   display:flex;
   align-items:center;
   justify-content:center;
   h2.footerLink{
            font-size:3rem;
            color:#0f0f0f; 
            padding-bottom: 5rem;
         }  
`;
export const ImgContainer = styled.div`
      img{
         display:inline-block;
         max-width:100%;
      }
`;