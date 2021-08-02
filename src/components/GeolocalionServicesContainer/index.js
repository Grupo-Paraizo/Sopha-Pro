import React from 'react';
import { Container, InfosContainer, DescriptionContainer } from './styled';
import ImgServicesContainer from '../ImagesContainer';
import ContactList from '../SocialNetWork';


const GeolocationServicesContainer = () => {
   return (
      <Container>
         <ImgServicesContainer />
         <InfosContainer>
            <div>
               <img src="../../../Instagram.svg" alt=""></img>
               <p>Nome do profissional 1</p>
            </div>
            <section>
               <img src="../../../adress.svg" alt=""></img>
               <p>Rua Logo Ali, nº 0, Morro das capivaras</p>
            </section>
            <DescriptionContainer>
               <h3>Descrição:</h3>
            </DescriptionContainer>
         </InfosContainer>
         <ContactList />
      </Container>
   );
}
export default GeolocationServicesContainer;