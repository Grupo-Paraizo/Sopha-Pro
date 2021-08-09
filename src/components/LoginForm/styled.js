import styled from "styled-components";
export const FormContainer = styled.section`
   width:46.5rem;
   height: 56rem;
   /*background:#c4c4c4;*/
   background:rgba(255, 255, 255, 0.2);
   backdrop-filter:blur(10px);
   border-radius:.8rem;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
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
      width:28.5rem;
      font-size:1.8rem;
      border:1px solid #fafafa;
      border-radius:8px;
      padding:1.5rem .5rem;
      color:#0e0e0e;
   }
   button{
      width:27rem;
      height: 5rem;
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
   a{
      /*color:#c24244;*/
      font-size:1.6rem;
      padding: .8rem;
      color:#0e0e0e;
   }
`;