import styled from "styled-components";

export const Container = styled.section`
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
   max-width:35vw;
   height:23rem;

   @media (max-width:800px){
      width:40rem;
      display:inline-block;
   }
`;
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
export const AdressDiv = styled.div`
   margin-left:2.7rem;
   margin-top:1.6rem;
   margin-bottom:2.4rem;
   max-width:31.5rem;
   height:2.5rem;
   display:flex;
      img{
         margin-right:.9rem;
      }
      p{
         font-size:1.4rem;
      }
`;
export const TextArea = styled.textarea`
   box-sizing:border-box;
   padding:.8rem;
   margin:1rem 2.7rem ;
   outline:none;
   width:27vw;
   height:12rem;
   border: .2rem solid #0e0e0e;
   border-radius:.7rem;
   @media (max-width:800px){
      display:none;
      visibility:hidden;
      width:0;
      height:0;
      margin:0;
   }
`