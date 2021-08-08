import React from 'react';
import { Container, LogoContainer, TextContainer } from './styled';

const TextHome = () => {
   return (
      <Container>
         <LogoContainer>
            <img src="../../../SophaLogo1.svg" alt=""></img>
            <img src="../../../SophaLogo2.svg" alt=""></img>
         </LogoContainer>

         <TextContainer>
            <h3>COMPRAR MÓVEIS PLANEJADOS NUNCA FOI TÃO SIMPLES</h3>
            <p>
               Conheça o Sopha Planejados, com ele seus clientes acompanham
               todo o processo de implantação dos seus novos móveis. Como e
               onde quiser, na palma da mão.
            </p>
         </TextContainer>
      </Container>
   )
}
export default TextHome;