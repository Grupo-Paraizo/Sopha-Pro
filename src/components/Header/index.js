import React from 'react';
import { Menu } from './styled';
import Header from './styled';
import { Link } from 'react-router-dom';

const HeaderContainer = () => {
   return (
      <Header>
         <Menu>
            <li><Link to="/"><img src="../../../LogoSopha.svg" alt=""></img></Link></li>
            <li><Link to="./participe">PARTICIPE</Link></li>
            <li><Link to="./login">LOGIN</Link></li>
         </Menu>
      </Header>
   );
};


export default HeaderContainer;