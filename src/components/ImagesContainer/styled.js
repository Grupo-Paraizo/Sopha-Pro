import styled from "styled-components";
export const ContainerImg = styled.div`
   display:flex;
   justify-content:space-between !important;
   align-items:center;
   background:#d7d8da;
   width:23vw;
   height:25rem;
      button{
         border:none;
         height:2.5rem;
         background:#d7d8da;
         cursor: pointer;
      }
         img{
            max-width:2.5rem;
         }     
@media (max-width:780px){
   display:none;
   visibility:hidden;
   width:0;
   height:0;
}         
`;