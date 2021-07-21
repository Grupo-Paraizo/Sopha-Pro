import React from 'react';
import { Page } from './styled';
import HeaderContainer from '../../components/Header';
import GeolocationServicesContainer from '../../components/GeolocalionServicesContainer';
import SearchContainer from '../../components/SearchInput/index';

const GeolocationPage = () => {
   return (
      <Page>
         <HeaderContainer />
         <SearchContainer />
         <GeolocationServicesContainer />
      </Page>

   );
}
export default GeolocationPage;