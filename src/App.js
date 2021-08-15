import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Amplify from '@aws-amplify/core';
import amplifyConfig from './amplifyConfig';
Amplify.configure(amplifyConfig);




function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
