import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Play from "./components/pages/Play";
import About from "./components/pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" />
          {/* <Route path="/play" component={Play} /> */}
          {/* https://stackoverflow.com/a/57787353 */}
          <Route path="/play" render={() => <Play key={Date.now()} />} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
