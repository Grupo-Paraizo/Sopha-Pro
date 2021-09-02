import React from 'react';
import { Page } from '../Login/styled';
import SignUp from '../../components/Authentication/CreateAcount/index';
import { Account } from '../../components/Authentication/Account';

const SignUpPage = () => {
   return (
      <Page>
         <Account>
            <SignUp />
         </Account>
      </Page>
   )
}
export default SignUpPage;