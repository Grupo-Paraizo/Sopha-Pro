import styled from "styled-components";
export const FormContainer = styled.section`
   width:46.5rem;
   height: 60rem;
   /*background:#c4c4c4;*/
   border-radius:.8rem;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin-bottom:1rem;
   img{
      margin-bottom:3.2rem;
   }
   form{
      width:29rem;
      height: 32rem;
      display:flex;
      flex-direction:column;
      align-items:center;
   }
   input{
      margin-bottom:2rem;
      background:#fafafa;
      outline:none;
      width:48.5rem;
      font-size:1.8rem;
      border:1px solid #fafafa;
      border-radius:8px;
      padding:1.5rem .5rem;
      color:#0e0e0e;
   }
   button{
      width:32rem;
      min-height: 5rem;
      background:#c24244;
      border:none;
      font-size:1.8rem;
      color:#fafafa;
      text-transform:uppercase;
      font-weight:bold;
      cursor:pointer;
      border-radius:8px;
      margin-bottom:2rem;
   }
   button.cadastro{
      background:#2bde17;
   }
   a{
      color:#c24244;
      font-size:1.6rem;
      padding: .8rem;
   }
   span{
      color:#fafafa;
      font-size:1.8rem;
      font-weight:bold;
   }

   @media (max-width:860px){
      
      background:none;
      backdrop-filter:blur(0);
      box-shadow: 0 0 0 0 #0e0e0e;
         form{
            width:90vw;
         }
         input{
            width:90vw;
         }
         a{
            color:#c24244;
         }
   }
`;