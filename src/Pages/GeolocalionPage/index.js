import React from 'react';
import { Page } from './styled';
import HeaderContainer from '../../components/Header';
import GeolocationServicesContainer from '../../components/GeolocalionServicesContainer';
import SearchContainer from '../../components/SearchBox';

const GeolocationPage = () => {
   return (
      <Page>
         <section>
            <header>
               <HeaderContainer />
            </header>
            <div>
               <aside>
                  <SearchContainer />
               </aside>
               <main>
                  <GeolocationServicesContainer />
                  <GeolocationServicesContainer />
                  <GeolocationServicesContainer />
               </main>
            </div>
         </section>
      </Page>

   );
}
export default GeolocationPage;