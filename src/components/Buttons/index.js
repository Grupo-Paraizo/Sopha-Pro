import React from 'react';
import { Btn } from './styled';
import { Link } from 'react-router-dom';

const HomeBtn = () => {
   return (

      <Btn>
         <Link to="/login">Entrar</Link>
      </Btn>
   )
}
export default HomeBtn;