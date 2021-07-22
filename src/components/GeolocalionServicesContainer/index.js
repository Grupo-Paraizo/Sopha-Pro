import React from 'react';
import { Container } from './styled';
import ImgServicesContainer from '../ImagesContainer';
import SectionProfessionals from '../ContainerProfessionalsInfo';
import ContactList from '../SocialNetWork';


const GeolocationServicesContainer = () => {
   return (
      <div>
         <Container>
            <ImgServicesContainer />
            <SectionProfessionals />
            <ContactList />
         </Container>
      </div>

   );
}
export default GeolocationServicesContainer;