import styled from "styled-components";

export const List = styled.ul`
      display:flex;
      max-width:10vw;
      flex-direction:column;
      justify-content:space-between;
      margin-left: 5rem;
   li{
      list-style:none;
   }
      a{
         text-decoration:none;
      }
 @media (max-width:800px){
    flex-direction:row;
 }     
`;