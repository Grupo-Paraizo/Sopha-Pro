import React from 'react';
import './App.css';
import SearchContainer from './components/SearchBox';
import GeolocationServicesContainer from './components/GeolocalionServicesContainer';
import HeaderContainer from './components/Header';

function App() {
  return (
    <div>
      <HeaderContainer />
      <div className="mainContainer">
        <section className="searcMenu">
          <SearchContainer />
        </section>
        <section>
          <GeolocationServicesContainer />
          <GeolocationServicesContainer />
          <GeolocationServicesContainer />
        </section>
      </div>
    </div>
  );
}

export default App;
