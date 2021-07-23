import styled from "styled-components";

export const NameContainer = styled.div`
   margin-left:1.9rem;
   margin-top:1.6rem;
   margin-bottom:2.4rem;
   display:flex;
   align-items:center;
   max-width:41.5rem;
   height:4.2rem;
      div{
         width:4.2rem;
            height:4.2rem;
            background:#999896;
            border:none;
            outline:none;
            border-radius:50%;
            margin-right:1.9rem;
      }
         p{
            font-size:1.6rem;
            word-wrap:wrap;
      }

@media (max-width:800px){
   justify-content:flex-start;
   align-items:flex-start;
      p{
      margin-top:0;
      margin-bottom:5rem;
      display:inline-block;
      }
}
`;