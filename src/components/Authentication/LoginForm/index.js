import React, { useState, useContext } from 'react';
import { AccountContext } from '../Account';
import { FormContainer } from './styled';
import { Link } from 'react-router-dom';


const FormLogin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const clearInput = () => {
      setEmail("");
      setPassword("")
   }

   const { authenticate } = useContext(AccountContext)

   const onSubmit = (event) => {
      event.preventDefault();
      authenticate(email, password)
         .then(data => {
            console.log("Usuário Logado", data)
         })
         .catch(err => {
            console.log("Email ou senha incorretos", err)
         });
      clearInput();
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