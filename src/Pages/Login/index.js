import React from 'react';
import { Page } from './styled';
import FormLogin from '../../components/Authentication/LoginForm/index';
import { Account } from '../../components/Authentication/Account';





const LoginPage = () => {
   return (
      <Page>

         <Account>
            <FormLogin />
         </Account>
         <footer><p>sopha © 2021</p></footer>
      </Page >
   )
}
export default LoginPage;
