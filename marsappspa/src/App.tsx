import React from "react";
import "./App.css";
import { NASAinfo } from "./components/NASAinfo/NASAinfo";
import { ClickCounter } from "./components/ClickCounters/ClickCounter";
import { ComplexClickCounter } from "./components/ClickCounters/ComplexClickCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NASAinfo />
        <ClickCounter />
        <ComplexClickCounter />
      </header>
    </div>
  );
}

export default App;
