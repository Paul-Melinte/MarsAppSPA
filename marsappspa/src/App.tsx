import React from 'react';
import './App.css';
import { NASAinfo } from './components/NASAinfo';
import { ClickCounter } from './components/ClickCounter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NASAinfo />
        <ClickCounter />
      </header>
    </div>
  );
}

export default App;
