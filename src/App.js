import React from 'react';
import './App.css';
import SearchContainer from './components/SearchBox';
import GeolocationServicesContainer from './components/GeolocalionServicesContainer';

function App() {
  return (
    <div className="mainContainer">
      <section>
        <SearchContainer />
      </section>
      <section>
        <GeolocationServicesContainer />
        <GeolocationServicesContainer />
        <GeolocationServicesContainer />
      </section>
    </div>
  );
}

export default App;
