import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import GeolocationServicesContainer from './components/GeolocalionServicesContainer';

function App() {
  return (
    <div className="mainContainer">
      <section className="sideContainer">
        <SearchInput />
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
