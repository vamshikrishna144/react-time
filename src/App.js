import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeWithLocale from "./components/TimeWithLocale";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TimeWithLocale />
      </header>
    </div>
  );
}

export default App;
