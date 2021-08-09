import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import GeolocationPage from './Pages/GeolocalionPage';
import LoginPage from './Pages/Login';



const Routes = () => {
   return (
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/GeolocationList">
            <GeolocationPage />
         </Route>
         <Route exact path="/login">
            <LoginPage />
         </Route>
      </Switch >
   );
}
export default Routes;

