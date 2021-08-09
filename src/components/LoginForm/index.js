import React from 'react';
import { FormContainer } from './styled';

const FormLogin = () => {
   return (
      <FormContainer>
         <img src="../../../LogoSophaLogin.svg" alt=""></img>
         <form>
            <input
               placeholder="seuEmail@exemplo.com"
               type="email"
               required></input>
            <input
               placeholder="Sua senha"
               type="password"
               required></input>
            <button type="submit">Entrar</button>
            <a href="/changePassword">Esqueci minha senha </a>
         </form>
      </FormContainer>
   );
}
export default FormLogin;