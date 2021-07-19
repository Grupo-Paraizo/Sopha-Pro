import React from 'react';
import { Menu } from './styled';

function NavMenu() {
   return (
      <Menu>
         <li><a href="/"><img src="../../../LogoSopha.svg" alt=""></img></a></li>
         <li><a href="./participe">PARTICIPE</a></li>
         <li><a href="./logon">LOGIN</a></li>
      </Menu>
   )
}
export default NavMenu;