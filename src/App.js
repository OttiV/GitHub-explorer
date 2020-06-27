import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, RepoDetails } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">GitHub Explorer</header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:name" component={RepoDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
