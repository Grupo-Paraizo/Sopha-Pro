import React from 'react';
import './App.css';
import ButtonLista from './components/ButtonList';
import ButtonMapa from './components/ButtonMap';

function App() {
  return (
    <div className="container">
      <ButtonLista />

      <ButtonMapa />
    </div>
  );
}

export default App;
