import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HeaderContainer as Header,
  RepoDetailsContainer as RepoDetails,
  ReposListContainer as ReposList,
  Login
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ReposList} />
        <Route path="/repo/:name" component={RepoDetails} />
        <Route path="/user/signin/callback" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
