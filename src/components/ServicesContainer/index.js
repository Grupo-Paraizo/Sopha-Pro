import React from 'react';
import { ServicesTypes } from './styled';
import ProfessionalOptionBtn from './ButtonProfessionals';
import StoreOptionBtn from './ButtonStores';

function ServicesOptions() {
   return (
      <ServicesTypes>
         <h2>Tipo de serviço</h2>
         <StoreOptionBtn />
         <ProfessionalOptionBtn />
      </ServicesTypes>
   );
}

export default ServicesOptions;