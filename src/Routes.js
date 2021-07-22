import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GeolocationPage from './Pages/GeolocalionPage';


const Routes = () => {
   return (
      <Switch>
         <Route exact path="/">
            <GeolocationPage />
         </Route>
      </Switch>
   );
}
export default Routes;

