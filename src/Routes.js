import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import GeolocationPage from './Pages/GeolocalionPage';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUpPage';



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
         <Route exact path="/cadastro">
            <SignUpPage />
         </Route>
      </Switch >
   );
}
export default Routes;

