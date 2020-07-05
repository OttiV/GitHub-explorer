import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HeaderContainer as Header,
  LandingPage,
  RepoDetailsContainer as RepoDetails,
  ReposListContainer as ReposList,
  UsersListContainer as UsersList,
  UserDetailsContainer as UserDetails
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/repos" component={ReposList} />
        <Route path="/repos/:name" component={RepoDetails} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/:name" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
