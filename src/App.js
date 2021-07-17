import React from 'react';
import './App.css';
import ButtonList from './components/ButtonList';
import ButtonMap from './components/ButtonMap';
import SearchInput from './components/SearchInput';
import SearchFilter from './components/SearchFilter';
import ServicesOptions from './components/ServicesContainer';

function App() {
  return (
    <div className="mainContainer">
      <div className="containerBtn">
        <ButtonList />
        <ButtonMap />
      </div>
      <SearchInput />
      <section className="sideMenuContainer">
        <SearchFilter />
        <ServicesOptions />
      </section>
    </div>
  );
}

export default App;
