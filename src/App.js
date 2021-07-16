import React from 'react';
import './App.css';
import ButtonList from './components/ButtonList';
import ButtonMap from './components/ButtonMap';

function App() {
  return (
    <div className="container">
      <div className="containerBtn">
        <ButtonList />
        <ButtonMap />
      </div>

    </div>
  );
}

export default App;
