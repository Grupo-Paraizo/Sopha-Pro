import styled from "styled-components";

export const Container = styled.section`
   display:flex;
   flex-wrap:wrap;
   justify-content:left;
   flex:1;
   margin-left:3.5rem;
   margin-bottom: 5rem;
   width:65vw;
   max-height: 35rem;
   border: .2rem solid #5f5f5f;
   border-radius: .2rem;
   background: #fff;
   box-sizing:border-box;

@media(max-width:800px){
   flex-direction:column;
   margin-left:0;
   width:95vw;
   margin: 0 auto;
   margin-bottom:1.5rem;
}
`;
export const InfosContainer = styled.div`
   max-width: 45rem;
   display:flex;
   flex-direction:column;
   flex:1;
      div{
         display:flex;
         align-items:center;
         justify-content:flex-start;
      }
         img{
            width:3rem;
            background:grey;
            border:none;
            border-radius: 50%;
            margin-left:1.9rem;
         }
         p{
            margin-left:1rem;
            font-size:1.8rem;
         }
   section{
      display:flex;
      align-items:center;
      justify-content:flex-start;
   }
      img{
         background:transparent;
      }
      @media(max-width:800px){
         max-width:100vw;
         flex-wrap:wrap;
      }
`;

export const DescriptionContainer = styled.div`
   box-sizing:border-box;
   padding:.8rem;
   margin-right:2rem;   
   margin:1rem 2.7rem ;
   outline:none;
   width:30vw;
   height:9.3rem;
   border: .2rem solid #0e0e0e;
   border-radius:.7rem;
   position: relative;
      h3{
         position: absolute;
         top:0;
         font-size:1.3rem;
      }
`;
