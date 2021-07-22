import styled from "styled-components";

export const List = styled.ul`
      display:flex;
      max-width:10vw;
      flex-direction:column;
      justify-content:space-between;
      margin: 1.6rem 2rem 1.6rem 3.2rem;
   li{
      list-style:none;
   }
      a{
         text-decoration:none;
      }
 @media (max-width:800px){
    flex-direction:row;
      img{
         align-self:center;
      }
 }     
`;