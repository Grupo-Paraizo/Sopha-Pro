import React from 'react';
import { Header } from './styled';
import NavMenu from '../HeaderMenu';

const HeaderContainer = () => {
   return (
      <Header>
         <NavMenu />
      </Header>
   );
}
export default HeaderContainer;