import styled from "styled-components";

export const Menu = styled.ul`
   height:6rem;
   display:flex;
   align-items:center;
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