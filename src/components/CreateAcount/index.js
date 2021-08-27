import React, { useState } from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';

const SignUp = () => {

   const onSubmit = (event) => {
      event.preventDefault()
   };

   return (
      <Container>
         <h2>Registrar-se</h2>
         <Link to="/"> <img src="../../../LogoSophaLogin.svg" alt=""></img></Link>
         <form onSubmit={onSubmit}>
            <input
               id="fullname"
               placeholder="Seu nome completo"
               type="text"
               required>
            </input>
            <input
               id="email"
               placeholder="Informe seu email"
               type="email"
               required>
            </input>
            <input
               id="password"
               placeholder="Cadastre uma senha senha"
               type="password"
               required>
            </input>
            <input
               id="confirmPassword"
               placeholder="Repetir senha"
               type="password"
               required>
            </input>
            <button type="submit">ENVIAR</button>

         </form>
         <footer><p>sopha © 2021</p></footer>
      </Container>
   );
}
export default SignUp;