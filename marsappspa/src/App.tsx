import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { NASAinfo } from "./components/NASAinfo/NASAinfo";
import { ClickCounter } from "./components/ClickCounters/ClickCounter";
import { ComplexClickCounter } from "./components/ClickCounters/ComplexClickCounter";

function App() {
  return (
    <Router>
      <div className="App">
       <header className="App-header">
          <Switch>
            <Route path="/NASA"> <NASAinfo /> </Route>
            <Route path="/clicker"> <ClickCounter /> </Route>
            <Route path="/complexclicker"> <ComplexClickCounter /> </Route>
            <Route path="/">
              <Link to="/NASA" className="App-link"> NASA </Link>
              <Link to="/clicker" className="App-link"> Clicker </Link>
              <Link to="/complexclicker" className="App-link"> Complex Clicker </Link>
            </Route>
          </Switch>
       </header>
      </div>
    </Router>
  );
}

export default App;
