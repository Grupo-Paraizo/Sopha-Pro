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


`;
export default Header;