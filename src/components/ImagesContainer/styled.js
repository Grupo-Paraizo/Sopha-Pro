import styled from "styled-components";
export const ContainerImg = styled.div`
   display:flex;
   box-sizing:border-box;
   align-items:center;
   border-right: .2rem solid #d7d8da;
   width:35rem;
   height:25rem;     
  img.slide{
     border:none;
     width:100%;
     height:100%;
  }   
@media (max-width:780px){
   display:none;
   visibility:hidden;
   width:0;
   height:0;
}         
`;