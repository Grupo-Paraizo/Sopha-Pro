import React, { useState } from 'react';
import UserPool from '../../../UserPool';
import { Container } from './styled';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [fullname, setFullname] = useState("");

   const clearInput = () => {
      setEmail("")
      setPassword("")
      setFullname("")
   }


   const onSubmit = (event) => {
      event.preventDefault()
      UserPool.signUp(email, password, [], null, (err, data) => {
         if (err) {
            console.log(err)
         }
      })
      clearInput()
   };

   return (
      <Container>
         <h2>Registrar-se</h2>
         <Link to="/"> <img src="../../../LogoSophaLogin.svg" alt=""></img></Link>
         <form onSubmit={onSubmit}>
            <input
               value={fullname}
               onChange={(event) => setFullname(event.target.value)}
               placeholder="Seu nome completo"
               type="text"
               required>
            </input>
            <input
               value={email}
               onChange={(event) => setEmail(event.target.value)}
               placeholder="Informe seu email"
               type="email"
               required>
            </input>
            <input
               value={password}
               onChange={(event) => setPassword(event.target.value)}
               placeholder="Cadastre uma senha senha"
               type="password"
               required>
            </input>
            {/*   <input
               id="confirmPassword"
               placeholder="Repetir senha"
               type="password"
               required>
            </input>*/}
            <button type="submit">ENVIAR</button>

         </form>
         <footer><p>sopha © 2021</p></footer>
      </Container>
   );
}
export default SignUp;