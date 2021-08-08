import React from 'react';
import { Container } from './styled';

const TextHome = () => {
   return (
      <Container>
         <div id="logo">
            <img src="../../../SophaLogo1.svg" alt=""></img>
            <img src="../../../SophaLogo2.svg" alt=""></img>
         </div>
         <div id="description">
            <h3>COMPRAR MÓVEIS PLANEJADOS NUNCA FOI TÃO SIMPLES</h3>
            <p>
               Conheça o Sopha Planejados, com ele seus clientes acompanham
               todo o processo de implantação dos seus novos móveis. Como e
               onde quiser, na palma da mão.
            </p>
         </div>
      </Container>
   )
}
export default TextHome;