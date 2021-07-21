import React from 'react';
import { Container } from './styled';
import ImgServicesContainer from '../ImagesContainer';
import SectionProfessionals from '../ContainerProfessionalsInfo';
import ContactList from '../SocialNetWork';


const GeolocationServicesContainer = () => {
   return (
      <Container>
         <ImgServicesContainer />
         <SectionProfessionals />
         <ContactList />
      </Container>

   );
}
export default GeolocationServicesContainer;