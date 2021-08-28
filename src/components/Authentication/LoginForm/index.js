import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from '../../../UserPool';
import { FormContainer } from './styled';
import { Link } from 'react-router-dom';


const FormLogin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onSubmit = (event) => {
      event.preventDefault();

      const user = new CognitoUser({
         Username: email,
         Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
         Username: email,
         Password: password,
      });

      user.authenticateUser(authDetails, {
         onSuccess: (data) => {
            console.log("onSuccess: ", data);
         },
         onFailure: (err) => {
            console.error("onFailure: ", err);
         },
         newPasswordRequired: (data) => {
            console.log("newPasswordRequired: ", data);
         },
      });
   };

   return (
      <FormContainer>
         <Link to="/"> <img src="../../../LogoSophaLogin.svg" alt=""></img></Link>
         <form onSubmit={onSubmit}>
            <input
               value={email}
               onChange={(event) => setEmail(event.target.value)}
               placeholder="seuEmail@exemplo.com"
               type="email"
               required>
            </input>

            <input
               value={password}
               onChange={(event) => setPassword(event.target.value)}
               placeholder="Sua senha"
               type="password"
               required>
            </input>

            <button type="submit">Entrar</button>
            <span> Ainda não tem conta?</span>
            <Link to="/cadastro">
               <button className="cadastro">CADASTRAR-SE</button>
            </Link>
            <a href="/changePassword">Esqueci minha senha </a>
         </form>
      </FormContainer>
   );
}
export default FormLogin;