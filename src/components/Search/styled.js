import styled from "styled-components";

export const Container = styled.div`
   width:35rem;
   box-sizing:border-box;
   border:none;
   display:flex;
   flex-wrap:wrap;
   margin-bottom:2rem;
`;

export const Button = styled.button`
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1.6rem;
   font-weight:bold;
   color:#fff;
   text-transform:uppercase;
   width:36rem;
   height:3.5rem;
   border: none;
   border-radius:.7rem;
   background-color:#594aa0;
   margin-top: .9rem;
   cursor: pointer;
   transition:.2s;
      &:hover{
         filter:brightness(1.3)
      }
`;

export const Search = styled.input`
   display:flex;
   width: 35rem;
   font-size: 1.6rem;
   padding-left: .5rem;
   height: 5rem;
   outline:none;
   border: .2rem solid #d7d8da;
   border-radius: .8rem;
`;