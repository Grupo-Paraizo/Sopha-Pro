import React from 'react';
import { FormContainer } from './styled';
import { Link } from 'react-router-dom';

const FormLogin = () => {
   return (
      <FormContainer>
         <Link to="/"> <img src="../../../LogoSophaLogin.svg" alt=""></img></Link>
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