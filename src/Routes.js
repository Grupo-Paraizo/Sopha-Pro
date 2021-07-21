import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GeolocationPage from './Pages/GeolocalionPage';


function Routes() {
   return (
      <Switch>
         <Route exact path="/GeolocationPage">
            <GeolocationPage />
         </Route>
      </Switch>
   );
}
export default Routes;

