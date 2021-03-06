import styled from "styled-components";

export const Page = styled.main`
   width:100vw;
   height:85vh;
   background: url('../../../bgSopha.jpg');
   background-size: cover;
   display:flex;
   flex:1;
   flex-direction:column;
   align-items:center;
   box-sizing:border-box;
   @media (max-width:860px){
      height:100%;
   }
`;

export const Main = styled.div`
   height:100vh;
   width:100vw;
   display:flex;
   flex-direction:column;
   overflow-x:hidden;
`;
export const Header = styled.header`
   display:flex;
   justify-content:flex-end;
   width:90vw;
   padding-top:2rem;
   align-items:center;
      div.img{
         display:flex;
         align-items:center;
         justify-content:space-between;
         display:none;
      }
   @media (max-width:860px){
      justify-content:space-between;
      align-items:center;
      div.img{
         display:flex;
         align-items:center;
         justify-content:space-between;
      }
   }
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
      display:flex;
      flex:1;
      justify-content:center;
      align-items:center;
      animation:ImgAnimation 3.5s forwards;
      @media (max-width:860px){
         display:none;
      }
      @keyframes ImgAnimation{
         from{
            opacity:0;
            transform:translate3d(0, 0, -100px);
         }
         to{
            opacity:1;
            transform:translate3d(0, 0, 0);
         }
      }
`;
export const HomeContainer = styled.div`
   display:flex;
   flex: 1;
   align-items:center;
   justify-content:space-between;
   width:80vw;
         @media (max-width:860px){
            width:90vw;
            flex-direction:column;
            padding-top:2rem;
         }
`;