import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Play from "./components/pages/Play";
import About from "./components/pages/About";
import "./App.css";
// import Level from "./components/Level";

function App() {
  // const [level, setLevel] = useState(-1);

  // const changeLevel = selectedLevel => {
  //   setLevel(selectedLevel);
  // };

  // if (level === -1) {
  //   return (
  //     <div className="App">
  //       <Level changeLevel={changeLevel} />
  //     </div>
  //   );
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <Level changeLevel={changeLevel} /> */}
  //       <p>{level}</p>
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" />
          <Route path="/play" component={Play} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
