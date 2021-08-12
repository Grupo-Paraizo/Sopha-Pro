import styled from "styled-components";

const Header = styled.header`
   max-width:100vw;
   height:6rem;
   margin-bottom:1.5rem;
   display:flex;
`;
export const Menu = styled.ul`
   height:6rem;
   margin-left:2rem;
   display:flex;
   align-items:center;
   justify-content:center;
      li.menuAmb{
         display:none;
      }
      li{
         list-style:none;
         display: inline-block;
         margin-right:5rem;
      }
         
         a{
            font-size:2rem;
            font-weight:bold;
            color:#a5a3ab;
            text-decoration:none;
            transition:.2s;
         }
            a:hover{
               color:#1b1b1f;
            }
@media (max-width:860px){
   max-width:90vw;
   justify-content:flex-start;
   li{
   display:none;
   }
   li.menuAmb{
      display:block;
      cursor: pointer;
   }
}

`;
export default Header;