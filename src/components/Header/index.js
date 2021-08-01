import React from 'react';
import { Header, Menu } from './styled';

const HeaderContainer = () => {
   return (
      <Header>
         <Menu>
            <li><a href="/"><img src="../../../LogoSopha.svg" alt=""></img></a></li>
            <li><a href="./participe">PARTICIPE</a></li>
            <li><a href="./logon">LOGIN</a></li>
         </Menu>
      </Header>
   );
}
export default HeaderContainer;