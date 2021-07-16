import React from 'react';
import './App.css';
import ButtonList from './components/ButtonList';
import ButtonMap from './components/ButtonMap';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="container">
      <div className="containerBtn">
        <ButtonList />
        <ButtonMap />
      </div>
      <SearchInput />
    </div>
  );
}

export default App;
