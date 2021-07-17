import styled from "styled-components";

export const SearchContainer = styled.div`
   width:35rem;
   padding: .8rem .5rem;
   background:#fff;
   border: .1rem solid #d7d8da;
   border-radius:.6rem .6rem 0 0;
      button{
         background:#fff;
         border:none;
         display:flex;
         align-items:center;
         cursor:pointer;
      }
         img{
            margin: 0 1rem 0 1.2rem;
            width:3rem;
         }
         p{
            font-size:1.6rem;
            font-weight: bold;
            color:#9191c4;
         }
   `;