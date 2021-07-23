import styled from "styled-components";

export const Page = styled.div`
   max-width:100%;
   height:100%auto;
      header{
         margin-left:2.5rem;
      }
      div{
         display:flex;
         justify-content:center;
      }
      @media (max-width:780px){
         section{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
         }
         header{
            margin-left:-7rem;
            padding-right:0;
         }
            div{
               flex-direction:column;
               max-width:90vw;
               justify-content:center;
            }
               aside{
                  margin-left:5rem;
      
               }
      }   
`;