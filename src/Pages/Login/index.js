import React from 'react';
import { Page } from './styled';
import FormLogin from '../../components/Authentication/LoginForm/index';



const LoginPage = () => {
   return (
      <Page>
         <FormLogin />
         <footer><p>sopha © 2021</p></footer>
      </Page >
   )
}
export default LoginPage;
