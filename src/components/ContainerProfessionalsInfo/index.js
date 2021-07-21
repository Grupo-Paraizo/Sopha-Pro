import React from 'react';
import { Container } from './styled';
import ProfessionalNameContainer from '../ProfessionalName';
import AdressContainer from '../Adress';
import Description from '../DescriptionContainer';

const SectionProfessionals = () => {
   return (
      <Container>
         <ProfessionalNameContainer />
         <AdressContainer />
         <Description />
      </Container>
   );

}
export default SectionProfessionals;